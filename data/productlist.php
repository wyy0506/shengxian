<?php
    header("Content-Type:application/json;charset=utf-8");
    require("init.php");
    //获取参数pno 1 2 3 4 5
    @$pno = $_REQUEST['pno']or die('{"code":-2,"msg":"页码是必须的"}');
    //转换数据库分页偏移量 0
    $pno = ($pno-1)*15;
    $sql = "SELECT * FROM fm_product LIMIT $pno,15";
    $result = mysqli_query($conn,$sql);
    $rows = mysqli_fetch_all($result,MYSQLI_ASSOC);
    //5:抓取多行记录
    //6:输出json
    $input = json_encode($rows);
    echo $input;
?>