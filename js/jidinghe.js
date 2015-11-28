$(document).ready(function(){
		var touchEvents = {
			touchstart: "touchstart",
			touchmove: "touchmove",
			touchend: "touchend",
			/**
			 * @desc:判断是否pc设备，若是pc，需要更改touch事件为鼠标事件，否则默认触摸事件
			 */
			initTouchEvents: function () {
				if (isPC()) {
					this.touchstart = "mousedown";
					this.touchmove = "mousemove";
					this.touchend = "mouseup";
				}
			}
		};
		/* 上方按钮　*/
		$(".imgHead").bind(touchEvents.touchstart,function(){
			//alert('abc');
			/* 解邦多点触摸 */
			//$(".imgLeft").unbind(touchEvents.touchstart);
		    //$(".imgLeft").attr(touchEvents.touchstart, "");  
			$("#up_01").css("display","none");
			$("#up_01_press").css("display","block");
			$("#up_left").css("display","none");
			return false; /* 禁止长按 */
		});
		$(".imgHead").bind(touchEvents.touchend,function(){
		    //$(".imgLeft").attr(touchEvents.touchend, "");  
			$("#up_01").css("display","block");
			$("#up_01_press").css("display","none");
			$("#up_left").css("display","none");
			return false; /* 禁止长按 */
		});
		$(".imgHead").mousedown(function(){
			$("#up_01").css("display","none");
			$("#up_01_press").css("display","block");
		});
		$(".imgHead").mouseup(function(){
			$("#up_01").css("display","block");
			$("#up_01_press").css("display","none");
		});
		/* 左方按钮　*/
		$(".imgLeft").bind(touchEvents.touchstart,function(){
			$(".imgLeft").bind(touchEvents.touchstart,function(){ return false;});
			$("#up_02").css("display","none");
			$("#up_02_press").css("display","block");
			$("#up_01").css("display","none");
			$("#up_left").css("display","block");
			return false; /* 禁止长按 */
		});
		$(".imgLeft").bind(touchEvents.touchend,function(){
			$("#up_02").css("display","block");
			$("#up_02_press").css("display","none");
			$("#up_01").css("display","block");
			$("#up_left").css("display","none");
			return false; /* 禁止长按 */
		});
		$(".imgLeft").mousedown(function(){
			$("#up_02").css("display","none");
			$("#up_02_press").css("display","block");
			$("#up_01").css("display","none");
			$("#up_left").css("display","block");
		});
		$(".imgLeft").mouseup(function(){
			$("#up_02").css("display","block");
			$("#up_02_press").css("display","none");
			$("#up_01").css("display","block");
			$("#up_left").css("display","none");
		});
		/* 右方按钮　*/
		/* 下方按钮　*/
		$(".imgFoot").bind(touchEvents.touchstart,function(){
			$("#up_05").css("display","none");
			$("#up_05_press").css("display","block");
			return false; /* 禁止长按 */
		});
		$(".imgFoot").bind(touchEvents.touchend,function(){
			$("#up_05").css("display","block");
			$("#up_05_press").css("display","none");
			return false; /* 禁止长按 */
		});
		$(".imgFoot").mousedown(function(){
			$("#up_05").css("display","none");
			$("#up_05_press").css("display","block");
		});
		$(".imgFoot").mouseup(function(){
			$("#up_05").css("display","block");
			$("#up_05_press").css("display","none");
		});
});
