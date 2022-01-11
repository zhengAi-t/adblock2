let adBlock={};
adBlock.init=main.bind(adBlock);
function main(){
  this.rule=this.load();
  if(this.rule.constructor.prototype===Promise.prototype){
    this.rule.then(r=>this.rule=r)
      .then(this.execRule).catch(err=>console.error(err));
  }else{
    this.execRule();
  }
}
adBlock.execRule=execRule.bind(adBlock);
adBlock.plugins={};
function execRule(){
  for(let i in this.rule){
    if(!this[i])continue;
    this[i](this.rule[i]);
  }
}
export default adBlock;