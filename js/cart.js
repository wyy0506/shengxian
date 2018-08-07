//功能一：
//解析uid和uname若没有则必须跳回"登录页面"
sessionStorage["address"]="fm_shoppingcart.html";
var uid=sessionStorage["loginUid"];
if(!uid){
	location.href='login.html';
}
//功能二：页面加载完成后，异步请求当前登录
//用户购物车中商品列表
$(function(){
	$.ajax({
		url:"data/cartlist.php",
		data:{uid:uid},
		success:function(data){
			var html="";
			for(var i=0;i<data.length;i++){
				var obj=data[i];
                var total=(obj.price*obj.pcount).toFixed(2);
				html+=`
					<tr>
						<td>
							<input type="checkbox"/>
							<input type="hidden" value="1" />
							<div><img src="${obj.pic}" alt=""/></div>
						</td>
						<td><a href="">${obj.pname}</a></td>
						<td>${obj.price}</td>
						<td>
							<button class="${obj.cid}">-</button>
							<input type="text" value="${obj.pcount}"/>
							<button	 class="${obj.cid}">+</button>
						</td>
						<td><span>¥${total}</span></td>
						<td><a href="${obj.cid}" class="btn-del">删除</a></td>
					</tr>`;
			}
			$("#cart tbody").html(html);
		}
	});
});
//模块三：为删除按钮绑定事件监听
//实现购物车项目删除
//获取删除按钮
$("#cart tbody").on("click","a.btn-del",function(e){
	e.preventDefault();
	var cid=$(this).attr("href");
	//预留this
	var self=this;
	console.log(1);
	$.ajax({
		url:"data/cartdel.php",
		data:{cid:cid},
		success:function(data){
			if(data.code>0){
				alert("删除成功");
				$(self).parent().parent().remove();
			}else{
				alert("删除失败，原因是"+data.msg);
			}
		}
	});
});
//模块七:+ 购物车中信息
$("#cart tbody").on("click","button:last-child",function(e){
	var cid=$(this).attr("class");
	var price=$(e.target).parent().prev().html();
	$.ajax({
		url:"data/addcountcart.php",
		data:{cid:cid},
		success:function(data){
			if(data.code>0){
				var pcount=data.pcount;
				$(e.target).prev().attr("value",pcount);
                var total=(price*pcount).toFixed(2);
				$(e.target).parent().next().children().html("¥"+total);
			}
		}
	});
});
//模块八:- 购物车中信息
$("#cart tbody").on("click","button:first-child",function(e){
	var cid=$(this).attr("class");
	var price=$(e.target).parent().prev().html();
	var pcount=$(e.target).next().attr("value");
	if(pcount>1){
		$.ajax({
			url:"data/subcountcart.php",
			data:{cid:cid},
			success:function(data){
				if(data.code>0){
					var pcount=data.pcount;
					$(e.target).next().attr("value",pcount);
                    var total=(price*pcount).toFixed(2);
					$(e.target).parent().next().children().html("¥"+total);
				}
			}
		});
	}
});