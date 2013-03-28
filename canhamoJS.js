function canhamoJS(){
	this.appName = "";
	this.appVersion = "";
	this.appCodeName = "";
	this.buildID = "";
	this.language = ""
	this.oscpu = "";
	this.platform = "";
	this.cookieEnabled = "";
	this.userAgent = "";
	this.onLine = "";
	this.bateryCharging = "";
	this.bateryChargingTime = "";
	this.bateryLevel = "";
	this.bateryDischargingTime = "";	
	document.addEventListener("deviceready", this.init(), false);
}

// init me
canhamoJS.prototype.init = function(){				
	this.loadBasicInfos();
	this.loadNavigatorInfos();
	this.loadConnectionsInfos();
	this.loadBateryInfos();
}

// loadPropertysValues
canhamoJS.prototype.loadBasicInfos = function(){
	this.appName = navigator.appName;
	this.appVersion = navigator.appVersion;
	this.appCodeName = navigator.appCodeName;
	this.buildID = navigator.buildID;
	this.language = navigator.language;
	this.os = navigator.oscpu;
	this.cpu = navigator.oscpu;
	this.platform = navigator.platform;
}

canhamoJS.prototype.loadNavigatorInfos = function(){
	this.cookieEnabled = navigator.cookieEnabled ;
	this.userAgent = navigator.userAgent;
}

canhamoJS.prototype.loadConnectionsInfos = function(){
	this.onLine = navigator.onLine;
}

canhamoJS.prototype.loadBateryInfos = function(){
	var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery;
	
	this.bateryCharging = battery.charging;
	this.bateryChargingTime = battery.chargingTime;
	this.bateryLevel = battery.level;
	this.bateryDischargingTime = battery.dischargingTime;
}

canhamoJS.prototype.isOnline = function(){}
canhamoJS.prototype.watchOnline = function(p_callbackOn, p_callBackOff, p_watchInterval){}

canhamoJS.prototype.isCharging = function(){}
canhamoJS.prototype.watchCharging = function(p_callbackOn, p_callBackOff, p_watchInterval){}
canhamoJS.prototype.watchCriticalCharging = function(p_callbackOn, p_callBackOff, p_watchInterval){}

/////////////////////////////
var canhamoJS = new canhamoJS();
console.log(canhamoJS);