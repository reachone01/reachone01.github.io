
<!-- ����CSS��ʽӦ��-->
		function changecss(nh) {
		CSS.href="";
		CSS.href=nh;
		}
<!--����CSS��ʽӦ��-->

<!--�������ӵĴ��ڴ򿪷�ʽjavascript:void(null)-->	
function mytarget(){
var links = document.links;
for(var i =0; i < links.length;i++)
	{
		if (links[i].href == "javascript:void(null)") 
			{
			links[i].target="_self";
			}
		else
			{
			links[i].target="_blank";
			}
		//alert(links[i].href);
	
	}
}

<!-- floating image Dreamweaver Extension-->
  var brOK=false;   
   var mie=false;  
  var aver=parseInt(navigator.appVersion.substring(0,1));   
  var aname=navigator.appName;   
  //check browser   
  function checkbrOK()   
  	{if(aname.indexOf("Internet Explorer")!=-1)   
   	{if(aver>=4) brOK=navigator.javaEnabled();  
  	mie=true;   
   	}  
  	if(aname.indexOf("Netscape")!=-1)     
   	{if(aver>=4) brOK=navigator.javaEnabled();}  
   }  
   var vmin=5;  
   var vmax=2;  
   var vr=2;  
   var timer1;  
   function Chip(chipname,width,height)  
   	{this.named=chipname;  
   	this.vx=vmin+vmax*Math.random();  
   	this.vy=vmin+vmax*Math.random();  
   	this.w=width;  
   	this.h=height;  
   	this.xx=0;  
   	this.yy=0;  
   	this.timer1=null;  
  }  
   function movechip(chipname) {  
   	if(brOK)  
   	{eval("chip="+chipname);  
   	if(!mie)  
   	{pageX=window.pageXOffset;  
   	pageW=window.innerWidth;  
   	pageY=window.pageYOffset;  
   	pageH=window.innerHeight;  
   	}  
   	else  
   	{pageX=window.document.body.scrollLeft;  
   	pageW=window.document.body.offsetWidth-8;  
   	pageY=window.document.body.scrollTop;  
   	pageH=window.document.body.offsetHeight;  
   	}   
   	chip.xx=chip.xx+chip.vx;  
   	chip.yy=chip.yy+chip.vy;  
   	chip.vx+=vr*(Math.random()-0.5);  
   	chip.vy+=vr*(Math.random()-0.5);  
   	if(chip.vx>(vmax+vmin))  chip.vx=(vmax+vmin)*2-chip.vx;  
   	if(chip.vx<(-vmax-vmin)) chip.vx=(-vmax-vmin)*2-chip.vx;  
   	if(chip.vy>(vmax+vmin))  chip.vy=(vmax+vmin)*2-chip.vy;  
   	if(chip.vy<(-vmax-vmin)) chip.vy=(-vmax-vmin)*2-chip.vy;  
   	if(chip.xx<=pageX)  
   	{chip.xx=pageX;  
   	chip.vx=vmin+vmax*Math.random();  
   	}  
   	if(chip.xx>=pageX+pageW-chip.w)  
   	{chip.xx=pageX+pageW-chip.w;  
   	chip.vx=-vmin-vmax*Math.random();  
   	}  
   	if(chip.yy<=pageY)  
   	{chip.yy=pageY;  
   	chip.vy=vmin+vmax*Math.random();  
   	}  
   	if(chip.yy>=pageY+pageH-chip.h)  
   	{chip.yy=pageY+pageH-chip.h;  
   	chip.vy=-vmin-vmax*Math.random();  
   	}  
   	if(!mie)  
  	{eval('document.'+chip.named+'.top ='+chip.yy);   
  	eval('document.'+chip.named+'.left='+chip.xx);   
  	}    
  	else   
  	{eval('document.all.'+chip.named+'.style.pixelLeft='+chip.xx);   
   	eval('document.all.'+chip.named+'.style.pixelTop ='+chip.yy);   
  	}   
  	chip.timer1=setTimeout("movechip('"+chip.named+"')",100);   
  	}   
  }   
   function stopme(chipname)  
   	{if(brOK)  
   	{//alert(chipname)  
   	eval("chip="+chipname);  
   	if(chip.timer1!=null)    
 	{clearTimeout(chip.timer1)}  
  	}}   
