$(document).ready(function () {
	$(".c_cr input").not($(".c_cr input:last")).focus(function () {
		$(this)[0].value="";
		$(this).prev().css("background","url(img/re_txx"+$(this).attr("index")+".png) center no-repeat")
	})
	var zhanghao="";
	var zhanghaot=false;
	$(".c_cr input").eq(0).blur(function () {
		
		$(this).prev().css("background","url(img/re_txx.png) center no-repeat");
		var a=false;
		var b=$(this).val();
		//console.log(/^\d+$/.test(b))
		if (/^\d+$/.test(b)) {
			if (b.length>=11&&b.length<=11) {
				
			}else{
			a=true;
			$(this).next().html("应为11位数字")
			}
		}else{
			a=true;
			$(this).next().html("格式错误")
		}
		if (a) {
			
			$(this).next().css({"display":"block"});
		}else{
			
			$(this).next().css({"display":"none"});
			zhanghao=b;
			zhanghaot=true;
		}
	})
	$(".c_cr input").focus(function () {
		$(this).css({"color":"black"});
	})
	$(".c_cr input").eq(2).focus(function () {
		$(this).css({"color":"black"});
		$(this).attr("type","password");
				if (mimat==false) {
			$(".c_cr input").eq(1).next().css({"display":"block"});
			$(".c_cr input").eq(1).next().html("请先输入正确的密码");
		}
						if (zhanghaot==false) {
			$(".c_cr input").eq(0).next().css({"display":"block"});
			$(".c_cr input").eq(0).next().html("请先输入正确的账号");
		}
	})
	$(".c_cr input").eq(1).focus(function () {
		$(this).css({"color":"black"});
		$(this).attr("type","password");
		if (zhanghaot==false) {
			$(".c_cr input").eq(0).next().css({"display":"block"});
			$(".c_cr input").eq(0).next().html("请先输入正确的账号");
		}
	})
	var mima="";
	var mimat=false;
	$(".c_cr input").eq(1).blur(function () {
		var a=false;
		$(this).prev().css("background","url(img/re_tx.png) center no-repeat");
		var b=$(this).val();
		//console.log(/^\d+$/.test(b))
		if (/^\w+$/.test(b)) {
			if (b.length>=8&&b.length<=16) {
				
			}else{
			a=true;
			$(this).next().html("应为8-16位密码")
			}
		}else{
			a=true;
			$(this).next().html("格式错误");
			
		}
		if (a) {
			
			$(this).next().css({"display":"block"});
		}else{
			
			$(this).next().css({"display":"none"});
			mima=b;
			mimat=true;
		}
	})
	var mima2=false;	
	$(".c_cr input").eq(2).blur(function () {
		var a=false;
		$(this).prev().css("background","url(img/re_tx.png) center no-repeat");
		var b=$(this).val();
		//console.log(/^\d+$/.test(b))
		if (mima==b) {
			
		}else{
			a=true;
			
		}
		if (a) {
			
			$(this).next().css({"display":"block"});
		}else{
			
			$(this).next().css({"display":"none"});
			mima2=true;
		}
	})
	
	
	var authcode="";
	var authcodet=false;
	$("#authCode").click(function () {
		function random() {
			var arr=[];
			for (var i=0;i<=9;i++) {
				arr[i]=i;
			}
			for (var i=0;i<=25;i++) {
				arr.push(String.fromCharCode(97+i));
			}
			var a=Math.floor(Math.random()*35);
			return arr[a];
		}
		
		if(!(zhanghaot&&mimat&&mima2)){
							if (mimat==false) {
			$(".c_cr input").eq(1).next().css({"display":"block"});
			$(".c_cr input").eq(1).next().html("请先输入正确的密码");
		}
						if (zhanghaot==false) {
			$(".c_cr input").eq(0).next().css({"display":"block"});
			$(".c_cr input").eq(0).next().html("请先输入正确的账号");
		}
								if (mima2==false) {
			$(".c_cr input").eq(2).next().css({"display":"block"});
			$(".c_cr input").eq(2).next().html("请先输入正确的密码");
		}
		}else{
			
					var str=random()+""+random()+""+random()+""+random();
		authcode=str;
		$(".frame").css("display","block");
		$(".frame_index").html("验证码为："+str+"<br><span>点击即可回到页面</span>");
			
			
		}

	})
	$(".frame_index").click(function () {
		$(".frame").css("display","none");
	})
    $(".frame1_index").click(function () {
		window.location="login.html"
	})
	var yanzheng=false;
	$("#c_cr_i1").blur(function () {
		
		if ($(this).val()=="") {
			$(this).val("验证失败")
		}else if($(this).val()==authcode){
			$(this).val("验证成功");
			yanzheng=true;
			
		}else{
			$(this).val("验证失败");
		}
	})
	
	
	
	$(".c_cr_input").click(function () {
		//zhanghaot&&mimat&&mima2&&yanzheng
		if (zhanghaot&&mimat&&mima2&&yanzheng) {
			var checked1=$("#checkbox1").prop("checked");
			
			if (checked1) {
				
							var account="{name:'"+zhanghao+"',mima:'"+mima+"'}";
			$.cookie("account",account);
			//console.log($.cookie());
					$(".frame1").css("display","block");
					var second=5;
					setInterval(function () {
						$(".frame1_index").html((--second)+"秒后进入登录页面<br><span>点击即立刻跳转</span>");
					},1000)
					setTimeout(function () {
						window.location="login.html"
					},5000)
			}else{
				
						$(".frame").css("display","block");
		      $(".frame_index").html("请勾选用户注册协议<br><span>点击即可回到页面</span>");
			}

		
			
			
		}else{
										if (mimat==false) {
			$(".c_cr input").eq(1).next().css({"display":"block"});
			$(".c_cr input").eq(1).next().html("请先输入正确的密码");
		}
						if (zhanghaot==false) {
			$(".c_cr input").eq(0).next().css({"display":"block"});
			$(".c_cr input").eq(0).next().html("请先输入正确的账号");
		}
								if (mima2==false) {
			$(".c_cr input").eq(2).next().css({"display":"block"});
			$(".c_cr input").eq(2).next().html("请先输入正确的密码");
		}
			
		}
	})
	
	$("#c_cr_input").focus(function () {
		$(this).css("color","white");
	})
})
