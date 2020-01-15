// 农历闰年存在问题，逛网上的也同样
// function Lunar(objDate) {测试没有问题
// 日期资料 1900-2049 , 1900年1月1日周1农历正月初一
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

//0000 0111 1001 0101 0100   //0x07954  2020的信息没有问题

// 以上为16进制，用位组合来表示信息，
// 1-4(从右至左，从低位到高位)表示闰几月；
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

var sTermInfo =new Array(0,21208, //1900年的各个节气到小寒的分钟数
						  42467,63836,85337,107014,128867,150921,
						  173149,195551,218072,240693,263343,285989,
						  308563,331033,353350,375494,397447,419210,
						  440795,462224,483532,504758)
var nStr1 		= new Array('日','一','二','三','四','五','六','七','八','九','十','十一','十二')
var nStr2 		= new Array('初','十','廿','卅','　')
var monthName 	= new Array("1 月","2 月","3 月","4 月","5 月","6 月",
							 "7 月","8 月","9 月","10 月","11 月","12 月");
//公历节日 *表示放假日
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
"1018 逛网建站日",
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
"0115 元宵节",
"0408 佛诞",
"0505 端午节",
"0707 七夕节",
"0715 盂兰盆节",
"0815 中秋节",
"0909 重阳节",
"0100 *除夕")

//某月的第几个星期几
var wFtv = new Array(
"0430 儿童日",
"0520 母亲节",
"0530 助残日",
"0630 父亲节 ",
"1144 感恩节")

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
   else return(0) 			// 2017年 0x15176 0001 0101 0001 0111 0110  闰6月30
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
// 该Date对象属性有 .year .month .day .isLeap .yearCyl .dayCyl .monCyl
// JavaScript 对象构造器，是创建一种“对象类型”的方法
// 通过 new 关键词调用构造器函数可以创建相同类型的对象
// 用大写首字母对构造器函数命名是个好习惯。
function Lunar(objDate) {

   var i, leap=0, temp=0
   var baseDate = new Date(1900,0,31) 				// js的月份从0开始，0-11
   var offset   = (objDate - baseDate)/86400000   	// 86400000：一天的毫秒数
	// 除了字面值（原始值），JS中一切都是对象，函数也是，对象就有this指向自己
	// 该函数的使用lDObj = new Lunar(sDObj)     // 农历
	// 函数的参数是一个日期，所以其就是按一个日期来定义的，自然包含一些日期的元素（属性）
   this.dayCyl = offset + 40  	// // 在函数构造器中，构造一个对象，this表示对象自身。

   this.monCyl = 14				// China year lunar

   for(i=1900; i<2050 && offset>0; i++) {
      temp = lYearDays(i)
      offset -= temp
      this.monCyl += 12
   }

   if(offset<0) {
      offset += temp;
      i--;
      this.monCyl -= 12
   }

   this.year = i
   this.yearCyl = i-1864

   leap = leapMonth(i) 					// 闰哪个月
   this.isLeap = false

   for(i=1; i<13 && offset>0; i++) {	// 闰月
      if(leap>0 && i==(leap+1) && this.isLeap==false)
         { 
		 	--i; 
			this.isLeap = true; 
			temp = leapDays(this.year); }
      else
         { temp = monthDays(this.year, i); }

      if(this.isLeap==true && i==(leap+1))  // 解除闰月
	  	  this.isLeap = false

      offset -= temp
      if(this.isLeap == false) 
	  		this.monCyl ++
   }

   if(offset==0 && leap>0 && i==leap+1)
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
function cyclical(num) {  //周期的；循环的
   return(Gan[num%10]+Zhi[num%12])
}

//============================== 月历属性，通过函数构建的对象
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

      this.color      = '';

      this.lunarFestival = ''; // 农历节日
      this.solarFestival = ''; // 公历节日
      this.solarTerms    = ''; // 节气

}

//===== 某年的第n个节气为几日(从0小寒起算)
function sTerm(y,n) {
   var offDate = new Date( ( 31556925974.7*(y-1900)  //  31556925974.7一年的豪秒数
   						+ sTermInfo[n]*60000  )       //  1分钟60000毫秒,sTermInfo记录的是分钟数
						+ Date.UTC(1900,0,6,2,5) ) // 指定的时间距GMT1970年1月1日午夜的毫秒数。
												   // 1900年1月6号为小寒，小于此时间，则返回负数
   return(offDate.getUTCDate()) 			//根据世界时从 Date 对象返回月中的一天 (1 ~ 31)。
}

