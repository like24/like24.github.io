;(function($){
	var n=0,
		length=$("#box section").length;
		$("#box").swipeUp(function(){
			n++;
			if(n>=length){
				n=length-1;
			}
			$("#box section").eq(n).addClass("on").siblings().removeClass("on");
		})
		$("#box").swipeDown(function(){
			n--;
			if(n<=0){
				n=0;
			}
			$("#box section").eq(n).addClass("on").siblings().removeClass("on");
		})
})(Zepto)