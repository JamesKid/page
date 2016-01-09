/* 引导页点击事件 */

/*********** 使用说明 : 在function内添加代码 ****************/


/* 当前状态组 */
	/* 空调当前温度 */
	function nowTemp(){
		temp = 27;  // 此处可以查询自定义页面温度
		return temp;
	}
	/* 空调当前开关 */
	function kongTiaoOnOff(){
		onOff = 'on';  // 此处可以自定义开关,on为打开,off为关闭
		return onOff;
	}
	/* 电视当前开关 */
	function dianShiOnOff(){
		onOff = 'on';  // 此处可以自定义开关,on为打开,off为关闭
		return onOff;
	}
	/* 机顶盒当前开关 */
	function jiDingHeOnOff(){
		onOff = 'off';  // 此处可以自定义开关,on为打开,off为关闭
		return onOff;
	}

/* 点击事件组*/
	/* 空调开关 */
		/*　打开 */
		function kongTiaoOnButton(){
			//alert('kon');
		}
		/*　关闭 */
		function kongTiaoOffButton(){
			//alert('koff');
		}

	/* 电视开关 */
		/*　点击开关 */
		function dianShiClick(){
		}
	/* 机顶盒开关 */
		/*　点击开关 */
		function jiDingHeClick(){
		}
/* 按钮加载组 */
		function checkButton(){
		  /* 此处添加按钮是否存在定义查询 */
		  var kongtiao = 1 /* 1 为存在，0为不存在 */
		  var dianshi = 1 /* 1 为存在，0为不存在 */
		  var jidinghe = 1 /* 1 为存在，0为不存在 */
		  if(kongtiao==0){
			  $('#jidinghe').css('display','none');
		  }
		  if(dianshi==0){
			  $('#dianshi').css('display','none');
		  }
		  if(jidinghe==0){
			  $('#jidinghe').css('display','none');
		  }
		}



