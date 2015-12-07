/* html5　引导页面*/
/* add by Jameskid 2015.12.7  email:406358964@qq.com */
/* 使用说明:　
 *			   1. 按钮事件请在'点击事件在下面添加'关键字下添加 
 *			   2. 本代码基于html5,请使用支持html5内核的浏览器
 */
$(document).ready(function(){
	var touchEvents = {
		touchstart: "touchstart",
		touchmove: "touchmove",
		touchend: "touchend",
		touchleave: "touchleave",
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
	/* 当前温度 */
	nowTemp = nowTemp();
	$("#nowTemp").text(nowTemp);

	/* 空调事件 */
	$("#kongTiaoOn").mousedown(function(){
		$("#kongTiaoOn").css("display","none");
		$("#kongTiaoOff").css("display","block");
		$("#kongTiaoStatus").text('关闭');
		kongTiaoOffButton();
		return false;
	});
	$("#kongTiaoOff").mousedown(function(){
		$("#kongTiaoOn").css("display","block");
		$("#kongTiaoOff").css("display","none");
		$("#kongTiaoStatus").text('开启');
		kongTiaoOnButton();
		return false;
	});
	/* 电视事件 */
	$("#dianShiOn").mousedown(function(){
		$("#dianShiOn").css("display","none");
		$("#dianShiOff").css("display","block");
		$("#dianShiStatus").text('关闭');
		dianShiOffButton();
		return false;
	});
	$("#dianShiOff").mousedown(function(){
		$("#dianShiOn").css("display","block");
		$("#dianShiOff").css("display","none");
		$("#dianShiStatus").text('开启');
		dianShiOnButton();
		return false;
	});
	/* 机顶盒事件 */
	$("#jiDingHeOn").mousedown(function(){
		$("#jiDingHeOn").css("display","none");
		$("#jiDingHeOff").css("display","block");
		$("#jiDingHeStatus").text('关闭');
		jiDingHeOffButton();
		return false;
	});
	$("#jiDingHeOff").mousedown(function(){
		$("#jiDingHeOn").css("display","block");
		$("#jiDingHeOff").css("display","none");
		$("#jiDingHeStatus").text('开启');
		jiDingHeOnButton();
		return false;
	});
});