function MM_displayStatusMsg(msgStr) { //v1.0
  status=msgStr;
  document.MM_returnValue = true;
}
function MM_controlSound(x, _sndObj, sndFile) { //v3.0
  var i, method = "", sndObj = eval(_sndObj);
  if (sndObj != null) {
    if (navigator.appName == 'Netscape') method = "play";
    else {
      if (window.MM_WMP == null) {
        window.MM_WMP = false;
        for(i in sndObj) if (i == "ActiveMovie") {
          window.MM_WMP = true; break;
      } }
      if (window.MM_WMP) method = "play";
      else if (sndObj.FileName) method = "run";
  } }
  if (method) eval(_sndObj+"."+method+"()");
  else window.location = sndFile;
}
<!-- floating image Dreamweaver Extension-->

	
<!--��ʾ\���ز�Ĵ��룻-->
function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
	if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
	obj.visibility=v; }
}
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}	
<!--��ʾ\���ز�Ĵ��룻-->


<!--��������ʾTV table-->
	function tvset(){
	var today2=new Date();
	var isnDay = new
				Array("Sun.","Mon.","Tue.","Wed.","Thu.","Fri.","Sat.","Sun.");
	var h=document.getElementById("tab6").getElementsByTagName("h3");
	var d=document.getElementById("tab6").getElementsByTagName("div");
	switch(isnDay[today2.getDay()]){
	case "Sat.":
	h[0].className+=" ";d[0].className+=" ";
	h[1].className+=" ";d[1].className+=" ";
	h[2].className+=" up";d[2].className+=" block";
	h[3].className+=" ";d[3].className+=" ";break;
	case "Sun.":
	h[3].className+=" up";d[3].className+=" block";
	h[0].className+=" ";d[0].className+=" ";
	h[1].className+=" ";d[1].className+=" ";
	h[2].className+=" ";d[3].className+=" ";break;
	case "Fri.":
	h[0].className+=" up";d[0].className+=" block";
	h[2].className+=" ";d[2].className+=" ";
	h[1].className+=" ";d[1].className+=" ";
	h[3].className+=" ";d[3].className+=" ";break;
	case "Mon.":
	h[0].className+=" up";d[0].className+=" block";
	h[2].className+=" ";d[2].className+=" ";
	h[1].className+=" ";d[1].className+=" ";
	h[3].className+=" ";d[3].className+=" ";break;
	case "Tue.":
	h[0].className+=" up";d[0].className+=" block";
	h[2].className+=" ";d[2].className+=" ";
	h[1].className+=" ";d[1].className+=" ";
	h[3].className+=" ";d[3].className+=" ";break;
	case "Wed.":
	h[0].className+=" up";d[0].className+=" block";
	h[2].className+=" ";d[2].className+=" ";
	h[1].className+=" ";d[1].className+=" ";
	h[3].className+=" ";d[3].className+=" ";break;
	case "Thu.":
	h[0].className+=" up";d[0].className+=" block";
	h[2].className+=" ";d[2].className+=" ";
	h[1].className+=" ";d[1].className+=" ";
	h[3].className+=" ";d[3].className+=" ";break;
	}}
<!--��������ʾTV table-->


