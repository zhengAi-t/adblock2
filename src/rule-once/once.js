//所有的单次执行的特性
import adBlock from "../adblock";
adBlock.once=once;
function once(rule){
  for(let i in rule){
    if(!once[i])continue;
    once[i].call(adBlock,rule[i]);
  }
}
once.function=function(rule){
  Function(`return function(adBlock){\n${rule}\n}`)()
    .call(adBlock,adBlock);
}

export default once;