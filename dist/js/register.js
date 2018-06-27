require(["config"],function(){
	require(["jquery","load"],function($){
		// 点击注册按钮，将表单中用户信息发送到
		// http://localhost/api/register.php URL中
		// ajax
		$(".reg_btn").click(function(){

			$.post("http://localhost/YSshopping/register.php", $(".reg_form").serialize(), function(data){
				if (data.res_code === 1)
					location = "/html/login.html";
				else
					$(".error").text("用户注册失败：" + data.res_message);
			}, "json");
		})
	})
})