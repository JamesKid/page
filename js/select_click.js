
//下一步按钮事件
function onAction(){

	// 1、判断是否已经选择 ，提示选择类型

	//	2、获取选择的类型

	//	3、调用 toAdd() 弹出提示框 ：蓝灯亮起后，请对准分机按遥控器的开关键
	if(toAdd(type)){
		//弹出提示框匹配成功，跳转到主页
		 window.location.href="yindao.html";
	}else{
		//弹出提示框匹配失败，不跳转
		
	}
}

/**
 * 匹配码库操作 返回true 成功  false 失败
 *  该方法我实现
 *  type 设备类型，包括：空调、电视、机顶盒
 */
function toAdd(type){
	
}