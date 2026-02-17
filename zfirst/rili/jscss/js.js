<!--倒计时-->
var time_now_server,time_now_client,time_end,time_server_client,timerID;
time_end=new Date("Feb 17, 2026 00:00:00");
time_end=time_end.getTime();

time_now_server=new Date();
time_now_server=time_now_server.getTime();
time_now_client=new Date();
time_now_client=time_now_client.getTime();

time_server_client=time_now_server-time_now_client;
setTimeout("show_time()",1000);

function show_time()
{
	timer.innerHTML =time_server_client;

	var time_now,time_distance,str_time;
	var int_day,int_hour,int_minute,int_second;
	var time_now=new Date();
	time_now=time_now.getTime()+time_server_client;
	time_distance=time_end-time_now;
	if(time_distance>0)
	{
		int_day=Math.floor(time_distance/86400000)
		time_distance-=int_day*86400000;
		int_hour=Math.floor(time_distance/3600000)
		time_distance-=int_hour*3600000;
		int_minute=Math.floor(time_distance/60000)
		time_distance-=int_minute*60000;
		int_second=Math.floor(time_distance/1000)
	
		if(int_hour<10)
			int_hour="0"+int_hour;
		if(int_minute<10)
			int_minute="0"+int_minute;
		if(int_second<10)
			int_second="0"+int_second;
		str_time="<font style='font-size:14pt;color:#28C84A;font-weight:bold;'>"+int_day+"</font><font face='黑体' style='font-size:10pt;'>天</font><br>"+int_hour+":"+int_minute+":"+int_second;
		timer.innerHTML=str_time;
		setTimeout("show_time()",1000);
	}
	else
	{
		timer.innerHTML ="over";
		clearTimeout(timerID)
	}
}



//31号有问题
// line: 920 春节
//在head中chrome可以使用多个script标签，IE只能使用1个
<!--  // 日期资料 1900-2049 , 1900年1月31日农历正月初一
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
0x0c960,0x0d954,0x0d4a0,0x0da50,0x07552,0x056a0,0x0abb7,0x025d0,0x092d0,0x0cab5, // 2000-2019
0x0a950,0x0b4a0,0x0baa4,0x0ad50,0x055d9,0x04ba0,0x0a5b0,0x15176,0x052b0,0x0a930,
0x07954,0x06aa0,0x0ad50,0x05b52,0x04b60,0x0a6e6,0x0a4e0,0x0d260,0x0ea65,0x0d530,
0x05aa0,0x076a3,0x096d0,0x04bd7,0x04ad0,0x0a4d0,0x1d0b6,0x0d250,0x0d520,0x0dd45,
0x0b5a0,0x056d0,0x055b2,0x049b0,0x0a577,0x0a4b0,0x0aa50,0x1b255,0x06d20,0x0ada0);
// 以上为16进制，用位组合来表示信息（从右到左，从低位到高位），
// 1-4表示是否有闰月，及闰几月；
// 5-16表示12个月中每一个月是大月(30)还是小月(29)；
// 17-20表示闰月是大月还是小月，
// 1982年 0x0a974 0000 1010 1001 0111 0100  闰4月29天
// 2017年 0x15176 0001 0101 0001 0111 0110  闰6月30
// 表示1982年的4月为闰月，即有第二个4月，且是闰小月。
// 从1月到13月的天数依次为：30、29、30、29、 29(闰月)、30、29、29、30、 29、30、30、30。

var solarMonth=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
var Gan       =new Array("甲","乙","丙","丁","戊","己","庚","辛","壬","癸");
var Zhi       =new Array("子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥");
var Animals   =new Array("鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪");
var solarTerm =new Array("小寒","大寒",
						 "立春","雨水","惊蛰","春分","清明","谷雨",
						 "立夏","小满","芒种","夏至","小暑","大暑",
						 "立秋","处暑","白露","秋分","寒露","霜降",
						 "立冬","小雪","大雪","冬至")

var sTermInfo =new Array(0,21208, // 1900年的各个节气到小寒的分钟数
						  42467,63836,85337,107014,128867,150921,
						  173149,195551,218072,240693,263343,285989,
						  308563,331033,353350,375494,397447,419210,
						  440795,462224,483532,504758)
var nStr1 		= new Array('日','一','二','三','四','五','六','七','八','九','十')
var nStr2 		= new Array('初','十','廿','卅','　')
//var monthName 	= new Array("正月","二月","三月","四月","五月","六月",
							 //"七月","八月","九月","十月","冬月","腊月");
var monthName 	= new Array('端月','杏月','桃月','槐月','榴月','荷月',
							'兰月','桂月','菊月','露月','冬月','腊月');
var clickDay 	// 点击的日期是几号，由oneday()、oneToday()、oneToday2()更新
var zhisn		// 地支年
//公历节日 *表示放假日 festival
var sFtv = new Array( 
"0101 *元旦",
"0202 湿地日",
"0214 情人节",
"0303 爱耳日",
"0305 周恩来诞辰 青年志愿者服务日",
"0308 妇女节",
"0312 植树节",
"0314 警察日",
"0315 消费者权益日",
"0317 航海日",
"0321 森林日",
"0322 世界水日",
"0323 气象日",
"0401 愚人节",
"0407 卫生日",
"0422 地球日",
"0426 知识产权日",
"0501 劳动节",
"0504 青年节",
"0508 红十字日",
"0512 护士节",
"0515 家庭日",
"0517 电信日",
"0531 无烟日",
"0601 儿童节",
"0605 环境日",
"0606 爱眼日",
"0611 人口日",
"0623 奥林匹克日",
"0625 土地日",
"0626 禁毒日",
"0701 建党节 香港回归日",
"0704 美国国庆日",
"0707 抗日纪念日",
"0801 建军节",
"0808 中国爸爸节",
"0908 扫盲日",
"0910 教师节",
"0918 九·一八纪念日",
"0920 爱牙日",
"0921 和平日",
"0927 旅游日",
"0928 孔子诞辰",
"1001 *国庆节",
"1009 邮政日",
"1010 辛亥革命",
"1016 粮食日",
"1017 消除贫困日",
"0105 Dataiso建站日",
"1024 联合国日",
"1031 万圣节",
"1108 记者节",
"1112 孙中山诞辰",
"1201 艾滋病日",
"1210 人权日",
"1213 南京大屠杀纪念日",
"1220 澳门回归日",
"1224 平安夜",
"1225 圣诞节",
"1226 毛泽东诞辰")

