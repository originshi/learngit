$(function () {
	
//  console.log(document.documentElement.clientHeight)
//  console.log(document.documentElement.offsetHeight)
//   console.log(document.body.clientHeight)
//    console.log(document.body.offsetHeight)
//   
// console.log(document.documentElement.scrollHeight)
//  $(window).scroll(function () {
//  	console.log($(window).scrollTop())
//  })
  
    var _pro=$.cookie();
    var html_bodyul=$("#c_body").html();
    //console.log(_pro);
    var a=0;
    $.each(_pro,function (i,n) {
        //console.log(i);
        
    	if (i.indexOf("product")!=-1) {
    		        
    		    	if (a==0) {
    		            ++a;
			    	}else{
			    		$("#c_body").append(html_bodyul);
			    		//console.log($("#checkSwitch"))
	
			    		//alert(1);
			    	}
			    	var pro=eval("("+n+")");
			    	
    		        $(".c_body").css("display","block");
					$(".gwcgwc").css("display","block");
					$(".gwcgwc1").css("display","none");
    		    	$("#c_body ul:last .c_bl1 a").html(pro.product);
			    	$("#c_body ul:last li:first img").attr("src",pro.img);
			    	$("#c_body ul:last .c_bl21").html(pro.price);
			    	var aaa=parseInt(pro.count);
			    	var bbb=parseInt((pro.price).replace("￥",""));
			    	$("#c_body ul:last .c_bl4").html("￥"+aaa*bbb+".00");
			    	$("#c_body ul:last .c_bl3 input").val(pro.count);
    	}
    	
    	    	var c1=0;
    	
    	for (var i=0;i<=$(".c_body").length-1;i++) {
    		if ($(".c_body").eq(i).css("display")!="none") {
    			var d=$(".c_body").eq(i).children().eq(4).html();
    			d=d.replace("￥","");
    			d=parseInt(d);
    			c1+=d;
    		}
    		
    	}
//  	$(".subtotal").html("￥"+a*b+".00")
        $("#effectivePrice").html("￥"+c1+".00元");
    	
    })
//  var pro= $.cookie("product");
//  console.log($.cookie("product"));
//  pro=eval("("+pro+")");//console.log(pro.img);
//  if ($.cookie("product")) {
//  	$(".gwcgwc").css("display","block");
//  	$(".gwcgwc1").css("display","none");
//  	$(".c_bl1 a").html(pro.product);
//  	$(".c_body li:eq(0) img").attr("src",pro.img);
//  	$(".c_bl21").html(pro.price);
//  	$(".subtotal").html(pro.price);
//  	$(".c_bl3 input").val(pro.count);
//  }
    
    $(".increase").click(function () {
    	var a=$(this).parent().prev().val();
    	$(this).parent().prev().val(++a);
    	var b=$(this).parent().parent().parent().children().eq(2).html();
    	//console.log(b)
    	b=b.replace("￥","");
    	
    	b=parseInt(b);
    	//console.log(a*b);

    	
    	$(this).parent().parent().parent().children().eq(4).html("￥"+a*b+".00");
    	var c=0;
    	
    	for (var i=0;i<=$(".c_body").length-1;i++) {
    		if ($(".c_body").eq(i).css("display")!="none") {
    			var d=$(".c_body").eq(i).children().eq(4).html();
    			d=d.replace("￥","");
    			d=parseInt(d);
    			c+=d;
    		}
    		
    	}
//  	$(".subtotal").html("￥"+a*b+".00")
        $("#effectivePrice").html("￥"+c+".00元");
    })
    $(".decrease").click(function () {
    	var a=$(this).parent().prev().val();
    	if (--a<0) {
    		a=0;
    	}
    	$(this).parent().prev().val(a);
    	var b=$(this).parent().parent().parent().children().eq(2).html();
    	//console.log(b)
    	b=b.replace("￥","");
    	
    	b=parseInt(b);
    	//console.log(a*b);

    	$(this).parent().parent().parent().children().eq(4).html("￥"+a*b+".00");
//  	$(".subtotal").html("￥"+a*b+".00")
    	var c=0;
    	for (var i=0;i<=$(".c_body").length-1;i++) {
    		if ($(".c_body").eq(i).css("display")!="none") {
    			var d=$(".c_body").eq(i).children().eq(4).html();
    			d=d.replace("￥","");
    			d=parseInt(d);
    			c+=d;
    			console.log(d);
    		}
    		
    	}
    	console.log(c)
        $("#effectivePrice").html("￥"+c+".00元");
        
    })
    $(".delete").click(function () {
    	
    		$(this).parent().parent().css("display","none");
    	
    	var t=true;
    	for (var i=0;i<=$(".c_body").length-1;i++) {
    		console.log(($(".c_body").eq(i)).css("display"));
    		if(($(".c_body").eq(i)).css("display")=="block"){
    			t=false;
    		}
    	}
    	 
    	 if (t) {
    		$(".c_body").css("display","none");
			$(".gwcgwc").css("display","none");
			$(".gwcgwc1").css("display","block");
    	}
    	
    })
    $("#checkSwitch").change(function () {
    	
    	if ($(this)[0].checked) {
    		$(".checkSwitch").prop("checked",true);
    	}else{
    		$(".checkSwitch").prop("checked",false);
    	}
    })
    $(".checkSwitch").change(function () {
    	
    	if ($(this)[0].checked) {
    	    
    	}
    	var t=true;
        for (var i=0;i<=$(".checkSwitch").length-1;i++) {
        	//console.log($(".checkSwitch").eq(i))
        	if (($(".checkSwitch").eq(i))[0].checked==false) {
        		t=false;
        	}
        }
        //console.log(t)
        if(t==true){
        	$("#checkSwitch").prop("checked",true);
        }else{
        	$("#checkSwitch").prop("checked",false);
        }
    }) 
    
    $("#clear").click(function () {
    	$(".c_body").css("display","none");
		$(".gwcgwc").css("display","none");
		$(".gwcgwc1").css("display","block");
    })
    $("#removeBtn").click(function () {
    	 
    	
    	 for (var i=0;i<=$(".checkSwitch").length-1;i++) {
//      	console.log(($(".checkSwitch").eq(i))[0].checked)
//      	console.log($(".checkSwitch").eq(i).parent().parent()[0])
        	
        	if (($(".checkSwitch").eq(i))[0].checked) {
        		
        		
        			$(".checkSwitch").eq(i).parent().parent().css("display","none");
        		 
        		    
        	}
        }
    	 var t=true;
    	for (var i=0;i<=$(".c_body").length-1;i++) {
    		if(($(".c_body").eq(i)).css("display")=="block"){
    			t=false;
    		}
    	}
    	 
    	 if (t) {
    		$(".c_body").css("display","none");
			$(".gwcgwc").css("display","none");
			$(".gwcgwc1").css("display","block");
    	}
    	 
    })
})