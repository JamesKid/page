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
			$('div').removeClass('modeon');
			$('#hot').addClass('modeon');
		}else if(nowModeTips=='cool'){
			buttonFunction('press','hot');
			buttonFunction('press','wet');
			buttonFunction('press','wind');
			buttonFunction('up','cool');
			$('div').removeClass('modeon');
			$('#cool').addClass('modeon');
		}else if(nowModeTips=='wind'){
			buttonFunction('press','hot');
			buttonFunction('press','wet');
			buttonFunction('up','wind');
			buttonFunction('press','cool');
			$('div').removeClass('modeon');
			$('#wind').addClass('modeon');
		}else if(nowModeTips=='wet'){
			buttonFunction('press','hot');
			buttonFunction('up','wet');
			buttonFunction('press','wind');
			buttonFunction('press','cool');
			$('div').removeClass('modeon');
			$('#wet').addClass('modeon');
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
			updateStatus();
			return false; /* 禁止长按 */
		});
		$("#back").mousedown(function(){
			backButton();
			updateStatus();
		});
		$("#down").bind(touchEvents.touchstart,function(){
			updateStatus();
			var nowStatus = $("#nowStatus").text();
			var open =  getResource().Open;
			var close =  getResource().Close;
			if(nowStatus == open){
				closeButton();
				$('#nowStatus').text(close);
			}else if(nowStatus== close){
				openButton();
				$('#nowStatus').text(open);
			}
			return false; /* 禁止长按 */
		});
		$("#down").mousedown(function(){
			updateStatus();
			var nowStatus = $("#nowStatus").text();
			var open =  getResource().Open;
			var close =  getResource().Close;
			if(nowStatus == open){
				closeButton();
				$('#nowStatus').text(close);
			}else if(nowStatus== close){
				openButton();
				$('#nowStatus').text(open);
			}
		});
		/*  制热按钮 */
		$("#hotUp").mousedown(function(){
			updateStatus();
			hotButton();
			buttonFunction('up','hot');
			buttonFunction('press','wet');
			buttonFunction('press','wind');
			buttonFunction('press','cool');
			$('div').removeClass('modeon');
			$('#hot').addClass('modeon');
			return false;
		});
		$("#hotPress").mousedown(function(){
			updateStatus();
			hotButton();
			buttonFunction('up','hot');
			return false;
		});
		$("#hotPress").mouseup(function(){
			updateStatus();
			buttonFunction('up','hot');
		});
		/*  抽湿按钮 */
		$("#wetUp").mousedown(function(){
			updateStatus();
			wetButton();
			buttonFunction('up','wet');
			buttonFunction('press','hot');
			buttonFunction('press','wind');
			buttonFunction('press','cool');
			$('div').removeClass('modeon');
			$('#wet').addClass('modeon');
			return false;
		});
		$("#wetPress").mousedown(function(){
			updateStatus();
			wetButton();
			buttonFunction('up','wet');
			return false;
		});
		$("#wetPress").mouseup(function(){
			updateStatus();
			buttonFunction('up','wet');
		});
		/*  送风按钮 */
		$("#windUp").mousedown(function(){
			updateStatus();
			windButton();
			buttonFunction('up','wind');
			buttonFunction('press','hot');
			buttonFunction('press','wet');
			buttonFunction('press','cool');
			$('div').removeClass('modeon');
			$('#wind').addClass('modeon');
			return false;
		});
		$("#windPress").mousedown(function(){
			updateStatus();
			windButton();
			buttonFunction('up','wind');
			return false;
		});
		$("#windPress").mouseup(function(){
			updateStatus();
			buttonFunction('up','wind');
		});
		/*  制冷按钮 */
		$("#coolUp").mousedown(function(){
			updateStatus();
			coolButton();
			buttonFunction('up','cool');
			buttonFunction('press','hot');
			buttonFunction('press','wet');
			buttonFunction('press','wind');
			$('div').removeClass('modeon');
			$('#cool').addClass('modeon');
			return false;
		});
		$("#coolPress").mousedown(function(){
			updateStatus();
			coolButton();
			buttonFunction('up','cool');
			return false;
		});
		$("#coolPress").mouseup(function(){
			updateStatus();
			buttonFunction('up','cool');
		});
		/* 风速按钮 */
		$("#low").mousedown(function(){
			updateStatus();
			middleButton();
			$("#low").css("display","none");
			$("#height").css("display","none");
			$("#middle").css("display","block");
		});
		$("#middle").mousedown(function(){
			updateStatus();
			heightButton();
			$("#low").css("display","none");
			$("#middle").css("display","none");
			$("#height").css("display","block");
		});
		$("#height").mousedown(function(){
			updateStatus();
			lowButton();
			$("#middle").css("display","none");
			$("#height").css("display","none");
			$("#low").css("display","block");
		});
		/* 自动手动 */
		var autoControl=0;
		$("#autoControl").bind(touchEvents.touchstart,function(){
			updateStatus();
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
			updateStatus();
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
			updateStatus();
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
			updateStatus();
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
			updateStatus();
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
			updateStatus();
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
