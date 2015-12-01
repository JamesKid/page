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
		$("#hotPress").bind(touchEvents.touchleave,function(){
			buttonFunction('press','hot');
		});
		$("#hotUp").mousedown(function(){
			buttonFunction('up','hot');
			buttonFunction('press','wet');
			buttonFunction('press','wind');
			buttonFunction('press','cool');
		});
		$("#hotPress").mousedown(function(){
			buttonFunction('up','hot');
		});
		$("#hotPress").mouseup(function(){
			buttonFunction('up','hot');
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
		$("#wetPress").bind(touchEvents.touchleave,function(){
			buttonFunction('press','wet');
		});
		$("#wetUp").mousedown(function(){
			buttonFunction('up','wet');
			buttonFunction('press','hot');
			buttonFunction('press','wind');
			buttonFunction('press','cool');
		});
		$("#wetPress").mousedown(function(){
			buttonFunction('up','wet');
		});
		$("#wetPress").mouseup(function(){
			buttonFunction('up','wet');
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
		$("#windPress").bind(touchEvents.touchleave,function(){
			buttonFunction('press','wind');
		});
		$("#windUp").mousedown(function(){
			buttonFunction('up','wind');
			buttonFunction('press','hot');
			buttonFunction('press','wet');
			buttonFunction('press','cool');
		});
		$("#windPress").mousedown(function(){
			buttonFunction('up','wind');
		});
		$("#windPress").mouseup(function(){
			buttonFunction('up','wind');
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
		$("#coolPress").bind(touchEvents.touchleave,function(){
			buttonFunction('press','cool');
		});
		$("#coolUp").mousedown(function(){
			buttonFunction('up','cool');
			buttonFunction('press','hot');
			buttonFunction('press','wet');
			buttonFunction('press','wind');
		});
		$("#coolPress").mousedown(function(){
			buttonFunction('up','cool');
		});
		$("#coolPress").mouseup(function(){
			buttonFunction('up','cool');
		});
		/* 风速按钮 */
		var level =0;
		$("#windLevel").bind(touchEvents.touchstart,function(){
			if(level%3==0){
				/* 小风变中风 */
				$("#low").css("display","none");
				$("#height").css("display","none");
				$("#middle").css("display","block");
			}else if(level%3==1){
				/* 中风变高风 */
				$("#low").css("display","none");
				$("#middle").css("display","none");
				$("#height").css("display","block");
			}else if(level%3==2){
				/* 高风变低风 */
				$("#middle").css("display","none");
				$("#height").css("display","none");
				$("#low").css("display","block");
			}
			level++;
			return false;
		});
		$("#windLevel").mousedown(function(){
			if(level%3==0){
				/* 小风变中风 */
				$("#low").css("display","none");
				$("#height").css("display","none");
				$("#middle").css("display","block");
			}else if(level%3==1){
				/* 中风变高风 */
				$("#low").css("display","none");
				$("#middle").css("display","none");
				$("#height").css("display","block");
			}else if(level%3==2){
				/* 高风变低风 */
				$("#middle").css("display","none");
				$("#height").css("display","none");
				$("#low").css("display","block");
			}
			level++;
		});
		var autoControl=0;
		$("#autoControl").mousedown(function(){
			if(autoControl%2==0){
				/* 自动变手动 */
				$("#auto").css("display","none");
				$("#manual").css("display","block");
			}else if(autoControl%2==1){
				/* 手动变自动 */
				$("#auto").css("display","block");
				$("#manual").css("display","none");
			}
			autoControl++;
			/* 声音关闭事件请在此处添加代码 */
		});
		/* 温度加减 */
		/* 增大温度 */
		$(".puls").bind(touchEvents.touchstart,function(){
			var tempNumber = $(".on").attr("value");
			if(tempNumber ==30){
				return false;
			}
			var tempNumberup = parseInt(tempNumber)+1;
			$("#temp"+tempNumber).removeClass("on");
			$("#temp"+tempNumberup).addClass("on");
			$("#temp"+tempNumber).css("display","none");
			$("#temp"+tempNumberup).css("display","block");
		});
		$(".plus").mousedown(function(){
			var tempNumber = $(".on").attr("value");
			if(tempNumber ==30){
				return false;
			}
			var tempNumberup = parseInt(tempNumber)+1;
			$("#temp"+tempNumber).removeClass("on");
			$("#temp"+tempNumberup).addClass("on");
			$("#temp"+tempNumber).css("display","none");
			$("#temp"+tempNumberup).css("display","block");
		});
		/* 减小温度 */
		$(".puls").bind(touchEvents.touchstart,function(){
			var tempNumber = $(".on").attr("value");
			if(tempNumber ==16){
				return false;
			}
			var tempNumberup = parseInt(tempNumber)-1;
			$("#temp"+tempNumber).removeClass("on");
			$("#temp"+tempNumberup).addClass("on");
			$("#temp"+tempNumber).css("display","none");
			$("#temp"+tempNumberup).css("display","block");
		});
		$(".minus").mousedown(function(){
			var tempNumber = $(".on").attr("value");
			if(tempNumber ==16){
				return false;
			}
			var tempNumberup = parseInt(tempNumber)-1;
			$("#temp"+tempNumber).removeClass("on");
			$("#temp"+tempNumberup).addClass("on");
			$("#temp"+tempNumber).css("display","none");
			$("#temp"+tempNumberup).css("display","block");
		});
		$(".line").bind(touchEvents.touchstart,function(){
			return false; /* 禁止图片长按 */
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
