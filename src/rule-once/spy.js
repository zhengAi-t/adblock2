//这个扩展为应用增加劫持关键函数为间谍函数的功能
import once from './once';
once.spy=function (rule){
  if(!rule)return;
  spy.call(this);
}
function spy(){
  let useless=new Proxy(function(){return useless},{get:()=>useless});
  window.alert=useless;//弹窗提示
  window.console.clear=useless;//清空控制台
  window.history.pushState=useless;//修改历史记录
  window.history.replaceState=useless;//跳转
  window.navigator.vibrate=useless;//震动
  window.confirm=useless;
  let _addEventListener=window.addEventListener;
  function fakeadd(...para){
    if(para[0]==='popstate')return void(console.log(para[0]));
    if(/animation/i.test(para[0]))return void(console.log(para[0]));
    _addEventListener.apply(this,para);
  }
  window.addEventListener=fakeadd;
  window.Element.prototype.addEventListener=fakeadd;
  let _eval=window.eval;
  function fakeeval(x){
    _eval.call(window,(x||'').replace(/debugger/g,';'));
  }
  window.eval=fakeeval;
  let _Function=Function;
  function fakeFunction(x){
    _Function.call(window,(x||'').replace(/debugger/g,';'));
  }
  window.Function=fakeFunction;
}