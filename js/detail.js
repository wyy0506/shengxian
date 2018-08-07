/**
 * Created by tarena on 2017/7/10.
 */
"use strict";
//放大镜:
var liW=62;//保存每个li的宽
var OFFSET=20;//保存起始left作为修正
var moved=0;//保存已经左移的图片个数
var ulList=document.getElementById("icon_list");
//底部小图片列表的移动
//查找class为forward和backward的两个a
var aForward=document.querySelector(".forward");
var aBackward=document.querySelector(".backward");
//为aForward绑定单击事件
console.log(aForward);
aForward.onclick=move;
function move(){
    //如果当前a的class中没有disabled
    if(this.className.indexOf("disabled")==-1){
        moved+=(
            this.className=="forward"?1:-1
        );
        var left=moved*-liW+OFFSET;
        ulList.style.left=left+"px";
        checkA();
    }
}
//为aBackward绑定单击事件
aBackward.onclick=move;
//专门定义检查a状态的函数
function checkA(){
    //如果li的总数-moved等于5
    if(ulList.children.length-moved==5)
    //为aForward添加class,disabled
        aForward.className="forward disabled";
    //否则，如果moved==0
    else if(moved==0)
    //为aBackward添加class,disabled
        aBackward.className="backward disabled";
    else{//否则
        //aForward的class为forward
        aForward.className="forward";
        //aBackward的class为backward
        aBackward.className="backward";
    }
}
//鼠标进入小图片切换中图片
//查找保存中图片的mImg
var mImg=document.getElementById("mImg");
//为ulList绑定鼠标进入事件
ulList.onmouseover=function(e){
    //只有目标元素时img时才执行操作
    if(e.target.nodeName=="IMG"){
        //获得当前img的src
        var src=e.target.src;
        //查找最后一个.的位置i
        var i=src.lastIndexOf(".");
        //在src最后一个.前拼-m生成新src
        src=src.slice(0,i)+"-m"+src.slice(i);
        //设置mImg的src为新的src
        mImg.src=src;
    }
};
//鼠标在中图片中移动显示放大图
var MSIZE=175;//mask的固定大小
var MAX=175;//mask最大可用的top和left
var mask=document.getElementById("mask");//半透明小遮罩层
//查找和mImg完全重合的透明div，用于分担mImg的鼠标事件
var sMask=document.getElementById("superMask");
//查找id为largeDiv的div
var lgDiv=document.getElementById("largeDiv");
//鼠标进入sMask时，显示遮罩层mask
sMask.onmouseover=function(){
    mask.style.display="block";
    //获得mImg的src
    var src=mImg.src;
    //查找最后一个.的位置
    var i=src.lastIndexOf(".");
    //替换src中的m为l
    src=src.slice(0,i-1)+"l"+src.slice(i);
    //设置lgDiv的背景图片为新src
    lgDiv.style.backgroundImage="url("+src+")";
    lgDiv.style.display="block";
};
//鼠标移出sMask时，隐藏遮罩层mask
sMask.onmouseout=function(){
    mask.style.display="";
    lgDiv.style.display="";
};
//鼠标在中图片上移动时，让遮罩层跟随鼠标移动
sMask.onmousemove=function(e){
    //获得鼠标相对于父元素的位置
    var x=e.offsetX,y=e.offsetY;
    //计算mask的top和left
    var left=x-MSIZE/2,top=y-MSIZE/2;
    //如果top<0,就改回0
    if(top<0) top=0;
    //否则如果top>MAX,就改回MAX
    else if(top>MAX) top=MAX;
    //如果left<0,就改回0
    if(left<0) left=0;
    //否则如果left>MAX,就改回MAX
    else if(left>MAX) left=MAX;
    //修改mask的top和left
    mask.style.top=top+"px";
    mask.style.left=left+"px";
    //根据mask的top和left计算lgDiv背景图片的位置
    lgDiv.style.backgroundPosition= -16/7*left+"px "+  -16/7*top+"px";
};