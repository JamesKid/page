/* html5　空调遥控*/
/* add by Jameskid 2015.11.29  email:406358964@qq.com */
/* 使用说明:　
 *			   1. 按钮事件请在'点击事件在下面添加'关键字下添加 
 *			   2. 本代码基于html5,请使用支持html5内核的浏览器
 */
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
		/* 头部按钮 */
		$("#back").bind(touchEvents.touchstart,function(){
			alert('返回事件');  /* 返回事件请在此处添加代码 */
			return false; /* 禁止长按 */
		});
		$("#down").bind(touchEvents.touchstart,function(){
			var nowStatus = $("#nowStatus").text();
			if(nowStatus == '开启'){
				$('#nowStatus').text('关闭');
				/* 关闭事件请在此处添加代码 */
			}else if(nowStatus== '关闭'){
				$('#nowStatus').text('开启');
				/* 开启事件请在此处添加代码 */
			}
			return false; /* 禁止长按 */
		});
		$("#down").mousedown(function(){
			var nowStatus = $("#nowStatus").text();
			if(nowStatus == '开启'){
				$('#nowStatus').text('关闭');
			}else if(nowStatus== '关闭'){
				$('#nowStatus').text('开启');
			}
		});
		/*  制热按钮 */
		$("#hotUp").bind(touchEvents.touchstart,function(){
			buttonFunction('press','hot');
			buttonFunction('press','wet');
			buttonFunction('press','wind');
			buttonFunction('press','cool');
		});
		$("#hotPress").bind(touchEvents.touchstart,function(){
			buttonFunction('press','hot');
		});
		$("#hotUp").mousedown(function(){
			buttonFunction('up','hot');
			buttonFunction('press','wet');
			buttonFunction('press','wind');
			buttonFunction('press','cool');
		});
		$("#hotPress").mousedown(function(){
			buttonFunction('press','hot');
		});
		/*  抽湿按钮 */
		$("#wetUp").bind(touchEvents.touchstart,function(){
			buttonFunction('press','wet');
			buttonFunction('press','hot');
			buttonFunction('press','wind');
			buttonFunction('press','cool');
		});
		$("#wetPress").bind(touchEvents.touchstart,function(){
			buttonFunction('press','wet');
		});
		$("#wetUp").mousedown(function(){
			buttonFunction('up','wet');
			buttonFunction('press','hot');
			buttonFunction('press','wind');
			buttonFunction('press','cool');
		});
		$("#wetPress").mousedown(function(){
			buttonFunction('press','wet');
		});
		/*  送风按钮 */
		$("#windUp").bind(touchEvents.touchstart,function(){
			buttonFunction('press','wind');
			buttonFunction('press','hot');
			buttonFunction('press','wet');
			buttonFunction('press','cool');
		});
		$("#windPress").bind(touchEvents.touchstart,function(){
			buttonFunction('press','wind');
		});
		$("#windUp").mousedown(function(){
			buttonFunction('up','wind');
			buttonFunction('press','hot');
			buttonFunction('press','wet');
			buttonFunction('press','cool');
		});
		$("#windPress").mousedown(function(){
			buttonFunction('press','wind');
		});
		/*  制冷按钮 */
		$("#coolUp").bind(touchEvents.touchstart,function(){
			buttonFunction('press','cool');
			buttonFunction('press','hot');
			buttonFunction('press','wet');
			buttonFunction('press','wind');
		});
		$("#coolPress").bind(touchEvents.touchstart,function(){
			buttonFunction('press','cool');
		});
		$("#coolUp").mousedown(function(){
			buttonFunction('up','cool');
			buttonFunction('press','hot');
			buttonFunction('press','wet');
			buttonFunction('press','wind');
		});
		$("#coolPress").mousedown(function(){
			buttonFunction('press','cool');
		});
});
/* 单一按钮点击函数 */
function buttonFunction(param,type){
	if(param=='press'){
		$("#"+type+"Up").css("display","block");
		$("#"+type+"Press").css("display","none");
	}
	if(param=='up'){
		$("#"+type+"Up").css("display","none");
		$("#"+type+"Press").css("display","block");
	}
}
