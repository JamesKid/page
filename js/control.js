var resource = null;
var deviceStatus;

function getResource() {
	return resource;
}

function initPage() {
	var spanArray = document.getElementsByTagName("span");
	for (var i = 0; i < spanArray.length; i++) {
		var key = spanArray[i].getAttribute("local_key")
		if(null!=key){
			spanArray[i].innerHTML = getResource()[key];
		}
	}
}

function load() {
	window.AppJsBridge.service.localeService.getResource({
		"success" : function(data) {
			resource = data;
//			alert(resource);
			window.AppJsBridge.ready(function() {});
			initPage();
			queryState();
		},
		"error" : function(data) {
		}
	});
}

function getCurrentDeviceSn() {
	return window.AppJsBridge.service.deviceService.getCurentDeviceSn();
}

function queryState() {
	setTimeout(function(){
		window.AppJsBridge.service.deviceService.getDevice({
			"sn" : getCurrentDeviceSn(),
			"success" : queryStateSucCallback,
			"error" : queryStateFailCallback
		});
	},200);
}

var queryStateSucCallback = function(data)
{
	var jsonObj = data;
//	alert(data);
    if (jsonObj == null || jsonObj.basic== null || jsonObj.basic.status == null ||jsonObj.basic.status == "offline")
    {
    	deviceStatus="off";
    }else{
    	deviceStatus="on"
    	}
    alert("queryStateSucCallback");
    init(getResource().Open,18,"cool","middle","manual");
}


var queryStateFailCallback = function(data) {
}
