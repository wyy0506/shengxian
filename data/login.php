<?php
    header("Content-Type:application/json;charset=utf-8");
    //*获取参数 uname upwd
    @$uname = $_REQUEST['uname']or die('{"code":-2,"msg":"用户名不以为空"}');
    @$upwd = $_REQUEST['upwd']or die('{"code":-3,"msg":"密码不以为空"}');
    require("init.php");
    $sql = "SELECT uid FROM fm_user WHERE uname='$uname' AND upwd='$upwd'";
    $result = mysqli_query($conn,$sql);
    $rows = mysqli_fetch_assoc($result);
    if($rows===null){
        echo '{"code":-1,"msg":"用户名或密码错误"}';
    }else{
        $uid = $rows['uid'];
        $output = ["code"=>1,"msg"=>"登录成功","uname"=>$uname,"uid"=>$uid];
        echo json_encode($output);
    }
?>