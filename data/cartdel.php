<?php
    header("Content-type:application/json;charset=utf-8");
    //获取参数 cid 购物车编号
    @$cid = $_REQUEST['cid']or die('{"code":-1,"msg":"购物车编号是必须的"}');
    require("init.php");
    $sql = "DELETE FROM fm_cart WHERE cid=$cid";
    $result = mysqli_query($conn,$sql);
    //返回删除成功消息 code:1 msg:删除成功
    echo '{"code":1,"msg":"删除成功"}';
?>