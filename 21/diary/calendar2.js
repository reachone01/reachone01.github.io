//默认保存为ANSI，当在GitHub中引用时，中文为乱码，当将此文件另存为utf-8时，可解决此问题。
//http://www.pc6.com/softview/SoftView_20605.html
<!--calendar--一部分写在Html,一部份写在JS>-->
/*农历的另一年份时，需更改4处（第5处是节气更改（已写函数），变量"Thisyear"不更改）*/
//节气和农历天数代码:用excel表<节气和农历天数代码>
var lunarInfo=new Array(
0x04bd8,0x04ae0,0x0a570,0x054d5,0x0d260,0x0d950,0x16554,0x056a0,0x09ad0,0x055d2,
0x04ae0,0x0a5b6,0x0a4d0,0x0d250,0x1d255,0x0b540,0x0d6a0,0x0ada2,0x095b0,0x14977, // 1910-1919
0x04970,0x0a4b0,0x0b4b5,0x06a50,0x06d40,0x1ab54,0x02b60,0x09570,0x052f2,0x04970,
0x06566,0x0d4a0,0x0ea50,0x06e95,0x05ad0,0x02b60,0x186e3,0x092e0,0x1c8d7,0x0c950,
0x0d4a0,0x1d8a6,0x0b550,0x056a0,0x1a5b4,0x025d0,0x092d0,0x0d2b2,0x0a950,0x0b557,
0x06ca0,0x0b550,0x15355,0x04da0,0x0a5d0,0x14573,0x052d0,0x0a9a8,0x0e950,0x06aa0, // 1950-1959
0x0aea6,0x0ab50,0x04b60,0x0aae4,0x0a570,0x05260,0x0f263,0x0d950,0x05b57,0x056a0,
0x096d0,0x04dd5,0x04ad0,0x0a4d0,0x0d4d4,0x0d250,0x0d558,0x0b540,0x0b5a0,0x195a6,
0x095b0,0x049b0,0x0a974,0x0a4b0,0x0b27a,0x06a50,0x06d40,0x0af46,0x0ab60,0x09570, // 1982
0x04af5,0x04970,0x064b0,0x074a3,0x0ea50,0x06b58,0x055c0,0x0ab60,0x096d5,0x092e0,
0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5, // 2000-2009
0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,
0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530, // 2020-2029
0x05aa0,0x076a3,0x096d0,0x04bd7,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,
0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0);
var Gan       =new Array("甲","乙","丙","丁","戊","己","庚","辛","壬","癸");
var Zhi       =new Array("子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥");
var Animals   =new Array("鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪");
var solarTerm =new Array("小寒","大寒",
						 "立春","雨水","惊蛰","春分","清明","谷雨",
						 "立夏","小满","芒种","夏至","小暑","大暑",
						 "立秋","处暑","白露","秋分","寒露","霜降",
						 "立冬","小雪","大雪","冬至")

var sTermInfo =new Array(0,21208, //1900年的各个节气到小寒的分钟数
						  42467,63836,85337,107014,128867,150921,
						  173149,195551,218072,240693,263343,285989,
						  308563,331033,353350,375494,397447,419210,
						  440795,462224,483532,504758)

//====================================== 传回农历 y年的总天数
function lYearDays(y) {
   var i, sum = 348  							// 29*12
   for(i=0x8000; i>0x8; i>>=1)  				// 1000 0000 0000 0000
   		sum += (lunarInfo[y-1900] & i)? 1: 0	// 大月加1
   return(sum+leapDays(y))						// 闰年加29或30
   alert("sum");
}

//====================================== 传回农历 y年闰月的天数
function leapDays(y) {
   if(leapMonth(y))  
   		return((lunarInfo[y-1900] & 0x10000)? 30: 29) // 1 0000 0000 0000 0000
   else return(0) 					 // 2017年 0x15176 0001 0101 0001 0111 0110  闰6月30
}

