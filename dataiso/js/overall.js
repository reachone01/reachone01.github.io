
function closeon(){
var divi = document.getElementById("tagcloudwrap");
	if (divi.style.display == "block"){
		divi.style.display = "none";
	}else if(divi.style.display == "none"){
		divi.style.display = "block";
}}


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
    var h=document.getElementById("tab3").getElementsByTagName("h3");
    var d=document.getElementById("tab3").getElementsByTagName("div");
    for(var i=0;i<10;i++){
            if(ao-1==i){
            h[i].className+=" up";
            d[i].className+=" block";
            }
            else {
            h[i].className=" ";
            d[i].className=" ";
            }}}
			
<!--���Ҫ����,�ѵ�37��-->
function img_onclick(d){
for(var i=1; i<50; i++){ 
var divi = document.getElementById("test"+i);
if (i!=d ){
	divi.style.display = "none";
}else{
	if (divi.style.display == "block"){
		divi.style.display = "none";
	}else if(divi.style.display == "none"){
		divi.style.display = "block";
}
}}} 
function divclose(de){
var divia = document.getElementById("test"+de);
divia.style.display = "none";
}

<!--��������ʾ<link id="color" href="css/color0.css" rel="stylesheet" type="text/css" />	-->
	function cssset(){
	var today2=new Date();
	var isnDay = new
				Array("Sun.","Mon.","Tue.","Wed.","Thu.","Fri.","Sat.","Sun.");
	var h=document.getElementById("color");
	switch(isnDay[today2.getDay()]){

	case "Sun.":
	h.href="css/color0.css";break;
	case "Mon.":
	h.href="css/color1.css";break;
	case "Tue.":
	h.href="css/color2.css";break;
	case "Wed.":
	h.href="css/color3.css";break;
	case "Thu.":
	h.href="css/color0.css";break;
	case "Fri.":
	h.href='css/color1.css';break;
	case "Sat.":
	h.href="css/color2.css";break;
	}}
<!--��������ʾTV table-->



//window.innerWidth /innerHeight: //������������Ĵ�С,������������˵���������(��FF���ã�������document.documentElement.clientHeight)���ı��������С����ֵҲ��ı�

function xiay(){
window.scrollBy(0,document.documentElement.clientHeight-80);
}

function shangy(){
window.scrollBy(0,-document.documentElement.clientHeight+80);
}
<!-- ����CSS��ʽӦ��-->
		function changecss(nh) {
		color.href="";
		color.href=nh;
		}
<!--����CSS��ʽӦ��-->

		function changescript(nh1) {
		scriptname.src="";
		scriptname.src=nh1;
		}
