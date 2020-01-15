<%@LANGUAGE="VBSCRIPT" CODEPAGE="936"%>
<!--#include file="Connections/selfrecords.asp" -->
<%
Dim Recordset1
Dim Recordset1_numRows

Set Recordset1 = Server.CreateObject("ADODB.Recordset")
Recordset1.ActiveConnection = MM_selfrecords_STRING
Recordset1.Source = "SELECT * FROM news"
Recordset1.CursorType = 0
Recordset1.CursorLocation = 2
Recordset1.LockType = 1
Recordset1.Open()

Recordset1_numRows = 0
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<script charset="GB2312" language="JavaScript" type="text/javascript" src="calendar.js"></script>
<script type="text/javascript">
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
</script>

<script type="text/javascript">
window.onload = function(){
var fv=document.getElementById("day1");
fv.value=monthThisyear[cnmonth];
var fv2=document.getElementById("day2");
fv2.value=Dn[pdm-1];
}
</script>

<style type="text/css">
.table2{
width:88%;
margin:auto;
margin-bottom:8px;border:1px solid #eee;

}
.table2 td{
border:0px solid red;
padding-left:6px;
}
.table2 tr>td+td+td{
text-align:left;}
.table2 tr>td+td{
text-align:right;
padding-right:6px;
}
.table3{
width:100%;
margin:auto;
margin-bottom:2px;
font-size:14px;
}
.table3 td{
border:0px solid red;
vertical-align:top;
}
#table .table3 td p{
line-height:17px;
margin:0;

}
.tableinner{
margin:0;
padding:0;
}
.tableinner td{
margin:0;
padding:0;
height:24px;
}

/*——————实现下拉列表可输入(firefox不支持this.parentNode.nextSibling.value=this.value；支持this.parentNode.nextElementSibling.value=this.value，firfox默认nextSibling是空格或回车，所以把两个node对应的空格删掉，代码写到一起，tag之间没有空格即可解决问题；)－－－－－*/
/*——————onchange="this.parentNode.nextSibling.value=this.value"－－－－－*/

.span1{position:relative}/*包围整个可输入的下拉框，以下三个元素*/
.span2{
	margin-left:45px;
	overflow:hidden;}/*包围select元素*/
.selectcss{     /*select元素*/
	width:69px;
	margin-left:-45px;
	margin-left:-46px\9;
 }
.inputcss{       /*input元素*/
	width:45px;
	font-size:14px;
	height:16px;
	margin-top:0px;
	position:absolute;
	left:0px;
}
/*——————实现下拉列表可输入－－－－－*/

/*——————weather:sunny,cloudy,rainy－－－－－*/

.span1w{position:relative}/*包围整个可输入的下拉框，以下三个元素*/
.span2w{
	margin-left:105px;
	overflow:hidden;}/*包围select元素*/
.selectcssw{     /*select元素*/
	width:129px;
	margin-left:-105px;
	margin-left:-106px\9;
 }
.inputcssw{       /*input元素*/
	width:105px;
	font-size:14px;
	height:16px;
	margin-top:0px;
	position:absolute;
	left:0px;
}
/*——————------－－－－－*/

#tab,#tab2,#tab3,#tab4 {
position:relative; /* 定义选项卡的为相对定位，使其子级元素有定位参考对象 */
width:88%;/* 定义选项卡的整体宽度 */
height:184px;
clear:both;
margin:auto;
} 

#tab div,#tab2 div,#tab3 div,#tab4 div {
	position:absolute;
	top:28px;
	left:0px;
	width:100%;
	height:156px;/* 204-28(H3)-6(bottom)*/
	display:none;
}

#tab .block,#tab2 .block,#tab3 .block,#tab4 .block{
	display:block;
	padding-bottom:6px;
} /* 当选项卡某个内容区域被激活时，显示内容，并设置该容器底部的内补丁为10px */

#tab h3,#tab2 h3,#tab3 h3,#tab4 h3 {/*total h:26+1*2=28   */
	float:left;
	width:76px;
	height:26px;
	margin:1px 1px; /* 利用负边距让标题更靠近一点 */
	line-height:26px;
	font-size:16px;
	font-weight:normal;
	text-align:center;
	color:#00007F;
	background:#EEEEEE url(../img/tab_bg.gif) no-repeat right top;
	background-position:right;
	cursor:pointer;
	cursor:url(img/rose.ani);
	display:block;
	overflow:hidden;
	filter:Alpha(opacity:100)
} /* 将所有的标签标题浮动，并设置其宽度和高度等属性，再添加背景图修饰标题 */
#tab4 h3 a:visited{
font-size:16px;
color:#00007F;
}


