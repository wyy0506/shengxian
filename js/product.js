/**
 * Created by tarena on 2017/7/11.
 */
"use strict";
$(function(){
    show(1);
});
$("ol.pager").on("click","li a",function(e){
    e.preventDefault();
    //获取当前页的页码
    var pno=$(this).html();
    //发起异步请求，获取当前页产品列表，并且跟新分页条 1 2 3 4 5 6 7
    show(pno);
    console.log(e.target);
    if(!$(this).is(".active")){
        $(this).addClass("active")
            .parent().siblings().children().removeClass("active");
    }
    console.log($(this).parent().siblings().children());
});
function show(pno){
    $.ajax({
        url:"data/productlist.php?pno="+pno,
        success:function(data){
            var html="";
            for(var i=0;i<data.length;i++){
                var obj=data[i];
                html+=`
                    <li>
                        <a href="#"><img src="${obj.pic}"/></a>
                        <a href="#">${obj.pname}</a>
                        <span>¥${obj.price}</span>
                        <div>
                            <a href="" class="p-operate"><i></i>收藏</a>
                            <a href="${obj.pid}" class="addcart"><i></i>加入购物车</a>
                        </div>
                    </li>`;
            }
            $("#plist ul").html(html);
        }
    });
    //页面加载成功后发送ajax获取总页数
    $.ajax({
        url:"data/productpage.php",
        success:function(data){
            var html="";
            for(var i=1;i<=data.page;i++){
                html+=`
                <li><a href="#">${i}</a></li>
            `;
            }
            $("ol.pager").html(html);
        }
    });
}
//为每个商品下面"添加到购物车
$("#plist").on("click","a.addcart",function(e){
    e.preventDefault();
    //获取当前商品编号 herf pid
    var pid=$(this).attr("href");
    //获取当前登录用户 uid
    var u=sessionStorage["loginUid"];
    $.ajax({
        type:"POST",
        url:"data/add_cart.php",
        data:{pid:pid,uid:u},
        error:function(){
            alert("添加商品失败请检查网络");
        },
        success:function(data){
            if(data.code<0){
                sessionStorage["address"]="fm_productlist.html";
                alert("请登录账号");
                location.href="login.html";
            }else{
                alert("添加成功，该商品已购买:"+data.pcount);
            }
        }
    });
});
