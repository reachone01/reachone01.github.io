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

/*������������ʵ�������б������(firefox��֧��this.parentNode.nextSibling.value=this.value��֧��this.parentNode.nextElementSibling.value=this.value��firfoxĬ��nextSibling�ǿո��س������԰�����node��Ӧ�Ŀո�ɾ��������д��һ��tag֮��û�пո񼴿ɽ�����⣻)����������*/
/*������������onchange="this.parentNode.nextSibling.value=this.value"����������*/

.span1{position:relative}/*��Χ�������������������������Ԫ��*/
.span2{
	margin-left:45px;
	overflow:hidden;}/*��ΧselectԪ��*/
.selectcss{     /*selectԪ��*/
	width:69px;
	margin-left:-45px;
	margin-left:-46px\9;
 }
.inputcss{       /*inputԪ��*/
	width:45px;
	font-size:14px;
	height:16px;
	margin-top:0px;
	position:absolute;
	left:0px;
}
/*������������ʵ�������б�����룭��������*/

/*������������weather:sunny,cloudy,rainy����������*/

.span1w{position:relative}/*��Χ�������������������������Ԫ��*/
.span2w{
	margin-left:105px;
	overflow:hidden;}/*��ΧselectԪ��*/
.selectcssw{     /*selectԪ��*/
	width:129px;
	margin-left:-105px;
	margin-left:-106px\9;
 }
.inputcssw{       /*inputԪ��*/
	width:105px;
	font-size:14px;
	height:16px;
	margin-top:0px;
	position:absolute;
	left:0px;
}
/*������������------����������*/

#tab,#tab2,#tab3,#tab4 {
position:relative; /* ����ѡ���Ϊ��Զ�λ��ʹ���Ӽ�Ԫ���ж�λ�ο����� */
width:88%;/* ����ѡ��������� */
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
} /* ��ѡ�ĳ���������򱻼���ʱ����ʾ���ݣ������ø������ײ����ڲ���Ϊ10px */

#tab h3,#tab2 h3,#tab3 h3,#tab4 h3 {/*total h:26+1*2=28   */
	float:left;
	width:76px;
	height:26px;
	margin:1px 1px; /* ���ø��߾��ñ��������һ�� */
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
} /* �����еı�ǩ���⸡�������������Ⱥ͸߶ȵ����ԣ�����ӱ���ͼ���α��� */
#tab4 h3 a:visited{
font-size:16px;
color:#00007F;
}


#tab .up,#tab2 .up,#tab3 .up,#tab4 .up {
	background:#fff url(../img/tab_up_bg.gif) no-repeat;
} /* ��ĳ�����ⱻ����ʱ�ı䱳��ͼƬ��ͻ����ʾ */

#tab ul,#tab2 ul,#tab3 ul,#tab4 ul,#ones ul{
	margin:4px 0 0;
	list-style:none;
}

#tab li,#tab2 li,#tab3 li,#tab4 li,#ones li {
	display:inline; /* ���IE6��˫������BUG */
	float:left;
	width:240px; /* ���IE����������ֵ��ȼ����BUG */
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
margin-left:0px;/*���ֻ��γ��ƶ�*/
}
#tab li a:visited,#tab2 li a:visited,#tab3 li a:visited,#tab4 li a:visited,#ones li a:visited {
color:#0000FF;
margin-left:0px;/*���ֻ��γ��ƶ�*/
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
&nbsp;&nbsp;<script type="text/javascript">     //ũ������һ���ʱ�������6������6���ǽ������ģ���Ϊ�����е��ַ���"2011"�����ģ�	
	
				document.write(Year+"-"+"<font color=#008040>"+"<strong>"+"<span style='FONT-SIZE: 12px'>"+enym+"&nbsp;"+isnDay[today.getDay()]+"</font>"+"</strong>"+"</span>"+"&nbsp;")
				
				document.write(cnyear+"<strong>"+"<span style='FONT-SIZE: 12px'>"+"<font color=#0000FF>"+cnym+"</span>"+"</strong>"+"</font>"+"&nbsp;")/*ũ������*/
				document.write("����:"+cndayed+"��"+"<sup>"+"+"+"</sup>"+"&nbsp;")
				document.write("����:"+"<font face='Arial' size='2px' color=#FF8040>"+"<strong>"+haveday+"</strong>"+"</font>"+"��"+"<sup>"+"+"+"</sup>"+"&nbsp;"+"&nbsp;")
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
	  </span><input class="inputcss"  name="week" type="text" id="week" value="<% dim mya :mya=array("����WeekDay(date)ֵ1��7��ӦSun.,Mon. ...;�������±�����0��ʼ��","Sun.","Mon.","Tue.","Wed.","Thur.","Fri.","Sat.") :response.Write(mya(WeekDay(date))) %>" size="5" />	  </td>
      <td><a href="http://www.worldtimezone.com/" target="_blank">����ʱ��</a></td>
    </tr>
