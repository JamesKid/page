/* 空调点击事件 */

/*********** 使用说明 : 在function内添加代码 ****************/

/* 当前状态组 */
	/* 当前开启关闭 */
	function nowOpenClose(){
		openClose = 'open'; /* open为打开 close为关闭 */
		open =  getResource().Open;  
		close =  getResource().Close;  
		if(openClose=='open'){
			nowOpenClose = open; 
		}else if(openClose=='close'){
			nowOpenClose = close; 
		}
		return nowOpenClose;
	}
	/* 空调当前温度 */
	function nowTemp(){
		temp = 22;  // 此处可以查询自定义页面温度
		return temp;
	}
	/* 当前模式 */
	function nowMode(){
		mode = "cool";  // hot 制热  cool制冷 wind送风 wet抽湿
		return mode;
	}
	/* 当前风速 */
	function nowWind(){
		wind = "middle";  // low低风  middle中风 height高风
		return wind;
	}
	/* 当前手动自动 */
	function nowControl(){
		control = "manual";  // auto自动 manual手动
		return control;
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
		
		function doAction(temp){
//			alert(temp);
			 window.AppJsBridge.service.deviceService.doAction({
			      "sn":getCurrentDeviceSn(),
			      "deviceClass":"SmartAc",
			      "action":"turnOn",
			      parameters:{
			          keyIndex :temp
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
			deviceOnOut = 'out'; /*  on 设备在线  out 设备离线 */
			if(deviceOnOut=='out'){
				alert('设备离线');
				return false;
			}
		}

/*
	var controlDeviceCallback = function(data) {
		var jsonObj = data;
	}
	//每次点击按钮都要调用该方法，记录当前所以状态的值
    function updateStatus(){
    	//空调开关机值
    	var status=getOpenClose();
    	//空调温度
    	var temp=getTemp();
    	//模式
    	var mode=getMode();
    	//风速
    	var wind=getWind();
    	//手动，自动
    	var controlType=getControl();
    	var keyIndex=getKeyIndex(status,temp,mode,wind,controlType);
//    	alert(keyIndex);
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
    		var modeInt=getMode(mode);
    		var windInt=getWind(wind);
    		var controlTypeInt=getControlType(controlType);
    		return getKeyIndexInt(temp,modeInt,windInt,controlTypeInt);
    	}
    }
    
    function getMode(mode){
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
    
    function getWind(wind){
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
    
    function getControlType(controlType){
    	var array=new Array(getResource().AC_DIRECTION_AUTO
    			,getResource().AC_DIRECTION_MANUAL);
    	for(var i=0;i<array.length;i++){
    		if(array[i]==controlType){
    			return i;
    		}
    	}
    }
*/


