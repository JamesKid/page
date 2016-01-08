//下一步按钮事件
function onAction(type){

	// 1、判断是否已经选择 ，提示选择类型

	//	2、获取选择的类型

	//	3、调用 toAdd() 弹出提示框 ：蓝灯亮起后，请对准分机按遥控器的开关键
	if(checkSelect(type)){
		//弹出提示框匹配成功，跳转到主页
		 $('.sucess').text('提示:蓝灯常亮后，请对分机按遥控器的开关键');
		 $('#img').css('margin','10%');
		 $('#img').css('padding-left','8%');
		 $('#img').css('padding-right','8%');
		 $('#img').css('padding-bottom','3%');
		 $('#img').css('padding-top','3%');
		 $('#img').css('left','0px');
		 $('#sucess').css('display','none');
		 $('.sucess').css('padding-bottom','7%');
		 $('#fail').css('display','none');
		 // 判断是否提交成功
		if(toAdd(type)){
			 setTimeout(function(){
				 $('.sucess').text('成功');
				 $('#fail').css('display','none');
				 $('#sucess').css('display','block');
				 $('#img').css('padding-left','15%');
				 $('#img').css('padding-right','15%');
				 $('#img').css('padding-bottom','7%');
				 $('#img').css('padding-top','7%');
				 $('#img').css('margin-left','28%');
				 $('#img').css('margin-right','28%');
			 },
			 2000); //等待2秒自动跳转
			 setTimeout(function(){
				window.location.href="yindao.html";
			 },
			 3000); //等待2秒自动跳转
		}else{
			 setTimeout(function(){
				 $('.sucess').text('失败');
				 $('#fail').css('display','block');
				 $('#sucess').css('display','none');
				 $('#img').css('padding-left','15%');
				 $('#img').css('padding-right','15%');
				 $('#img').css('padding-bottom','7%');
				 $('#img').css('padding-top','7%');
				 $('#img').css('margin-left','28%');
				 $('#img').css('margin-right','28%');
			 },
			 1500); //等待2秒自动跳转
			 setTimeout(function(){
				$('#mask').css('display','none');
				$('#img').css('display','none');
			 },
			 2500); //等待2秒自动跳转
		}
	}else{
	    $('.sucess').text('请选择设备类型');
		$('#sucess').css('display','none');
		$('#img').css('margin-right','27%');
		$('#img').css('margin-left','27%');
		$('#img').css('padding-left','5%');
		$('#img').css('padding-right','5%');
		$('.sucess').css('padding-bottom','0%');
		setTimeout(function(){
			$('#mask').css('display','none');
			$('#img').css('display','none');
		},
		800); 
	}
}

/**
 * 匹配码库操作 返回true 成功  false 失败
 *  该方法我实现
 *  type 设备类型，包括：空调、电视、机顶盒
 *  type   air :空调　tv:电视 box:机顶盒
 */
function toAdd(type){
	/* 查询是否连接成功 */
	check = true;
	if(check==false){
		return false; 
	}else {
		return true; 
	}
}
/* 判断是否选择了内容 */
function checkSelect(type){
	if(typeof(type) == "undefined"){
		return false; 
	}else {
		return true; 
	}
}
