/* html5　空调遥控*/
/* add by Jameskid 2015.11.29  email:406358964@qq.com */
/* 使用说明:　
 *			   1. 按钮事件请在'点击事件在下面添加'关键字下添加 
 *			   2. 本代码基于html5,请使用支持html5内核的浏览器
 */
function init(onoff,temp,mode,wind,controllerType){
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
		/* 当前开启关闭 */
		var openClose = onoff;
		$('#nowStatus').text(openClose);
		/* 当前温度 */
		var tempNumber = temp;
		$('#topTemp').text(tempNumber);
		$('#temp'+tempNumber).css('display','block');
		/* 当前模式 */
		var nowModeTips = mode;
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
		var nowWindTips = wind;
		if(nowWindTips=='low'){
			$("#middle").css("display","none");
			$("#height").css("display","none");
			$("#low").css("display","block");
			$('img').removeClass('windon');
			$('#low').addClass('windon');
		}else if(nowWindTips=='middle'){
			$("#middle").css("display","block");
			$("#height").css("display","none");
			$("#low").css("display","none");
			$('img').removeClass('windon');
			$('#middle').addClass('windon');
		}else if(nowWindTips=='height'){
			$("#middle").css("display","none");
			$("#height").css("display","block");
			$("#low").css("display","none");
			$('img').removeClass('windon');
			$('#height').addClass('windon');
		}
		/* 当前手动或自动 */
		var nowControlTips = controllerType;
		if(nowControlTips=='auto'){
			$("#auto").css("display","block");
			$("#manual").css("display","none");
			$('img').removeClass('controlon');
			$('#auto').addClass('controlon');
		}else if(nowControlTips=='manual'){
			$("#auto").css("display","none");
			$("#manual").css("display","block");
			$('img').removeClass('controlon');
			$('#manual').addClass('controlon');
		}
		/* 当前自动手动 */
		/* 头部按钮 */
		$("#back").bind(touchEvents.touchstart,function(){
			deviceOnOut();
			backButton();
			updateStatus();
			return false; /* 禁止长按 */
		});
		$("#back").mousedown(function(){
			deviceOnOut();
			backButton();
			updateStatus();
		});
		/* 开启关闭 */
		$("#down").bind(touchEvents.touchstart,function(){
			deviceOnOut();
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
			updateStatus();
			return false; /* 禁止长按 */
		});
		$("#down").mousedown(function(){
			deviceOnOut();
			var nowStatus = $("#nowStatus").text();
			var open =  getResource().Open;
			var close =  getResource().Close;
			// var open="开启";
			// var close="关闭";
			if(nowStatus == open){
				closeButton();
				$('#nowStatus').text(close);
				updateStatus();
			}else if(nowStatus== close){
				openButton();
				$('#nowStatus').text(open);
				updateStatus();
			}
		});
		/*  制热按钮 */
		$("#hotUp").mousedown(function(){
			deviceOnOut();
			hotButton();
			buttonFunction('up','hot');
			buttonFunction('press','wet');
			buttonFunction('press','wind');
			buttonFunction('press','cool');
			$('div').removeClass('modeon');
			$('#hot').addClass('modeon');
			updateStatus();
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
			deviceOnOut();
			wetButton();
			buttonFunction('up','wet');
			buttonFunction('press','hot');
			buttonFunction('press','wind');
			buttonFunction('press','cool');
			$('div').removeClass('modeon');
			$('#wet').addClass('modeon');
			updateStatus();
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
			deviceOnOut();
			windButton();
			buttonFunction('up','wind');
			buttonFunction('press','hot');
			buttonFunction('press','wet');
			buttonFunction('press','cool');
			$('div').removeClass('modeon');
			$('#wind').addClass('modeon');
			updateStatus();
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
			deviceOnOut();
			coolButton();
			buttonFunction('up','cool');
			buttonFunction('press','hot');
			buttonFunction('press','wet');
			buttonFunction('press','wind');
			$('div').removeClass('modeon');
			$('#cool').addClass('modeon');
			updateStatus();
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
		$("#low").mousedown(function(){
			deviceOnOut();
			middleButton();
			$("#low").css("display","none");
			$("#height").css("display","none");
			$("#middle").css("display","block");
			$('img').removeClass('windon');
			$('#middle').addClass('windon');
			updateStatus();
		});
		$("#middle").mousedown(function(){
			deviceOnOut();
			heightButton();
			$("#low").css("display","none");
			$("#middle").css("display","none");
			$("#height").css("display","block");
			$('img').removeClass('windon');
			$('#height').addClass('windon');
			updateStatus();
		});
		$("#height").mousedown(function(){
			deviceOnOut();
			lowButton();
			$("#middle").css("display","none");
			$("#height").css("display","none");
			$("#low").css("display","block");
			$('img').removeClass('windon');
			$('#low').addClass('windon');
			updateStatus();
		});
		/* 自动手动 */
		var autoControl=0;
		$("#autoControl").bind(touchEvents.touchstart,function(){
			deviceOnOut();
			if(autoControl%2==0){
				/* 自动变手动 */
				manualButton();
				$("#auto").css("display","none");
				$("#manual").css("display","block");
				$('img').removeClass('controlon');
				$('#manual').addClass('controlon');
			}else if(autoControl%2==1){
				/* 手动变自动 */
				autoButton();
				$("#auto").css("display","block");
				$("#manual").css("display","none");
				$('img').removeClass('controlon');
				$('#auto').addClass('controlon');
			}
			autoControl++;
			updateStatus();
			return false;
		});
		$("#autoControl").mousedown(function(){
			deviceOnOut();
			if(autoControl%2==0){
				/* 自动变手动 */
				manualButton();
				$("#auto").css("display","none");
				$("#manual").css("display","block");
				$('img').removeClass('controlon');
				$('#manual').addClass('controlon');
			}else if(autoControl%2==1){
				/* 手动变自动 */
				autoButton();
				$("#auto").css("display","block");
				$("#manual").css("display","none");
				$('img').removeClass('controlon');
				$('#auto').addClass('controlon');
			}
			autoControl++;
			updateStatus();
		});
		/* 温度加减 */
		/* 增大温度 */
		$(".plus").bind(touchEvents.touchstart,function(){
			deviceOnOut();
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
			updateStatus();
			return false;
		});
		$(".plus").mousedown(function(){
			deviceOnOut();
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
			updateStatus();
		});
		/* 减小温度 */
		$(".minus").bind(touchEvents.touchstart,function(){
			deviceOnOut();
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
			updateStatus();
			return false;
		});
		$(".minus").mousedown(function(){
			deviceOnOut();
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
			updateStatus();
		});
		$(".line").bind(touchEvents.touchstart,function(){
			return false; /* 禁止图片长按 */
		});
}
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