//农历节日 *表示放假日
var lFtv = new Array(
"0101 *春节",
"0111 BrotherDay",
"0115 元宵节",
"0302 MyDay",
"0406 GrandmaDay",
"0408 FatherDay",
"0408 佛诞",
"0505 端午节",
"0707 七夕节",
"0715 盂兰盆节",
"0815 中秋节",
"0816 GrandpaDay",
"0909 重阳节",
"0921 MotherDay",
"0100 *除夕")

//某月的第几个星期几
var wFtv = new Array(
"0430 儿童日",
"0520 母亲节",
"0530 助残日",
"0630 父亲节 ",
"1144 感恩节")


<!--related function-->

//====================================== 传回农历 y年的总天数
function lYearDays(y) {
   var i, sum = 348  							// 29*12
   for(i=0x8000; i>0x8; i>>=1)  				// 1000 0000 0000 0000
   		sum += (lunarInfo[y-1900] & i)? 1: 0	// 大月加1（以29*12为基准）
   return(sum+leapDays(y))						// 闰年加该年闰月天数
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

//====================================== 算出农历, 传入Date对象, 传回农历日期对象
// 函数构造器构造的Date对象属性有 .year .month .day（农历年、月、日） .isLeap 
// .yearCyl .monCyl .dayCyl(农历干支，以下干支月、干支日都有问题)
<!--Lunar-->

function Lunar(objDate) { // 函数构造器，构造一个对象，this表示对象本身

   var i, leap=0, temp=0
   var baseDate = new Date(1900,0,31)		// 在JS中，0-11表示1-12月，1900.1.31号是正月初一
   var offset=(objDate - baseDate)/86400000 // 86400000：一天的毫秒数，offset是两个日期相距天数
											// 在函数构造器中，构造一个对象，this表示对象自身。
   this.dayCyl = offset + 40  			// 1900,0,31是甲辰日，是41
   this.monCyl = 14							// 干支纪月，China year lunar，正月建寅（立春后）
											// 1900,1,31是正月初一，丁丑月，立春是初四，
   for(i=1900; i<2050 && offset>0; i++) { 	// offset>0控制到参数objDate的日期
      temp = lYearDays(i)
      offset -= temp		// offset通过递减算农历日，递减所有年的天数、参数年的所有月天数
      this.monCyl += 12
   }

   if(offset<0) {
      offset += temp;
      i--;
      this.monCyl -= 12
   }

   this.year = i
   this.yearCyl = i-1864

   leap = leapMonth(i) 							// 闰哪个月
   this.isLeap = false

   for(i=1; i<13 && offset>0; i++) {			// 处理闰月，计算temp更新offset
      if(leap>0 && i==(leap+1) && this.isLeap==false)
         { 
		 	--i; 
			this.isLeap = true; 
			temp = leapDays(this.year); }
      else
         { temp = monthDays(this.year, i); }

      if(this.isLeap==true && i==(leap+1))  	// 解除闰月
	  	  this.isLeap = false

      offset -= temp							// offset减少参数日期的月份天数，以算法农历日
      if(this.isLeap == false) 
	  		this.monCyl ++
   }

   if(offset==0 && leap>0 && i==leap+1) 		// 恢复闰月
      if(this.isLeap)
         { this.isLeap = false; }
      else
         { 
		 	this.isLeap = true; 
		 	--i; 
			--this.monCyl;}

   if(offset<0){ 
   		offset += temp; 
		--i; 
		--this.monCyl; }

   this.month = i
   this.day = offset + 1
}

//==============================传回公历 y年某m+1月的天数
function solarDays(y,m) {
   if(m==1)
      return(((y%4 == 0) && (y%100 != 0) || (y%400 == 0))? 29: 28)
   else
      return(solarMonth[m])
}

//============================== 传入 offset 传回干支, 0=甲子
function cyclical(num) {
   return(Gan[num%10]+Zhi[num%12])
}

//============================== 月历属性
function calElement(sYear,sMonth,sDay,week,lYear,lMonth,lDay,isLeap,cYear,cMonth,cDay) {
      this.isToday    = false;
      // 公历
      this.sYear      = sYear;
      this.sMonth     = sMonth;
      this.sDay       = sDay;
      this.week       = week;
      // 农历
      this.lYear      = lYear;
      this.lMonth     = lMonth;
      this.lDay       = lDay;
      this.isLeap     = isLeap;
      // 干支
      this.cYear      = cYear;
      this.cMonth     = cMonth;
      this.cDay       = cDay;
	  this.cAnimal    = Animals[(lYear-4)%12];

      this.color      = '';

      this.lunarFestival = ''; // 农历节日
      this.solarFestival = ''; // 公历节日
      this.solarTerms    = ''; // 节气

}

//===== 某年的第n个节气为几日(从0小寒起算)
function sTerm(y,n) {
   var offDate = new Date( ( 31556925974.7*(y-1900)  //  31556925974.7一年的豪秒数
   						+ sTermInfo[n]*60000  )       // 1分钟60000毫秒,sTermInfo记录的是分钟数
						+ Date.UTC(1900,0,6,2,5) ) // 指定的时间距GMT1970年1月1日午夜的毫秒数。
												  // 1900年1月6号为小寒，小于此时间，则返回负数
   return(offDate.getUTCDate()) 			//根据世界时从 Date 对象返回月中的一天 (1 ~ 31)。
}

//==================传回月历对象 (y年,m+1月),lDpos、n、firstlM都是用于辅助由农历求公历
 
function calendar(y,m) {
   var sDObj, lDObj, lY, lM, lD=1, lL, lX=0, tmp1, tmp2
   var lDPOS = new Array(3)				// 公历和农历在某一年月的日期差的节点不会超过3个
   var n = 0
   var firstLM = 0
// 2020.1.1  2019.12.7
// i  lD     lX  n	lm  firstlM  lDPOS
// 0   1      0  0        0             
// 0   1→7   30 1  12    12    [0]=-6  公历和农历在某一年月的日期差及节点
// 24  31→1  30 2   1    12    [1]=24  
   sDObj = new Date(y,m,1)            	// 当月一日日期

   this.length    = solarDays(y,m)    	// 公历当月天数
   this.firstWeek = sDObj.getDay()    	// 公历当月1日星期几

   for(var i=0;i<this.length;i++) { 	// 参数是y,m，这里处理
      if(lD>lX) { 					  	// lX ，农历当月最後一天，首先计算一次全部
	  									// 一旦大于，重新计算全部，否则只需lD++
         sDObj = new Date(y,m,i+1)		// 当月日期
         lDObj = new Lunar(sDObj)		// 农历
         lY    = lDObj.year           	// 农历年
         lM    = lDObj.month          	// 农历月
         lD    = lDObj.day            	// 农历日
         lL    = lDObj.isLeap         	// 农历是否闰月
         lX    = lL ? leapDays(lY): monthDays(lY,lM) // 农历当月最後一天

         if(n==0) 
		 	firstLM = lM
         lDPOS[n++] = i-lD+1 // 某月公历日与农历日之差
		 //alert(n)
      }

	  // this[i]是一个对象数组，公历月对应的数据cDay(lD++)
      this[i] = new calElement(y, m+1, i+1, nStr1[Math.floor((i+this.firstWeek)%7)],
                               lY, monthName[lM-1], lD++, lL,			//此处lD有更新
                               cyclical(lDObj.yearCyl),
							   cyclical(lDObj.monCyl), 
							   cyclical(lDObj.dayCyl++))

      if((i+this.firstWeek)%7==0)   this[i].color = 'red'  // 周日颜色
      if((i+this.firstWeek)%14==13) this[i].color = 'red'  // 周休二日颜色
   }

   // 节气
   tmp1 = sTerm(y,m*2  )-1 						// 第m*2个节是几号
   tmp2 = sTerm(y,m*2+1)-1
   this[tmp1].solarTerms = solarTerm[m*2]
   this[tmp2].solarTerms = solarTerm[m*2+1]
   if(m==3) this[tmp1].color = 'red' 			// 清明颜色

   // 公历节日
   for(i in sFtv)
      if(sFtv[i].match(/^(\d{2})(\d{2})([\s\*])(.+)$/))		// "0601 儿童节",
         if(Number(RegExp.$1)==(m+1)) {
            this[Number(RegExp.$2)-1].solarFestival += RegExp.$4 + ' '
            if(RegExp.$3=='*') 
				this[Number(RegExp.$2)-1].color = 'red'
         }

   // 月周节日
   for(i in wFtv)
      if(wFtv[i].match(/^(\d{2})(\d)(\d)([\s\*])(.+)$/)) // "0520 母亲节",某月的第几个星期几
         if(Number(RegExp.$1)==(m+1)) {
            tmp1=Number(RegExp.$2) 	// 第几个星期
            tmp2=Number(RegExp.$3) 	// 星期几
            this[((this.firstWeek>tmp2)? 7 :0 ) + 7*(tmp1-1) + tmp2 
					- this.firstWeek].solarFestival += RegExp.$5 + ' '
         }
/*var lFtv = new Array(
"0101 *春节",
"0115 元宵节",
"0100 *除夕")*/
// 2020.1.1  2019.12.7
// i  lD     lX  n	lm  firstlM  lDPOS
// 0   1      0  0        0             
// 0   1→7   30 1  12    12    [0]=-6  公历和农历在某一年月的日期差及节点
// 24  31→1  30 2   1    12    [1]=24  
// 2020.2.8  2020.1.15
// i  lD     lX  n	lm  firstlM  lDPOS
// 0   1      0  0        0             
// 0   1→ 8  30 1   1    1     [0]=-7  公历和农历在某一年月的日期差及节点
// 24  31→1  30 2   1    12    [1]=24  
   // 农历节日  //当闰年时，以下有问题，还有如2019.7等，某些月显示不出来
   
   // 2019.7有问题
if(browserType()== "chro")
{
   for(i in lFtv)							// foreach循环中的i表示的是数组的key是string类型
      if(lFtv[i].match(/^(\d{2})(.{2})([\s\*])(.+)$/)) {// "0505 端午节",
         tmp1=Number(RegExp.$1)-firstLM 				// 农历月份
		 //alert(tmp1)
         if(tmp1==-11) tmp1=1 							// 1月会是-12
		 //alert(tmp1)
         if(tmp1 >=0 && tmp1<n) {
            tmp2 = Math.round(lDPOS[tmp1+1]) + Number(RegExp.$2) -1 	// 某月公历日与农历日相差日期+农历日
			//lert(lDPOS[2])
            if( tmp2 >= 0 && tmp2<this.length) {
               this[tmp2].lunarFestival += RegExp.$4 + " "
               if(RegExp.$3=='*') this[tmp2].color = 'red'
            }
         }
      }
}

if(browserType()== "msie")
{
   for(i in lFtv)							// foreach循环中的i表示的是数组的key是string类型
      if(lFtv[i].match(/^(\d{2})(.{2})([\s\*])(.+)$/)) {// "0505 端午节",
         tmp1=Number(RegExp.$1)-firstLM 				// 农历月份
         if(tmp1==-11) tmp1=1 							// 1月会是-12
         if(tmp1 >=0 && tmp1<n) {
            tmp2 = lDPOS[tmp1] + Number(RegExp.$2) -1 	// 某月公历日与农历日相差日期+农历日
            if( tmp2 >= 0 && tmp2<this.length) {
               this[tmp2].lunarFestival += RegExp.$4 + ' '
               if(RegExp.$3=='*') this[tmp2].color = 'red'
            }
         }
      }
}
   // 今日
   if(y==tY && m==tM) this[tD-1].isToday = true;

}

//====================== 中文日期
function cDay(d){
   var str;
   switch (d) {
      case 10:
         str = '初十'; break;
      case 20:
         str = '二十'; break;
         break;
      case 30:
         str = '三十'; break;
         break;
      default :
	  {
		 str = nStr2[Math.floor(d/10)];	 
         str += nStr1[Math.floor(d%10)];
		}
   }
   return(str);
}


<!--drawCld-->

//----------------------------------drawCld-------calendar-------------------
var Today = new Date();
var tY = Today.getFullYear();
var tM = Today.getMonth();
var tD = Today.getDate();
var tdd;
var cld;					// 日期对象
function drawCld(SY,SM) { 	// 参数是选择列表的年、月
   var i,sD,s,size;
   cld = new calendar(SY,SM);
   
	zhisn = cld[1].lYear%12-3-1
	zhisn = (zhisn>=0)?zhisn:zhisn+12	
   if(SY>1949) 
   		yDisplay = '&nbsp;建国' + (((SY-1949)==1)?'元':SY-1949)

	//为html标签GZ写入html数据
   GZ.innerHTML = '<font COLOR="#ffffff" STYLE="font-size:11pt; vertical-align:middle;">'+yDisplay +'周年&nbsp;' + cyclical(cld[tD].lYear-1900+36)//cld[1].lYear原来是SY
   					+cld[tD].cAnimal+'年' +'</font>'; 		
					//Animals[(cld[1].lYear-4)%12]+'年';   Animals[zhisn]

   for(i=0;i<42;i++) { 		// 6*7
      sObj=eval('SD'+ i);  	// eval()函数计算 JavaScript 字符串，并把它作为脚本代码来执行
      lObj=eval('LD'+ i);	// html标签（动态ID）
	  tdd =eval('GD'+ i);
      sObj.className = '';
	  tdd.style.backgroundColor =  '';
      sD = i - cld.firstWeek;

      if(sD>-1 && sD<cld.length) { 			// 日期内
         sObj.innerHTML = sD+1;    			// 循环输入公历日期
         //if(cld[sD].isToday) sObj.className = 'todayColor'; // 今日颜色
		 if(cld[sD].isToday) tdd.style.backgroundColor = '#ff8800'; // 设置背景颜色
		 //CSS是不区分大小写的，所以两个英文字中间用了一个横杠"-"，
		 // 用JS区分大小写，所以不用横杠"-"
         sObj.style.color = cld[sD].color; 	// 国定假日颜色
         if(cld[sD].lDay==1) 				// 农历初一显示农历月
            lObj.innerHTML = '<b>'+(cld[sD].isLeap?'闰':'') + cld[sD].lMonth + '月' 
							+ (monthDays(cld[sD].lYear,cld[sD].lMonth)==29?'小':'大')+'</b>';
         else 								// 显示农历日
            lObj.innerHTML = cDay(cld[sD].lDay);

         s = cld[sD].lunarFestival;
         if(s.length>0) { 					// 农历节日
            if(s.length>6) s = s.substr(0, 4)+'…';
            s = s.fontcolor('red');
         }
         else { 							// 公历节日
            s=cld[sD].solarFestival;
            if(s.length>0) {
               size = (s.charCodeAt(0)>0 && s.charCodeAt(0)<128)?8:4;
               if(s.length>size+2) s = s.substr(0, size)+'…';
               s = s.fontcolor('blue');
            }
            else { 							// 廿四节气
               s=cld[sD].solarTerms;
               if(s.length>0) s = s.fontcolor('limegreen');
            }
         }
         if(s.length>0) lObj.innerHTML = s;

      }
      else { 								// 非日期
         sObj.innerHTML = '';
         lObj.innerHTML = '';
      }
   }  
}

function changeCld() {
   var y,m;
   y = CLD.SY.selectedIndex+1900;
   m = CLD.SM.selectedIndex;
   drawCld(y,m);
   printDate(m+1,clickDay)
   var d = new Date()
   var d2 = new Date(y,m,d.getDate(),0,0,0)
   var ld = new Lunar(d2);
   var lm = ld.month;

   picOutput(lm)

}

function pushBtm(K) { 	// 参数为按钮调用函数参数
   switch (K){
      case 'YU' : 		// 上一年
	  {
         if(CLD.SY.selectedIndex>0) CLD.SY.selectedIndex--; 
         break;
	  }
      case 'YD' : 		// 下一年
         if(CLD.SY.selectedIndex<149) 
		 	document.getElementById("SY").selectedIndex++;
         break;
      case 'MU' : 		// 上一月
         if(CLD.SM.selectedIndex>0) {
            CLD.SM.selectedIndex--;
         }
         else {
            CLD.SM.selectedIndex=11;
            if(CLD.SY.selectedIndex>0) CLD.SY.selectedIndex--;
         }
         break;
      case 'MD' : 		// 下一月
         if(CLD.SM.selectedIndex<11) {
            CLD.SM.selectedIndex++;
         }
         else {
            CLD.SM.selectedIndex=0;
            if(CLD.SY.selectedIndex<149) CLD.SY.selectedIndex++;
         }
         break;
      default : 		// 本　月
	  {}
   }
   changeCld();
   oneToday2(clickDay)
   
}

function toToday()
{
	CLD.SY.selectedIndex=tY-1900;
	CLD.SM.selectedIndex=tM;
	var Today = new Date()
	drawCld(Today.getFullYear(),Today.getMonth())
	oneToday()
   	var ld = new Lunar(Today);
   	var lm = ld.month;
   	picOutput(lm)

	printDate(tM+1,Today.getDate())
	goto(Today.getDate())



}


<!--oneday-->	 


var width    = "130";
var offsetx  = 2;
var offsety  = 16;

var x    = 0;
var y    = 0;
var snow = 0;
var sw   = 0;
var cnt  = 0;

var dStyle;

function oneday(v) { // mouseover显示详细日期资料
	var s,festival;
	var sObj = eval('SD'+ v);
	var d    = sObj.innerHTML-1;
	clickDay = cld[d].sDay
	//alert(d)
	jy = jiyue(cld[d].sYear,cld[d].sMonth,cld[d].sDay) 	// 纪月
	jr = jiri(cld[d].sYear,cld[d].sMonth,cld[d].sDay)	// 纪日

   if(sObj.innerHTML!='') {
      sObj.style.cursor = 's-resize';
	  
	  // 构造festival html字符串
      if(cld[d].solarTerms == '' && cld[d].solarFestival == '' && cld[d].lunarFestival == '')
         festival = '';
      else
         festival = '<font COLOR="#0f0" STYLE="font-size:14pt;">'+cld[d].solarTerms + ' ' + cld[d].solarFestival + ' ' + cld[d].lunarFestival+'</font>';
		 
	// 构造一个显示在某一个对象的innerHTML内的字符串
      s= '<table border="1" cellpadding="0" cellspacing="0" width="0%" '+'bordercolorlight="#000000" bordercolor="#FFFFFF" '+'height="0%" bgcolor="#C0C0C0"><tr><td>' +
         "<table border='1' cellspacing='3' width='160' bordercolor='#009B00' bgcolor='#FFFFFF' height='108' cellpadding='2'"+'<tr><td ALIGN="center" style="line-height:28px;"><font COLOR="#00f" STYLE="font-size:14pt;">'+
         cld[d].sYear+' 年 '+cld[d].sMonth+' 月 '+ "</font><br><font face='Arial' size='6' color=#FF8040>"+ cld[d].sDay + "</font><br><font face='Arial' size='4' color=blue>星期"+cld[d].week+'</font><br>'+
         '<font color="black">'+cld[d].cYear +' '+ cld[d].cAnimal+'年 <br>'+
         '<font color="#8B0000">'+(cld[d].isLeap?'闰 ':' ')+cld[d].lMonth+' '+ cDay(Math.floor(cld[d].lDay)) + ' </font><br>'+jy+'月 '+ jr + '日</font>'+
         '</font><br>'+ festival +'</td></tr></table>'; //Animals[(cld[1].lYear-4)%12]

       document.all["detail2"].innerHTML = s;

		if (snow == 0) {
			 dStyle.left = x+offsetx-(width/2);
			 dStyle.top = y+offsety;
			 dStyle.visibility = "visible";
			 snow = 1;
		}
	}
	printDate(cld[d].sMonth,cld[d].sDay)
	goto(cld[d].sDay)
}

function oneToday() { // 小表格显示详细某日资料
	var s,festival;

	var dd = new Date()
	//var d  = dd.getDay()+dd.getDate()-1;
	var d  = dd.getDate()-1;
	//alert(d)
	clickDay = dd.getDate()
	jy = jiyue(cld[d].sYear,cld[d].sMonth,cld[d].sDay) 	// 纪月
	jr = jiri(cld[d].sYear,cld[d].sMonth,cld[d].sDay)	// 纪日


	festival = '<font COLOR="#0f0" STYLE="font-size:14pt;">'+cld[d].solarTerms + ' ' + cld[d].solarFestival + ' ' + cld[d].lunarFestival+'</font>';
		 
	// 构造一个显示在某一个对象的innerHTML内的字符串
      s= '<table border="1" cellpadding="0" cellspacing="0" width="0%" '+'bordercolorlight="#000000" bordercolor="#FFFFFF" '+'height="0%" bgcolor="#C0C0C0"><tr><td>' +
         "<table border='1' cellspacing='3' width='160' bordercolor='#009B00' bgcolor='#FFFFFF' height='110' cellpadding='2'"+'<tr><td ALIGN="center" style="line-height:32px;"><font COLOR="#00f" STYLE="font-size:14pt;">'+
         cld[d].sYear+' 年 '+cld[d].sMonth+' 月 '+ "</font><br><font face='Arial' size='8' color=#FF8040>"+ cld[d].sDay + "</font><br><font face='Arial' size='4' color=blue>星期"+cld[d].week+'</font><br>'+
         '<font color="black">'+cld[d].cYear +' '+ cld[d].cAnimal+'年 <br>'+
         '<font color="#8B0000">'+(cld[d].isLeap?'闰 ':' ')+cld[d].lMonth+' '+ cDay(Math.floor(cld[d].lDay)) + ' </font><br>'+jy+'月 '+ jr + '日</font>'+
         '</font><br>'+ festival +'</td></tr></table>';

       document.all["detail2"].innerHTML = s;

}
function oneToday2(d) {  // <>按钮调用
	var s,festival;

	var dd = new Date()
	var d    = dd.getDay()+dd.getDate()-1;
	d = clickDay-1
	//alert(d)
	jy = jiyue(cld[d].sYear,cld[d].sMonth,cld[d].sDay) 	// 纪月
	jr = jiri(cld[d].sYear,cld[d].sMonth,cld[d].sDay)	// 纪日


         festival = '<font COLOR="#0f0" STYLE="font-size:14pt;">'+cld[d].solarTerms + ' ' + cld[d].solarFestival + ' ' + cld[d].lunarFestival+'</font>';
		 
	// 构造一个显示在某一个对象的innerHTML内的字符串
      s= '<table border="1" cellpadding="0" cellspacing="0" width="0%" '+'bordercolorlight="#000000" bordercolor="#FFFFFF" '+'height="0%" bgcolor="#C0C0C0"><tr><td>' +
         "<table border='1' cellspacing='3' width='160' bordercolor='#009B00' bgcolor='#FFFFFF' height='110' cellpadding='2'"+'<tr><td ALIGN="center" style="line-height:32px;"><font COLOR="#00f" STYLE="font-size:14pt;">'+
         cld[d].sYear+' 年 '+cld[d].sMonth+' 月 '+ "</font><br><font face='Arial' size='8' color=#FF8040>"+ cld[d].sDay + "</font><br><font face='Arial' size='4' color=blue>星期"+cld[d].week+'</font><br>'+
         '<font color="black">'+cld[d].cYear +' '+ cld[d].cAnimal+'年 <br>'+
         '<font color="#8B0000">'+(cld[d].isLeap?'闰 ':' ')+cld[d].lMonth+' '+ cDay(Math.floor(cld[d].lDay)) + ' </font><br>'+jy+'月 '+ jr + '日</font>'+
         '</font><br>'+ festival +'</td></tr></table>';

       document.all["detail2"].innerHTML = s;

}
// 干支纪月以每月交节日作为分界点，并不是阴历中的初一为分界点。以立春为寅月开始。
// 把冬至所在之月称为“子月”（近似农历十一月），下一个月称为“丑月”（近似农历十二月）
// 该年寅月的天干号为：取公历年份除以5的余数减2后乘以2再减1.当该数是负数时加10。
function jiyue(y,m,d)
{
	var tmp = sTerm(y,(m-1)*2) // 第m*2个节是几号

	var g = (y%5-2)*2-1+m-1
	if(g<0) g+=10
	if(g>10) g-=10
	var z=(m+2)%12
	if(d<tmp){
		i = g-3
		j = z-3
	}else{
		i = g-2 // 
		j = z-2
	}
	if(i<0) i+=10
	if(j<0) j+=12 
	return (Gan[i]+Zhi[j])
}
// 干支纪日 高氏日柱公式
function jiri(y,m,d)
{ 
	if(isSLeap(y))
	{
		if(m<=2){
			m+=12
			y--
		}
		else m-=2
	}
	var s = y%100
	var u = s%4
	var x = 0
	var jr = 0
	if(Math.floor(y/100)==19) x = 9
	if(Math.floor(y/100)==20) x = -6
	jr = Math.floor(s/4)*6 + 5*(Math.floor(s/4)*3+u)
	
	jr += 30*(Math.pow(-1,m)+1)/2 + Math.floor((3*m-7)/5)+d+x
	jr =jr%60

	i=Math.floor(jr%10)-1
	if(i<0) i=10-1

	j=Math.floor(jr%12)-1
	if(j<0) j=12-1
	//document.write(jr+' ' +i + ' ' + j + ' ')
	return Gan[i]+Zhi[j]
}


<!--mouseover-->	

function isSLeap(y){
	return (((y%4==0) && (y%100!=0)) || (y%400==0))
}
document.onmousemove = mEvn; //mEvn()取得鼠标位置

// 显示详细日期资料
function mOvr(v) {
   var s,festival;
   var sObj = eval('SD'+ v);
   var d    = sObj.innerHTML-1;

   if(sObj.innerHTML!='') {
      sObj.style.cursor = 's-resize';
      if(cld[d].solarTerms == '' && cld[d].solarFestival == '' && cld[d].lunarFestival == '')
         festival = '';
      else
         festival = '<table width=100% BORDER=0 CELLPADDING=2 CELLSPACING=0 BGCOLOR="#CCFFCC"><tr><td>'+
         '<font COLOR="#000000" STYLE="font-size:9pt;">'+cld[d].solarTerms + ' ' + cld[d].solarFestival + ' ' + cld[d].lunarFestival+'</font></td>'+
         '</tr></table>';
	// 构造一个显示在某一个对象的innerHTML内的字符串 右键
      s= '<table width="130" BORDER=0 CELLPADDING="2" CELLSPACING=0 BGCOLOR="#FF9900"><tr><td>' +
         '<table width=100% BORDER=0 CELLPADDING=0 CELLSPACING=0><tr><td ALIGN="right"><font COLOR="#ffffff" STYLE="font-size:9pt;">'+
         cld[d].sYear+' 年 '+cld[d].sMonth+' 月 '+cld[d].sDay+' 日<br>星期'+cld[d].week+'<br>'+
         '<font color="#0000CC">农历'+(cld[d].isLeap?'闰 ':' ')+cld[d].lMonth+' 月 '+ Math.floor(cld[d].lDay) + ' 日</font><br>'+
         '<font color="yellow">'+cld[d].cYear+'年 '+cld[d].cMonth+'月 '+cld[d].cDay + '日</font>'+
         '</font></td></tr></table>'+ festival +'</td></tr></table>';

       document.all["detail"].innerHTML = s;

		if (snow == 0) {
			 dStyle.left = x+offsetx-(width/2);
			 dStyle.top = y+offsety;
			 dStyle.visibility = "visible";
			 snow = 1;
		}
	}
}

function mOut() { // 清除详细日期资料 右键
	if ( cnt >= 1 ) { sw = 0 }
	if ( sw  == 0 ) { snow = 0;	dStyle.visibility = "hidden";}
	else cnt++;
}

function mEvn() { // 取得位置
   x=event.x;
   y=event.y;
	if (document.body.scrollLeft)
	   {x=event.x+document.body.scrollLeft; y=event.y+document.body.scrollTop;}
	if (snow){
      dStyle.left = x+offsetx-(width/2)
      dStyle.top = y+offsety
	}
}

///////////////////////////////////////////////////////////////////////////

function tick() {
   var today
   today = new Date()
   Clock.innerHTML = today.toLocaleString().replace(/(年|月)/g, "/").replace(/日/, "");
   Clock.innerHTML = TimeAdd(today.toGMTString(), CLD.TZ.value)
   window.setTimeout("tick()", 1000);
}

function setCookie(name, value) {
	var today   = new Date()
	var expires = new Date()
	expires.setTime(today.getTime() + 1000*60*60*24*365)
	document.cookie = name + "=" + escape(value)	+ "; expires=" + expires.toGMTString()
}

function getCookie(Name) {
   var search = Name + "="
   if(document.cookie.length > 0) {
      offset = document.cookie.indexOf(search)
      if(offset != -1) {
         offset += search.length
         end = document.cookie.indexOf(";", offset)
         if(end == -1) end = document.cookie.length
         return unescape(document.cookie.substring(offset, end))
      }
      else return ""
   }
}


<!--日期图片-->
function printDate(m,d) {
	var months = new Array();
	var days = new Array();
	months[1] ="img/jan.gif";
	months[2] ="img/feb.gif";
	months[3] ="img/mar.gif";
	months[4] ="img/apr.gif";
	months[5] ="img/may.gif";
	months[6] ="img/jun.gif";
	months[7] ="img/jul.gif";
	months[8] ="img/aug.gif";
	months[9] ="img/sep.gif";
	months[10] ="img/oct.gif";
	months[11] ="img/nov.gif";
	months[12] ="img/dec.gif";
	days[1] ="img/1st.gif";
	days[2] ="img/2nd.gif";
	days[3] ="img/3rd.gif";
	days[4] ="img/4th.gif";
	days[5] ="img/5th.gif";
	days[6] ="img/6th.gif";
	days[7] ="img/7th.gif";
	days[8] ="img/8th.gif";
	days[9] ="img/9th.gif";
	days[10] ="img/10th.gif";
	days[11] ="img/11th.gif";
	days[12] ="img/12th.gif";
	days[13] ="img/13th.gif";
	days[14] ="img/14th.gif";
	days[15] ="img/15th.gif";
	days[16] ="img/16th.gif";
	days[17] ="img/17th.gif";
	days[18] ="img/18th.gif";
	days[19] ="img/19th.gif";
	days[20] ="img/20th.gif";
	days[21] ="img/21st.gif";
	days[22] ="img/22nd.gif";
	days[23] ="img/23rd.gif";
	days[24] ="img/24th.gif";
	days[25] ="img/25th.gif";
	days[26] ="img/26th.gif";
	days[27] ="img/27th.gif";
	days[28] ="img/28th.gif";
	days[29] ="img/29th.gif";
	days[30] ="img/30th.gif";
	days[31] ="img/31st.gif";
	var str= '<img src="' + months[m] + '"><br>' // month
	//document.write('<img src="' + days[theDate.getDate()] + '">'); // day
	str +='<img src="' + days[d] + '">' // day
	detail3.innerHTML = str
	
	
var month24 = new Array();
	month24[1] ="1月小寒接大寒。大寒三候：鸡乳、征鸟厉疾、水泽腹坚。";	
month24[2] ="2月立春雨水连。立春雨水到，早起晚睡觉。尺麦怕寸水。立春：东风解冻、蜇虫始振、鱼陟负冰；雨水三候：獭祭鱼、鸿雁来、草木萌动";	
month24[3] ="惊蛰春分在3月。惊蜇地气通，锄麦莫放松。春分麦起身，肥水要紧跟。春分秋分，昼夜平分。惊蛰三候：桃始华、仓庚鸣、鹰化为鸠。";	
month24[4] ="清明谷雨4月天。清明前后，种瓜点豆。清明物候：桐始华、田鼠化为鴽、虹始见、萍始生。谷雨三候：萍始生、鸣鸠拂其羽、戴胜降于桑。";	
month24[5] ="5月立夏和小满。立夏物候：蝼蝈鸣，蚯蚓出，王瓜生，苦菜秀。小满三候：苦菜秀、靡草死、麦秋至。";	
month24[6] ="6月芒种夏至连。芒种芒种，连收带种。“芒”字指麦类等作物的收获，“种”字是指谷黍类作物的播种，“芒种”二字表明一切作物都在“忙种”了，是农事最为繁忙的时节。夏至三候：鹿角解、蝉始鸣、半夏生。";	
month24[7] ="7月小署和大暑。大暑三候：腐草为萤、土润溽暑、大雨时行。";	
month24[8] ="立秋处署8月间。处暑，即为“出暑”，是炎热离开的意思。处暑三候：鹰乃祭鸟、天地始肃、禾乃登。";	
month24[9] ="9月白露接秋分。秋分种麦正当时。白露三候：鸿雁来、玄鸟归、群鸟养羞。";
month24[10] ="10月寒露霜降。寒露收山楂，霜降刨地瓜。寒露三候：鸿雁来宾、雀入大水为蛤、菊有黄华。";	
month24[11] ="11月立冬小雪。立，建始也；冬，终也，万物收藏也。";
month24[12] ="12月大雪冬至";
months24.innerHTML = month24[m];
		
}

function picOutput(m) {
	
	var flowers = new Array();

	flowers[1] ="flowers/端月.jpg";
	flowers[2] ="flowers/杏月.jpg";
	flowers[3] ="flowers/桃月.jpg";
	flowers[4] ="flowers/槐月.jpg";
	flowers[5] ="flowers/榴月.jpg";
	flowers[6] ="flowers/荷月.jpg";
	flowers[7] ="flowers/兰月.jpg";
	flowers[8] ="flowers/桂月.jpg";
	flowers[9] ="flowers/菊月.jpg";
	flowers[10] ="flowers/露月.jpg";
	flowers[11] ="flowers/冬月.jpg";
	flowers[12] ="flowers/腊月.jpg";

	var str= '<img src="' +flowers[m] + '">' // month
	
	flower.innerHTML = str
	
	var months = new Array();
	months[1] ="端月：一月水仙清水养，秦始皇嬴政因名字与正月同音犯忌，遂改称正月为端月。端，顶也，仍是开端伊始的意思。正月银柳插瓶头，称柳月。";
	months[2] ="杏月：二月红杏闹枝头，农历二月处于仲春时节，土地回暖、春耕开始，民间有“龙抬头”等传统节日。";
	months[3] ="桃月：三月桃花粉面羞，三月，是养蚕的月份，所以叫“蚕月”。";
	months[4] ="槐月：四月槐花挂满枝，槐树绽开了黄白色的花瓣儿。";
	months[5] ="榴月：五月石榴红胜火，许多人家悬挂菖蒲、艾叶于门上，用以避邪，因此，五月又称蒲月";
	months[6] ="荷月：六月荷花另样红，六月三伏赤日炎炎，许多植物在酷夏的灼烤下无精打采，只有荷塘中的荷花亭亭玉立，精神抖擞";
	months[7] ="兰月：七月兰花清香溢，许多品种的兰花在七月吐芳，馨香无比故得名。七月七日是中国妇女向天上的织女星“乞巧”的月份，乞求织女使她们心灵手巧。所以，七月就叫“巧月”。";
	months[8] ="桂月：八月桂花遍地开。";
	months[9] ="菊月：九月菊花傲秋霜。农历九月，万木萧瑟，落叶纷纷，独有那婀娜多姿、热烈怒放的菊花给人们以活力和温暖。";
	months[10] ="露月：十月芙蓉正上妆";
	months[11] ="冬月：十一月山茶初开放，冬月葭草吐绿头，又称葭月，在冬三月的正中间，此时节，冬日渐深，冬寒更甚。根据农历历法，冬至节气必须出现在农历十一月，如果出现误差，则用设闰月来进行调整。因为农历十一月是二十四节气中的冬至所在的月份，所以农历十一月又被称为冬月。";
	months[12] ="腊月：十二月梅花雪里香，因干燥少雨的气候适宜制作腊味而得名。腊月习俗包含扫尘、祭灶、写春联等，北方地区以腊月二十三为小年，南方则多以二十四为小年。腊是“猎”的通假字，“腊祭”亦为“猎祭”，指猎取禽兽祭祀先祖的意思。腊月二十五，推磨做豆腐。腊月二十六 ，杀猪割年肉。腊月二十七，宰鸡赶大集。年廿八，洗邋遢。";
	month.innerHTML = months[m];

	
}
function initial() {
	dStyle = detail.style;
	CLD.SY.selectedIndex=tY-1900;
	CLD.SM.selectedIndex=tM;
	var d = new Date()
	var ld = new Lunar(d);
	var lm = ld.month;
	picOutput(lm)	
	drawCld(tY,tM);
	var Today = new Date(tY,tM,1)
	oneday(tD+Today.getDay()-1)	
	goto(tD)
 
	
}

function jscss()
{
	var node = document.getElementById("clockdiv")
	node.style.display = "none";
	//node.style.display = "block";
}


	function goto(ao){
		var h=document.getElementById("tab").getElementsByTagName("h3");
		var d=document.getElementById("tab").getElementsByTagName("div");
		for(var i=0;i<34;i++){
			if(ao==i){
			h[i].className+=" up";
			d[i].className+=" block";
			}
		else {
			h[i].className=" ";
			d[i].className=" ";
	}}}
	function browserType()
	{
		var userAgent = navigator.userAgent.toLowerCase();
var browser = 
    (browser = userAgent.match(/qqbrowser\/([\d.]+)/))?"qqbrowser/"+browser[1]:
	(browser = userAgent.match(/se\s+2.x/))?"sogou/2.x": //sougou
	(browser = userAgent.match(/msie\s+([\d.]+)/))?"msie/"+browser[1]: //ie
	(browser = userAgent.match(/chrome\/([\d.]+)/))?"chrome/"+browser[1]: //chrome
	(browser = userAgent.match(/firefox\/([\d.]+)/))?"firefox/"+browser[1]: //firefox
	(browser = userAgent.match(/version\/([\d.]+)\s+safari\/([\d.]+)/))?"safari/"+browser[1]: //safari
	(browser = userAgent.match(/opera\/([\d.]+)([\w\W]+)version\/([\d.]+)/))?"opera/"+browser[3]: //opera
	"other browser";
	var browser4 = browser.substr(0,4);
	return browser4;
	}

<!--时钟，IE支持，chrome不支持 html 1188-->
 // Light 滤镜 模拟光源的投射效果，滤镜只有IE支持，chrome也不支持alpha,但支持opacity
//·AddAmbient 		加入包围的光源 
//·AddCone 		加入锥形光源 
//·AddPoint 		加入点光源 
//·Changcolor 		改变光的颜色 
//·Changstrength 	改变光源的强度 
//·Clear 			清除所有的光源 
//·MoveLight 		移动光源
function setLights(){
	var sx=Math.cos(slightDir)*slightr;
	var sy=Math.sin(slightDir)*slightr;
	var mx=Math.cos(mlightDir)*mlightr;
	var my=Math.sin(mlightDir)*mlightr;
	var hx=Math.cos(hlightDir)*hlightr;
	var hy=Math.sin(hlightDir)*hlightr;
	sconDiv.filters.Light.clear();
	sconDiv.filters.Light.addCone(sx+72,sy+72,1,73,72,215,255,5,20,1);
	sconDiv.filters.Light.addCone(mx+72,my+72,1,73,72,255,10,0,20,2);
	sconDiv.filters.Light.addCone(hx+72,hy+72,1,73,72,15,100,255,20,4);
	sconDiv.filters.Light.addAmbient(155,155,155,100);
}
 
function timeGo(){
	var tt=new Date();
	slightDir=(tt.getSeconds())/60*6.28-1.57;
	mlightDir=(tt.getMinutes())/60*6.28-1.57;
	hlightDir=(tt.getHours())/12*6.28-1.57+mlightDir/6.28*0.52+0.05;
	dateDiv.innerText=tt.getMonth()+1+"月- "+tt.getDate()+'号';
	timeDiv.innerText=tt.getHours()+" : "+tt.getMinutes();
	setLights();
}
 
function InitClock(){
	slightr=110;
	mlightr=90;
	hlightr=60;
	timeGo();
	setInterval("timeGo()",1000);
}

