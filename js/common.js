/**
 * Created by tarena on 2017/7/12.
 */
"use strict";
var uname="",uid="";
//页面加载成功事件
$(function(){
    $.ajax({
        url:"data/header.php",
        success:function(data){
            //头部
            $("#header").html(data);
            //产品页
            $(".product")[0].onclick=function(e){
                e.preventDefault();
                location.href="fm_productlist.html";
            };
            //首页
            $(".index").on("click",function(e){
                e.preventDefault();
                location.href="fm_index.html";
            });
            //注册页
            $(".register").click(function(e){
                e.preventDefault();
                location.href="register.html";
            });
            //购物车登录
            $(".cart-login").click(function(e){
                e.preventDefault();
                location.href="login.html";
                sessionStorage["address"]="fm_index.html";
            });
            //用户登录
            $("#btn-login").click(function(){
                console.log(1);
                var u=$("#uname").val();
                var p=$("#upwd").val();
                var reguname=/^([a-z0-9]|[\u4e00-\u9fa5]){2,12}$/i;
                var regupwd=/^[a-z0-9]{3,8}$/i;
                if(!reguname.test(u)){
                    alert("用户名格式不正确");
                    return;
                }
                if(!regupwd.test(p)){
                    alert("密码格式不正确");
                    return;
                }
                $.ajax({
                    type:"POST",
                    url:"data/login.php",
                    data:{uname:u,upwd:p},
                    success:function(data){
                        if(data.code>0){
                            sessionStorage["loginUid"]=data.uid;
                            sessionStorage["loginName"]=u;
                            $(".modal-backdrop").hide();
                            $("#login").hide();
                            if(sessionStorage["loginUid"]){
                                $("#log-res").html(`
                                    <span>${u}</span>
                                    <a href="" class="u_login">退出</a>
                                `);
                                $(".cart-login").parent().parent().hide();
                                $(".u_login").click(function(e){
                                    e.preventDefault();
                                    sessionStorage.removeItem("loginUid");
                                    sessionStorage.removeItem("loginName");
                                    location.reload(true);
                                });
                            }
                        }
                    }
                });
            });
            //查询用户是否登录成功
            if(sessionStorage["loginUid"]){
                $("#log-res").html(`
                                    <span>${sessionStorage["loginName"]}</span>
                                    <a href="" class="u_login">退出</a>
                                `);
                $(".cart-login").parent().parent().hide();
                $(".u_login").click(function(e){
                    e.preventDefault();
                    sessionStorage.removeItem("loginUid");
                    sessionStorage.removeItem("loginName");
                    location.reload(true);
                });
            }
            //购物车
            $("#my-shopping>a").on("click",function(e){
                e.preventDefault();
                location.href="fm_shoppingcart.html";
            });
        }
    });
    $.ajax({
        url:"data/footer.php",
        success:function(data){
            $("#footer").html(data);
        }
    });
});