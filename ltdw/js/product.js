$(function () {
	$(".nav_index_left").hover(function () {
		$(".mode_left").css("display","block");
		//console.log($(".nav_index .nav_index_left .nav_list"))
		$(".nav_index .nav_index_left .nav_list").animate({backgroundColor:"white"});
	},function () {
		$(".mode_left").css("display","none");
	   $(".nav_index .nav_index_left .nav_list").animate({backgroundColor:"red"});

	})
	
	
	//放大镜
	$(".glass #g_span").mouseover(function (e) {
		$(".glass #g_span span").css("display","block");
		$("#g_divl").css("display","block");
		
		
		
		$("#g_div").mousemove(function (e) {
			
			//console.log($("#g_divs"));
			var aaa=$("#g_ds").map(function () {
				return this;
				
			})
			var x1=aaa[0].offsetLeft;
			var y1=aaa[0].offsetTop;
			//document.title=e.clientX+":"+e.clientY
			//document.title=e.pageX+":"+e.pageY+":"+($(this).offset().left+92)+":"+($(this).offset().top+92);
			//document.title=$("#g_div").innerWidth()+":"+$("#g_ds").outerWidth();
		var x2=e.pageX;
		var y2=e.pageY;

		var left=x2-$(this).offset().left-92;
		var top=y2-$(this).offset().top-92;
        if (left<0) {
        	left=0;
        }else if(left>$("#g_div").innerWidth()-$("#g_ds").outerWidth()){
        	left=$("#g_div").innerWidth()-$("#g_ds").outerWidth();
        }
	    if (top<0) {
	    	top=0;
	    }else if(top>$("#g_div").innerHeight()-$("#g_ds").outerHeight()){
	    	top=$("#g_div").innerHeight()-$("#g_ds").outerHeight();
	    }
		
		var px=left/$("#g_div").innerWidth()-$("#g_ds").outerWidth();
		var py=top/$("#g_div").innerHeight()-$("#g_ds").outerHeight();
		$("#g_ds").css("left",left+"px");
		$("#g_ds").css("top",top+"px");
		$("#g_ds1").css("left",-left*2+"px");
		$("#g_ds1").css("top",-top*2+"px");
		
	    })
		   $(".glass #g_span").mouseout(function () {
			
			$("#g_divl").css("display","none");
				$(".glass #g_span span").css("display","none");
			
		})

	})
 
	$(".gl_3").click(function () {
		
		$("#g_span img").attr("src","img/image"+$(this).attr("index")+"m.jpg")
		$("#g_ds1").css("background","url(img/image"+$(this).attr("index")+"l.jpg) center no-repeat")
	})
    $(".gl_3").hover(function () {
    	$(".gl_3").css("border","1px solid #e4e4e4 ")
		$(this).css("border","1px solid #ff3500 ")
		$("#g_span img").attr("src","img/image"+$(this).attr("index")+"m.jpg")
		$("#g_ds1").css("background","url(img/image"+$(this).attr("index")+"l.jpg) center no-repeat")
	})
    var gl_index=0;
     $(".gl_2").click(function () {
         if(++gl_index>2){
         	gl_index=2;
         }
         $("#glass_ul_ul").css("left",-gl_index*87+"px")
	})
      $(".gl_1").click(function () {
        if(--gl_index<0){
         	gl_index=0;
         }
        $("#glass_ul_ul").css("left",-gl_index*87+"px")
	})
      
      
    
    $(".p_d2 div").hover(function () {
    	$(".p_d2  .p_d2_i").css("display","inline-block")
    },function () {
    	$(".p_d2  .p_d2_i").css("display","none")
    })
	
	
	$(".g_pre").click(function () {
		var a=parseInt($("#p_ul_s").html());
		if(a==1){
			
		}else{
			$("#p_ul_s").html(--a);
		}
	})
	$(".g_ne").click(function () {
		var a=parseInt($("#p_ul_s").html());
		
		
			$("#p_ul_s").html(++a);
		
	})
	
	$(".pc_2r_des ul li:odd").css({"width":"141px","background":"#f6f6f6","color":"#bea499","textAlign":"left","paddingLeft":"8px"});

	$(".pc_2r_des ul li:even").css({"width":"111px","background":"#eeeeee","color":"#888888","textAlign":"right","paddingRight":"6px"});
	$(".pc_2r_des ul li:odd").eq(2).css({"width":"276px"});
	$(".pc_2r_des ul li:odd").last().css({"width":"276px"});

	$(".pc_2r_par ul li:even").css({"width":"112px","textAlign":"right","paddingRight":"9px","borderRight":"1px solid #E4E4E4","borderBottom":"1px solid #E4E4E4"});
    $(".pc_2r_par ul li:odd").css({"width":"811px","textAlign":"left","paddingLeft":"9px","borderRight":"1px solid #E4E4E4","borderBottom":"1px solid #E4E4E4"});
    
    
    
    $(".pc_2r_list li").eq(0).click(function () {
    	$(window).scrollTop($(".pc_2r_des").offset().top)
    })
    $(".pc_2r_list li").eq(1).click(function () {
    	$(window).scrollTop($(".pc_2r_par").offset().top)
    })
    $(".pc_2r_list li").eq(2).click(function () {
    	$(window).scrollTop($(".pc_2r_comt").offset().top)
    })
    
    //console.log($(".p_disript h3").attr("productID"));
    $(".p_a1").click(function () {
    	    var productMasage=null;
    var img1=($("#glass_ul_ul li:eq(0) img").attr("src"));
    var product1=($(".p_disript h3").html());
    var productID=($(".p_disript h3").attr("productID"));
    var price1=($(".p_d2 span").text());p_ul_s
    var count1=($("#p_ul_s").html());
    productMasage="{img:'"+img1+"',product:'"+product1+"',price:'"+price1+"',count:'"+count1+"'}";
    console.log(productMasage)
    $.cookie("product"+productID,productMasage);
    
    window.location='productcart.html';
    })
    

//  var a=$.cookie("product");
//  
//  var b=eval("("+a+")");
//   console.log(b.img);
   
})