<tr>
      <td>      </td>
      <td>LunarCalendar:</td>
      <td>

	<span class="span1">
		<span class="span2">
		<select class="selectcss" onchange="this.parentNode.nextSibling.value=this.value">
		<option value="����">����</option>
		<option value="����">����</option>
		<option value="����">����</option>
		<option value="����">����</option>
		<option value="����">����</option>
		<option value="����">����</option>
		<option value="����">����</option>
		<option value="����">����</option>
		<option value="����">����</option>
		<option value="ʮ��">ʮ��</option>
		<option value="ʮһ��">ʮһ��</option>
		<option value="ʮ����">ʮ����</option>
		</select>
		</span><input class="inputcss" name="day1" id="day1" />
	</span>
	<span class="span1">
		<span class="span2">
		<select class="selectcss" onchange="this.parentNode.nextSibling.value=this.value">
		<option value="��һ">��һ</option>
		<option value="����">����</option>
		<option value="����">����</option>
		<option value="����">����</option>
		<option value="����">����</option>
		
		<option value="����">����</option>
		<option value="����">����</option>
		<option value="����">����</option>
		<option value="����">����</option>
		<option value="��ʮ">��ʮ</option>
		
		<option value="ʮһ">ʮһ</option>
		<option value="ʮ��">ʮ��</option>
		<option value="ʮ��">ʮ��</option>
		<option value="ʮ��">ʮ��</option>
		<option value="ʮ��">ʮ��</option>
		
		<option value="ʮ��">ʮ��</option>
		<option value="ʮ��">ʮ��</option>
		<option value="ʮ��">ʮ��</option>
		<option value="ʮ��">ʮ��</option>
		<option value="��ʮ">��ʮ</option>
				
		<option value="��һ">��һ</option>
		<option value="����">����</option>
		<option value="����">����</option>
		<option value="����">����</option>
		<option value="����">����</option>
		
		<option value="����">����</option>
		<option value="����">����</option>
		<option value="����">����</option>
		<option value="����">����</option>
		<option value="��ʮ">��ʮ</option>
		</select>
		</span><input class="inputcss" name="day2" id="day2" size="5" />
	</span>	</td>
      <td><a href="http://www.hao123.com/rili" target="_blank">������</a></td>
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
      <td><a href="http://php.weather.sina.com.cn/search.php?city=����" target="_blank">����Ԥ��(GZ)</a></td>
    </tr>
	
	
	
    <tr>
      <td></td>
      <td>Temper(highest): </td>
<td>
<!--������������span1ʵ������Ԫ�ص���Զ�λ����������-->
<!--������������span2�������select,����������-->
<!--������������this.parentNode:���ϵ�span(��span1)����������-->
<!--������������this.parentNode.nextSibling:span1���ٽ��ڵ�input����������-->
	<span class="span1">
		<span class="span2">
		<select class="selectcss" onchange="this.parentNode.nextSibling.value=this.value">
			<% for j=20 to 45 %>
			<option value=<%=j%>><%=j%></option>
			<% next %>
		</select>
		</span><input class="inputcss" name="weather2" id="weather2" value=""  />
	</span></td>
<td><a href="http://www.tianqihoubao.com/weather/top.aspx?id=73&city_id=440100" target="_blank">������(GZ)</a></td>
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
      <td><a href="weather.html" target="_blank">�����ʻ�</a></td>
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
<tr><td><a href="³Ѹ��������ռǱȽ��Ķ�.html">³Ѹ��������ռǱȽ��Ķ�</a></td></tr>
<tr><td><a href="³Ѹ�ռǸ�.html">³Ѹ�ռǸ�</a></td></tr>
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
      <td><a href="admin.asp" target="_self">�ص��б�</a></td>
      <td><a href="addnews.asp">addnews</a></td>
      <td><input type="submit" name="Submit" value="�ύ" />&nbsp;&nbsp;<input type="reset" name="Submit2" value="����" /></td>
      <td>&nbsp;</td>
    </tr>
  </table>
 
