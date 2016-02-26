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
	/*
	var oMask = document.getElementById('mask');
	var oImg = document.getElementById('img');
	var oBtn = document.getElementById('btn');
	oBtn.onclick = function (){
		oMask.style.display = 'block';
		oImg.style.display = 'block';
		oMask.style.width = document.documentElement.clientWidth + 'px';
		oMask.style.height = document.documentElement.clientHeight + 'px';
		oImg.style.left = (document.documentElement.clientWidth - oImg.offsetWidth)/2 + 'px';
		oImg.style.top = (document.documentElement.clientHeight - oImg.offsetHeight)/2 + 'px';
	}
	/*
	oMask.onclick = function (){
		oImg.style.display = 'none';
		oMask.style.display = 'none';
	}
	*/
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
