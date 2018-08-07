<?php
    //功能:计算产品总页数
    header("Content-Type:application/json;charset=utf-8");
    require("init.php");
    //总记录数61
    $sql = "SELECT count(*) FROM fm_product";
    $result = mysqli_query($conn,$sql);
    $row = mysqli_fetch_row($result);
    //echo $row[0];   61/15 向上取整 ceil(); intval()
    $num = ceil(intval($row[0])/15);
    //7:输出总页数 '{"page":5}'
    $output = ["page"=>$num];
    echo json_encode($output);
?>