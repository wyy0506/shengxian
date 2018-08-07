/**
 * Created by tarena on 2017/7/11.
 */
"use strict";
$(()=>{
    var $spans=$(".show2 .show-top>span:first-child");
    //获得id为elevator
    var $elev=$("#elevator");
    //为window绑定滚动事件
    $(window).scroll(()=>{
        //获得页面滚动过的高度
        var scorllTop=$("body").scrollTop();
        //遍历每一个span
        $spans.each((i,span)=>{
            var $span=$(span);
            //如果当前span的offsetTop<(scorllTop+innerHeight/2)
            if($span.offset().top<(scorllTop+innerHeight/2)){
                //清除所有span的class
                $spans.removeClass("hover");
                //让当前span为hover
                $span.addClass("hover");
                //设置$elev下ul下的第i个li为active，清除其余li的class
                $elev.find("ul>li:eq("+i+")")
                    .addClass("active").siblings().removeClass("active")
            }
        });
        //如果$span中有.hover的
        if($spans.is(".hover"))
            $elev.show();//设置$elev显示
        else//否则
            $elev.hide();//设置$elev隐藏
    });
    //鼠标进入电梯按钮翻面
    $elev
        .on("mouseover","a:first-child",
            e=>$(e.target).parent().addClass("active"))
        .on("mouseout","a:last-child",e=>{
            var $li=$(e.target).parent();
            //查找当前li在所有li中的下标
            var i=$elev.find("ul>li").index($li);
            console.log(i);
            if(!$spans.eq(i).is(".hover"))
                $li.removeClass("active")
        });
    //为$elev添加单击事件委托，只允许li下的最后一个a响应事件
    $elev.on("click","li>a:last-child",e=>{
        //让页面滚动到当前li对应的span的offsetTop的位置
        var $li=$(e.target).parent();
        var i=$elev.find("ul>li").index($li);
        var $span=$spans.eq(i);
        $("body").animate({
            scrollTop:$span.offset().top
        },500);
    })
});