import adBlock from "../adblock";
adBlock.emitor=function emitor(callback){
  let filter=stabilize(throttle(callback));
  if(document&&document.readyState!=='loading')return emitors();
  window.addEventListener('DOMContentLoaded',emitors,{once:true});
  function emitors(){
    callback();
    setTimeout(callback,500);
    setTimeout(filter,1000);
    setTimeout(filter,2000);
    window.addEventListener('mousedown',filter);
    window.addEventListener('touchstart',filter);
    (new MutationObserver(filter)).observe(document.body,{
      childList:true,
      subtree:true,
      characterData:false
    });
  }
  //防抖
  function stabilize(handl){
    let last=-1;
    function exec(){
      clearTimeout(last);
      last=setTimeout(handl,100);
    }
    return exec;
  }
  //节流
  function throttle(handl){
    let defer=false,locked=false;
    function exec(){
      if(locked)return void(defer=true);
      locked=true;
      handl();
      setTimeout(unlock,3000);
    }
    function unlock(){
      if(!defer)return void(locked=false);
      defer=false;
      handl();
      setTimeout(unlock,3000);
    }
    return exec;
  }
}