</form>
  
  <div id="tab">
<h3 class="up" onclick="goto1(1);">��������</h3>
<h3 onclick="goto1(2);">�����ʻ�</h3>
<h3 onclick="goto1(3);">³Ѹ�ռ�</h3>
<h3 onclick="goto1(4);">������ռ�</h3>
<h3 onclick="goto1(5);">�ٶȴʵ�</h3>
<h3 onclick="goto1(6);">�����ռ�</h3>

<div class="block" id="c11"><!--p11  -->


<iframe width="100%" height="230" src="http://php.weather.sina.com.cn/search.php?city=%B9%E3%D6%DD" frameborder="no" border="0" marginwidth="0" marginheight="88" scrolling="auto"></iframe>

	</div> <!--p11  -->

<div><!--p12  -->
<table class="table3">
  <tr>
<td>
<p>Fair ��</p>
<p>Mostly Clear ������</p>
<p>Clouds Early �����</p>
<p>Clearing Late ��ת��</p>
<p>Partly Cloudy/ Windy ����ʱ�з�</p>

<p>Calm �޷�</p>
<p>gentle/Light/moderate breeze ΢/��/�ͷ�</p>
<p>fresh/strong breeze ��/ǿ��</p>
<p>gale/squall ���/���</p>
<p>gust wind ����</p>
<p>violent storm ����</p>
</td>
	  
<td>
<p>Light Drizzle ΢��</p>
<p>Drizzle ëë��</p>
<p>Light Rain С��</p>
<p>Few Showers ��������</p>
<p>intermitten ��Ъ��</p> 
<p>Heavy Rain ����</p>
<p>Downpour ��������</p>
<p>Heavy T-Storm ǿ������</p>
<p>Isolated T-Storms �ֲ�����</p>

<p>Light Rain Shower &amp; Windy С�������</p>

<p>Light Rain with Thunder С��������</p>
    </td>
 
<td>
<p>Light Snow Сѩ</p>
<p>Drifting Snow Ʈѩ</p>
<p>Heavy Snow ��ѩ</p>  
<p>Light Snow Grains С��ѩ</p>
<p>Light Snow Shower С��ѩ</p>
<p>Few Snow Showers ������ѩ</p>
<p>Few Snow Showers/Wind ������ѩʱ�з�</p>
<p>Heavy Rain Icy �����</p>
<p>Fog ��</p>
<p>Haze ����</p>
<p>Hail ����</p>
</td>

<td>
<P>Scorching Heat ����</P>
<p>Muggy ����</p>
<p>Cool ����</p>
<p>Chilly ����</p>

<p>lovely day</p>
<p>Dust �ҳ�</p>
<p>Lightening �׵�</p>
<p>AM T-Storms �����ױ���</p>

	  </td>
  </tr>
</table>
	</div> <!--p12  -->

<div><!--p13  -->
<p>��ʮ���硣����ü����������˯�������������¼��һ����ҹ��Ƽ������1925.5.30,����ئ�Ұ������죩
<p>ʮ�����硣�����С���š�����������������ʳ���֡�ҹ³���������﷼�š���1926�꣬������һ�˲Ұ�����</p>

<p>ʮ�����硣���þ����ţ�һ�շ�����1927�ꡰ�ġ�һ�����䡱��</p>

<p>����С�ꡣ������Ө���������������Ų�ľ�̰˷����������鷿�༭С�������Ų����������鹤Ϧ����ȫ�����ռ���ȫ�����ȵõ�һ���������ᡣ��1935�ꡰһ�������˶�����</p>
</div> <!--<!--p13  -->

<div><!--p14 -->
<p>ʮ���գ����ڶ����磨����ʮһ�գ���<p>����δ��������������ǹ����������ϴ����£����䲻���͡��������⣬��פ�ڽ��Եı�����Ѷ��֪���ܹ��������ܲ����ں;���������е�ľ��˿���·�����ˣ����������ˣ�����һ���ˡ������ϴ��£�ð�ն�Χ������ȥ������վȥ�ó�������·;Ϊ���ϱ����衣</p>

