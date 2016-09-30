//$(".top").load("top.html");
$(function(){
//console.log($(".top .top_index"));
	$(".t_left_li1").hover(function () {
	    $(".t_left_li1 span").addClass("t_left_li_s");
	    
		$(".t_left_li_s li").show();
	},function () {
		$(".t_left_li1 span").removeClass("t_left_li_s");
		$(".t_left_li1 span li:eq(1)").hide();
		$(".t_left_li1 span li:eq(2)").hide();
	})
	$(".t_left_li2").hover(function () {
	   
	    
		$(".t_left_li_img").fadeIn();
	},function () {
	
		$(".t_left_li_img").fadeOut();
	})
	
	
	$.post("json/mode_left.json",function (date) {
		var html="";
		var abhtml="<div class='w_h'>服务保障</div><p>到店免费安装</p><p>全国联保，畅行天下</p>";
		
		$.each(date,function (i,n) {
			
			var div=document.createElement("div");
			var html1="";
			$.each(n.classify,function (i,n) {
				html1+=n+"&nbsp;";
			})
			$(div).append("<div>"+html1+"</div");
			html1=$(div).html();
			div=document.createElement("div");
			var html2="<div class='whiteback'>";
			html2=html22(i);
			if (i==5) {
				$(div).append("<div class='mode_left_cdiv mode_left_cdivlast'><div><img src="+n.typeImg+"><span class='mode_left_cdivs'>"+n.name+"</span></div>"+html1+html2+"</div>")
			}else{
				$(div).append("<div class='mode_left_cdiv'><div><img src="+n.typeImg+"><span class='mode_left_cdivs'>"+n.name+"</span></div>"+html1+html2+"</div>")
			}
			
		    
			
			
			html+=$(div).html();
			//console.log(n.content);
			
			function html22(i) {
				var html2="<div class='whiteback' style='display:none'>";
			$.each(n.content,function (x,n) {
				
				//console.log(n.name);
				html2+="<div class='w_h'>"+n.name+"</div><div class='w_t'>"
			
				
				$.each(n.classify,function (x,n) {
					//console.log(n);
					html2+=n+"&nbsp"
				})
				
				html2+="</div>"
			})
			if(i>=1){
				html2+=abhtml;
			}
			html2+="</div>";
			
			return html2;
			}
		    })
		$(".mode_left").html(html);
		
		$(".mode_left_cdiv").hover(function () {
			//console.log($(this).children(".whiteback"))
			$(this).children(".whiteback").css("display","block");
			
		},function () {
			$(this).find(".whiteback").css("display","none")
		})
		

		for(i=0;i<=5;i++){
			        $(".mode_left_cdiv").eq(i).attr("index",i);
					$(".mode_left_cdiv").eq(i).hover(function () {
					//console.log( $(this).attr("index"))
					$(this).find("img").attr("src","img/cate"+(parseInt($(this).attr("index"))+1)+"_icon2.png");
					$(this).css({"background":"white","color":"#ED6301"});
								
				},function () {
					$(this).find("img").attr("src","img/cate"+(parseInt($(this).attr("index"))+1)+"_icon1.png");
					$(this).css({"background":"#494a4d","color":"white"});
					
				})
		}
		
	})
	
	//轮播图
	var carouselx=0;
	var currentIndex=0;
	function carousel(){
		clearTimeout(timer);
		carouselx+=940;
		currentIndex+=1;
		if(carouselx>4700){
			carouselx=0;
			currentIndex=0;
		}
		
		$(".carousel_i").animate({"margin-left":-carouselx+"px"});
		for(i=0;i<=5;i++){
			$(".carousel_i div span").eq(i).css("background","white");
		}
		$(".carousel_i div span").eq(currentIndex).css("background","darkorange");
		timer=setTimeout(carousel,2000);
	}
	var  timer=setTimeout(carousel,2000);
	for(i=0;i<=5;i++){
		$(".carousel_i div span").eq(i).attr("index",i);
		$(".carousel_i div span").eq(i).mouseover(function () {
			clearTimeout(timer);
			//document.title=parseInt($(this).attr("index"));
			
		     currentIndex=parseInt($(this).attr("index"));
		     carouselx=currentIndex*940;
		     tab();
		    
		     
		})
		
	}
	$(".carousel_s").mouseout(function () {
		clearTimeout(timer);
		timer=setTimeout(carousel,2000);
	})
	function tab() {
		
		$(".carousel_i").stop().animate({"margin-left":-carouselx+"px"});
		for(i=0;i<=5;i++){
			$(".carousel_i div span").eq(i).css("background","white");
		}
		$(".carousel_i div span").eq(currentIndex).css("background","darkorange");
		
	}
	
	
	
	//main1左边 下
	$.post("json/main1_b.json",function (data) {
		//console.log(data);
		var html="<ul class=''>";
		$.each(data,function (i,n) {
			
			html+="<li class=''>";
			html+="<span>"+n["price"]+"</span><img src='"+n["typeimg"]+"'><p class=''>"+n["content"]+"</p>"
			html+="</li>"
		})
		html+="</ul>"
		$(".main1_l_b").html(html);
			$(".main1_l_b ul li").eq(0).click(function () {
				window.location="product.html";
			})
			$(".main1_l_b ul li").eq(1).click(function () {
				window.location="product02.html";
			})
	})
	//main1 活动
	$.post("json/main1_activity.json",function (data) {
		//console.log(data);
		var html="<ul class=''>";
		$.each(data,function (i,n) {
			
			html+="<li class=''>";
			html+="<span class='main1_r_ts1'>["+n.title+"]</span><span class='main1_r_ts2'>"+n.content+"</span>"
			html+="</li>"
		})
		html+="</ul>"
		$(".main1_r_t").append(html);
		$(".main1_r_t ul li:odd").css("background","#ededed")
	})
	//main2 轮播图
//	var carouselx1=0;
//	var currentIndex1=0;
//	function carousel1(){
//		clearTimeout(timer1);
//		carouselx1+=328;
//		currentIndex1+=1;
//		if(carouselx1>328){
//			carouselx1=0;
//			currentIndex1=0;
//		}
//		
//		$(".m2_c_i").animate({"margin-left":-carouselx1+"px"});
//		
//		timer1=setTimeout(carousel1,2000);
//	}
//	var  timer1=setTimeout(carousel1,2000);
//	for(i=0;i<=1;i++){
//		$(".m2_c_i a").eq(i).attr("index",i);
//		$(".m2_c_i a").eq(i).mousedown(function () {
//			clearTimeout(timer1);
//			//document.title=parseInt($(this).attr("index"));
//			
//		     //currentIndex1=parseInt($(this).attr("index"));
//		     if(parseInt($(this).attr("index"))==0){
//		     	++currentIndex1;
//		     	if(currentIndex1>1){
//		     		currentIndex1=0;
//		     	}
//		     }else{
//		     	--currentIndex1;
//		     	if(currentIndex1<0){
//		     		currentIndex1=1;
//		     	}
//		     }
//		     carouselx1=currentIndex1*328;
//		     tab1();
//		    
//		     
//		})
//		
//	}
//	$(".m2_carousel").mouseout(function () {
//		clearTimeout(timer1);
//		timer1=setTimeout(carousel1,2000);
//	})
//	function tab1() {
//		
//		$(".m2_c_i").stop().animate({"margin-left":-carouselx1+"px"});
//		
//		
//	}
	lunbo($("#m2_carousel1"),"#m2_carousel1");
	lunbo($("#m2_carousel2"),"#m2_carousel2");
	lunbo($("#m2_carousel0"),"#m2_carousel0")
	function lunbo (obj,str) {
			var carouselx1=0;
			var currentIndex1=0;
			function carousel1(){
				clearTimeout(obj.timer1);
				carouselx1+=328;
				currentIndex1+=1;
				if(carouselx1>328){
					carouselx1=0;
					currentIndex1=0;
				}
				
				$(str+" .m2_c_i").animate({"margin-left":-carouselx1+"px"});
				
				obj.timer1=setTimeout(carousel1,2000);
			}
			obj.timer1=setTimeout(carousel1,2000);
			for(i=0;i<=1;i++){
				$(str+" .m2_c_i a").eq(i).attr("index",i);
				$(str+" .m2_c_i a").eq(i).mousedown(function () {
					clearTimeout(obj.timer1);
					//document.title=parseInt($(this).attr("index"));
					
				     //currentIndex1=parseInt($(this).attr("index"));
				     if(parseInt($(this).attr("index"))==0){
				     	++currentIndex1;
				     	if(currentIndex1>1){
				     		currentIndex1=0;
				     	}
				     }else{
				     	--currentIndex1;
				     	if(currentIndex1<0){
				     		currentIndex1=1;
				     	}
				     }
				     carouselx1=currentIndex1*328;
				     tab1();
				    
				     
				})
				
			}
			$(str).mouseout(function () {
				clearTimeout(obj.timer1);
				obj.timer1=setTimeout(carousel1,2000);
			})
			$(str).mouseover(function () {
				clearTimeout(obj.timer1);
				
			})
			function tab1() {
				
				$(str+" .m2_c_i").stop().animate({"margin-left":-carouselx1+"px"});
				
				
			}
	
	}
	//main2 获取数据
	$.post("json/main2.json",function (data) {
		var html="<ul class=''>";
		$.each(data,function (i,n) {
			if (i<=1) {
				html+="<li class='m2_b_rsl1'>";
			}else{
				html+="<li class='m2_b_rsl2'>";
				
			}
			
			html+="<div class='m2_b_rd'><span class='m2_b_rs1'>"+n.product+"</span><span class='m2_b_rs2'>"+n.content+"</span><span class='m2_b_rs3'>"+n.price+"</span></div><img class='m2_b_ri' src='"+n.img+"'>"
			html+="</li>"
		})
		html+="</ul>"
		$(".m2_b_r").append(html);
		
	})
	$(".youlike").hover(function () {
		$(".recommend_content").stop().animate({borderWidth:1},function () {
			$(".recommend_content").animate({width:"520px"},1000)
		})
		
		
		
	},function () {
	
		$(".recommend_content").stop().animate({width:"0px"},1000,function () {
			$(".recommend_content").animate({borderWidth:0})
		})
		
	})
	
	
	$(".tools a").eq(3).hover(function () {
		$(".tools img").css("display","block");
		$(".tools img").stop().animate({"opacity":1},1000);
	},function () {
		$(".tools img").stop().animate({"opacity":0},1000,function () {
			$(".tools img").css("display","none");
		});
		
	})
	
	$(window).scroll(function () {
		//document.title=document.documentElement.scrollHeight+":"+(document.body.offsetHeight+$(window).scrollTop());
		//document.title=$(window).scrollTop();
		//document.title=document.documentElement.scrollHeight;
		if(document.documentElement.offsetHeight-document.documentElement.clientHeight<=$(window).scrollTop()){
			$(".tools a").eq(5).css("display","block");
			$(".tools a").eq(5).stop().animate({"opacity":1,"height":"40px"},500)
		}else{
			$(".tools a").eq(5).stop().animate({"opacity":0,"height":"0"},60,function () {
				$(".tools a").eq(5).css("display","none");
			})
		}
	})
	
	$(".tools a").eq(5).click(function () {
		$("html").stop().animate({"scrollTop":0},300);
		$("body").stop().animate({scrollTop:0},300);
		//$(window).scrollTop(0);
	
	})
	
	
	console.log($.cookie());
	var location=false;
	if($.cookie()){
		$.each($.cookie(),function(i,n) {
			
			//console.log(i);
			if (i.indexOf("account")!=-1&&n!="null") {
				
				var a=eval("("+n+")");
				$("#denglu").html(a.name);
				 $("#zhuce").html("退出");
				  $("#zhuce").click(function () {
				  		$.cookie("account",null)
				         
				  })
				 $("#denglu").attr("href","#") 
			}
		});
		
		
	}
	
   
	
})

