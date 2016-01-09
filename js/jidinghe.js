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
			backButton();
			return false; /* 禁止长按 */
		});
		$("#back").mousedown(function(){
			backButton();
			return false; /* 禁止长按 */
		});
		$("#down").mousedown(function(){
			var nowStatus = $("#nowStatus").text();
			var open = getResource().Open;
			var close = getResource().Close;
			$("#downUp").css("display","none");
			$("#downClick").css("display","block");
			if(nowStatus == open){
				closeButton();
				$('#nowStatus').text(close);
			}else if(nowStatus==close){
				openButton();
				$('#nowStatus').text(open);
			}
		});
		$("#down").mouseup(function(){
			$("#downUp").css("display","block");
			$("#downClick").css("display","none");
		});
		/* 声音按钮 */
		$(".menuMinus").mousedown(function(){
			$("#soundMinus").css("display","none");
			$("#soundMinusClick").css("display","block");
			soundMinus();
		});
		$(".menuMinus").mouseup(function(){
			$("#soundMinus").css("display","block");
			$("#soundMinusClick").css("display","none");
		});
		$(".menuPlus").mousedown(function(){
			$("#soundPlus").css("display","none");
			$("#soundPlusClick").css("display","block");
			soundMinus();
		});
		$(".menuPlus").mouseup(function(){
			$("#soundPlus").css("display","block");
			$("#soundPlusClick").css("display","none");
		});
		/* 更新码库 */
		$("#refresh").mousedown(function(){
			/* 弹出提示 */
			var oMask = document.getElementById('mask');
			var oImg = document.getElementById('img');
			oMask.style.display = 'block';
			oImg.style.display = 'block';
			//$('#img').css('display','block');
			//$('#mask').css('display','block');
			oMask.style.width = document.documentElement.clientWidth + 'px';
			oMask.style.height = document.documentElement.clientHeight + 'px';
			oImg.style.left = (document.documentElement.clientWidth - oImg.offsetWidth)/2 + 'px';
			oImg.style.top = (document.documentElement.clientHeight - oImg.offsetHeight)/2 + 'px';
			setTimeout(function(){
				oMask.style.display = 'none';
				oImg.style.display = 'none';
			},
			700); //等待2取消
			refresh();
			return false; /* 禁止长按 */
		});
		$("#down").mousedown(function(){
			var nowStatus = $("#nowStatus").text();
			var open = getResource().Open;
			var close = getResource().Close;
			if(nowStatus == open){
				closeButton();
				$('#nowStatus').text(close);
			}else if(nowStatus==close){
				openButton();
				$('#nowStatus').text(open);
			}
		});
		$("#menu").bind(touchEvents.touchstart,function(){
			openMenuButton();
			$("#menu").css("display","none");
			$("#menuPress").css("display","block");
			return false;
		});
		$("#menuPress").bind(touchEvents.touchstart,function(){
			closeMenuButton();
			$("#menu").css("display","block");
			$("#menuPress").css("display","none");
			return false;
		});
		$("#menu").mousedown(function(){
			openMenuButton();
			$("#menu").css("display","none");
			$("#menuPress").css("display","block");
		});
		$("#menuPress").mousedown(function(){
			closeMenuButton();
			$("#menu").css("display","block");
			$("#menuPress").css("display","none");
		});

		/* 左方按钮　*/
		$(".imgLeft").bind(touchEvents.touchstart,function(){
			clickName = SingletonTester.getName(); 
			if(clickName == 'noClick'){
				leftDownButton();
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
				leftUpButton();
				SingletonTester.setName('left'); 
				SingletonTester.setClickButton(SingletonTester.name,'left',0,'down'); 
			}else {
				return false;
			}
			return false;  /* 禁止长按 */
		});
		$(".imgLeft").mousedown(function(){
			leftDownButton();
			SingletonTester.setName('left'); 
			SingletonTester.setClickButton(SingletonTester.name,'left',0,'up'); 
		});
		$(".imgLeft").mouseup(function(){
			leftUpButton();
			SingletonTester.setName('left'); 
			SingletonTester.setClickButton(SingletonTester.name,'left',0,'down'); 
		});
		/* 上方按钮　*/
		$(".imgHead").bind(touchEvents.touchstart,function(){
			clickName = SingletonTester.getName(); 
			if(clickName == 'noClick'){
				headDownButton();
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
				headUpButton();
				SingletonTester.setName('head'); 
				SingletonTester.setClickButton(SingletonTester.name,'head',0,'down'); 
			}else {
				return false;
			}
			return false; /* 禁止长按 */
		});
		$(".imgHead").mousedown(function(){
			headDownButton();
			SingletonTester.setName('head'); 
			SingletonTester.setClickButton(SingletonTester.name,'head',0,'up'); 
		});
		$(".imgHead").mouseup(function(){
			headUpButton();
			SingletonTester.setName('head'); 
			SingletonTester.setClickButton(SingletonTester.name,'head',0,'down'); 
		});
		/*  中间按钮　*/
		$(".imgCenter").bind(touchEvents.touchstart,function(){
			clickName = SingletonTester.getName(); 
			if(clickName == 'noClick'){
				centerDownButton();
				SingletonTester.setName('center'); 
				SingletonTester.setClickButton(SingletonTester.name,'center',0,'up'); 
			}else {
				return false;
			}
			return false; /* 禁止长按 */
		});
		$(".imgCenter").bind(touchEvents.touchend,function(){
			clickName = SingletonTester.getName(); 
			if(clickName == 'center'){
				centerUpButton();
				SingletonTester.setName('center'); 
				SingletonTester.setClickButton(SingletonTester.name,'center',0,'down'); 
			}else {
				return false;
			}
			return false; /* 禁止长按 */
		});
		$(".imgCenter").mousedown(function(){
			centerDownButton();
			SingletonTester.setName('center'); 
			SingletonTester.setClickButton(SingletonTester.name,'center',0,'up'); 
		});
		$(".imgCenter").mouseup(function(){
			centerUpButton();
			SingletonTester.setName('center'); 
			SingletonTester.setClickButton(SingletonTester.name,'center',0,'down'); 
		});
		/* 右方按钮　*/
		$(".imgRight").bind(touchEvents.touchstart,function(){
			clickName = SingletonTester.getName(); 
			if(clickName == 'noClick'){
				rightDownButton();
				SingletonTester.setName('right'); 
				SingletonTester.setClickButton(SingletonTester.name,'right',0,'up'); 
			}else {
				return false;
			}
			return false; /* 禁止长按 */
		});
		$(".imgRight").bind(touchEvents.touchend,function(){
			clickName = SingletonTester.getName(); 
			if(clickName == 'right'){
				rightUpButton();
				SingletonTester.setName('right'); 
				SingletonTester.setClickButton(SingletonTester.name,'right',0,'down'); 
			}else {
				return false;
			}
			return false; /* 禁止长按 */
		});
		$(".imgRight").mousedown(function(){
			rightDownButton();
			SingletonTester.setName('right'); 
			SingletonTester.setClickButton(SingletonTester.name,'right',0,'up'); 
		});
		$(".imgRight").mouseup(function(){
			rightUpButton();
			SingletonTester.setName('right'); 
			SingletonTester.setClickButton(SingletonTester.name,'right',0,'down'); 
		});
		/* 下方按钮　*/
		$(".imgFoot").bind(touchEvents.touchstart,function(){
			clickName = SingletonTester.getName(); 
			if(clickName == 'noClick'){
				footDownButton();
				SingletonTester.setName('foot'); 
				SingletonTester.setClickButton(SingletonTester.name,'foot',0,'up'); 
			}else {
				return false;
			}
			return false; /* 禁止长按 */
		});
		$(".imgFoot").bind(touchEvents.touchend,function(){
			clickName = SingletonTester.getName(); 
			if(clickName == 'foot'){
				footUpButton();
				SingletonTester.setName('foot'); 
				SingletonTester.setClickButton(SingletonTester.name,'foot',0,'down'); 
			}else {
				return false;
			}
			return false; /* 禁止长按 */
		});
		$(".imgFoot").mousedown(function(){
			footDownButton();
			SingletonTester.setName('foot'); 
			SingletonTester.setClickButton(SingletonTester.name,'foot',0,'up'); 
		});
		$(".imgFoot").mouseup(function(){
			footUpButton();
			SingletonTester.setName('foot'); 
			SingletonTester.setClickButton(SingletonTester.name,'foot',0,'down'); 
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
					$("#up_03").css("display","block");
					$("#up_03_press").css("display","none");
					this.name = 'noClick';
				}
			}else if(buttonName =="right" && this.name=='right'){
				if(upDown == 'up' && this.name=="right"){
					$("#up_04").css("display","none");
					$("#up_04_press").css("display","block");
					$("#up_01").css("display","none");
					$("#up_right").css("display","block");
					$("#up_05").css("display","none");
					$("#down_right").css("display","block");
				}else if(upDown == 'down' && this.name=="right"){
					$("#up_04").css("display","block");
					$("#up_04_press").css("display","none");
					$("#up_01").css("display","block");
					$("#up_right").css("display","none");
					$("#up_05").css("display","block");
					$("#down_right").css("display","none");
					this.name = 'noClick';
				}
			}else if(buttonName =="foot" && this.name=='foot'){
				if(upDown == 'up' && this.name=="foot"){
					$("#up_05").css("display","none");
					$("#up_05_press").css("display","block");
				}else if(upDown == 'down' && this.name=="foot"){
					$("#up_05").css("display","block");
					$("#up_05_press").css("display","none");
					this.name = 'noClick';
				}
			}
		} ,
	}; 
	return _static; 
})(); 
