//功能模块一：监听登录按钮
//获取登录按钮
//绑定单击事件
$("#bt-login").on("click",()=>{
    //获取用户输入用户名和密码
    var u=$("#uname").val();
    var p=$("#upwd").val();
    //验证 用户名密码
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
    //如果验证不能成功提示，终止程序
    //发送ajax
    $.ajax({
        type:"POST",
        url:"data/login.php",
        data:{uname:u,upwd:p},
        success:function(data){
            if(data.code===1){
                alert("登陆成功！");
                //将用户uid/uname保存  session会话
                sessionStorage["loginUid"]=data.uid;
                sessionStorage["loginName"]=u;
                location.href=sessionStorage["address"];
            }else{
                alert("登录失败"+data.msg);
            }
        }
    });
});