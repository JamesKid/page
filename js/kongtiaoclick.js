/* 空调点击事件 */

/*********** 使用说明 : 在function内添加代码 ****************/

///* 当前状态组 */
//	/* 当前开启关闭 */
//	function nowOpenClose(){
//		openClose = 'open'; /* open为打开 close为关闭 */
//		open =  getResource().Open;  
//		close =  getResource().Close;  
//		if(openClose=='open'){
//			nowOpenClose = open; 
//		}else if(openClose=='close'){
//			nowOpenClose = close; 
//		}
//		return nowOpenClose;
//	}

/* 重新匹配码组 */
	function refresh(){
		 toAdd(1);
	}
	
	function toAdd(deviceType){
		 window.AppJsBridge.service.deviceService.doAction({
		      "sn":getCurrentDeviceSn(),
		      "deviceClass":"SmartAc",
		      "action":"addIR",
		      parameters:{
		          type :deviceType
		      } ,
		      "success" : sucCallback,
		      "error" : failCallback
	   });
	}
	
	var sucCallback = function(data) {
		var jsonObj = data;
		if (jsonObj == null || jsonObj.result== null || jsonObj.result.flag == null ||jsonObj.result.flag ==false)
	   {
			 $('.sucess').text(getResource().FAIL);
			 $('#fail').css('display','block');
			 $('#sucess').css('display','none');
			 $('#img').css('padding-left','15%');
			 $('#img').css('padding-right','15%');
			 $('#img').css('padding-bottom','7%');
			 $('#img').css('padding-top','7%');
			 $('#img').css('margin-left','28%');
			 $('#img').css('margin-right','28%');
			 setTimeout(function(){
				$('#mask').css('display','none');
				$('#img').css('display','none');
			 },
			 1500); //等待2秒自动跳转
//			
	   }else{
		   $('.sucess').text(getResource().SUCCEED);
			 $('#fail').css('display','none');
			 $('#sucess').css('display','block');
			 $('#img').css('padding-left','15%');
			 $('#img').css('padding-right','15%');
			 $('#img').css('padding-bottom','7%');
			 $('#img').css('padding-top','7%');
			 $('#img').css('margin-left','28%');
			 $('#img').css('margin-right','28%');
			 setTimeout(function(){
				$('#mask').css('display','none');
				$('#img').css('display','none');
			 },
			 1500); //等待2秒自动跳转
	   }
	}

	var failCallback = function(data) {
		 $('.sucess').text(getResource().MATCHING_IRCODE_TIMEOUT);
		 $('#fail').css('display','block');
		 $('#sucess').css('display','none');
		 $('#img').css('padding-left','15%');
		 $('#img').css('padding-right','15%');
		 $('#img').css('padding-bottom','7%');
		 $('#img').css('padding-top','7%');
		 $('#img').css('margin-left','28%');
		 $('#img').css('margin-right','28%');
		 setTimeout(function(){
			$('#mask').css('display','none');
			$('#img').css('display','none');
		 },
		 1500); //等待2秒自动跳转
	}
/* 国际化事件组*/
	/* 国际化风速 */
		/* 低 */
		function windLeveFontLow(){
			var low="低";
			return low;
		}
		/* 中 */
		function windLeveFontMiddle(){
			var middle="中";
			return middle;
		}
		/* 高 */
		function windLeveFontHeight(){
			var height="高";
			return height;
		}
		
	/* 国际化自动手动 */
		/* 手动 */
		function autoControlManual(){
			var manual="手动";
			return manual;
		}
		/* 自动 */
		function autoControlAuto(){
			var auto="自动";
			return auto;
		}

/* 开关点击返回事件组*/
	/* 返回*/
	function backButton(){
	    window.location.href="yindao.html";
	    //window.location.href = document.referrer;//返回上一页并刷新  
	}

	/* 打开关闭 */
	function openCloseButton(){
	}


/* 获取当前状态及开关组 */
	/* 获取空调温度 */
	function getTemp(){
		temp=$('#topTemp').text();
		return temp;
	}
	/* 获取当前模式 */
	function getMode(){
		mode = $('.modeon').attr('id');  // mode: hot 制热  cool制冷 wind送风 wet抽湿
		return mode;
	}
	/* 获取当前风速 */
	function getWind(){
		wind = $('.windon').attr('id'); // mode: low低风  middle中风 height高风
		return wind;
	}
	/* 获取当前手动自动 */
	function getControl(){
		control = $('.controlon').attr('id');  // auto自动 manual手动
		return control;
	}
	/* 获取当前开关状态 */
	function getOpenClose(){
		openClose = $('#nowStatus').text();  // auto自动 manual手动
		return openClose;
	}