#tab .up,#tab2 .up,#tab3 .up,#tab4 .up {
	background:#fff url(../img/tab_up_bg.gif) no-repeat;
} /* 当某个标题被激活时改变背景图片，突出显示 */

#tab ul,#tab2 ul,#tab3 ul,#tab4 ul,#ones ul{
	margin:4px 0 0;
	list-style:none;
}

#tab li,#tab2 li,#tab3 li,#tab4 li,#ones li {
	display:inline; /* 解决IE6中双倍间距的BUG */
	float:left;
	width:240px; /* 解决IE浏览器中相对值宽度计算的BUG */
	height:21px;
	line-height:18px;
	border-bottom:1px dashed #DEDEDE;
	overflow:hidden;
}

#tab li a,#tab2 li a,#tab3 li a,#tab4 li a,#ones li a {
	font-size:14px;
	text-decoration:none;
	text-indent:8px;
	color:#333333;
}

#tab li a:hover,#tab2 li a:hover,#tab3 li a:hover,#tab4 li a:hover,#ones li a:hover {
color:#0000FF;
margin-left:0px;/*文字会形成移动*/
}
#tab li a:visited,#tab2 li a:visited,#tab3 li a:visited,#tab4 li a:visited,#ones li a:visited {
color:#0000FF;
margin-left:0px;/*文字会形成移动*/
}
#tab p{
margin: 6px 0;
}
#tab .table3 td p{
line-height:17px;
margin:0;

}
</style>
<title>add record</title>
</head>

<body>



<form ACTION="add.asp" METHOD="POST" id="form1" name="form1">
<table class="table2" style="">
<colgroup>
<col  width="28%" />
<col  width="12%" />
<col  width="20%" />
<col  width="40%" />
</colgroup>
    <tr>
   <td style="font-size:1.2em; font-weight:bold;">Add record</td> 
      <td>Time:</td>
      <td colspan="2"><input name="vtime" type="text" id="vtime" value="<%=now()%>" size="20" />	  
&nbsp;&nbsp;<script type="text/javascript">     //农历的另一年份时，需更改6处（第6处是节气更改，作为变量中的字符的"2011"不更改）	
	
				document.write(Year+"-"+"<font color=#008040>"+"<strong>"+"<span style='FONT-SIZE: 12px'>"+enym+"&nbsp;"+isnDay[today.getDay()]+"</font>"+"</strong>"+"</span>"+"&nbsp;")
				
				document.write(cnyear+"<strong>"+"<span style='FONT-SIZE: 12px'>"+"<font color=#0000FF>"+cnym+"</span>"+"</strong>"+"</font>"+"&nbsp;")/*农历月日*/
				document.write("已逝:"+cndayed+"天"+"<sup>"+"+"+"</sup>"+"&nbsp;")
				document.write("可期:"+"<font face='Arial' size='2px' color=#FF8040>"+"<strong>"+haveday+"</strong>"+"</font>"+"天"+"<sup>"+"+"+"</sup>"+"&nbsp;"+"&nbsp;")
		</script></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>Week:</td>
      <td>
	
	<span class="span1">
		<span class="span2">
		<select class="selectcss" onchange="this.parentNode.nextSibling.value=this.value">
		
		<option value="Mon.">Mon.</option>
		<option value="Tue.">Tue.</option>
		<option value="Wed.">Wed.</option>
		<option value="Thur.">Thur.</option>
		<option value="Fri.">Fri.</option>
		<option value="Sat.">Sat.</option>
		<option value="Sun.">Sun.</option>
		</select>  
	  </span><input class="inputcss"  name="week" type="text" id="week" value="<% dim mya :mya=array("函数WeekDay(date)值1－7对应Sun.,Mon. ...;而数组下标是以0开始的","Sun.","Mon.","Tue.","Wed.","Thur.","Fri.","Sat.") :response.Write(mya(WeekDay(date))) %>" size="5" />	  </td>
      <td><a href="http://www.worldtimezone.com/" target="_blank">世界时间</a></td>
    </tr>
