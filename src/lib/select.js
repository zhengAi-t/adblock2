import adblock from '../adblock';
adblock.select=function (selector){
  selector=selector.split('|');
  let result=document.querySelectorAll(selector[0]);
  if(selector.length===1)return result;
  return Array.from(result).filter(s=>s.querySelector(selector[1]));
}