$(function(){
	var wHeight = $( window ).height(),
		len = $( "#main section" ).length ;
					    
	$( "#wrap" ).swipeUp(function(){
		var index = $(this).find(".active").index();
		index = index+1 >= len ? len-1 : index+1;
		$( "#main" ).animate({
			translateY : (-wHeight*index)+"px"
		},200,function(){
			$(this).find("section").eq(index).addClass("active").siblings().removeClass("active")
		})
		if( index == $("section").length-1 ){
			$( ".page" ).css("display","none !important")
		}
	})
				
				
	$( "#wrap" ).swipeDown(function(){
		var index = $(this).find(".active").index();
		index = index-1 <= 0 ? 0 : index-1;
		$( "#main" ).animate({
			translateY : (-wHeight*index)+"px"
		},200,function(){
			$(this).find("section").eq(index).addClass("active").siblings().removeClass("active")
		})
		if( index == $("section").length-1 ){
			$( ".page" ).css("display","none !important")
		}
	})

	$(window).on("resize",function(){
		wHeight = $( window ).height()
		var index = $("#main .active").index();
		var translateY = -(wHeight*index);
		$( "#main" ).css({
			"-webkit-transform": "translateY("+ translateY+"px)"
		})
	})
	$(window).on("touchmove",function(){
		return false;
	})
	$( "input" ).focus(function(){
		$( ".page" ).css("display","none !important")
	})
	$( "input" ).blur(function(){
		$( ".page" ).show()
	})
	
	
	
	$( "#forme1" ).submit(function(){
		$.ajax({
			url : "http://192.168.77.228:8088/web/teacher/addPlanQA",
			type:"post", 
		    data : {
				"name" : $("input.name1").val(),
				"telephone" : $("input.telephone1").val(),
				"weiXin" : $("input.weiXin1").val(),
				"school" : $("input.school1").val()
		    },
		    dataType: 'jsonp', 
			success : function(data){
				console.log(  data )
			}
		})
		return false;
	})
		
	$( "#forme2" ).submit(function(){
		$.ajax({
			url : "http://192.168.77.228:8088/web/teacher/addPlanQA",
			type:"post",
			data : {
				"name" : $("input.name2").val(),
				"telephone" : $("input.telephone2").val(),
				"weiXin" : $("input.weiXin2").val(),
				"school" : $("input.school2").val()
			},
			dataType: 'jsonp', 
			success : function(data){
				console.log(  data )
			}
		})
		return false;
	})
	
	
})



	
