/**
 * Created by tarena on 2017/7/3.
 */
"use strict";
//图片组
var imgs=[
    "images/1000.jpeg",
    "images/1000(1).jpeg",
    "images/1000(2).jpeg",
    "images/1000(3).jpeg",
    "images/1000(4).jpeg",
    "images/1000(5).jpeg",
    "images/1000(6).jpeg",
    "images/1000(7).jpeg"
];
//内容加载后执行
$(()=>{
    var ulImgs=$("#imgs");
    var ulIdxs=$("#indexs");
    //li的宽度
    var liW=parseFloat($("#slider").css("width"));
    //设置ul的总宽度，容下所有li
    ulImgs.css("width",liW*(imgs.length+1));
    //将imgs中的图片动态生成为li>img
    var strImgs='<li><img src="'
        +imgs.join(
            '"></li><li><img src="'
        )
        +'"></li>';
    //在重复追加第一张图片
    strImgs+=`<li><img src="${imgs[0]}"></li>`;
    ulImgs.html(strImgs);
    //根据imgs中图片的个数动态添加生成索引
    for(var i=1,str="";i<=imgs.length;i++){
        str+="<li>"+i+"</li>";
    }
    //设置默认第一个li为hover
    ulIdxs.html(str).children(":first").addClass("hover");

    //自动轮播
    var speed=500;//每次轮播的时间
    var wait=3000;//每次轮播之间等待的时间
    var timer=null;//保持第一次定时器的序号
    var i=0;//当前显示图片的下标
    function move(){
        timer=setTimeout(()=>{
            i++;
            ulImgs.animate(
                {left:-i*liW},
                speed,
                ()=>{
                    //防止i越界
                    if(i==imgs.length){
                        i=0;
                        ulImgs.css("left","");
                    }
                    //将ulIdxs中的第i个li设置为hover,清除其他兄弟的hover
                    ulIdxs.children(":eq("+i+")")
                        .addClass("hover").siblings().removeClass("hover");
                    //只有可以move时
                    if(canMove){
                        move();//移动后，在次move启动下次
                    }
                }
            )
        },wait);
    }
    move();//启动第一次
    //标记变量，用来标记是否启用下次move
    var canMove=true;
    //为id为slider的div添加鼠标进入和移出事件
    $("#slider").hover(
        ()=>{//this->div
            //停止一次性定时器
            clearTimeout(timer);
            canMove=false;
        },
        ()=>{
            canMove=true;
            move();
        }
    );
    //当鼠标进入index中的li时，滚动到指定的图片
    ulIdxs.on("mouseover","li:not(.hover)",e=>{
        //获得当前里的下标
        i=ulIdxs.children().index(e.target);
        //先清空动画队列，再启动本次动画
        ulImgs.stop(true).animate(
            {left:-i*liW},
            speed,
            ()=>{
                //将uldxs中的第i个li设置为hover，清除其兄弟的hover
                ulIdxs.children(":eq("+i+")")
                    .addClass("hover").siblings().removeClass("hover")
            }
        )
    });
});