//============================== 传回月历对象 (y年,m+1月)
function calendar(y,m) {
   var sDObj, lDObj, lY, lM, lD=1, lL, lX=0, tmp1, tmp2
   var lDPOS = new Array(3)
   var n = 0
   var firstLM = 0

   sDObj = new Date(y,m,1)            // 当月一日日期

   this.length    = solarDays(y,m)    // 公历当月天数
   this.firstWeek = sDObj.getDay()    // 公历当月1日星期几

   for(var i=0;i<this.length;i++) {  // 一个公历月的日期数据
      if(lD>lX) {					  // lX农历当月最後一天
         sDObj = new Date(y,m,i+1)    // 当月一日日期
         lDObj = new Lunar(sDObj)     // 农历
         lY    = lDObj.year           // 农历年
         lM    = lDObj.month          // 农历月
         lD    = lDObj.day            // 农历日
         lL    = lDObj.isLeap         // 农历是否闰月
         lX    = lL ? leapDays(lY): monthDays(lY,lM) // 农历当月最後一天

         if(n==0) 
		 		firstLM = lM
         lDPOS[n++] = i-lD+1 // 某月公历日与农历日之差
      }

      //sYear,sMonth,sDay,week,
      //lYear,lMonth,lDay,isLeap,
      //cYear,cMonth,cDay
      this[i] = new calElement(y, m+1, i+1, nStr1[Math.floor((i+this.firstWeek)%7)],//公历
                               lY, lM, lD++, lL,//农历
                               cyclical(lDObj.yearCyl) ,cyclical(lDObj.monCyl),  // 干支
							   cyclical(lDObj.dayCyl++) )


      if((i+this.firstWeek)%7==0)   this[i].color = 'red'  //周日颜色
      if((i+this.firstWeek)%14==13) this[i].color = 'red'  //周休二日颜色
   }

   // 节气
   tmp1 = sTerm(y,m*2  )-1
   tmp2 = sTerm(y,m*2+1)-1
   this[tmp1].solarTerms = solarTerm[m*2]
   this[tmp2].solarTerms = solarTerm[m*2+1]
   if(m==3) this[tmp1].color = 'red' 			// 清明颜色

   // 公历节日
   for(i in sFtv)
      if(sFtv[i].match(/^(\d{2})(\d{2})([\s\*])(.+)$/))
         if(Number(RegExp.$1)==(m+1)) {
            this[Number(RegExp.$2)-1].solarFestival += RegExp.$4 + ' '
            if(RegExp.$3=='*') 
				this[Number(RegExp.$2)-1].color = 'red'
         }

   // 月周节日
   for(i in wFtv)
      if(wFtv[i].match(/^(\d{2})(\d)(\d)([\s\*])(.+)$/))
         if(Number(RegExp.$1)==(m+1)) {
            tmp1=Number(RegExp.$2)
            tmp2=Number(RegExp.$3)
            this[((this.firstWeek>tmp2)? 7 :0 ) + 7*(tmp1-1) + tmp2 
					- this.firstWeek].solarFestival += RegExp.$5 + ' '
         }
			//var lFtv = new Array(
			//"0101 *春节",
			//"0115 元宵节",
			//"0408 佛诞",
			//"0505 端午节",
			//"0707 七夕节",
			//"0715 盂兰盆节",
			//"0815 中秋节",
			//"0909 重阳节",
			//"0100 *除夕")
   // 农历节日  //当闰年时，以下有问题，还有如2019.7等，某些月显示不出来
   //以下IE OK chrome需要做修改
 /*  for(i in lFtv)
      if(lFtv[i].match(/^(\d{2})(.{2})([\s\*])(.+)$/)) { // 通过正则分解以上字符串
		  	// match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
		  	// ^c	匹配任何开头为 c 的字符串。
			// c$	匹配任何结尾为 c 的字符串。
		  	// ()分组、\d	查找数字。\s 查找空白字符。
			// c{n}	匹配包含 n 个 c 的序列的字符串。
			// .	查找单个字符，除了换行和行结束符。
		  	// n+	匹配任何包含至少一个 n 的字符串。
			// n*	匹配任何包含零个或多个 n 的字符串。
			
		 // Number()变量转换为数字
		 // alert(lDPOS[tmp1])
         tmp1 = Number(RegExp.$1)-firstLM // firstLM = lM(农历月，0-11)
         //if(tmp1==-11 && !lL) tmp1=1 // IE
		 //if(tmp1==-12 && lL) tmp1=1 // chrome
		 if(tmp1==-12) tmp1=1 // 农历平年11，闰年12
		 
         if(tmp1 >=0 && tmp1<n) {
			 
            tmp2 = lDPOS[tmp1] + Number(RegExp.$2) -1  //lDPOS[n++] = i-lD+1 //IE
			//tmp2 = Math.round(lDPOS[tmp1+1]) + Number(RegExp.$2) -1   //chrome
			//alert(tmp2)
            if( tmp2 >= 0 && tmp2<this.length) {
               this[tmp2].lunarFestival += RegExp.$4 + ' '
               if(RegExp.$3=='*') this[tmp2].color = 'red'
            }
         }
      }*/
	
	//console.log(firstLM)
   // 今日
   if(y==tY && m==tM) this[tD-1].isToday = true;

}

