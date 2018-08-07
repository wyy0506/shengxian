<?php
    header("Content-Type:application/json;charset=utf-8");
    //获取参数  uid
    @$uid = $_REQUEST['uid']or die('{"code":-1,"msg":"用户编号是必须的"}');
    require("init.php");
    $sql = "SELECT c.cid,p.pname,p.price,c.pcount,p.pic from fm_cart c,fm_product p 
     where c.pid=p.pid AND c.uid = $uid";
    $result = mysqli_query($conn,$sql);
    $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
    echo json_encode($rows);
?>