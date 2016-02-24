$(document).ready(function(){
	var touchEvents = {
		touchstart: "touchstart",
		touchmove: "touchmove",
		touchend: "touchend",
		initTouchEvents: function () {
			if(isPC()) {
				this.touchstart = "mousedown";
				this.touchmove = "mousemove";
				this.touchend = "mouseup";
			}
		}
	};
	/* hover红色效果 */
	if(IsPC()){
		$(".categoryWhite li").hover(function(){
			$(this).css("background-color","#d82d24");
			$(this).mouseleave(function(){
				$(this).css("background-color","transparent");
			});
		});
	}else {
	}
	/* 点击切换div */
	$(".categoryWhiteNone li").click(function(){
		cid=$(this).attr('id');
		$('.listOne').css('display','none');
		$('.'+cid).css('display','block');
		$('.categoryWhiteNone li').removeClass('on');
		$('#'+cid).addClass('on');
	});
});
function IsPC() {
   var userAgentInfo = navigator.userAgent;
   var Agents = ["Android", "iPhone",
   "SymbianOS", "Windows Phone",
   "iPad", "iPod"];
   var flag = true;
   for (var v = 0; v < Agents.length; v++) {
	   if (userAgentInfo.indexOf(Agents[v]) > 0) {
		   flag = false;
		   break;
	   }
   }
   return flag;
}
