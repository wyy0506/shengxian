sessionStorage["address"]="fm_index.html";
$("#bt-register").on("click",()=>{
    //获取用户名，密码，确认密码，主页
    var u=$("#uname").val();
    var p=$("#upwd").val();
    var p1=$("#upwd1").val();
    //验证用户名
    if(u==""){alert("用户名不能为空");return;}
    //密码，确认密码
    if(p==""){alert("密码不能为空");return;}
    if(p1!=p){alert("密码与确认密码不同不能为空");return;}
    //发送ajax一个请求
    $.ajax({
        type:"POST",
        url:"data/register.php",
        data:{uname:u,upwd:p},
        success:function(data){
            //code==1
            if(data.code==1){
                //3秒钟后自动跳转  login.html
                alert("注册成功,1s后跳转登录页面...");
                setInterval(function(){
                    location.href="login.html";
                },1000);
            }else{
                alert("注册失败");
            }
        }
    });
});