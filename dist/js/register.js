require(["config"],function(){
	require(["jquery","load"],function($){
		// 点击注册按钮，将表单中用户信息发送到
		// http://localhost/api/register.php URL中
		// ajax
		$(".reg_btn").click(function(){
			$.post("http://localhost/YSshopping/register.php", $(".res_form").serialize(), function(data){
				const pas = $("#pas").value,
					  paw = $("#paw").value;
				if (data.res_code === 1 && pas === paw)
					location = "/html/login.html";
				else
					$("strong").text("用户注册失败：" + data.res_message);

			}, "json");
		})
		$("#paw").blur(function(){
			if(paw!=pas){
				$("i").text("两次密码输入一致");
			}
		})
	})
})