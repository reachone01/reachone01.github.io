var winWidth = 0;
var winHeight = 0;
function findDimensions(){ //函数：获取尺寸

	//获取窗口宽度；&&逻辑与
	if (window.innerWidth)
		winWidth = window.innerWidth;
	else if ((document.body) && (document.body.clientWidth))
		winWidth = document.body.clientWidth;
		
	//获取窗口高度
	if (window.innerHeight)
		winHeight = window.innerHeight;
	else if ((document.body) && (document.body.clientHeight))
		winHeight = document.body.clientHeight;
		
	//通过深入Document内部对body进行检测，获取窗口大小
	if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth){
		winHeight = document.documentElement.clientHeight;
		winWidth = document.documentElement.clientWidth;
	}
	//结果输出至两个文本框
	document.form1.availHeight.value= winHeight;
	document.form1.availWidth.value= winWidth;
}
findDimensions();
//调用函数，获取数值
window.onresize=findDimensions;





function ffcss(){
var userAgent = navigator.userAgent.toLowerCase();
var browser = 
    (browser = userAgent.match(/qqbrowser\/([\d.]+)/))?"QQbrowser "+browser[1]:
	(browser = userAgent.match(/se\s+2.x/))?"sogou 2.x": //sougou
	(browser = userAgent.match(/msie\s+([\d.]+)/))?"msIE "+browser[1]: //ie
	(browser = userAgent.match(/chrome\/([\d.]+)/))?"chrome "+browser[1]: //chrome
	(browser = userAgent.match(/firefox\/([\d.]+)/))?"FireFox "+browser[1]: //firefox
	(browser = userAgent.match(/version\/([\d.]+)\s+safari\/([\d.]+)/))?"safari "+browser[1]: //safari
	(browser = userAgent.match(/opera\/([\d.]+)([\w\W]+)version\/([\d.]+)/))?"opera "+browser[3]: //opera
	"other browser";

var browser4 = browser.substr(0,4);
//下面的winWidth的值来自于另一个JS的函数；
var siteso = document.getElementById("sitesearch");
var winWidth=document.body.clientWidth;

if(browser4 == "msIE"){
var winWidth=1255;/*ie会认为link的JS中的winWidth为0,初始化后恢复；*/
winWidth2=880+(winWidth-880)/2;
siteso.className += " iesitesearch";
}
else if(browser4 =="Fire"){
winWidth2=880+(winWidth-880)/2;
siteso.className += " firesitesearch";
}
else{
winWidth2=880+(winWidth-880)/2;
siteso.className += " firesitesearch";
}
/*tagcloudwrap.style.left = winWidth2+"px";*/
}