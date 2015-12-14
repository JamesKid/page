/* =========================================================================
 * html5 安装引导*/
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
		$("img").bind(touchEvents.touchstart,function(){
			return false; /* 禁止长按 */
		});
});
