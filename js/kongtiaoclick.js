/* 空调点击事件 */

/*********** 使用说明 : 在function内添加代码 ****************/

/* 当前状态组 */
	/* 空调当前温度 */
	function nowTemp(){
		temp = 22;  // 此处可以查询自定义页面温度
		return temp;
	}
	/* 当前模式 制热hot  制冷cool 送风wind 抽湿wet */
	function nowMode(){
		mode = "cool";  // hot 制热  cool制冷 wind送风 wet抽湿
		return mode;
	}
	/* 当前风速 */
	function nowWind(){
		mode = "middle";  // low低风  middle中风 height高风
		return mode;
	}
	/* 当前手动自动 */
	function nowControl(){
		mode = "manual";  // auto自动 manual手动
		return mode;
	}


/* 开关点击返回事件组*/
	/* 返回*/
	function backButton(){
		//alert('backbutton');
		//javascript:history.go(-1);
	    window.location.href="yindao.html";
	    //window.location.href = document.referrer;//返回上一页并刷新  
	}

	/* 关闭 */
	function closeButton(){
		//alert('closeButton');
	}

	/* 打开 */
	function openButton(){
		//alert('openButton');
	}

/* 制冷制热送风抽湿点击事件组*/	

	/* 制热 */
	function hotButton(){
		//alert('hotButton');
	}
	/* 制冷 */
	function coolButton(){
		//alert('coolButton');
	}
	/* 送风 */
	function windButton(){
		//alert('windButton');
	}
	/* 抽湿 */
	function wetButton(){
		//alert('wetButton');
	}
	
/* 风速自动手动点击事件组*/	
	/* 风速 */
		/* 高风 */
		function heightButton(){
			//alert('heightButton');
		}
		/* 中风 */
		function middleButton(){
			//alert('middleButton');
		}
		/* 低风 */
		function lowButton(){
			//alert('lowButton');
		}
		/* 自动 */
		function autoButton(){
			//alert('autoButton');
		}
		/* 手动 */
		function manualButton(){
			//alert('manualButton');
		}
/* 温度增减击事件组*/	
		/* 增加1度 传入参数 temp 为变更后的温度 */
		function plusButton(temp){
			//alert('plusButton'+temp);
		}
		/* 减小1度 传入参数 temp 为变更后的温度 */
		function minusButton(temp){
			//alert('minusButton'+temp);
		}
/*　updateStatus */
	function updateStatus(){
	}




