/* html5　引导页面*/
/* add by Jameskid 2015.12.7  email:406358964@qq.com */
/* 使用说明:　
 *			   1. 按钮事件请在'点击事件在下面添加'关键字下添加 
 *			   2. 本代码基于html5,请使用支持html5内核的浏览器
 */

/**
 *  页面加载方法
 *  isShowTV boolean类型  true显示电视项 false 不显示
 *  isShowBox boolean类型  true显示机顶盒项 false 不显示
 *  isShowAir boolean类型  true显示空调项 false 不显示
 *  keyIndexTV int类型 根据这个值可以算出电视的状态
 *  keyIndexBox int类型 根据这个值可以算出机顶盒的状态
 *  keyIndexAir int类型 根据这个值可以算出空调的状态
 */

/**
 * 学长，麻烦你修改一下这个方法
 * 根据isShowTV,isShowBox,isShowAir这几个参数决定显不显示设备项
 * keyIndexTV,keyIndexBox,keyIndexAir这三个参数你先不用管，到时我要用到的
 */
//function init(isShowTV,isShowBox,isShowAir,keyIndexTV,keyIndexBox,keyIndexAir){
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
	/* 显示隐藏设备 */
	/*
	if(isShowAir==true){
		$("#kongtiao").css("display","block");
	}else if(isShowTV==false){
		$("#kongtiao").css("display","none");
	}
	if(isShowTV==true){
		$("#dianshi").css("display","block");
	}else if(isShowTV==false){
		$("#dianshi").css("display","none");
	}
	if(isShowBox==true){
		$("#jidinghe").css("display","block");
	}else if(isShowTV==false){
		$("#jidinghe").css("display","none");
	}
	*/
	/* 当前温度 */
	nowTemp = nowTemp();
	$("#nowTemp").text(nowTemp);
	/* 空调当前开关 */
	kongTiaoOnOff = kongTiaoOnOff();
	statusRender('kongTiao',kongTiaoOnOff);
	/* 检查设备是否存在 */
	checkButton();

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
	$("#dianShiOnOff").mousedown(function(){
		$("#dianShiOn").css("display","none");
		$("#dianShiOff").css("display","block");
		dianShiClick();
	});
	$("#dianShiOnOff").mouseup(function(){
		$("#dianShiOn").css("display","block");
		$("#dianShiOff").css("display","none");
	});
	$("#dianShiOnOff").bind(touchEvents.touchstart,function(){
		$("#dianShiOn").css("display","none");
		$("#dianShiOff").css("display","block");
		dianShiClick();
	});
	$("#dianShiOnOff").bind(touchEvents.touchend,function(){
		$("#dianShiOn").css("display","block");
		$("#dianShiOff").css("display","none");
	});
	/* 机顶开关事件 */
	$("#jiDingHeOnOff").mousedown(function(){
		$("#jiDingHeOn").css("display","none");
		$("#jiDingHeOff").css("display","block");
		jiDingHeClick();
	});
	$("#jiDingHeOnOff").mouseup(function(){
		$("#jiDingHeOn").css("display","block");
		$("#jiDingHeOff").css("display","none");
	});
	$("#jiDingHeOnOff").bind(touchEvents.touchstart,function(){
		$("#jiDingHeOn").css("display","none");
		$("#jiDingHeOff").css("display","block");
		jiDingHeClick();
	});
	$("#jiDingHeOnOff").bind(touchEvents.touchend,function(){
		$("#jiDingHeOn").css("display","block");
		$("#jiDingHeOff").css("display","none");
	});
//}
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