//====================================== 传回农历 y年闰哪个月 1-12 , 没闰传回 0
function leapMonth(y) {
   return(lunarInfo[y-1900] & 0xf)  // 1111
}

//====================================== 传回农历 y年m月的总天数
function monthDays(y,m) {
   return( (lunarInfo[y-1900] & (0x10000>>m))? 30: 29 ) // 1 0000 0000 0000 0000
}
/*（第1处）*/
	var cnyear="己亥猪年";
	var spd=24*60*60*1000
	var spd=86400000/*每天的豪秒数*/

/*（第2处）*/
	var YDate0=new Date("1/1/2019");
	var y70=new Date("1/1/1970");
	var sec0=YDate0-y70;/*1970-公历该年元旦日的豪秒数((41*365+10)*spd=1293840000000)*/
	
/*（春节的公历日期；第3处）*/	
	var YDate1 = new Date("2/5/2019");
	var dday = (YDate1-YDate0)/(24*60*60*1000);
	//alert(dday);

	/*该农历年每月天数,闰月要多写*/
	var totaldayThisyear=0;
	var yearThisyear="30;29;30;29;30;29;29;30;29;29;30;30;0"; 
	yearThisyear=yearThisyear.split(";");

	// 尝试计算yearThisyear
	var Today3 = new Date();
	var yy = Today3.getFullYear()-1;
	yy = 2019
	var mmc = Today3.getMonth();
	var mm = new Array(1,2,3,4,5,6,7,8,9,10,11,12,0);
	if(leapMonth(yy)==0)
	{
		for(i=0;i<12;i++)
		{
			mm[i] = monthDays(yy,i+1)
		}
	}
	else
	{
		for(i=0;i<leapMonth(yy);i++)
		{
			mm[i] = monthDays(yy,i+1)
		}
		mm[leapMonth(yy)] = monthDays(yy,mmc)
		for(i=leapMonth(yy)+1;i<13;i++)
		{
			mm[i] = monthDays(yy,i)
		}

	}
	yearThisyear = mm; // 后面计算有问题
	
	for(i=0;i<yearThisyear.length;i++){
		totaldayThisyear=totaldayThisyear+parseInt(yearThisyear[i]);
	}
	//alert(totaldayThisyear);
	