<p>�����ܺã���ǰ�����ڼ������ܲ���������������ʱ��ʱ������Լ�˷���е��ͻ���������һ��ҹ���ϡ����Ļ�����ȥ��վ������˿����ں������ϡ�</p>

<p>����ȥ�����ˣ�̸���˷�����ʯ�ĸ�ѹ���ߣ���Ҷ�ֻ��ŭ�������ԡ������˴�������������վȥ�����������������������꣬�����ƴ�ѧ����һСʱ�Σ�ð�����Ӣ�磬�����ù���Ͷ�ޡ�</p>

<p>�ϴ��󣬻���ӳϼ���У�������˯��ͬ��½ĳ���Ҵ��ƣ�����ִ���ʮ��Ȧ�ƣ�����ǰ��ʱ���ޡ�
</div> <!--p14 -->

<div><!--p15 -->


<iframe width="100%" height="220" src="http://dict.baidu.com/" frameborder="no" border="0" marginwidth="0" marginheight="88" scrolling="auto"></iframe>
</div> <!--p15 -->

<div><!--p16 -->
<h4>����������ѧ����ʱд�����ռ�</h4>

<p>7��4�� �¿��Ȿ�ռǣ�ҲΪ�˶����Լ��¸�ѧ�ڶ���Щ�๦����Ҫ�����ֱߵ�ɯʿ���ǵġ���������������</p>
<p>7��13�� ���ơ�</p>
<p>7��14�� ���ơ�</p>
<p>7��15�� ���ơ�</p>
<p>7��16�� ����֮������֮������ô����˶��䣡��ǰ���µ�ѧϰ�ƻ��㶼������ ��Ի����������ʡ����������������������ȥ�ˣ�</p>
<p>7��17�� ���ơ�</p>
<p>7��18�� ���ơ�</p>
<p>......</p>
��������
<p>��Plato's��Apology of Socrates����</p>
<p>����Ϊ�������������գ�ҹ��ʱ�����Ϲ۴˼���ף�ᡣʿŮ�������㣬��԰�а�Ϸ��£�С��Ůȼ����Ϊ�֡��ȶ�ȼ�����ӣ����ʮɫ���������ɡ���ʱ��ʼ�顣</p>
<p>��������</p>
<p>������ѧУע�ᡣ������ơ�</p>
<p>��������</p>
<p>����ѧУ��һ�գ���ѧ�����ơ�</p>
<p>��������</p>
<p>�ϿΡ����ơ�</p>
<p>���°���</p>
<p>���¡����ơ����������ӡ�</p>
<p>���¾���</p>
<p>������̫��������</p>
<p>����ʮ��</p>
<p>�ϿΡ���ѧʵ�顣����Ĵָ�ܲ����ܴ��ˣ���Ѫ���ࡣ</p>
<p>����ʮһ��</p>
<p>��Fosdick��s��The Second Mile�����������ѡ�����Pocono����������˵���Ρ���������ͤʫ���ɣ�������ʫ�ҾͲ�������ˡ�</p>
<p>����ʮ����</p>
<p>�ϿΡ���H.Begbie's&quot;Twice-born Men&quot;��</p>
<p>����ݥ�飬����ͤ��������Ϊ֮��������Ϊ��һ�����ò������ģ���ª��Ц������һʫ������һ�ģ�������һ��Ը��Ȼ�������Գ��������գ��������ǳ���ͤС����Ҳ��������ˡ�</p>
<p>����ʮ����</p>
<p>�ϿΡ�������Ԩ��ʫ��һ��</p>
<p>��ѧ��һС�ԡ��������ġ�</p>
<p>ҹ�ι�԰������΢�꣬�ڽԱ����������ڡ��Ѷ�����������ŮԼ��ʮ˫��˫˫���衣��Ϊ�������֮��һ�Σ��ʼ�֮��</p>
<p>����ʮ����</p>
<p>�������ġ�����л����ʫ��һ����������ˡ�ҹ������ѧ��֮��ӭ�ᡣ</p>
<p>����ʮ����</p>
<p>�κ��ϱ�����������ꡣ�������ġ�</p>
<p>����ʮ����</p>
<p>�ϿΡ���ѧ�Ծ��ðٷ֣�������⡣�������ġ�</p>
<p>����ʮ����</p>
<p>�ϿΡ�����ѧ���⣬�ò�������֮���ӡ���ȥ�걱���Ժ󣬼�δһ�״��¡���</p>
<p>ҹ��Prof. Sprague��˵��Milton�����˾�Ϊ��У����Ӣ���ƽ̣������ӡ�</p>