<tr>
      <td>      </td>
      <td>LunarCalendar:</td>
      <td>

	<span class="span1">
		<span class="span2">
		<select class="selectcss" onchange="this.parentNode.nextSibling.value=this.value">
		<option value="正月">正月</option>
		<option value="二月">二月</option>
		<option value="三月">三月</option>
		<option value="四月">四月</option>
		<option value="五月">五月</option>
		<option value="六月">六月</option>
		<option value="七月">七月</option>
		<option value="八月">八月</option>
		<option value="九月">九月</option>
		<option value="十月">十月</option>
		<option value="十一月">十一月</option>
		<option value="十二月">十二月</option>
		</select>
		</span><input class="inputcss" name="day1" id="day1" />
	</span>
	<span class="span1">
		<span class="span2">
		<select class="selectcss" onchange="this.parentNode.nextSibling.value=this.value">
		<option value="初一">初一</option>
		<option value="初二">初二</option>
		<option value="初三">初三</option>
		<option value="初四">初四</option>
		<option value="初五">初五</option>
		
		<option value="初六">初六</option>
		<option value="初七">初七</option>
		<option value="初八">初八</option>
		<option value="初九">初九</option>
		<option value="初十">初十</option>
		
		<option value="十一">十一</option>
		<option value="十二">十二</option>
		<option value="十三">十三</option>
		<option value="十四">十四</option>
		<option value="十五">十五</option>
		
		<option value="十六">十六</option>
		<option value="十七">十七</option>
		<option value="十八">十八</option>
		<option value="十九">十九</option>
		<option value="二十">二十</option>
				
		<option value="二一">二一</option>
		<option value="二二">二二</option>
		<option value="二三">二三</option>
		<option value="二四">二四</option>
		<option value="二五">二五</option>
		
		<option value="二六">二六</option>
		<option value="二七">二七</option>
		<option value="二八">二八</option>
		<option value="二九">二九</option>
		<option value="三十">三十</option>
		</select>
		</span><input class="inputcss" name="day2" id="day2" size="5" />
	</span>	</td>
      <td><a href="http://www.hao123.com/rili" target="_blank">万年历</a></td>
    </tr>

    <tr>
      <td></td>
      <td>Temper(lowest):</td>
      <td>

	<span class="span1">
		<span class="span2">
		<select class="selectcss" onchange="this.parentNode.nextSibling.value=this.value">
			<% for k=10 to 35 %>
			<option value=<%=k%>><%=k%></option>
			<% next %>
		</select>
		</span><input class="inputcss" name="weather" id="weather" value=""  />
&nbsp;&nbsp;&nbsp;&nbsp;	</span></td>
      <td><a href="http://php.weather.sina.com.cn/search.php?city=广州" target="_blank">天气预报(GZ)</a></td>
    </tr>
	
	
	
    <tr>
      <td></td>
      <td>Temper(highest): </td>
<td>
<!--——————span1实现其内元素的相对定位－－－－－-->
<!--——————span2封闭整个select,－－－－－-->
<!--——————this.parentNode:其上的span(称span1)－－－－－-->
<!--——————this.parentNode.nextSibling:span1的临近节点input－－－－－-->
	<span class="span1">
		<span class="span2">
		<select class="selectcss" onchange="this.parentNode.nextSibling.value=this.value">
			<% for j=20 to 45 %>
			<option value=<%=j%>><%=j%></option>
			<% next %>
		</select>
		</span><input class="inputcss" name="weather2" id="weather2" value=""  />
	</span></td>
<td><a href="http://www.tianqihoubao.com/weather/top.aspx?id=73&city_id=440100" target="_blank">天气后报(GZ)</a></td>
    </tr>
    <tr>
      <td></td>
      <td>Weather:</td>
      <td>
	  
	<span class="span1w">
		<span class="span2w">
		<select class="selectcssw" onchange="this.parentNode.nextSibling.value=this.value">

			<option value="sunny">sunny</option>
			<option value="cloudy">cloudy</option>
			<option value="rainy">rainy</option>
			<option value="windy">windy</option>
			<option value="rainy">rainy</option>
		</select>
        </span>
		<input class="inputcssw" name="weather3" id="weather3" value="sunny"  />
&nbsp;&nbsp;&nbsp;&nbsp;	</span>	  </td>
      <td><a href="weather.html" target="_blank">天气词汇</a></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>Body feeling:</td>
      <td>
	  	<span class="span1w">
		<span class="span2w">
