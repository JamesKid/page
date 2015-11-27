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
	$(".imgHead").bind(touchEvents.touchstart,function(){
		$("#up_01").css("display","none");
		$("#up_01_down").css("display","block");
	});
	$(".imgHead").mousedown(function(){
		$("#up_01").css("display","none");
		$("#up_01_down").css("display","block");
	});
	$(".imgHead").mouseup(function(){
		$("#up_01").css("display","block");
		$("#up_01_down").css("display","none");
	});
});
