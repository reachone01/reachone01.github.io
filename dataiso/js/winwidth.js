var winWidth = 0;
var winHeight = 0;
function findDimensions(){ //��������ȡ�ߴ�

	//��ȡ���ڿ�ȣ�&&�߼���
	if (window.innerWidth)
		winWidth = window.innerWidth;
	else if ((document.body) && (document.body.clientWidth))
		winWidth = document.body.clientWidth;
		
	//��ȡ���ڸ߶�
	if (window.innerHeight)
		winHeight = window.innerHeight;
	else if ((document.body) && (document.body.clientHeight))
		winHeight = document.body.clientHeight;
		
	//ͨ������Document�ڲ���body���м�⣬��ȡ���ڴ�С
	if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth){
		winHeight = document.documentElement.clientHeight;
		winWidth = document.documentElement.clientWidth;
	}
	//�������������ı���
	document.form1.availHeight.value= winHeight;
	document.form1.availWidth.value= winWidth;
}
findDimensions();
//���ú�������ȡ��ֵ
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
//�����winWidth��ֵ��������һ��JS�ĺ�����
var siteso = document.getElementById("sitesearch");
var winWidth=document.body.clientWidth;

if(browser4 == "msIE"){
var winWidth=1255;/*ie����Ϊlink��JS�е�winWidthΪ0,��ʼ����ָ���*/
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