<!--clock func-->
	function init(){<!--��ʼ��-->
	/*tim2.style.left=tim1.style.posLeft;*/<!--���ڶ���ʱ���������һ��ʱ���������-->
	/*tim2.style.top=tim1.style.posTop+tim1.offsetHeight-6;*/<!--�ڶ���ʱ���ڵ�һ��ʱ����·�-->
	settimes();<!--����settimes()����-->
	}
	function settimes(){
	var stime= new Date();<!--��ȡ��ǰ����-->
	hours= stime.getHours();<!--��ȡ��ǰʱ��-Сʱ-->
	mins= stime.getMinutes();<!--��ȡ��ǰʱ��-����-->
	secs= stime.getSeconds();<!--��ȡ��ǰʱ��-��-->
	if (hours<10)<!--���Сʱ����һλ����ǰ�油��-->
	hours="0"+hours;
	if(mins<10)<!--������ӽ���һλ����ǰ�油��-->
	mins="0"+mins;
	if (secs<10)<!--��������һλ����ǰ�油��-->
	secs="0"+secs;
	
	var today2=new Date();
	var event1="New Day"
	var cdtime="6/11/2013";
 
	
	var festive=new Date(cdtime);
			festive1=parseInt((festive-today2)/spd);
			festive2=parseInt((festive-today2)/spd*24)-parseInt(festive1*24);
			festive3=parseInt((festive-today2)/spd*24*60)-parseInt(festive1*24*60)-parseInt(festive2*60);
			festive4=60-secs
		festivewri.innerHTML=event1+"</br>"+cdtime+"</br>"+"count down:"+"</br>"+festive1+"��"+festive2+"ʱ"+"</br>"+festive3+"��"+festive4+"</br>"+"</br>"+"ѧ�����"+"</br>"+"��������"+"</br>"+"&nbsp;"+"</br>"+"�ɽ�����"+"</br>"+"һ����ʡ"+"</br>"+"ǰհ����"+"</br>"+"δ������"+"</br>"+"�������"+"</br>"+"���ӷ�ʡ"+"</br>"+"˼ά�ж�"+"</br>"+"��������"+"</br>"+""+"</br>"+"��������"+"</br>"+"Truth"+"</br>"+"Kindness"+"</br>"+"Beauty"+"</br>"+"Love"+"</br>"+""+"</br>"+"֪����˼"+"</br>"+"Knowledgement"+"</br>"+"Action"+"</br>"+"Diligent"+"</br>"+"Reflection";<!--����festivewri�ĸ�ʽ-->
	tim1.innerHTML=hours+":"+mins+":"+secs;<!--����tim1��tim2�ĸ�ʽ-->
	/*tim2.innerHTML=hours+":"+mins+":"+secs*/
	setTimeout1('settimes()',1000);<!--ÿ1�����һ��ʱ��-->
	}
	
	function MM_displayStatusMsg(msgStr) { //v1.0
	  status=msgStr;
	  document.MM_returnValue = true;
	}
<!--clock func-->



	 <!--tab control--> 
		function goto1(ao){
		var h=document.getElementById("tab").getElementsByTagName("h3");
		var d=document.getElementById("tab").getElementsByTagName("div");
			for(var i=0;i<10;i++){
				if(ao-1==i){
				h[i].className+=" up";
				d[i].className+=" block";
				}
				else {
				h[i].className=" ";
				d[i].className=" ";
				}}}

		function goto2(ao){
		var h=document.getElementById("tab2").getElementsByTagName("h3");
		var d=document.getElementById("tab2").getElementsByTagName("div");
		for(var i=0;i<10;i++){
				if(ao-1==i){
				h[i].className+=" up";
				d[i].className+=" block";
				}
				else {
				h[i].className=" ";
				d[i].className=" ";
				}}}

		function goto3(ao){
			var abc="tab3";
		var h=document.getElementById("tab3").getElementsByTagName("h3");
		var d=document.getElementById(""+abc).getElementsByTagName("div");
			for(var i=0;i<10;i++){
				if(ao-1==i){
				h[i].className+=" up";
				d[i].className+=" block";
				}
				else {
				h[i].className=" ";
				d[i].className=" ";
				}}}

		function goto4(ao){
		var h=document.getElementById("tab4").getElementsByTagName("h3");
		var d=document.getElementById("tab4").getElementsByTagName("div");
		for(var i=0;i<10;i++){
				if(ao-1==i){
				h[i].className+=" up";
				d[i].className+=" block";
				}
				else {
				h[i].className=" ";
				d[i].className=" ";
				}}}
				
		function goto5(ao){
			var h=document.getElementById("tab5").getElementsByTagName("h3");
			var d=document.getElementById("tab5").getElementsByTagName("div");
			for(var i=0;i < 10;i++){
				if(ao-1==i){
					h[i].className+=" up";
					d[i].className+=" block";
				}
				else {
					h[i].className=" ";
					d[i].className=" ";
					}
				}
			}
