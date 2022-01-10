//所有重复执行的规则的集合
import adBlock from "../adblock";
import '../lib/emitor';
import '../lib/load';
import '../lib/select';
adBlock.repeat=function(rule){
  this.emitor(repeat.bind(adBlock,rule));
}
function repeat(rule){
  for(let i in rule){
    if(!repeat[i])continue;
    repeat[i].call(adBlock,rule[i]);
  }
}
repeat.remove=function(rule){
  rule.forEach(s=>this.select(s).forEach(s=>s.remove()));
}
repeat.click=function(rule){
  rule.forEach(s=>this.select(s).forEach(s=>s.click()));
}
repeat.hide=function hide(rule){
  let style=document.createElement('style');
  style.innerHTML=`
  *[data-hide]{
    visibility:hidden !important;
  }
  .data-hide{
    visibility:hidden !important;
  }`;
  document.body.append(style);
  rule.forEach(s=>this.select(s).forEach(hideElement));
  function hideElement(element){
    let tag=element.getAttribute('class');
    if(tag==='data-hide')return;
    if(tag===null)return void(element.setAttribute('class','data-hide'));
    tag=element.getAttribute('style');
    if(tag==='visibility:hidden !important;')return;
    if(tag===null)return void(element.style='visibility:hidden !important;');
    if(element.getAttribute('data-hide'))return;
    element.setAttribute('data-hide','true');
  }
}
export default repeat;