/* 更新状态 */

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
//			doAction(temp);
		}
		/* 减小1度 传入参数 temp 为变更后的温度 */
		function minusButton(temp){
//			doAction(temp);
		}
		
		function doAction(keyIndex){
			 window.AppJsBridge.service.deviceService.doAction({
			      "sn":getCurrentDeviceSn(),
			      "deviceClass":"SmartAc",
			      "action":"turnOn",
			      parameters:{
			          keyIndex :keyIndex,
			          type:1
			      } ,
			      "success":controlDeviceCallback,
			      "error":function(data)
			      {
//			       alert("error data ." + data);
			      }
		     });
		}
	/* 判断设备是否在线 */
	function deviceOnOut(){
		if(deviceStatus=='off'){
			return false;
		}
		return true;
	}

	var controlDeviceCallback = function(data) {
		var jsonObj = data;
	}
	/**
	 * 每次点击按钮都要调用该方法，记录当前所以状态的值
	 * 
	 */
    function updateStatus(){
    	//空调开关机值
    	var status=1;
    	if(getResource().Close==getOpenClose()){
    		status=0;
    	}
//    	mode: hot 制热  cool制冷 wind送风 wet抽湿
    	var mode;
    	if("hot"==getMode()){
    		mode=getResource().AC_MODE_HEAT;
    	}
    	if("cool"==getMode()){
    		mode=getResource().AC_MODE_COOL;
    	}
    	if("wind"==getMode()){
    		mode=getResource().AC_MODE_WIND;
    	}
    	if("wet"==getMode()){
    		mode=getResource().AC_MODE_DRY;
    	}
    	//空调温度
    	var temp=getTemp();
    	//风速
    	// wind: low低风  middle中风 height高风
    	/**
    	 * getResource().AC_SPEEDS_AUTO
    			,getResource().AC_SPEEDS_HIGH
    			,getResource().AC_SPEEDS_MIDDLE
    			,getResource().AC_SPEEDS_LOW)
    	 */
    	
    	var wind;
    	if("low"==getWind()){
    		wind=getResource().AC_SPEEDS_LOW;
    	}
    	if("middle"==getWind()){
    		wind=getResource().AC_SPEEDS_MIDDLE;
    	}
    	if("height"==getWind()){
    		wind=getResource().AC_SPEEDS_HIGH;
    	}
    	
    	// auto自动 manual手动
    	var controlType;
    	if("auto"==getControl()){
    		controlType=getResource().AC_DIRECTION_AUTO;
    	}
    	if("manual"==getControl()){
    		controlType=getResource().AC_DIRECTION_MANUAL;
    	}
    	
    	
    	var keyIndex=getKeyIndex(status,temp,mode,wind,controlType);
    	doAction(keyIndex);
    }
    
    function getKeyIndexInt(tem,mode,speed,directions){
		mode = mode * 120;
		directions = directions * 60;
		speed =speed * 15;
		var acCode = tem - 13 + mode + directions + speed;
		return acCode;
	}
    
    function getKeyIndex(status,temp,mode,wind,controlType){
    	if(status==0){
    		return 1;
    	}else{
    		var modeInt=getModeInt(mode);
    		var windInt=getWindInt(wind);
    		var controlTypeInt=getControlTypeInt(controlType);
    		return getKeyIndexInt(temp,modeInt,windInt,controlTypeInt);
    	}
    }
    
    function getModeInt(mode){
    	var modes=new Array(getResource().AC_MODE_COOL
    			,getResource().AC_MODE_AUTO
    			,getResource().AC_MODE_HEAT
    			,getResource().AC_MODE_DRY
    			,getResource().AC_MODE_WIND);
    	for(var i=0;i<modes.length;i++){
    		if(modes[i]==mode){
    			return i;
    		}
    	}
    }
    
    function getWindInt(wind){
    	var winds=new Array(getResource().AC_SPEEDS_AUTO
    			,getResource().AC_SPEEDS_HIGH
    			,getResource().AC_SPEEDS_MIDDLE
    			,getResource().AC_SPEEDS_LOW);
    	for(var i=0;i<winds.length;i++){
    		if(winds[i]==wind){
    			return i;
    		}
    	}
    }
    
    function getControlTypeInt(controlType){
    	var array=new Array(getResource().AC_DIRECTION_AUTO
    			,getResource().AC_DIRECTION_MANUAL);
    	for(var i=0;i<array.length;i++){
    		if(array[i]==controlType){
    			return i;
    		}
    	}
    }


