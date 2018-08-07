<?php
    header("Content-Type:application/json;charset=utf-8");
    //*获取参数 uname upwd
    @$uname = $_REQUEST['uname']or die('{"code":-2,"msg":"用户名不以为空"}');
    @$upwd = $_REQUEST['upwd']or die('{"code":-3,"msg":"密码不以为空"}');
    require("init.php");
    $sql = "INSERT INTO fm_user VALUES(null,'$uname',$upwd)";
    $result = mysqli_query($conn,$sql);
    if($result===null){
        echo '{"code":-1,"msg":"用户名或密码错误"}';
    }else{
        $uid = $result['uid'];
        $output = ["code"=>1,"msg"=>"注册成功","uname"=>$uname,"upwd"=>$upwd];
        echo json_encode($output);
    }
?>