<h4>�������廪԰�ռ�</h4>
<p>����</p>
<p>����Ÿ����еظе����Ե����ġ�һЩ��ƨ���ߵĽ���ӲҪ���Ǽ�!</p>
<p>��ǧ���ˣ�������į֮�С�</p>
<p>ʮ����</p>
<p>��ҹһҹ��磬������Ȼûͣ���������Ƹ��͡�</p>
<p>��ƽ���Ǹ��õط���Ψ����ÿ�괺��Ĵ��ʵ���������ᡣ</p>
<p>û��ʲô��������¡�����ģ���Щ�쵰���ڣ�������֪���Լ�й����</p>
<p>�����쿼�������㿼�������ҿ����������ʲô����?</p>
<p>����</p>
<p>������Faust��Summary</p>
<p>���۶�õ��飬even Fausteven Faust��</p>
<p>ֻҪ�������α������������Ҹо������ᣬ����Ϊʲô��?�Ҳ����ˡ�</p>
<p>���翴Ů��������������ȥ����۴���������룬ֻ��ȥ�����ȡ�</p>
<p>��Ϊ˵������ʵ�ڴ�ò��á�</p>
<p>����</p>
<p>�������춼��Ԥ��Philology�������ġ��ҽ��������ʲô����?����test��</p>
<p>����reading report��������������е��ܲ��ˡ�</p>
<p>����</p>
<p>�����糿��Philology������á�</p>
<p>������Faust��Summary��Ҳ�������ġ�</p>
<p>�⼸������һ������Ϊ����̫�࣬ʵ�ڻ�����Ϊ�Լ�̫����H��lderlin��ʫ</p>
<p>һֱû������ʹ���ѹ���Ϊʲô�Լ����ܶ����Լ���?�������˻����Ĳ�˳����</p>
<p>�ͷ������Լ�Ը�������(д���£�Ҳ������)��</p>
<p>����</p>
<p>�����ַ�����ë�����۶����飬����ȴ������ȥ��ԭ�����Լ����ף���Ϊ����</p>
<p>�����־���û�й���ѹ�Դ��ˡ��ҿ���һ���ܰ���ë���ĵ�����?�����ϵۡ�</p>
<p>��������ؿ��˵�H��lderlin������Ҳ���𾢣����������ֵ�������ȥ������</p>
<p>����</p>
<p>��ʼ�����ģ����ǡ��ۡ��޿ɡ��ۡ���</p>
<p>����������һ���ϣ�����һ�롣 ������˵����ҵ��������Ҫ����ʮҳ��</p>
<p>˵ʵ��������д���˶�ʮҳ�����ֲ��ܲ���Ϊ���ѣ�ֻ��Ӳ��ͷƤ���ˡ�</p>
<p>��ʮ����</p>
<p>�������쿪ʼ����ҵ���ģ������۵��ݲ��������ᣬ���������ᡣ����</p>
<p>��ʮ����</p>
<p>���쳭��һ���ҵ���ģ���ʹ������</p>
<p>��ʮ����</p>
<p>�������ڳ����ˡ��������գ��߳��˳���������Ǳ�ҵ���ġ�������Ȼ��֮������</p>
<p>��ҵȴ��ı�ҵ�ˡ�</p>
<p>���Ϸ����Ǳ��̸�����Ǳ����ʮ�˳ɺ��ˣ��ǳ�frank��</p>
<p>�⼸�쾻æ������Щ�������Ĺ����������ڴ���ǰ�Ѹý��Ķ��������꣬���л���</p>
<p>��ʼд�Լ���д������</p>
</div>
<!--p16 -->
</div>
  
  



</body>
</html>
<%
Recordset1.Close()
Set Recordset1 = Nothing
%>