<!--tab6-->
	function goto6(ao){
			var h=document.getElementById("tab6").getElementsByTagName("h3");
			var d=document.getElementById("tab6").getElementsByTagName("div");
			for(var i=0;i < 10;i++){
				if(ao-1==i){
					h[i].className+=" up";
					d[i].className+=" block";
				}
				else {
					h[i].className=" ";
					d[i].className=" ";
					}
				}
			}
	function goto666(ao){
		var d=document.getElementById("tab6").getElementsByTagName("div");
		for(var i=0;i < 10;i++){
			if(ao-1==i){
				d[i].className+=" block";
			}
			else {
				d[i].className=" ";
	}}}
<!--control tab6-->

<!--tab7-->
	function goto7(ao){
		var d=document.getElementById("tab7").getElementsByTagName("div");
		for(var i=0;i < 10;i++){
			if(ao-1==i){
				d[i].className+=" block";
			}
			else {
				d[i].className=" ";
	}}}
<!--control tab7-->

			
		function goto8(ao){
			var h=document.getElementById("tab8").getElementsByTagName("h3");
			var d=document.getElementById("tab8").getElementsByTagName("div");
			for(var i=0;i < 10;i++){
				if(ao-1==i){
					h[i].className+=" up";
					d[i].className+=" block";
				}
				else {
					h[i].className=" ";
					d[i].className=" ";
					}
				}
			}
<!--tab control-->
//�ۺ�����
function search(){
if(formmain.rdgoogle.checked)
window.open("http://www.google.com.hk/search?hl=zh-CN&q=" + encodeURI(formmain.searchkey.value));

if(formmain.rdbaidu.checked)
window.open("http://www.baidu.com/baidu?tn=zhongguosou&ct=&lm=&z=&rn=&word="+formmain.searchkey.value+"&_si.x=4&_si.y=2");

if(formmain.rdyahoozhongguo.checked)
window.open("http://search.cn.yahoo.com/s?pid=402877_1010&v=web&p=" + formmain.searchkey.value);

if(formmain.rdsogou.checked)
window.open("http://www.sogou.com/web?query="+formmain.searchkey.value+"&sogouhome=");

if(formmain.rdsoso.checked)
window.open("http://www.soso.com/q?pid=s.idx&w=" + formmain.searchkey.value);

if(formmain.rdyoudao.checked)
window.open("http://www.youdao.com/search?keyfrom=web.index.suggest&q="+formmain.searchkey.value+"&btnIndex="+ formmain.searchkey.value);

if(formmain.rdbingzonghe.checked)
window.open("http://cn.bing.com/search?FORM=BWFD&q=" + encodeURI(formmain.searchkey.value));

if(formmain.rdgoogleen.checked)
window.open("http://www.google.com.hk/search?hl=en&newwindow=1&safe=strict&tbo=d&site=webhp&source=hp&q="+encodeURI(formmain.searchkey.value)); 

if (formmain.rd_yahoo.checked)
  window.open("http://search.yahoo.com/search?prssweb=Search&ei=UTF-8&fr=FP-tab-web-t&fl=0&x=wrt&p=" + encodeURI(formmain.searchkey.value));

if(formmain.rd_bing.checked)
  window.open("http://www.bing.com/search?q="+encodeURI(formmain.searchkey.value));
  
if(formmain.rd360sou.checked)
window.open("http://www.so.com/s?ie=utf-8&src=360sou_home&q=" + encodeURI(formmain.searchkey.value) + "&_re=0"); 

if(formmain.rd_gzlib.checked)
window.open("http://opac.gzlib.gov.cn/interlib/websearch/WebLogin?cmdACT=rdLOGIN_new&furl=..%2Fwebsearch%2FWebReader%3FcmdACT%3DReaderService%26xsl%3D..%2Fwebsearch%2FRdService.xsl&xslPage=RdLoginError_new.xsl&loginid=0100000308194&passwd=63695694"); 

if(formmain.bdbaike.checked)
window.open("http://www.baidu.com/baidu?word=" + encodeURI(formmain.searchkey.value) + "&tn=bds&cl=3&ct=2097152&si=baike.baidu.com&s=on"); 
}

