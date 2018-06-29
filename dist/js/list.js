require(["config"],function(){
	require(["jquery","artTemplate"],function($,template){
		$(function(){
	//动态渲染商品数据
			$.getJSON("/mock/list.json",function(data){
				console.log(data);
			});
		});
	})

})
