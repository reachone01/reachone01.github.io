function tagFold1st ()
{
var inexx='<span  class="h5down"><a href="javascript:void(null)" target="_self"><span style="background-image:url(images/inex.jpg); background-position:0% 90%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></a></span>'//ex
var inexx2='<span  class="h5up"><a href="javascript:void(null)"  target="_self"><span style="background-image:url(images/inex.jpg); background-position:0% 10%;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></a></span>'//in
var divwrapa = document.getElementById("divwrap");
var aDiv = divwrapa.getElementsByTagName("div");
	var i = 0;
	
	for (i = 0; i < aDiv.length; i++)
	{
		(function ()
		{
			var oDiv = aDiv[i];
			
			var oH5 = oDiv.getElementsByTagName("h5")[0];
			var aul = oDiv.getElementsByTagName("ul");
			
			var iHeight =aul[0].offsetHeight * aul.length;/* oH5.offsetHeight + */
			var iLimitH =aul[0].offsetHeight * 1;/* oH5.offsetHeight + */
			var bShow = false;
			if (aul.length > 1)
			{
				oDiv.style.height = iLimitH + "px";
				oH5.innerHTML = inexx2;
				oH5.style.display="inline";
				 
			}
			else
			{
				oH5.style.display="none";
			}
			oH5.onclick = function ()
			{
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
/*obj.offsetHeight-1是因为<div>设置了下框线1px,如果下载线无，则不需-1*/
 

 

 // JavaScript Document
 