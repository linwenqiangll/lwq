require(["config"],function(){
	require(["jquery","load"],function($){
		// 点击登录按钮，将表单中用户信息发送到
		// http://localhost/api/login.php URL中
		// ajax
		$(".log_btn").click(function(){
			$.post("http://localhost/YSshopping/login.php", $(".res_form").serialize(), function(data){
				
				if (data.res_code === 1)
					location = "/index.html";
				else if($("#password").value==""){
					$("i").text("请输入密码");
				}
				else if($("#txt"). value==""){
					$("strong").text("请输入用户名");
				}
				else
					$("strong").text("用户登录失败：" + data.res_messages);
				
			}, "json");
		})
		
	})
})