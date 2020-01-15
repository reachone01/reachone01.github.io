
var inexx='<span  class="h5down"><a href="javascript:void(null)" target="_self"><span style="background-image:url(images/inex.jpg); background-position:5% 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></a></span>'//ex
var inexx2='<span  class="h5up"><a href="javascript:void(null)"  target="_self"><span style="background-image:url(images/inex.jpg); background-position:5% 10%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></a></span>'//in

 
function tagUnfold(){
var divwrapa = document.getElementById("divwrap");
var aDiv = divwrapa.getElementsByTagName("div");
var i = 0;
for (i = 0; i < aDiv.length; i++){
	(function (){
		var oDiv = aDiv[i];
		var oH5 = oDiv.getElementsByTagName("h5")[0];
		var aul = oDiv.getElementsByTagName("ul");
		var iHeight =aul[0].offsetHeight * aul.length;/* oH5.offsetHeight + */
		var iLimitH =aul[0].offsetHeight * 1;/* oH5.offsetHeight + */
		var bShow = false;
		if (aul.length > 1){
			oDiv.style.height = iHeight + "px";
			oH5.innerHTML = inexx;
			oH5.style.display="inline"; 
		}else{
			oH5.style.display="none";
		}
		oH5.onclick = function ()
		{	bShow = !bShow;
			doMove(oDiv, bShow ? iLimitH : iHeight);
			oH5.innerHTML = bShow ? inexx2 : inexx
		};
	})()	/*前面的几个字符不可缺少*/
}
//obj是参数，在上面执行时是oDiv
	function doMove(obj, iTarget, callback)
	{
		clearInterval(obj.timer);
		obj.timer = setInterval(function ()
		{
			var iSpeed = (iTarget - obj.offsetHeight+1) / 1;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed)	: Math.floor(iSpeed);			
			iTarget == obj.offsetHeight-1 ? (clearInterval(obj.timer), callback && callback()) : obj.style.height = iSpeed + obj.offsetHeight-1 + "px"
		}, 30)		
	}
	
}	/*obj.offsetHeight-1是因为<div>设置了下框线1px,如果下载线无，则不需-1；设置边框存在的问题是展开的再收缩就收缩不了，如果不设边框则不存在这个问题；最后发现var iSpeed = (iTarget - obj.offsetHeight+1)此处应该是+号而不是减号；*/
// JavaScript Document
function tagFold(){

var divwrapa = document.getElementById("divwrap");
var aDiv = divwrapa.getElementsByTagName("div");
var i = 0;
for (i = 0; i < aDiv.length; i++){
	(function (){
		var oDiv = aDiv[i];	
		var oH5 = oDiv.getElementsByTagName("h5")[0];
		var aul = oDiv.getElementsByTagName("ul");	
		//offsetHeight:获取对象相对于版面或由父坐标 offsetParent 属性指定的父坐标的高度
		var iHeight =aul[0].offsetHeight * aul.length;/* oH5.offsetHeight + */
		var iLimitH =aul[0].offsetHeight * 1;/* oH5.offsetHeight + */
		var bShow = false;
		if (aul.length > 1){
			oDiv.style.height = iLimitH + "px";
			oH5.innerHTML = inexx2;
			oH5.style.display="inline"; 
		}else{
			oH5.style.display="none";
		}
		oH5.onclick = function (){
			bShow = !bShow;
			doMove(oDiv, bShow ? iHeight : iLimitH);
			oH5.innerHTML = bShow ? inexx : inexx2
		};
	})()	/*前面的几个字符不可缺少*/
}

	function doMove(obj, iTarget, callback)
	{
		clearInterval(obj.timer);
		obj.timer = setInterval(function ()
		{
			var iSpeed = (iTarget - obj.offsetHeight+1) / 1;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed)	: Math.floor(iSpeed);			
			iTarget == obj.offsetHeight-1 ? (clearInterval(obj.timer), callback && callback()) : obj.style.height = iSpeed + obj.offsetHeight-1 + "px"
		}, 30)		
	}
	
}	/*obj.offsetHeight-1是因<div设置了下框线1px,如果下载线无，则不需-1*/
 // JavaScript Document