<select class="selectcssw" onchange="this.parentNode.nextSibling.value=this.value">

			<option value="chilly">chilly</option>
			<option value="cool">cool</option>
			<option value="hot">hot</option>
			<option value="scorchingHeat">scorchingHeat</option>
			<option value="muggy">muggy</option>
		</select>
		</span><input class="inputcssw" name="weather4" id="weather4" value=""  />
	</span>	  </td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td>Summary:</td>
      <td colspan="2"><input name="title" type="text" id="title" size="40" /></td>
    </tr>
    <tr>
      <td style="vertical-align:bottom;">
<table class="tableinner">

<tr></tr>
<tr>
<td><span style="text-align:left;"><a href="http://www.iciba.com" target="_blank">iciba</a></span></td>
</tr>
<tr>
  <td>&nbsp;</td>
</tr>
<tr><td><a href="鲁迅、郁达夫日记比较阅读.html">鲁迅、郁达夫日记比较阅读</a></td></tr>
<tr><td><a href="鲁迅日记感.html">鲁迅日记感</a></td></tr>
<tr>
  <td>&nbsp;</td>
</tr>
</table>	  </td>
      <td>Content:</td>
      <td colspan="2"><textarea name="content" cols="70" rows="8" id="content">
<p></p>
<p></p>
<p></p>
      </textarea></td>
    </tr>
    <tr>
      <td><a href="admin.asp" target="_self">回到列表</a></td>
      <td><a href="addnews.asp">addnews</a></td>
      <td><input type="submit" name="Submit" value="提交" />&nbsp;&nbsp;<input type="reset" name="Submit2" value="重置" /></td>
      <td>&nbsp;</td>
    </tr>
  </table>
 
</form>
  
  <div id="tab">
<h3 class="up" onclick="goto1(1);">新浪天气</h3>
<h3 onclick="goto1(2);">天气词汇</h3>
<h3 onclick="goto1(3);">鲁迅日记</h3>
<h3 onclick="goto1(4);">郁达夫日记</h3>
<h3 onclick="goto1(5);">百度词典</h3>
<h3 onclick="goto1(6);">名人日记</h3>

<div class="block" id="c11"><!--p11  -->


<iframe width="100%" height="230" src="http://php.weather.sina.com.cn/search.php?city=%B9%E3%D6%DD" frameborder="no" border="0" marginwidth="0" marginheight="88" scrolling="auto"></iframe>

	</div> <!--p11  -->

<div><!--p12  -->
<table class="table3">
  <tr>
<td>
<p>Fair 晴</p>
<p>Mostly Clear 大部晴朗</p>
<p>Clouds Early 早多云</p>
<p>Clearing Late 晚转晴</p>
<p>Partly Cloudy/ Windy 多云时有风</p>

<p>Calm 无风</p>
<p>gentle/Light/moderate breeze 微/轻/和风</p>
<p>fresh/strong breeze 清/强风</p>
<p>gale/squall 大风/狂风</p>
<p>gust wind 疾风</p>
<p>violent storm 暴风</p>
</td>
	  
<td>
<p>Light Drizzle 微雨</p>
<p>Drizzle 毛毛雨</p>
<p>Light Rain 小雨</p>
<p>Few Showers 短暂阵雨</p>
<p>intermitten 间歇雨</p> 
<p>Heavy Rain 大雨</p>
<p>Downpour 滂沱大雨</p>
<p>Heavy T-Storm 强烈雷雨</p>
<p>Isolated T-Storms 局部雷雨</p>

<p>Light Rain Shower &amp; Windy 小阵雨带风</p>

<p>Light Rain with Thunder 小雨有雷声</p>
    </td>
 
<td>
<p>Light Snow 小雪</p>
<p>Drifting Snow 飘雪</p>
<p>Heavy Snow 大雪</p>  
<p>Light Snow Grains 小粒雪</p>
<p>Light Snow Shower 小阵雪</p>
<p>Few Snow Showers 短暂阵雪</p>
<p>Few Snow Showers/Wind 短暂阵雪时有风</p>
<p>Heavy Rain Icy 大冰雨</p>
<p>Fog 雾</p>
<p>Haze 薄雾</p>
<p>Hail 冰雹</p>
</td>