//====================== 中文日期
function cDay(d){
   var s;
   switch (d) {
      case 10:
         s = '初十'; break;
      case 20:
         s = '二十'; break;
         break;
      case 30:
         s = '三十'; break;
         break;
      default :
	  {
		 s = nStr2[Math.floor(d/10)];	 
         s += nStr1[Math.floor(d%10)];
		}
   }
   return(s);
}
//----------------------------------drawCld-------calendar-------------------
	var Today = new Date();
	var tY = Today.getFullYear();
	var tM = Today.getMonth();
	var tD = Today.getDate();

	var cld;						// 日期对象
	function drawCld(SY,SM,SD) { 	// 参数是选择列表的年、月
		cld = new calendar(SY,SM)
		str = '  '+ SY + '-' + eval(SM+1) + '-' + SD + ' '
		str = str + '周' + nStr1[eval(cld.firstWeek + SD-1)%7] + ' ' 
		sD = SD-1
		str += cyclical(cld[sD].lYear-1900+36)
		str += Animals[(cld[sD].lYear-4)%12]+'年 '
		var cnm = nStr1[cld[sD].lMonth] // 农历月
		if(monthDays(cld[sD].lYear,cld[sD].lMonth)==30)		// 显示农历月
			str += '<b>'+(cld[sD].isLeap?'闰':'') + cnm + '月</b>'
		else
			str += (cld[sD].isLeap?'闰':'') + cnm + '月'
								
		str += cDay(cld[sD].lDay)// 显示农历日
		cnm = cnm+'月' + cDay(cld[sD].lDay)
		str += ' '
		cndayed = -1
		haveday = -1
		//if(SM+1==1) && cld[sD].lMonth==12)
			//SY -= 1
		for(i=1;i<cld[sD].lMonth;i++)
			cndayed += monthDays(SY,i)
		cndayed += Math.floor(cld[sD].lDay)
		for(i=1;i<=12;i++)
			haveday += monthDays(SY,i)
		haveday -= cndayed
		str = str + '已逝:' + cndayed + '天' + '<sup>'+'+'+'</sup>'+'&nbsp;'
		str = str + "可期:"+"<font face='Arial' size='2px' color=#FF8040>"+"<strong>"+haveday+"</strong>"+"</font>"+"天"+"<sup>"+"+"+"</sup>"+"&nbsp;"+"&nbsp;"	
			
		if(cnm == "一月初一") str += " *春节"
		if(cnm == "一月十一") str += " BrotherDay"
		if(cnm == "一月十五") str += " 元宵节"
		if(cnm == "四月初六") str += " GrandmaDay"
		if(cnm == "四月初八") str += " FatherDay 佛诞"
		if(cnm == "五月初五") str += " 端午节"
		if(cnm == "七月初七") str += " 七夕节"
		if(cnm == "七月十五") str += " 盂兰盆节"
		if(cnm == "八月十五") str += " 中秋节"
		if(cnm == "八月十六") str += " GrandpaDay"
		if(cnm == "九月初九") str += " 重阳节"
		if(cnm == "九月廿一") str += " MotherDay"
/*		if(monthDays(cld[sD].lYear,12)== 29)
			{if(cnm == "十二月二九") str += " *除夕"}
		else
			{if(cnm == "十二月卅日") str += " *除夕"}*/
		if(haveday==0) str += " *除夕"
		//alert(cnm)
		str += cld[sD].solarFestival;
		str += cld[sD].solarTerms;
	   topup2.innerHTML =  str

}

function initial() {
	
	var Today = new Date();
	var SY = Today.getFullYear();
	var SM = Today.getMonth();
	var SD = Today.getDate(); 
	drawCld(SY,SM,SD);

}


