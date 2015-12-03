/* =========================================================================
 * html5 机顶盒遥控*/
/* add by Jameskid 2015.11.28  email:406358964@qq.com */
/* 注意事项:　 
 *			   1. 按钮事件请在行后封装好的方法下添加 
 *			   2. 本代码基于html5,请使用支持html5内核的浏览器
 *			   3. 禁止修改本代码，否则由此引发的代码错误，不提供维护,
 *				  如必须修改，请联系本代码开发员
 *				  
 * 禁止修改本文件，点击事件请在 '*click.js' 文件添加
 * 
 * 禁止修改本文件，点击事件请在 '*click.js' 文件添加
 *
 * 禁止修改本文件，点击事件请在 '*click.js' 文件添加
 *
 * =========================================================================
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
		$("#menu").bind(touchEvents.touchstart,function(){
			//alert('菜单事件'); /* 菜单事件请在此处添加代码 */
			$("#menu").css("display","none");
			$("#menuPress").css("display","block");
			return false;
		});
		$("#menuPress").bind(touchEvents.touchstart,function(){
			//alert('菜单事件'); /* 菜单事件请在此处添加代码 */
			$("#menu").css("display","block");
			$("#menuPress").css("display","none");
			return false;
		});
		$("#menu").mousedown(function(){
			$("#menu").css("display","none");
			$("#menuPress").css("display","block");
		});
		$("#menuPress").mousedown(function(){
			$("#menu").css("display","block");
			$("#menuPress").css("display","none");
		});

		/* 右方按钮　*/
		$(".imgRight").bind(touchEvents.touchstart,function(){
			$("#up_04").css("display","none");
			$("#up_04_press").css("display","block");
			$("#up_01").css("display","none");
			$("#up_right").css("display","block");
			$("#up_05").css("display","none");
			$("#down_right").css("display","block");
			/* 点击事件在下面添加 */
			return false; /* 禁止长按 */
		});
		$(".imgRight").bind(touchEvents.touchend,function(){
			$("#up_04").css("display","block");
			$("#up_04_press").css("display","none");
			$("#up_01").css("display","block");
			$("#up_right").css("display","none");
			$("#up_05").css("display","block");
			$("#down_right").css("display","none");
			return false; /* 禁止长按 */
		});
		$(".imgRight").mousedown(function(){
			$("#up_04").css("display","none");
			$("#up_04_press").css("display","block");
			$("#up_01").css("display","none");
			$("#up_right").css("display","block");
			$("#up_05").css("display","none");
			$("#down_right").css("display","block");
		});
		$(".imgRight").mouseup(function(){
			$("#up_04").css("display","block");
			$("#up_04_press").css("display","none");
			$("#up_01").css("display","block");
			$("#up_right").css("display","none");
			$("#up_05").css("display","block");
			$("#down_right").css("display","none");
		});
		/* 下方按钮　*/
		$(".imgFoot").bind(touchEvents.touchstart,function(){
			$("#up_05").css("display","none");
			$("#up_05_press").css("display","block");
			/* 点击事件在下面添加 */
			return false; /* 禁止长按 */
		});
		$(".imgFoot").bind(touchEvents.touchend,function(){
			$("#up_05").css("display","block");
			$("#up_05_press").css("display","none");
			return false; /* 禁止长按 */
		});
		$(".imgFoot").mousedown(function(){
			$("#up_05").css("display","none");
			$("#up_05_press").css("display","block");
		});
		$(".imgFoot").mouseup(function(){
			$("#up_05").css("display","block");
			$("#up_05_press").css("display","none");
		});
		/* 左方按钮　*/
		$(".imgLeft").bind(touchEvents.touchstart,function(){
			clickName = SingletonTester.getName(); 
			if(clickName == 'noClick'){
				SingletonTester.setName('left'); 
				SingletonTester.setClickButton(SingletonTester.name,'left',0,'up'); 
			}else {
				return false;
			}
			return false; /* 禁止长按 */
		});
		$(".imgLeft").bind(touchEvents.touchend,function(){
			clickName = SingletonTester.getName(); 
			if(clickName == 'left'){
				SingletonTester.setName('left'); 
				SingletonTester.setClickButton(SingletonTester.name,'left',0,'down'); 
			}else {
				return false;
			}
			return false;  /* 禁止长按 */
		});
		$(".imgLeft").mousedown(function(){
			SingletonTester.setName('left'); 
			SingletonTester.setClickButton(SingletonTester.name,'left',0,'up'); 
		});
		$(".imgLeft").mouseup(function(){
			SingletonTester.setName('left'); 
			SingletonTester.setClickButton(SingletonTester.name,'left',0,'down'); 
		});
		/* 上方按钮　*/
		$(".imgHead").bind(touchEvents.touchstart,function(){
			clickName = SingletonTester.getName(); 
			if(clickName == 'noClick'){
				SingletonTester.setName('head'); 
				SingletonTester.setClickButton(SingletonTester.name,'head',0,'up'); 
			}else {
				return false;
			}
			return false; /* 禁止长按 */
		});
		$(".imgHead").bind(touchEvents.touchend,function(){
			clickName = SingletonTester.getName(); 
			if(clickName == 'head'){
				SingletonTester.setName('head'); 
				SingletonTester.setClickButton(SingletonTester.name,'head',0,'down'); 
			}else {
				return false;
			}
			return false; /* 禁止长按 */
		});
		$(".imgHead").mousedown(function(){
			SingletonTester.setName('head'); 
			SingletonTester.setClickButton(SingletonTester.name,'head',0,'up'); 
		});
		$(".imgHead").mouseup(function(){
			SingletonTester.setName('head'); 
			SingletonTester.setClickButton(SingletonTester.name,'head',0,'down'); 
		});
		/*  中间按钮　*/
		$(".imgCenter").bind(touchEvents.touchstart,function(){
			return false; /* 禁止长按 */
		});
		$(".imgCenter").bind(touchEvents.touchend,function(){
			$("#up_03").css("display","block");
			$("#up_03_press").css("display","none");
			return false; /* 禁止长按 */
		});
		$(".imgCenter").mousedown(function(){
			$("#up_03").css("display","none");
			$("#up_03_press").css("display","block");
		});
		$(".imgCenter").mouseup(function(){
			$("#up_03").css("display","block");
			$("#up_03_press").css("display","none");
		});
});
var SingletonTester = (function () { 
	//参数：传递给单例的一个参数集合 
	function Singleton(args) { 
		this.name = 'noClick'; 
	} 
	//实例容器 
	var instance; 
	var _static = { 
		name: 'noClick', 
		//返回Singleton的实例 
		getInstance: function (args) { 
			if (instance === undefined) { 
				instance = new Singleton(args); 
			} 
			return instance; 
		} ,
		setName: function (args) { 
			this.name = args;
		} ,
		getName: function (args) { 
			return this.name;
		} ,
		setClickButton: function (name,buttonName,number,upDown) { 
			if(buttonName =='left' && this.name=='left'){
				if(upDown == 'up' && this.name=='left'){
					$("#up_02").css("display","none");
					$("#up_02_press").css("display","block");
					$("#up_01").css("display","none");
					$("#up_left").css("display","block");
					$("#up_05").css("display","none");
					$("#down_left").css("display","block");
				}else if(upDown == 'down' && this.name=="left"){
					$("#up_02").css("display","block");
					$("#up_02_press").css("display","none");
					$("#up_01").css("display","block");
					$("#up_left").css("display","none");
					$("#up_05").css("display","block");
					$("#down_left").css("display","none");
					this.name = 'noClick';
				}
			}else if(buttonName =="head" && this.name=='head'){
				if(upDown == 'up' && this.name=="head"){
					$("#up_01").css("display","none");
					$("#up_01_press").css("display","block");
				}else if(upDown == 'down' && this.name=="head"){
					$("#up_01").css("display","block");
					$("#up_01_press").css("display","none");
					this.name = 'noClick';
				}
			}else if(buttonName =="center" && this.name=='center'){
				if(upDown == 'up' && this.name=="center"){
					$("#up_03").css("display","none");
					$("#up_03_press").css("display","block");
				}else if(upDown == 'down' && this.name=="center"){
					$("#up_03").css("display","none");
					$("#up_03_press").css("display","block");
					this.name = 'noClick';
				}
			}
		} ,
	}; 
	return _static; 
})(); 
