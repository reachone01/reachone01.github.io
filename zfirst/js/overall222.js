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
	var h=document.getElementById("tab5").getElementsByTagName("h3");
	var d=document.getElementById("tab5").getElementsByTagName("div");
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
		//-->
<!--��������ʾTV table-->
	<!--clock func-->
	/*clock func*/
	function init(){<!--��ʼ��-->
	/*tim2.style.left=tim1.style.posLeft;*/<!--���ڶ���ʱ���������һ��ʱ���������-->
	tim2.style.top=tim1.style.posTop+tim1.offsetHeight-6;<!--�ڶ���ʱ���ڵ�һ��ʱ����·�-->
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
	var event1="National Day"
	var cdtime="10/01/2012";
	var festive=new Date(cdtime);
			festive1=parseInt((festive-today2)/spd);
			festive2=parseInt((festive-today2)/spd*24)-parseInt(festive1*24);
			festive3=parseInt((festive-today2)/spd*24*60)-parseInt(festive1*24*60)-parseInt(festive2*60);
			festive4=60-secs
		festivewri.innerHTML=event1+"</br>"+cdtime+"</br>"+"count down:"+"</br>"+festive1+"��"+festive2+"ʱ"+"</br>"+festive3+"��"+festive4+"</br>"+"</br>"+"�ɽ�����"+"</br>"+"һ����ʡ"+"</br>"+"ǰհ����"+"</br>"+"δ������"+"</br>"+"�������"+"</br>"+"���ӷ�ʡ"+"</br>"+"˼ά�ж�"+"</br>"+"��������"+"</br>"+""+"</br>"+"��������"+"</br>"+"Truth"+"</br>"+"Kindness"+"</br>"+"Beauty"+"</br>"+"Love"+"</br>"+""+"</br>"+"֪����˼"+"</br>"+"Knowledgement"+"</br>"+"Action"+"</br>"+"Diligent"+"</br>"+"Reflection";<!--����festivewri�ĸ�ʽ-->
	tim1.innerHTML=hours+":"+mins+":"+secs;<!--����tim1��tim2�ĸ�ʽ-->
	tim2.innerHTML=hours+":"+mins+":"+secs
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
				}	}	}
<!--tab control-->
		function goto5(ao){
			var h=document.getElementById("tab5").getElementsByTagName("h3");
			var d=document.getElementById("tab5").getElementsByTagName("div");
			for(var i=0;i<10;i++){
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
			
function goTopEx() {
    var obj = document.getElementById("goTopBtn");
    function getScrollTop() {
        return document.documentElement.scrollTop;
    }
    function setScrollTop(value) {
        document.documentElement.scrollTop = value;
    }
    window.onscroll = function() {
        getScrollTop() > 0 ? obj.style.display = "": obj.style.display = "none";
    }
    obj.onclick = function() {
        var goTop = setInterval(scrollMove, 10);
        function scrollMove() {
            setScrollTop(getScrollTop() / 111);
            if (getScrollTop() < 1) clearInterval(goTop);
        }
    }
}

function goTopEx() {
    var obj = document.getElementById("goTopBtn");
    function getScrollTop() {
        return document.documentElement.scrollTop;
    }
    function setScrollTop(value) {
        document.documentElement.scrollTop = value;
    }
    window.onscroll = function() {
        getScrollTop() > 0 ? obj.style.display = "": obj.style.display = "none";
    }
    obj.onclick = function() {
        var goTop = setInterval(scrollMove, 10);
        function scrollMove() {
            setScrollTop(getScrollTop() / 111);
            if (getScrollTop() < 1) clearInterval(goTop);
        }
    }
}