/*
http://210.72.4.33/interlib/websearch/WebLogin?cmdACT=rdLOGIN_new&furl=..%2Fwebsearch%2FWebReader%3FcmdACT%3DReaderService%26xsl%3D..%2Fwebsearch%2FRdService.xsl&xslPage=RdLoginError_new.xsl&loginid=0100000034867&passwd=63695694
*/

//google���������ض���վ;

function customSearch() {
    window.open("http://www.google.com.hk/search?q=" + formCustom.q.value + "&sitesearch=" + formCustom.sitesearch.value + "&domains=" + formCustom.sitesearch.value + "&sa=%E6%90%9C%C2%A0%E7%B4%A2&prog=aff&client=pub-4055365977023692&hl=zh-CN&source=sdo_sb&sdo_rt=ChBNfvf1AA5v2QqkgIvyIjvnEg5fX1JMX0RFRkFVTFRfXxoI-PektCokDFUoAVidyNe9ldivpRg"); 
}


var menuids=["menu1"]

// ����������
function buildsubmenus_horizontal(){
for (var i=0; i<menuids.length; i++){
  //  ��ȡָ����DIV�����е��б�Ԫ��UL
  var ultags=document.getElementById(menuids[i]).getElementsByTagName("ul")
    for (var t=0; t<ultags.length; t++){
		if (ultags[t].parentNode.parentNode.id==menuids[i]){ // �����Ƕ����Ӳ˵��б�
			ultags[t].style.top=ultags[t].parentNode.offsetHeight + 0 +"px" //����������λ��
			// ��������������CSS��ʽ
			ultags[t].parentNode.getElementsByTagName("a")[0].className="mainfoldericon"
		}
		else{ //�������Ӳ˵��б�(ul)
		  ultags[t].style.left=ultags[t-1].getElementsByTagName("a")[0].offsetWidth +"px" //����������λ��
		  // ��������������CSS��ʽ
    		  ultags[t].parentNode.getElementsByTagName("a")[0].className="subfoldericon"
		}
    //  ��������¼�����
    ultags[t].parentNode.onmouseover=function(){
    // �������ȥʱ��ʾ�����б�
    this.getElementsByTagName("ul")[0].style.visibility="visible"
    }
    //  ����ƿ�ʱ��������
    ultags[t].parentNode.onmouseout=function(){
   this.getElementsByTagName("ul")[0].style.visibility="hidden"
    }
    }
  }
}
//  ���ҳ���¼�
if (window.addEventListener)
window.addEventListener("load", buildsubmenus_horizontal, false)
//  attachEvent ��������ҳ���е��¼�
else if (window.attachEvent)
window.attachEvent("onload", buildsubmenus_horizontal)


	function copyclip(txt) {
        if (window.clipboardData) {
                window.clipboardData.clearData();
                window.clipboardData.setData("Text", txt);
        } else if (navigator.userAgent.indexOf("Opera") != -1) {
                window.location = txt;
        } else if (window.netscape) {
                try {
                        netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                } catch (e) {
                        alert("����firefox��ȫ�������������м���������������´��ڵĵ�ַ��������'about:config'Ȼ���ҵ�'signed.applets.codebase_principal_support'����Ϊtrue'");
                        return false;
                }
                var clip = Components.classes["@mozilla.org/widget/clipboard;1"].createInstance(Components.interfaces.nsIClipboard);
                if (!clip)
                        return;
                var trans = Components.classes["@mozilla.org/widget/transferable;1"].createInstance(Components.interfaces.nsITransferable);
                if (!trans)
                        return;
                trans.addDataFlavor('text/unicode');
                var str = new Object();
                var len = new Object();
                var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
                var copytext = txt;
                str.data = copytext;
                trans.setTransferData("text/unicode", str, copytext.length * 2);
                var clipid = Components.interfaces.nsIClipboard;
                if (!clip)
                        return false;
                clip.setData(trans, null, clipid.kGlobalClipboard);
        }
	}