<td>
<P>Scorching Heat 炎热</P>
<p>Muggy 闷热</p>
<p>Cool 凉快</p>
<p>Chilly 寒冷</p>

<p>lovely day</p>
<p>Dust 灰尘</p>
<p>Lightening 雷电</p>
<p>AM T-Storms 上午雷暴雨</p>

	  </td>
  </tr>
</table>
	</div> <!--p12  -->

<div><!--p13  -->
<p>三十日晴。上午访季芾。下午大睡。宗武寄赠《文录》一本。夜衣萍来。（1925.5.30,“五卅惨案”当天）
<p>十八日晴。上午寄小峰信。下午有麟来并赠糖食三种。夜鲁豢来，得秋芳信。（1926年，“三、一八惨案”）</p>

<p>十二日晴。午后得靖华信，一日发。（1927年“四、一二政变”）</p>

<p>九日小雨。上午张莹来。午后得刘岗信信并木刻八幅。得三笠书房编辑小川正夫信并赠《卜卜亻工夕戈亻全集》普及本全部，先得第一及第六两册。（1935年“一二、九运动”）</p>
</div> <!--<!--p13  -->

<div><!--p14 -->
<p>十二日，星期二，晴（三月十一日）。<p>东天未明，就听见窗外枪声四起。起床来洗面更衣，寒冷不可耐。急出户外，向驻在近旁的兵队问讯，知道总工会纠察队总部，在和军部内来缴械的军人开火，路上行人，受伤者数人，死者一二人。我披上大衣，冒险夺围，想冲出去，上南站去趁车，不意路途为戒严兵所阻。</p>

<p>天气很好，午前伏处在家里，心里很不舒服，窗外的轮声时断时续，大约此番缴械冲突，须持续至一昼夜以上。我颇悔昨晚不去南站，否则此刻已在杭沪道上。</p>

<p>午后出去访友人，谈及此番蒋介石的高压政策，大家都只敢怒而不敢言。从友人处出来，又上南站去打听沪杭车。晚上天又下雨，至法科大学上了一小时课，冒雨回至英界，向鼎新旅馆内投宿。</p>

<p>上床后，回想映霞心切，不能入睡。同乡陆某邀我打牌，就入局打了十二圈牌，至午前三时就寝。
</div> <!--p14 -->

<div><!--p15 -->


<iframe width="100%" height="220" src="http://dict.baidu.com/" frameborder="no" border="0" marginwidth="0" marginheight="88" scrolling="auto"></iframe>
</div> <!--p15 -->

<div><!--p16 -->
<h4>胡适早年留学美国时写过的日记</h4>

<p>7月4日 新开这本日记，也为了督促自己下个学期多下些苦功。先要读完手边的莎士比亚的《亨利八世》……</p>
<p>7月13日 打牌。</p>
<p>7月14日 打牌。</p>
<p>7月15日 打牌。</p>
<p>7月16日 胡适之啊胡适之！你怎么能如此堕落！先前订下的学习计划你都忘了吗？ 子曰：“吾日三省吾身。”……不能再这样下去了！</p>
<p>7月17日 打牌。</p>
<p>7月18日 打牌。</p>
<p>......</p>
七月四日
<p>读Plato's“Apology of Socrates”。</p>
<p>今日为美国独立纪念日，夜八时至湖上观此间庆祝会。士女游者无算，公园中百戏俱陈，小儿女燃花爆为乐。既而燃火作矣，五光十色，备极精巧。九时半始归。</p>
<p>七月五日</p>
<p>往暑期学校注册。下午打牌。</p>
<p>七月六日</p>
<p>暑期学校第一日，化学。打牌。</p>
<p>七月七日</p>
<p>上课。打牌。</p>
<p>七月八日</p>
<p>无事。打牌。天稍稍凉矣。</p>
<p>七月九日</p>
<p>读《马太福音》。</p>
<p>七月十日</p>
<p>上课。化学实验。左手拇指受玻璃管刺伤，流血甚多。</p>
<p>七月十一日</p>
<p>读Fosdick‘s“The Second Mile”。此书甚佳。余在Pocono曾见此人演说三次。作《哭乐亭诗》成：【这首诗我就不打出来了】</p>
<p>七月十二日</p>
<p>上课。读H.Begbie's&quot;Twice-born Men&quot;。</p>
<p>得怡荪书，附乐亭行述，嘱为之传。下午为草一传。久不作古文，荒陋可笑。昨日一诗，今日一文，稍稍了一心愿。然此岂所以酬死友者哉！【后面是程乐亭小传，也不打出来了】</p>
<p>七月十三日</p>
<p>上课。读《陶渊明诗》一卷。</p>
<p>化学第一小试。读拉丁文。</p>
<p>夜游公园，适天微雨，众皆避入跳舞厅内。已而乐作，有男女约二十双，双双跳舞。此为余见跳舞之第一次，故记之。</p>
<p>七月十五日</p>
<p>读拉丁文。读《谢康乐诗》一卷。作书寄友人。夜赴暑期学生之欢迎会。</p>
<p>七月十六日</p>
<p>游湖上别墅，归后大风雨。读拉丁文。</p>
<p>七月十七日</p>
<p>上课。化学试卷竟得百分，真出意外。读拉丁文。</p>
<p>七月十八日</p>
<p>上课。做化学算题，久不作算数之事矣。（去年北京试后，即未一亲此事。）</p>
<p>夜听Prof. Sprague演说“Milton”。此君为本校最先英文掌教，今老矣。</p>

