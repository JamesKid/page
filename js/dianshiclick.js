/* 电视点击事件 */

/*********** 使用说明 : 在function内添加代码 ****************/

/* 当前状态组 */
	/* 播放暂停 */
	function playStop(){
		playStop = 'play'; // play播放,stop暂停
		return playStop;
	}
	/* 静音,有声 */
	/*
	function soundStatus(){
		sound = 'off'; // on有声,off静音
		return sound;
	}
	*/


/* 开关点击返回事件组*/

	/* 返回*/
	function backButton(){
		//alert('backbutton');
		//javascript:history.go(-1);
	    window.location.href="yindao.html";
	}

	/* 关闭 */
	function closeButton(){
		//alert('closeButton');
	}

	/* 打开 */
	function openButton(){
		//alert('openButton');
	}

/* 重新匹配码组 */
function refresh(){
}

/* 声音事件组*/
	/* 有声无声点击事件 */
	function soundClickButton(){
		//alert('openSoundButton');
	}
	
/* 中间遥控盘点击事件组*/	

	/* 向上 */
	    /* 按下 */
		function headDownButton(){
			//alert('headDownButton');
		}
		/* 提起 */
		function headUpButton(){
			//alert('headUpButton');
		}
	/* 向下 */
	    /* 按下 */
		function footDownButton(){
			//alert('footDownButton');
		}
		/* 提起 */
		function footUpButton(){
			//alert('footUpButton');
		}
	/* 向左 */
	    /* 按下 */
		function leftDownButton(){
			//alert('leftDownButton');
		}
		/* 提起 */
		function leftUpButton(){
			//alert('leftUpButton');
		}
	/* 向右 */
	    /* 按下 */
		function rightDownButton(){
			//alert('rightDownButton');
		}
	    /* 提起 */
		function rightUpButton(){
			//alert('rightUpButton');
		}
	/* 中间 */
	    /* 暂停 */
		function centerStopButton(){
			//alert('centerStopButton');
		}
	    /* 开始 */
		function centerStartButton(){
			//alert('centerStartButton');
		}
	
