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
		/* 头部温度 */
		var tempNumber = $(".on").attr("value");
		$('#topTemp').text(tempNumber);
		/* 头部按钮 */
		$("#back").bind(touchEvents.touchstart,function(){
			backButton();
			return false; /* 禁止长按 */
		});
		$("#back").mousedown(function(){
			backButton();
		});
		$("#down").bind(touchEvents.touchstart,function(){
			var nowStatus = $("#nowStatus").text();
			if(nowStatus == '开启'){
				closeButton();
				$('#nowStatus').text('关闭');
			}else if(nowStatus== '关闭'){
				openButton();
				$('#nowStatus').text('开启');
			}
			return false; /* 禁止长按 */
		});
		$("#down").mousedown(function(){
			var nowStatus = $("#nowStatus").text();
			if(nowStatus == '开启'){
				closeButton();
				$('#nowStatus').text('关闭');
			}else if(nowStatus== '关闭'){
				openButton();
				$('#nowStatus').text('开启');
			}
		});
		/*  制热按钮 */
		/*
		$("#hotUp").bind(touchEvents.touchstart,function(){
			hotButton();
			buttonFunction('press','hot');
			buttonFunction('press','wet');
			buttonFunction('press','wind');
			buttonFunction('press','cool');
		});
		$("#hotPress").bind(touchEvents.touchstart,function(){
			hotButton();
			buttonFunction('press','hot');
		});
		*/
		$("#hotUp").mousedown(function(){
			hotButton();
			buttonFunction('up','hot');
			buttonFunction('press','wet');
			buttonFunction('press','wind');
			buttonFunction('press','cool');
			return false;
		});
		$("#hotPress").mousedown(function(){
			hotButton();
			buttonFunction('up','hot');
			return false;
		});
		$("#hotPress").mouseup(function(){
			buttonFunction('up','hot');
		});
		/*  抽湿按钮 */
		/*
		$("#wetUp").bind(touchEvents.touchstart,function(){
			wetButton();
			buttonFunction('press','wet');
			buttonFunction('press','hot');
			buttonFunction('press','wind');
			buttonFunction('press','cool');
		});
		$("#wetPress").bind(touchEvents.touchstart,function(){
			wetButton();
			buttonFunction('press','wet');
		});
		*/
		$("#wetUp").mousedown(function(){
			wetButton();
			buttonFunction('up','wet');
			buttonFunction('press','hot');
			buttonFunction('press','wind');
			buttonFunction('press','cool');
			return false;
		});
		$("#wetPress").mousedown(function(){
			wetButton();
			buttonFunction('up','wet');
			return false;
		});
		$("#wetPress").mouseup(function(){
			buttonFunction('up','wet');
		});
		/*  送风按钮 */
		/*
		$("#windUp").bind(touchEvents.touchstart,function(){
			windButton();
			buttonFunction('press','wind');
			buttonFunction('press','hot');
			buttonFunction('press','wet');
			buttonFunction('press','cool');
		});
		$("#windPress").bind(touchEvents.touchstart,function(){
			windButton();
			buttonFunction('press','wind');
		});
		*/
		$("#windUp").mousedown(function(){
			windButton();
			buttonFunction('up','wind');
			buttonFunction('press','hot');
			buttonFunction('press','wet');
			buttonFunction('press','cool');
			return false;
		});
		$("#windPress").mousedown(function(){
			windButton();
			buttonFunction('up','wind');
			return false;
		});
		$("#windPress").mouseup(function(){
			buttonFunction('up','wind');
		});
		/*  制冷按钮 */
		/*
		$("#coolUp").bind(touchEvents.touchstart,function(){
			coolButton();
			buttonFunction('press','cool');
			buttonFunction('press','hot');
			buttonFunction('press','wet');
			buttonFunction('press','wind');
		});
		$("#coolPress").bind(touchEvents.touchstart,function(){
			coolButton();
			buttonFunction('press','cool');
			return false;
		});
		*/
		$("#coolUp").mousedown(function(){
			coolButton();
			buttonFunction('up','cool');
			buttonFunction('press','hot');
			buttonFunction('press','wet');
			buttonFunction('press','wind');
			return false;
		});
		$("#coolPress").mousedown(function(){
			coolButton();
			buttonFunction('up','cool');
			return false;
		});
		$("#coolPress").mouseup(function(){
			buttonFunction('up','cool');
		});
		/* 风速按钮 */
		var level =0;
		$("#windLevel").bind(touchEvents.touchstart,function(){
			if(level%3==0){
				/* 小风变中风 */
				middleButton();
				$("#low").css("display","none");
				$("#height").css("display","none");
				$("#middle").css("display","block");
			}else if(level%3==1){
				/* 中风变高风 */
				heightButton();
				$("#low").css("display","none");
				$("#middle").css("display","none");
				$("#height").css("display","block");
			}else if(level%3==2){
				/* 高风变低风 */
				lowButton();
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
				middleButton();
				$("#low").css("display","none");
				$("#height").css("display","none");
				$("#middle").css("display","block");
			}else if(level%3==1){
				/* 中风变高风 */
				heightButton();
				$("#low").css("display","none");
				$("#middle").css("display","none");
				$("#height").css("display","block");
			}else if(level%3==2){
				/* 高风变低风 */
				lowButton();
				$("#middle").css("display","none");
				$("#height").css("display","none");
				$("#low").css("display","block");
			}
			level++;
		});
		/* 自动手动 */
		var autoControl=0;
		$("#autoControl").bind(touchEvents.touchstart,function(){
			if(autoControl%2==0){
				/* 自动变手动 */
				manualButton();
				$("#auto").css("display","none");
				$("#manual").css("display","block");
			}else if(autoControl%2==1){
				/* 手动变自动 */
				autoButton();
				$("#auto").css("display","block");
				$("#manual").css("display","none");
			}
			autoControl++;
			return false;
		});
		$("#autoControl").mousedown(function(){
			if(autoControl%2==0){
				/* 自动变手动 */
				manualButton();
				$("#auto").css("display","none");
				$("#manual").css("display","block");
			}else if(autoControl%2==1){
				/* 手动变自动 */
				autoButton();
				$("#auto").css("display","block");
				$("#manual").css("display","none");
			}
			autoControl++;
		});
		/* 温度加减 */
		/* 增大温度 */
		$(".puls").bind(touchEvents.touchstart,function(){
			var tempNumber = $(".on").attr("value");
			if(tempNumber ==30){
				return false;
			}
			var tempNumberup = parseInt(tempNumber)+1;
			plusButton(tempNumberup);
			$('#topTemp').text(tempNumberup); /* 头部温度变更 */
			$("#temp"+tempNumber).removeClass("on");
			$("#temp"+tempNumberup).addClass("on");
			$("#temp"+tempNumber).css("display","none");
			$("#temp"+tempNumberup).css("display","block");
			return false;
		});
		$(".plus").mousedown(function(){
			var tempNumber = $(".on").attr("value");
			if(tempNumber ==30){
				return false;
			}
			var tempNumberup = parseInt(tempNumber)+1;
			plusButton(tempNumberup);
			$('#topTemp').text(tempNumberup); /* 头部温度变更 */
			$("#temp"+tempNumber).removeClass("on");
			$("#temp"+tempNumberup).addClass("on");
			$("#temp"+tempNumber).css("display","none");
			$("#temp"+tempNumberup).css("display","block");
		});
		/* 减小温度 */
		$(".minus").bind(touchEvents.touchstart,function(){
			var tempNumber = $(".on").attr("value");
			if(tempNumber ==16){
				return false;
			}
			var tempNumberup = parseInt(tempNumber)-1;
			minusButton(tempNumberup);
			$('#topTemp').text(tempNumberup); /* 头部温度变更 */
			$("#temp"+tempNumber).removeClass("on");
			$("#temp"+tempNumberup).addClass("on");
			$("#temp"+tempNumber).css("display","none");
			$("#temp"+tempNumberup).css("display","block");
			return false;
		});
		$(".minus").mousedown(function(){
			var tempNumber = $(".on").attr("value");
			if(tempNumber ==16){
				return false;
			}
			var tempNumberup = parseInt(tempNumber)-1;
			minusButton(tempNumberup);
			$('#topTemp').text(tempNumberup); /* 头部温度变更 */
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
