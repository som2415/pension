$(function(){
	/*팝업창*/
	$("#logo").click(function(){
		$("#popup").show();
	});
	$(".close").click(function(){
		$("#popup").hide();
	});
	$("#menu li").mouseenter(function(){
		$(this).find("ul").stop().slideDown(500);
		$(this).find(".title").css({background:"#efefef"});
	});
	$("#menu li").mouseleave(function(){
		$(this).find("ul").hide();
		$(this).find(".title").css({background:"#f9f9f9"});
	});
	/*이미지 fadeIn, fadeOut*/
	setInterval(function(){
	$("#slide li:eq(4)").fadeOut(2000,function(){
			$("#slide li:eq(4)").insertBefore("#slide li:eq(0)");
			$("#slide li:eq(0)").fadeIn();
			});
			},3000);
	
	setInterval(function(){
	$("#slide li:eq(2)").fadeOut(2000,function(){
			$("#slide li:eq(2)").insertBefore("#slide li:eq(0)");
			$("#slide li:eq(0)").fadeIn();
			});
			},3000);
	$("#section2").mouseenter(function(){	
	$(".top").stop().delay(500).animate({"width":"100%"},900,function(){
		$(".right").stop().animate({"height":"100%"},900,function(){
			$(".bottom").stop().animate({"width":"100%"},900,function(){
				$(".left").stop().animate({"height":"100%"},900,function(){
				
					
				}); // left end
			}); // bottom end
		}); // right end
	}); // top end
	});
		
	$(".detail").mouseenter(function(){
		$(".circle").stop().animate({"left":"1190px","backgroundColor":"green"},800,"easeOutBounce")
	});
	$(".detail").mouseleave(function(){
		$(".circle").stop().animate({"left":"1115px","backgroundColor":"#756659"
		},800,"easeOutBounce")
	});
	$(".detail2").mouseenter(function(){
		$(".circle2").stop().animate({"left":"830px","backgroundColor":"#756659"},800,"easeOutBounce")
	});
	$(".detail2").mouseleave(function(){
		$(".circle2").stop().animate({"left":"765px","backgroundColor":"#fff"
		},800,"easeOutBounce")
	});
	$("#section3").mouseenter(function(){
		$("#section3 p").fadeIn(2000)
	});
	$(".service li").each(function(aa){
		$(this).css("left",aa*270);
		});
		setInterval(function(){
			$(".service li").each(function(){	
				var nowLeft = parseInt($(this).css("left"));
				var movePos = nowLeft-270;
				$(this).animate({left:movePos},1000,function(){
				if(movePos==-270){
					$(this).css("left",1080);
						
				}	
			});
		});
	},2000);

	
	$('.page').mousewheel(function(e,delta){
	if(delta>0){ 
		m=$(this).prev().offset().top;
		$('html, body').stop().animate({scrollTop:m});
	} else {
		m=$(this).next().offset().top; 
		$('html, body').stop().animate({scrollTop:m});
		}
	});
	

		
		
});