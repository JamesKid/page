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
			$("#up_01").css("display","none");
			$("#up_01_press").css("display","block");
			$("#up_left").css("display","none");
			/* 点击事件在下面添加 */

			return false; /* 禁止长按 */
		});
		$(".imgHead").bind(touchEvents.touchend,function(){
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
			$("#up_02").css("display","none");
			$("#up_02_press").css("display","block");
			$("#up_01").css("display","none");
			$("#up_left").css("display","block");
			$("#up_05").css("display","none");
			$("#down_left").css("display","block");
			/* 点击事件在下面添加 */
			return false; /* 禁止长按 */
		});
		$(".imgLeft").bind(touchEvents.touchend,function(){
			$("#up_02").css("display","block");
			$("#up_02_press").css("display","none");
			$("#up_01").css("display","block");
			$("#up_left").css("display","none");
			$("#up_05").css("display","block");
			$("#down_left").css("display","none");
			return false; /* 禁止长按 */
		});
		$(".imgLeft").mousedown(function(){
			$("#up_02").css("display","none");
			$("#up_02_press").css("display","block");
			$("#up_01").css("display","none");
			$("#up_left").css("display","block");
			$("#up_05").css("display","none");
			$("#down_left").css("display","block");
		});
		$(".imgLeft").mouseup(function(){
			$("#up_02").css("display","block");
			$("#up_02_press").css("display","none");
			$("#up_01").css("display","block");
			$("#up_left").css("display","none");
			$("#up_05").css("display","block");
			$("#down_left").css("display","none");
		});
		/* 中间按钮　*/
		$(".imgCenter").bind(touchEvents.touchstart,function(){
			$("#up_03").css("display","none");
			$("#up_03_press").css("display","block");
			/* 点击事件在下面添加 */
			return false; /* 禁止长按 */
		});
		$(".imgCenter").bind(touchEvents.touchend,function(){
			$("#up_03").css("display","block");
			$("#up_03_press").css("display","none");
			return false; /* 禁止长按 */
		});
		$(".imgCenter").mousedown(function(){
			$("#up_03").css("display","none");
			$("#up_03_press").css("display","block");
		});
		$(".imgCenter").mouseup(function(){
			$("#up_03").css("display","block");
			$("#up_03_press").css("display","none");
		});
		/* 右方按钮　*/
		$(".imgRight").bind(touchEvents.touchstart,function(){
			$("#up_04").css("display","none");
			$("#up_04_press").css("display","block");
			$("#up_01").css("display","none");
			$("#up_right").css("display","block");
			$("#up_05").css("display","none");
			$("#down_right").css("display","block");
			/* 点击事件在下面添加 */
			return false; /* 禁止长按 */
		});
		$(".imgRight").bind(touchEvents.touchend,function(){
			$("#up_04").css("display","block");
			$("#up_04_press").css("display","none");
			$("#up_01").css("display","block");
			$("#up_right").css("display","none");
			$("#up_05").css("display","block");
			$("#down_right").css("display","none");
			return false; /* 禁止长按 */
		});
		$(".imgRight").mousedown(function(){
			$("#up_04").css("display","none");
			$("#up_04_press").css("display","block");
			$("#up_01").css("display","none");
			$("#up_right").css("display","block");
			$("#up_05").css("display","none");
			$("#down_right").css("display","block");
		});
		$(".imgRight").mouseup(function(){
			$("#up_04").css("display","block");
			$("#up_04_press").css("display","none");
			$("#up_01").css("display","block");
			$("#up_right").css("display","none");
			$("#up_05").css("display","block");
			$("#down_right").css("display","none");
		});
		/* 下方按钮　*/
		$(".imgFoot").bind(touchEvents.touchstart,function(){
			$("#up_05").css("display","none");
			$("#up_05_press").css("display","block");
			/* 点击事件在下面添加 */
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