function MM_displayStatusMsg(msgStr) { //v1.0
  status=msgStr;
  document.MM_returnValue = true;
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



function goton(hi){
	tagFold()
var divwrapa = document.getElementById("divwrap");
var aDiv = divwrapa.getElementsByTagName("div");

	var i = 0;
	var Height1=0;
	var iHeight=0;
	var tableH0=0;
	var tableH=0;
	for (i = 0; i < adiv.length; i++){
		var oDiv = aDiv[i];
		var oH5 = oDiv.getElementsByTagName("h5")[0];
		
		var aul = oDiv.getElementsByTagName("ul");
		if (oH5.style.display="inline"){
		   iHeight =(aul[0].offsetHeight+1) * 1;/* oH5.offsetHeight + */
		}
		else{
			iHeight =(aul[0].offsetHeight+1) * aul.length;/* oH5.offsetHeight + */
		 
		}
		
		Height1 = Height1 + iHeight;
	}
	var fgh=10;
var height2=0;
if (hi <= 4){height2=0;}
else if (hi> 4 && hi<= 8){height2=fgh*1;}
else if (hi> 8 && hi<=13){height2=fgh*2;}
else if (hi>13 && hi<=18){height2=fgh*3;}
else if (hi>18 && hi<=23){height2=fgh*4;}
else if (hi>23 && hi<=26){height2=fgh*5;}
else if (hi>26 && hi<=30){height2=fgh*6;}
else if (hi>30 && hi<=36){height2=fgh*7;}
else if (hi>36 && hi<=40){height2=fgh*8;}
else if (hi>40 && hi<=44){height2=fgh*9;}
else if (hi>44 && hi<=49){height2=fgh*10;}
//for (j=0; j <hi; j++){
//	var oTable = divwrapa.getElementsByTagName("table");
//	tableH0 = oTable[0].offsetHeight+1;
//		tableH = tableH + tableH0;
//}
heightt=Height1+height2;

window.scrollBy(0,-9000000);
window.scrollBy(0,heightt);
}


function gotoall(hi){
	tagUnfold()
var divwrapa = document.getElementById("divwrap");
var aDiv = divwrapa.getElementsByTagName("div");

	var i = 0;
	var Height1=0;
	var iHeight=0;
	var tableH0=0;
	var tableH=0;
	for (i = 0; i < hi-1; i++){
		var oDiv = aDiv[i];
		var oH5 = oDiv.getElementsByTagName("h5")[0];
		
		var aul = oDiv.getElementsByTagName("ul");
	
			iHeight =(aul[0].offsetHeight) * aul.length+1;/* oH5.offsetHeight + */
		  

		Height1 = Height1 + iHeight;
	}
	var fgh=10;
var height2=0;
if (hi <= 4){height2=0;}
else if (hi> 4 && hi<= 8){height2=fgh*1;}
else if (hi> 8 && hi<=13){height2=fgh*2;}
else if (hi>13 && hi<=18){height2=fgh*3;}
else if (hi>18 && hi<=23){height2=fgh*4;}
else if (hi>23 && hi<=26){height2=fgh*5;}
else if (hi>26 && hi<=30){height2=fgh*6;}
else if (hi>30 && hi<=36){height2=fgh*7;}
else if (hi>36 && hi<=40){height2=fgh*8;}
else if (hi>40 && hi<=44){height2=fgh*9;}
else if (hi>44 && hi<=49){height2=fgh*10;}
//for (j=0; j <hi; j++){
//	var oTable = divwrapa.getElementsByTagName("table");
//	tableH0 = oTable[0].offsetHeight+1;
//		tableH = tableH + tableH0;
//}
heightt=Height1+height2;

window.scrollBy(0,-9000000);
window.scrollBy(0,heightt+29);
}


function xian(hi){
	window.scrollBy(0,-9000000);
window.scrollBy(0,29+hi);
}
function xiaall(hi,hn){
		tagUnfold()
var divwrapa = document.getElementById("divwrap");
var aDiv = divwrapa.getElementsByTagName("div");

	var i = 0;
	var Height1=0;
	var iHeight=0;
	var tableH0=0;
	var tableH=0;
	for (i = 0; i < hi-1; i++){
		var oDiv = aDiv[i];
		var oH5 = oDiv.getElementsByTagName("h5")[0];
		
		var aul = oDiv.getElementsByTagName("ul");
	
			iHeight =(aul[0].offsetHeight) * aul.length+1;/* oH5.offsetHeight + */
		  

		Height1 = Height1 + iHeight;
	}
	var fgh=10;
var height2=0;
if (hi <= 4){height2=0;}
else if (hi> 4 && hi<= 8){height2=fgh*1;}
else if (hi> 8 && hi<=13){height2=fgh*2;}
else if (hi>13 && hi<=18){height2=fgh*3;}
else if (hi>18 && hi<=23){height2=fgh*4;}
else if (hi>23 && hi<=26){height2=fgh*5;}
else if (hi>26 && hi<=30){height2=fgh*6;}
else if (hi>30 && hi<=36){height2=fgh*7;}
else if (hi>36 && hi<=40){height2=fgh*8;}
else if (hi>40 && hi<=44){height2=fgh*9;}
else if (hi>49 && hi<=49){height2=fgh*10;}
//for (j=0; j <hi; j++){
//	var oTable = divwrapa.getElementsByTagName("table");
//	tableH0 = oTable[0].offsetHeight+1;
//		tableH = tableH + tableH0;
//}
heightt=Height1+height2;
	window.scrollBy(0,-9000000);
window.scrollBy(0,heightt+hn+155);
}

/*

var isIE = !-[1,];
if(isIE){
    try{
        var swf1 = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');

    }
    catch(e){
         alert('��ʹ�õ������û�а�װFlash���!\n������һ����վ�����һ����Ƶ����������Զ���ʾ��װ��\n(��ȥget.adobe.com/cn/flashplayer���ذ�װ��');
    }
}
else {
    try{
        var swf2 = navigator.plugins['Shockwave Flash'];
        if(swf2 == undefined){
             alert('��ʹ�õ������û�а�װFlash���!\n������һ����վ�����һ����Ƶ����������Զ���ʾ��װ��\n(��ȥget.adobe.com/cn/flashplayer���ذ�װ��');
        }
        else {

				  
        }
    }
    catch(e){
        alert('��ʹ�õ������û�а�װFlash���!\n������һ����վ�����һ����Ƶ����������Զ���ʾ��װ��\n(��ȥget.adobe.com/cn/flashplayer���ذ�װ��');
    }
}


*/