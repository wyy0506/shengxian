<?php
	//1:php subcountcart.php
	//获取cid参数:在数据库更新相应记录
	//返回更新结果
	header("Content-Type:application/json;charset=utf-8");
	@$cid=$_REQUEST['cid']or die('{"code":-1,"msg":"购物车编号是必须的"}');
	require("init.php");
	$sql="UPDATE fm_cart SET pcount=pcount-1 WHERE cid=$cid";
	$result=mysqli_query($conn,$sql);
	$sql="SELECT * FROM fm_cart WHERE cid=$cid";
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_assoc($result);
	$pcount=$row['pcount'];
	$output=["code"=>1,"msg"=>"更新成功","pcount"=>$pcount,"cid"=>$cid];
	echo json_encode($output);
?>