/*该农历年月份数（有闰月时要插到变量monthThisyear到中间，如14年“闰八月”）（第4处）*/
	var monthThisyear="正月;二月;三月;四月;五月;六月;七月;八月;九月;十月;十一月;十二月" ;
	monthThisyear=monthThisyear.split(";");
	
	
	var Dn="初一;初二;初三;初四;初五;初六;初七;初八;初九;初十;十一;十二;十三;十四;十五;十六;十七;十八;十九;二十;廿一;廿二;廿三;廿四;廿五;廿六;廿七;廿八;廿九;三十"; 
	Dn=Dn.split(";"); 
	
	var isnMonth = new
		Array("01-","02-","03-","04-","05-","06-","07-","08-","09-","10-","11-","12-");
	var isnDay = new
		Array("周日","周一","周二","周三","周四","周五","周六","周日");
	var isndate=new Array("01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31");
	today = new Date() ; 
	
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
	var Year=today.getYear()
	
	if(browser4 == "msIE"){
		var winWidth=1255;/*ie会认为link的JS中的winWidth为0,初始化后恢复；*/
		Year=today.getYear();
	}
	else if(browser4 =="Fire"){
		Year=today.getYear()+1900;;
	}
	else{
		Year=today.getYear()+1900;
	}
	 
	Daten1=today.getDate(); 
	
	sec1=today.getTime();/*现在到1970.1.1之间的豪秒数*/
	sec2=sec1-sec0+8*3600*1000;/*UTC+08*/
	dayed=parseInt(sec2/spd);
	cndayed=dayed-dday;/*假设阴历不会少公历超1月;这个假设有时不一定对*/
	dperm=totaldayThisyear/monthThisyear.length  //
	cnmonth=parseInt(cndayed/dperm);/*农历第n-1月*/
	
	var total2=0;
	for(i=cnmonth+1;i<yearThisyear.length;i++){
	total2=total2+parseInt(yearThisyear[i]);
	}<!--当年剩余月份的天数-->
	
	pdma=totaldayThisyear-cndayed-total2;	/*当月还有几天*/
	pdm=yearThisyear[cnmonth]-pdma+1;		/*当月的第几天*/
	haveday=totaldayThisyear-cndayed-1;		/*尚可期待天数*/
	cnym=monthThisyear[cnmonth]+Dn[pdm-1];	/*农历月和日写到一起*/
	cnYear=monthThisyear[cnmonth];
	cnDay=Dn[pdm-1];
	//alert(cnym);
	var cnmonthNum=cnmonth+1;
	if(cnmonthNum<10){cnmonthNum="0"+cnmonthNum;}
	var cnDayNum=pdm;
	if(cnDayNum<10){cnDayNum="0"+cnDayNum;}
	var cnmonthDayNum=cnmonthNum+"-"+cnDayNum;
	//alert(cnmonthDayNum);
	enym=isnMonth[today.getMonth()]+isndate[Daten1-1]/*公历月和日写到一起*/
	//switch(cnym)	
	//case "四月初五":cnym=cnym+"&nbsp;"+"立夏";break;
	
	//===== 某年的第n个节气为几日(从0小寒起算)
	function sTerm(y,n) {
	var offDate = new Date( ( 31556925974.7*(y-1900)  //  31556925974.7一年的豪秒数
						+ sTermInfo[n]*60000  )    // 1分钟60000毫秒,sTermInfo记录的是分钟数
						+ Date.UTC(1900,0,6,2,5) ) // 指定的时间距GMT1970年1月1日午夜的毫秒数。
											// 1900年1月6号为小寒，小于此时间，则返回负数
	   return(offDate.getUTCDate()) 		//根据世界时从 Date 对象返回月中的一天 (1 ~ 31)。
	}
	function jieqi(y,m){
		d1 = sTerm(y,m*2  )
		d2 = sTerm(y,m*2+1)
		var Today = new Date();
		var tY = Today.getFullYear();
		var tM = Today.getMonth(); //2020.1.1返回0
		var tD = Today.getDate();
		if(tD == d1) return(solarTerm[m*2])
		if(tD == d2) return(solarTerm[m*2+1])
		return(' ')
	}
	var Today = new Date();
	var tY = Today.getFullYear();
	var tM = Today.getMonth(); //2020.1.1返回0
	var tD = Today.getDate();	
	cnym=cnym + "&nbsp;" + jieqi(tY,tM)
