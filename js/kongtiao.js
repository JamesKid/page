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
		/* 当前温度 */
		var tempNumber = nowTemp();
		$('#topTemp').text(tempNumber);
		$('#temp'+tempNumber).css('display','block');
		/* 当前模式 */
		var nowModeTips = nowMode();
		if(nowModeTips=='hot'){
			buttonFunction('up','hot');
			buttonFunction('press','wet');
			buttonFunction('press','wind');
			buttonFunction('press','cool');
		}else if(nowModeTips=='cool'){
			buttonFunction('press','hot');
			buttonFunction('press','wet');
			buttonFunction('press','wind');
			buttonFunction('up','cool');
		}else if(nowModeTips=='wind'){
			buttonFunction('press','hot');
			buttonFunction('press','wet');
			buttonFunction('up','wind');
			buttonFunction('press','cool');
		}else if(nowModeTips=='wet'){
			buttonFunction('press','hot');
			buttonFunction('up','wet');
			buttonFunction('press','wind');
			buttonFunction('press','cool');
		}
		/* 当前风速 */
		var nowWindTips = nowWind();
		if(nowWindTips=='low'){
			$("#middle").css("display","none");
			$("#height").css("display","none");
			$("#low").css("display","block");
		}else if(nowWindTips=='middle'){
			$("#middle").css("display","block");
			$("#height").css("display","none");
			$("#low").css("display","none");
		}else if(nowWindTips=='height'){
			$("#middle").css("display","none");
			$("#height").css("display","block");
			$("#low").css("display","none");
		}
		/* 当前手动或自动 */
		var nowControlTips = nowControl();
		if(nowControlTips=='auto'){
			$("#auto").css("display","block");
			$("#manual").css("display","none");
		}else if(nowControlTips=='manual'){
			$("#auto").css("display","none");
			$("#manual").css("display","block");
		}


		/* 当前自动手动 */
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
		/*
		var level =0;
		$("#windLevel").bind(touchEvents.touchstart,function(){
			if(level%3==0){
				middleButton();
				$("#low").css("display","none");
				$("#height").css("display","none");
				$("#middle").css("display","block");
			}else if(level%3==1){
				heightButton();
				$("#low").css("display","none");
				$("#middle").css("display","none");
				$("#height").css("display","block");
			}else if(level%3==2){
				lowButton();
				$("#middle").css("display","none");
				$("#height").css("display","none");
				$("#low").css("display","block");
			}
			level++;
			return false;
		});
		*/
		/*
		$("#windLevel").mousedown(function(){
			if(level%3==0){
				middleButton();
				$("#low").css("display","none");
				$("#height").css("display","none");
				$("#middle").css("display","block");
			}else if(level%3==1){
				heightButton();
				$("#low").css("display","none");
				$("#middle").css("display","none");
				$("#height").css("display","block");
			}else if(level%3==2){
				lowButton();
				$("#middle").css("display","none");
				$("#height").css("display","none");
				$("#low").css("display","block");
			}
			level++;
		});
		*/
		$("#low").mousedown(function(){
			middleButton();
			$("#low").css("display","none");
			$("#height").css("display","none");
			$("#middle").css("display","block");
		});
		$("#middle").mousedown(function(){
			heightButton();
			$("#low").css("display","none");
			$("#middle").css("display","none");
			$("#height").css("display","block");
		});
		$("#height").mousedown(function(){
			lowButton();
			$("#middle").css("display","none");
			$("#height").css("display","none");
			$("#low").css("display","block");
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
			var tempNumber = $('#topTemp').text();
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
			var tempNumber = $('#topTemp').text();
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
			var tempNumber = $('#topTemp').text();
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
			var tempNumber = $('#topTemp').text();
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
