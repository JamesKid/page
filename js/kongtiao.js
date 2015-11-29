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
			$("#hotUp").css("display","none");
			$("#hotPress").css("display","block");
		});
		$("#hotPress").bind(touchEvents.touchstart,function(){
			$("#hotUp").css("display","block");
			$("#hotPress").css("display","none");
		});
		$("#hotUp").mousedown(function(){
			$("#hotUp").css("display","none");
			$("#hotPress").css("display","block");
		});
		$("#hotPress").mousedown(function(){
			$("#hotUp").css("display","block");
			$("#hotPress").css("display","none");
		});
		/*  抽湿按钮 */
		$("#wetUp").mousedown(function(){
			$("#wetUp").css("display","none");
			$("#wetPress").css("display","block");
			/* 声音关闭事件请在此处添加代码 */
		});
		$("#wetPress").bind(touchEvents.touchstart,function(){
			$("#wetUp").css("display","block");
			$("#wetPress").css("display","none");
			/* 声音关闭事件请在此处添加代码 */
		});
		$("#wetPress").mousedown(function(){
			$("#wetUp").css("display","block");
			$("#wetPress").css("display","none");
			/* 声音关闭事件请在此处添加代码 */
		});
		/*  送风按钮 */
		$("#windUp").mousedown(function(){
			$("#windUp").css("display","none");
			$("#windPress").css("display","block");
			/* 声音关闭事件请在此处添加代码 */
		});
		$("#windPress").bind(touchEvents.touchstart,function(){
			$("#windUp").css("display","block");
			$("#windPress").css("display","none");
			/* 声音关闭事件请在此处添加代码 */
		});
		$("#windPress").mousedown(function(){
			$("#windUp").css("display","block");
			$("#windPress").css("display","none");
			/* 声音关闭事件请在此处添加代码 */
		});
		/*  制冷按钮 */
		$("#coolUp").mousedown(function(){
			$("#coolUp").css("display","none");
			$("#coolPress").css("display","block");
			/* 声音关闭事件请在此处添加代码 */
		});
		$("#coolPress").bind(touchEvents.touchstart,function(){
			$("#coolUp").css("display","block");
			$("#coolPress").css("display","none");
			/* 声音关闭事件请在此处添加代码 */
		});
		$("#coolPress").mousedown(function(){
			$("#coolUp").css("display","block");
			$("#coolPress").css("display","none");
			/* 声音关闭事件请在此处添加代码 */
		});
});