function tagUnfold(){
var divwrapa = document.getElementById("divwrap");
var aDiv = divwrapa.getElementsByTagName("div");
var i = 0;
for (i = 0; i < aDiv.length; i++){
	(function (){
		var oDiv = aDiv[i];
		var oH5 = oDiv.getElementsByTagName("h5")[0];
		var aul = oDiv.getElementsByTagName("ul");
		var iHeight =aul[0].offsetHeight * aul.length;/* oH5.offsetHeight + */
		var iLimitH =aul[0].offsetHeight * 1;/* oH5.offsetHeight + */
		var bShow = false;
		if (aul.length > 1){
			oDiv.style.height = iHeight + "px";
			oH5.innerHTML = inexx;
			oH5.style.display="inline"; 
		}else{
			oH5.style.display="none";
		}
		oH5.onclick = function ()
		{	bShow = !bShow;
			doMove(oDiv, bShow ? iLimitH : iHeight);
			oH5.innerHTML = bShow ? inexx2 : inexx
		};
	})()	/*前面的几个字符不可缺少*/
}
//obj是参数，在上面执行时是oDiv
	function doMove(obj, iTarget, callback)
	{
		clearInterval(obj.timer);
		obj.timer = setInterval(function ()
		{
			var iSpeed = (iTarget - obj.offsetHeight+1) / 1;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed)	: Math.floor(iSpeed);			
			iTarget == obj.offsetHeight-1 ? (clearInterval(obj.timer), callback && callback()) : obj.style.height = iSpeed + obj.offsetHeight-1 + "px"
		}, 30)		
	}
	
}	/*obj.offsetHeight-1是因为<div>设置了下框线1px,如果下载线无，则不需-1；设置边框存在的问题是展开的再收缩就收缩不了，如果不设边框则不存在这个问题；最后发现var iSpeed = (iTarget - obj.offsetHeight+1)此处应该是+号而不是减号；*/
// JavaScript Document
function tagFold1(){

var divwrapa1 = document.getElementById("divwrap");
var aDiv = divwrapa.getElementsByTagName("div");
var i = 0;
for (i = 0; i < aDiv.length; i++){
	(function (){
		var oDiv = aDiv[i];	
		var oH5 = oDiv.getElementsByTagName("h5")[0];
		var aul = oDiv.getElementsByTagName("ul");	
		//offsetHeight:获取对象相对于版面或由父坐标 offsetParent 属性指定的父坐标的高度
		var iHeight =aul[0].offsetHeight * aul.length;/* oH5.offsetHeight + */
		var iLimitH =aul[0].offsetHeight * 1;/* oH5.offsetHeight + */
		var bShow = false;
		if (aul.length > 1){
			oDiv.style.height = iLimitH + "px";
			oH5.innerHTML = inexx2;
			oH5.style.display="inline"; 
		}else{
			oH5.style.display="none";
		}
		oH5.onclick = function (){
			bShow = !bShow;
			doMove(oDiv, bShow ? iHeight : iLimitH);
			oH5.innerHTML = bShow ? inexx : inexx2
		};
	})()	/*前面的几个字符不可缺少*/
}

	function doMove(obj, iTarget, callback)
	{
		clearInterval(obj.timer);
		obj.timer = setInterval(function ()
		{
			var iSpeed = (iTarget - obj.offsetHeight+1) / 1;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed)	: Math.floor(iSpeed);			
			iTarget == obj.offsetHeight-1 ? (clearInterval(obj.timer), callback && callback()) : obj.style.height = iSpeed + obj.offsetHeight-1 + "px"
		}, 30)		
	}
	
}