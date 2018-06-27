define(["jquery"],function($){
	$(".HeaderSearchNav").load("/html/include/HeaderSearchNav.html",function(){
		$(".txt").on("keyup",function(){
			const txt = $(this).val();
			//jsonp跨域访问接口
			const url = `https:suggest.taobao.com/sug?code=utf-8&q=${txt}&_ksTS=1530069521846_275&callback=?&k=1&area=c2c&bucketid=5`
			$.getJSON(url,function(data){
				//data表示jsonp返回的数据
				let html = "";
				data.result.forEach(function(curr){
					html += `<div>${curr[0]}</div>`
				})
				$(".suggest").html(html);
				$(".suggest").show();
			})
		})
		//使用事件委派将事件绑定在div.suggest上
		$(".suggest").delegate('div','click',  function() {
			const txt = $(this).text();//< == >this.innerHTML
			$(".txt").val(txt);//val() 括号里没有值就是获取值，有值就是设置值
			$(".suggest").hide();
		});
	});
	$(".footer").load("/html/include/footer.html",function(){

	});
});
