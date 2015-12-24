var resource = null;

function getResource() {
	return resource;
}

function initPage() {
	var spanArray = document.getElementsByTagName("span");
	for (var i = 0; i < spanArray.length; i++) {
		var key = spanArray[i].getAttribute("local_key")
		spanArray[i].innerHTML = getResource()[key];
	}
}

function load() {
	clearBtnHidden();
	window.AppJsBridge.service.localeService.getResource({
		"success" : function(data) {
			resource = data;
			alert(resource);
			window.AppJsBridge.ready(function() {
			});
			initPage();
			queryState();
			alert('sucess');
		},
		"error" : function(data) {
			alert('fail');
		}
	});
}

function getCurrentDeviceSn() {
	return window.AppJsBridge.service.deviceService.getCurentDeviceSn();
}

function queryState() {
	document.getElementById("div_body_text").innerHTML = getResource().PROGRESS_WAITING;
	clearBtnHidden();
	setTimeout(function(){
		window.AppJsBridge.service.deviceService.getDevice({
			"sn" : getCurrentDeviceSn(),
			"success" : queryStateSucCallback,
			"error" : queryStateFailCallback
		});
	},200);
}

var queryStateSucCallback = function(data) {
	var jsonObj = data;
	if (jsonObj == null || jsonObj.basic == null
			|| jsonObj.basic.status == null
			|| jsonObj.basic.status == "offline") {
		document.getElementById("div_body_text").innerHTML = getResource().STATUS_OFFLINE;
		document.getElementById("status").setAttribute("src",
				"image/icon_offline.png");
		clearBtnHidden();
	} else {
		if (jsonObj.remoteControl == null
				|| jsonObj.remoteControl.keyNumber == null) {
			document.getElementById("div_body_text").innerHTML = getResource().STATUS_OFFLINE;
			document.getElementById("status").setAttribute("src",
					"image/icon_offline.png");
			clearBtnHidden();
			return;
		}

		var keyNumber = jsonObj.remoteControl.keyNumber;
		if (keyNumber == 1) {
			document.getElementById("div_body_text").innerHTML = getResource().PRESS_INDEX_01;
			document.getElementById("status").setAttribute("src",
					"image/open.png");
			showClearBtn();			
		}
		else if (keyNumber == 2) {
			document.getElementById("div_body_text").innerHTML = getResource().PRESS_INDEX_02;
			document.getElementById("status").setAttribute("src",
					"image/open.png");
			showClearBtn();			
		}
		else if (keyNumber == 3) {
			document.getElementById("div_body_text").innerHTML = getResource().PRESS_INDEX_03;
			document.getElementById("status").setAttribute("src",
					"image/open.png");
			showClearBtn();			
		}
		else if (keyNumber == 4) {
			document.getElementById("div_body_text").innerHTML = getResource().PRESS_INDEX_04;
			document.getElementById("status").setAttribute("src",
					"image/open.png");
			showClearBtn();						
		}
		else if (keyNumber == 5) {
			document.getElementById("div_body_text").innerHTML = getResource().PRESS_INDEX_05;
			document.getElementById("status").setAttribute("src",
					"image/open.png");
			showClearBtn();			
		}
		else if (keyNumber == 6) {
			document.getElementById("div_body_text").innerHTML = getResource().PRESS_INDEX_06;
			document.getElementById("status").setAttribute("src",
					"image/open.png");
			showClearBtn();
		}

		else {
			document.getElementById("div_body_text").innerHTML = getResource().STATUS_NORMAL;
			document.getElementById("status").setAttribute("src",
					"image/icon.png");
			clearBtnHidden();			
		}
	}
}

var queryStateFailCallback = function(data) {
}


/**
 * 一键消除告警，恢复正常
 */
function stopAlarm() {
	document.getElementById("status").setAttribute("src",	"image/icon.png");
	document.getElementById("div_body_text").innerText = getResource().STATUS_NORMAL;
	clearBtnHidden();
}

function showClearBtn() {
	document.getElementById("clear_alarm_btn").style.visibility="visible";//隐藏
	document.getElementById("clear_alarm_btn").className = "clear_alarm_btn";
	document.getElementById("clear_alarm_btn").innerHTML = getResource().STOP_ALARM;
}

function clearBtnHidden()
{
	document.getElementById("clear_alarm_btn").style.visibility="hidden";//隐藏
}
