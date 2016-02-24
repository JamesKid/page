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
	$(".searchMore").click(function(){
		$(".allShow").css('display','block');
		$(".searchMore").css('display','none');
		$(".zipMore").css('display','block');
	});
	$(".zipMore").click(function(){
		$(".allShow").css('display','none');
		$(".searchMore").css('display','block');
		$(".zipMore").css('display','none');
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
