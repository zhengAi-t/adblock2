```
{
  //每一次页面元素改变就需要发生的动作
  repeat:{
    remove:[],//移除元素
    click:[],//点击元素
    hide:[],//隐藏元素
    //启用iframe网盟广告检查
    iframe:boolean,
  },
  //一次性向页面注入的动作
  once:{
    function:string,//微型插件
    surveillance:boolean,//（性能消耗）动态监测
    spy:boolean,//注入间谍函数
    recursion:boolean,//递归执行
  },
  flags:{
    report:boolean,
  }
}
//需要移除的元素
remove：string[],

//需要点击的元素
click:string[],

//需要隐藏的元素
hide：string[],

//需要运行的代码片段（用于为网站编写小插件或者增强屏蔽效果）
function:string,

//动态监测开关，（有些广告删掉之后会再次弹出，需要监控页面）
surveillance：boolean，

//环境劫持开关，（有些网站会利用一些api强制性添加广告，这个时候需要把这些api函数替换成自己的间谍函数）
spy：boolean，

//递归执行开关，（用于递归式向页面中的所有iframe添加程序实例）
recursion：boolean

//日志上报开关，（用于向服务器上报页面的广告情况）
report：boolean，
```
