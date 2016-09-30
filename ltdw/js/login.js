$(function () {
	$("#zhanghao").focus(function () {
		$(this).css("color","black");
		$(this).val("");
	})
	$("#mima").focus(function () {
		$(this).css("color","black");
		$(this).attr("type","password");
		$(this).val("");
		if (zhanghaot==false) {
			$("#c_crss1").css("display","block");
		}
	})
		var zhanghao="";
		var zhanghaot=false;
		var mima="";
		var mimat=false;
	if ($.cookie()) {
		$.each($.cookie(), function(i,n) {
			if (i.indexOf("account")!=-1) {
				var a=eval("("+n+")");
				zhanghao=a.name;
				mima=a.mima;
			}
		});
	}
	$("#zhanghao").blur(function () {
		if ($(this).val()=="") {
			$("#c_crss1").css("display","block");
		}else if($(this).val()!=zhanghao){
			$("#c_crss1").css("display","block");
		}else{
			$("#c_crss1").css("display","none");
			zhanghaot=true;
		}
		
	})
	$("#mima").blur(function () {
				if ($(this).val()=="") {
			$("#c_crss2").css("display","block");
		}else if($(this).val()!=mima){
			$("#c_crss2").css("display","block");
		}else{
			$("#c_crss2").css("display","none");
			mimat=true;
		}
	})
	
	
	$("#c_cr_input").click(function () {
		if (zhanghaot&&mimat) {
					$(".frame1").css("display","block");
					var second=5;
					setInterval(function () {
						$(".frame1_index").html((--second)+"秒后进入首页<br><span>点击即立刻跳转</span>");
					},1000)
					setTimeout(function () {
						window.location="index.html"
					},5000)
		}
		
	})
	
	$(".frame1_index").click(function () {
		window.location="index.html"
	})
})