/*节气更改（第5处，已用函数替换）http://jieqi.xpcha.com http://www.nongli.com//*/
	switch(enym){
	//春雨惊春清谷天，夏满芒夏暑相连，
	//秋处露秋寒霜降，冬雪雪冬小大寒。
	//每月两节不变更，最多相差一两天，
	//上半年来六、廿一，下半年是八、廿三。
//	case "02-03":cnym=cnym+"&nbsp;"+"立春";break;
//	case "02-18":cnym=cnym+"&nbsp;"+"雨水";break;
//	case "03-05":cnym=cnym+"&nbsp;"+"惊蛰";break;
//	case "03-20":cnym=cnym+"&nbsp;"+"春分";break;
//	case "04-04":cnym=cnym+"&nbsp;"+"清明";break;
//	case "04-20":cnym=cnym+"&nbsp;"+"谷雨";break;
//	case "05-05":cnym=cnym+"&nbsp;"+"立夏";break;
//	case "05-21":cnym=cnym+"&nbsp;"+"小满";break;
//	case "06-05":cnym=cnym+"&nbsp;"+"芒种";break;
//	case "06-21":cnym=cnym+"&nbsp;"+"夏至";break;
//	case "07-07":cnym=cnym+"&nbsp;"+"小暑";break;
//	case "07-22":cnym=cnym+"&nbsp;"+"大暑";break;
//	case "08-07":cnym=cnym+"&nbsp;"+"立秋";break;
//	case "08-23":cnym=cnym+"&nbsp;"+"处暑";break;
//	case "09-07":cnym=cnym+"&nbsp;"+"白露";break;
//	case "09-23":cnym=cnym+"&nbsp;"+"秋分";break;
//	case "10-08":cnym=cnym+"&nbsp;"+"寒露";break;
//	case "10-23":cnym=cnym+"&nbsp;"+"霜降";break;
//	case "11-07":cnym=cnym+"&nbsp;"+"立冬";break;
//	case "11-22":cnym=cnym+"&nbsp;"+"小雪";break;
//	case "12-07":cnym=cnym+"&nbsp;"+"大雪";break;
//	case "12-22":cnym=cnym+"&nbsp;"+"冬至";break;
//	case "01-06":cnym=cnym+"&nbsp;"+"小寒";break;
//	case "01-20":cnym=cnym+"&nbsp;"+"大寒";break;
	}
	switch(cnym){		
	case "正月初一":cnym=cnym+"&nbsp;"+"春节"; break;	
	case "正月十五":cnym=cnym+"&nbsp;"+"元霄节"; break;	
	case "五月初五":cnym=cnym+"&nbsp;"+"端午节"; break;	
	case "七月十五":cnym=cnym+"&nbsp;"+"中元节"; break;	
	case "七月初七":cnym=cnym+"&nbsp;"+"七夕节"; break;	
	case "八月十五":cnym=cnym+"&nbsp;"+"中秋节";break;	
	case "九月初九":cnym=cnym+"&nbsp;"+"重阳节"; break;	
	case "十二月廿九":cnym=cnym+"&nbsp;"+"除夕"; break;	
	
	case "正月十一":cnym=cnym+"&nbsp;"+"BrotherDay";break;
	case "四月初六":cnym=cnym+"&nbsp;"+"GrandmDay";break;
	case "四月初八":cnym=cnym+"&nbsp;"+"FatherDay";break;
	case "九月廿一":cnym=cnym+"&nbsp;"+"MotherDay"; break;		
	}
	switch(enym){
	case "01-01":enym=enym+"&nbsp;"+"元旦";break;
	case "03-08":enym=enym+"&nbsp;"+"妇女节";break;
	case "05-04":enym=enym+"&nbsp;"+"青年节";break;
	case "06-01":enym=enym+"&nbsp;"+"儿童节";break;
	case "07-01":enym=enym+"&nbsp;"+"建党节";break;
	case "08-01":enym=enym+"&nbsp;"+"建军节";break;
	case "09-10":enym=enym+"&nbsp;"+"教师节";break;

	case "10-01":enym=enym+"&nbsp;"+"国庆节";break;
	}
	
function lunarcn(){
	//（第5处是节气更改，作为变量中的字符的"2011"不更改）	
	<!--时间显示-->
	document.write(Year + "-"+"<font color=#008040>"+"<strong>"+"<span style='FONT-SIZE: 12px'>"+enym+"&nbsp;"+isnDay[today.getDay()]+"</span>"+"</strong>"+"</font>"+"&nbsp;");

	document.write(cnyear+"<strong>"+"<span style='FONT-SIZE: 12px'>"+"<font color=#0000FF>"+cnym+"</font>"+"</span>"+"</strong>");/*农历月日*/
	document.write("<style='font-align:right; '>"+" 已逝:"+cndayed+"天"+"<sup>"+"+"+"</sup>"+"&nbsp;");
	document.write("可期:"+"<font face='Arial' size='2px' color=#FF8040>"+"<strong>"+haveday+"</strong>"+"</font>"+"天"+"<sup>"+"+"+"</sup>"+"</style>");
}