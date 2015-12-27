var resource = null;

function getResource()
{
	return resource;
}

function initPage()
{
	var spanArray = document.getElementsByTagName("span");
	for(var i = 0; i < spanArray.length; i++)
	{
		var key = spanArray[i].getAttribute("local_key");
		spanArray[i].innerHTML = getResource()[key];
	}
}

function load()
{
	window.AppJsBridge.service.localeService.getResource({
		"success":function(data){
						resource = data;
						window.AppJsBridge.ready(function(){});
						initPage();
						queryState();
					},
		"error":function(data){}
	});
}

function getCurrentDeviceSn()
{
	return window.AppJsBridge.service.deviceService.getCurentDeviceSn();
}

function queryState()
{
    document.getElementById("main").innerHTML = getResource().PROGRESS_WAITING;
	
	window.AppJsBridge.service.deviceService.getDevice({
		"sn":getCurrentDeviceSn(),
		"success":queryStateSucCallback,
		"error":queryStateFailCallback});
}

var queryStateSucCallback = function(data)
{

	var jsonObj = data;

    if (jsonObj == null || jsonObj.basic== null || jsonObj.basic.status == null ||jsonObj.basic.status == "offline")
    {
    	document.getElementById("main").innerHTML = getResource().STATUS_OFFLINE;
    }
    else
    {	
		document.getElementById("main").innerHTML = getResource().STATUS_ONLINE;
		try
		{
			//在线 让设备图片亮起来。
			window.parent.refreshLi(getCurrentDeviceSn());
		}catch(err)
		{
		}

    }
}

function queryStateFailCallback(data)
{
	document.getElementById("main").innerHTML = getResource().STATUS_OFFLINE;
}
		