<h4>季羡林清华园日记</h4>
<p>二日</p>
<p>今天才更深切地感到考试的无聊。一些放屁胡诌的讲义硬要我们记!</p>
<p>大千走了，颇有落寞之感。</p>
<p>十三日</p>
<p>昨夜一夜大风，今天仍然没停，而且其势更猛。</p>
<p>北平真是个好地方，唯独这每年春天的大风实在令人讨厌。</p>
<p>没做什么有意义的事——妈的，这些混蛋教授，不但不知道自己泄气，</p>
<p>还整天考，不是你考，就是我考，考他娘的什么东西?</p>
<p>二日</p>
<p>今天作Faust的Summary</p>
<p>无论多好的书，even Fausteven Faust。</p>
<p>只要拿来当课本读，立刻令我感觉到讨厌，这因为什么呢?我不明了。</p>
<p>过午看女子篮球赛，不是去看想［打］篮球，我想，只是去看大腿。</p>
<p>因为说到篮球，实在打得不好。</p>
<p>三日</p>
<p>今天整天都在预备Philology，真无聊。我今年过的是什么生活?不是test，</p>
<p>就是reading report，这种生活，我真有点受不了。</p>
<p>四日</p>
<p>今天早晨考Philology，不算好。</p>
<p>过午作Faust的Summary，也不甚有聊。</p>
<p>这几天来，一方面因为功课太多，实在还是因为自己太懒，Hlderlin的诗</p>
<p>一直没读，这使我难过，为什么自己不能督促自己呢?不能因了环境的不顺利，</p>
<p>就放弃了自己愿意读的书(写文章，也算在内)。</p>
<p>五日</p>
<p>今天又犯了老毛病，眼对着书，但是却看不进去，原因我自己明白：因为近几</p>
<p>天来又觉到没有功课压脑袋了。我看哪一天能把这毛病改掉了呢?我祈祷上帝。</p>
<p>零零碎碎地看了点Hlderlin，读来也不起劲，过午终于又到体育馆去看赛球。</p>
<p>六日</p>
<p>开始作论文，真是“论”无可“论”。</p>
<p>晚上又作了一晚上，作了一半。 听别人说，毕业论文最少要作二十页。</p>
<p>说实话，我真写不了二十页，但又不能不勉为其难，只好硬着头皮干了。</p>
<p>二十五日</p>
<p>……今天开始抄毕业论文，作到［倒］不怎样讨厌，抄比作还厌。……</p>
<p>二十六日</p>
<p>今天抄了一天毕业论文，手痛。……</p>
<p>二十七日</p>
<p>论文终于抄完了。东凑西凑，七抄八抄，这就算是毕业论文。论文虽然当之有愧，</p>
<p>毕业却真的毕业了。</p>
<p>晚上访朱光潜闲谈。朱光潜真是十八成好人，非常frank。</p>
<p>这几天净忙着做了些不成器的工作。我想在春假前把该交的东西都做完，旅行回来</p>
<p>开始写自己想写的文章</p>
</div>
<!--p16 -->
</div>
  
  



</body>
</html>
<%
Recordset1.Close()
Set Recordset1 = Nothing
%>
