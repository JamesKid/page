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
	/* 空调当前开关 */
	kongTiaoOnOff = kongTiaoOnOff();
	statusRender('kongTiao',kongTiaoOnOff);
	dianShiOnOff = dianShiOnOff();
	statusRender('dianShi',dianShiOnOff);
	jiDingHeOnOff = jiDingHeOnOff();
	statusRender('jiDingHe',jiDingHeOnOff);

	/* 空调事件 */
	$("#kongTiaoOn").mousedown(function(){
		statusTurn('kongTiao','off');
		kongTiaoOffButton();
		return false;
	});
	$("#kongTiaoOff").mousedown(function(){
		statusTurn('kongTiao','on');
		kongTiaoOnButton();
		return false;
	});
	/* 电视事件 */
	$("#dianShiOn").mousedown(function(){
		statusTurn('dianShi','off');
		dianShiOffButton();
		return false;
	});
	$("#dianShiOff").mousedown(function(){
		statusTurn('dianShi','on');
		dianShiOnButton();
		return false;
	});
	/* 机顶盒事件 */
	$("#jiDingHeOn").mousedown(function(){
		statusTurn('jiDingHe','off');
		jiDingHeOffButton();
		return false;
	});
	$("#jiDingHeOff").mousedown(function(){
		statusTurn('jiDingHe','on');
		jiDingHeOnButton();
		return false;
	});
});
function statusTurn(name,onOff){
	if(onOff=='on'){
		$("#"+name+"On").css("display","block");
		$("#"+name+"Off").css("display","none");
		$("#"+name+"Status").text('开启');
	}else if(onOff=='off'){
		$("#"+name+"On").css("display","none");
		$("#"+name+"Off").css("display","block");
		$("#"+name+"Status").text('关闭');
	}
}
/* 当前状态 */
function statusRender(name,onOff){
	if(onOff=='on'){
		statusTurn(name,'on');
	}else if(onOff=='off'){
		statusTurn(name,'off');
	}
}

