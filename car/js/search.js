$(document).ready(function(){
		/* 头部按钮 */
		$(".categoryWhite li").hover(function(){
			$(this).css("background-color","#d82d24");
			$(this).mouseleave(function(){
				$(this).css("background-color","#e0e2e1");
			});
		});
});
