<?php
    header("Content-Type:application/json;charset=utf-8");
    //获取用户提交参数 uid pid
    @$uid = $_REQUEST['uid']or die('{"code":-2,"msg":"用户编号不能为空"}');
    @$pid = $_REQUEST['pid']or die('{"code":-3,"msg":"商品编号不能为空"}');
    require("init.php");
    $sql = "SELECT * FROM fm_cart WHERE uid=$uid AND pid=$pid";
    $result = mysqli_query($conn,$sql);
    $row = mysqli_fetch_assoc($result);
    //判断
    //创建变量保存 购物车数量
    $pcount = 1;
    if($row===null){
        $sql = "INSERT INTO fm_cart VALUES(null,$uid,$pid,1)";
        mysqli_query($conn,$sql);
    }else{
        $sql = "UPDATE fm_cart SET pcount=pcount+1 WHERE uid=$uid AND pid=$pid";
        mysqli_query($conn,$sql);
        //查询数据库中原先数量 + 1
        $pcount = $row['pcount']+1;
    }
    //如果己购买过此商品   sql UPDATE 发送sql
    //如果没有购买过此商品 sql INSERT 发送sql
    //输出响应内容 code:1 msg"购物成功" count:3
    $output = ["code"=>1,"msg"=>"添加成功","pcount"=>$pcount];
    echo json_encode($output);
?>