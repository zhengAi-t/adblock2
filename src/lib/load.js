import adBlock from "../adblock";
adBlock.load=function load(){
  let time=localStorage.getItem('adblock_last');
  if(Date.now()-parseInt(time)<1000*60*60*24*7){
    let str=localStorage.getItem('adblock_rules')||'{}';
    return JSON.parse(str);
  }
  let resolve,reject;
  localStorage.setItem('adblock_last',Date.now());
  GM_xmlhttpRequest({
    url:'https://tomodachi.top:3000?mtd=xhr&data='+location.host,
    onreadystatechange
  });
  function onreadystatechange(xhr){
    if(xhr.readyState!==4)return;
    try{
      let text=xhr.responseText||'{}';
      let rule=JSON.parse(text);
      if(typeof rule!=='object')return void(reject());
      localStorage.setItem('adblock_rules',text);
      resolve(rule);
    }catch{
      console.error('load');
      reject();
    }
  }
  return new Promise((rs,rj)=>(resolve=rs,reject=rj));
}
