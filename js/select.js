/* =========================================================================
 * 选择设备 */
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
		$(".listCell").mousedown(function(){
			var deviceNoYes = $(this).attr('value');
			//$(".on").removeClass('on');
			//$(this).addClass('on');
			if(deviceNoYes == "noDevice"){
				$(".on").removeClass('on');
				$(this).addClass('on');
				$(".listCell").attr('value','noDevice');
				$(this).attr('value','yesDevice');
			}else if(deviceNoYes == "yesDevice"){
				$(".on").removeClass('on');
				$(this).attr('value','noDevice');
			}
		});
		$(".foot").mousedown(function(){
			var type = $(".on").attr('type');
			setTimeout(function(){
				onAction(type);
			},
			1000); //等待2秒自动跳转
		});
});
