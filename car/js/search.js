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
	/* 头部按钮 */
	if(IsPC()){
		$(".categoryWhite li").hover(function(){
			$(this).css("background-color","#d82d24");
			$(this).mouseleave(function(){
				$(this).css("background-color","transparent");
			});
		});
	}else {
		/*
		$(".categoryWhite li").bind(touchEvents.touchstart,function(){
			$(this).css("background-color","#d82d24");
		});
		$(".categoryWhite li").bind(touchEvents.touchend,function(){
			$(this).css("background-color","#e0e2e1");
		});
		*/
	}
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
