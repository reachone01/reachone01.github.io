<%@LANGUAGE="VBSCRIPT" CODEPAGE="936"%>
<!--#include file="Connections/selfrecords.asp" -->
<%
' *** Edit Operations: declare variables

Dim MM_editAction
Dim MM_abortEdit
Dim MM_editQuery
Dim MM_editCmd

Dim MM_editConnection
Dim MM_editTable
Dim MM_editRedirectUrl
Dim MM_editColumn
Dim MM_recordId

Dim MM_fieldsStr
Dim MM_columnsStr
Dim MM_fields
Dim MM_columns
Dim MM_typeArray
Dim MM_formVal
Dim MM_delim
Dim MM_altVal
Dim MM_emptyVal
Dim MM_i

MM_editAction = CStr(Request.ServerVariables("SCRIPT_NAME"))
If (Request.QueryString <> "") Then
  MM_editAction = MM_editAction & "?" & Server.HTMLEncode(Request.QueryString)
End If

' boolean to abort record edit
MM_abortEdit = false

' query string to execute
MM_editQuery = ""
%>
<%
' *** Update Record: set variables

If (CStr(Request("MM_update")) = "form1" And CStr(Request("MM_recordId")) <> "") Then

  MM_editConnection = MM_selfrecords_STRING
  MM_editTable = "news"
  MM_editColumn = "ID"
  MM_recordId = "" + Request.Form("MM_recordId") + ""
  MM_editRedirectUrl = "admin.asp"
  MM_fieldsStr  = "vtime|value|week|value|lunar|value|weather|value|title|value|content|value"
  MM_columnsStr = "vtime|',none,NULL|week|',none,''|lunar|',none,''|weather|',none,''|title|',none,''|content|',none,''"

  ' create the MM_fields and MM_columns arrays
  MM_fields = Split(MM_fieldsStr, "|")
  MM_columns = Split(MM_columnsStr, "|")
  
  ' set the form values
  For MM_i = LBound(MM_fields) To UBound(MM_fields) Step 2
    MM_fields(MM_i+1) = CStr(Request.Form(MM_fields(MM_i)))
  Next

  ' append the query string to the redirect URL
  If (MM_editRedirectUrl <> "" And Request.QueryString <> "") Then
    If (InStr(1, MM_editRedirectUrl, "?", vbTextCompare) = 0 And Request.QueryString <> "") Then
      MM_editRedirectUrl = MM_editRedirectUrl & "?" & Request.QueryString
    Else
      MM_editRedirectUrl = MM_editRedirectUrl & "&" & Request.QueryString
    End If
  End If

End If
%>
<%
' *** Update Record: construct a sql update statement and execute it

If (CStr(Request("MM_update")) <> "" And CStr(Request("MM_recordId")) <> "") Then

  ' create the sql update statement
  MM_editQuery = "update " & MM_editTable & " set "
  For MM_i = LBound(MM_fields) To UBound(MM_fields) Step 2
    MM_formVal = MM_fields(MM_i+1)
    MM_typeArray = Split(MM_columns(MM_i+1),",")
    MM_delim = MM_typeArray(0)
    If (MM_delim = "none") Then MM_delim = ""
    MM_altVal = MM_typeArray(1)
    If (MM_altVal = "none") Then MM_altVal = ""
    MM_emptyVal = MM_typeArray(2)
    If (MM_emptyVal = "none") Then MM_emptyVal = ""
    If (MM_formVal = "") Then
      MM_formVal = MM_emptyVal
    Else
      If (MM_altVal <> "") Then
        MM_formVal = MM_altVal
      ElseIf (MM_delim = "'") Then  ' escape quotes
        MM_formVal = "'" & Replace(MM_formVal,"'","''") & "'"
      Else
        MM_formVal = MM_delim + MM_formVal + MM_delim
      End If
    End If
    If (MM_i <> LBound(MM_fields)) Then
      MM_editQuery = MM_editQuery & ","
    End If
    MM_editQuery = MM_editQuery & MM_columns(MM_i) & " = " & MM_formVal
  Next
  MM_editQuery = MM_editQuery & " where " & MM_editColumn & " = " & MM_recordId

  If (Not MM_abortEdit) Then
    ' execute the update
    Set MM_editCmd = Server.CreateObject("ADODB.Command")
    MM_editCmd.ActiveConnection = MM_editConnection
    MM_editCmd.CommandText = MM_editQuery
    MM_editCmd.Execute
    MM_editCmd.ActiveConnection.Close

    If (MM_editRedirectUrl <> "") Then
      Response.Redirect(MM_editRedirectUrl)
    End If
  End If

End If
%>
<%
Dim Recordset1__MMColParam
Recordset1__MMColParam = "1"
If (Request.QueryString("ID") <> "") Then 
  Recordset1__MMColParam = Request.QueryString("ID")
End If
%>
<%
Dim Recordset1
Dim Recordset1_numRows

Set Recordset1 = Server.CreateObject("ADODB.Recordset")
Recordset1.ActiveConnection = MM_selfrecords_STRING
Recordset1.Source = "SELECT * FROM news WHERE ID = " + Replace(Recordset1__MMColParam, "'", "''") + ""
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
<script charset="GB2312" language="JavaScript" type="text/javascript" src="js/calendar.js"></script>
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
fv.value=month2011[cnmonth];
var fv=document.getElementById("day2");
fv.value=Dn[pdm-1];
}
</script>
<style type="text/css">
.table2{
width:80%;
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
width:80%;/* 定义选项卡的整体宽度 */
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
<title>modify</title>
</head>

<body>

<form method="post" action="<%=MM_editAction%>" name="form1">
  <table class="table2">
  
<colgroup>
<col  width="23%" />
<col  width="12%" />
<col  width="14%" />
<col  width="51%" />
</colgroup>  
    <tr valign="baseline">
      <td align="left"><strong>Modify record</strong></td>
      <td align="right">Time:</td>
      <td><input type="text" name="vtime" value="<%=(Recordset1.Fields.Item("vtime").Value)%>" size="32">      </td>
      <td>
<script type="text/javascript">     //农历的另一年份时，需更改6处（第6处是节气更改，作为变量中的字符的"2011"不更改）	
	
				document.write(Year+"-"+"<font color=#008040>"+"<strong>"+"<span style='FONT-SIZE: 12px'>"+enym+"&nbsp;"+isnDay[today.getDay()]+"</font>"+"</strong>"+"</span>"+"&nbsp;")
				
				document.write(cnyear+"<strong>"+"<span style='FONT-SIZE: 12px'>"+"<font color=#0000FF>"+cnym+"</span>"+"</strong>"+"</font>"+"&nbsp;")/*农历月日*/
				document.write("已逝:"+cndayed+"天"+"<sup>"+"+"+"</sup>"+"&nbsp;")
				document.write("可期:"+"<font face='Arial' size='2px' color=#FF8040>"+"<strong>"+haveday+"</strong>"+"</font>"+"天"+"<sup>"+"+"+"</sup>"+"&nbsp;"+"&nbsp;")
		</script></td>
    </tr>
    <tr valign="baseline">
      <td>&nbsp;</td>
      <td align="right">Week:</td>
      <td><input type="text" name="week" value="<%=(Recordset1.Fields.Item("week").Value)%>" size="32">      </td>
      <td><a href="http://www.worldtimezone.com/" target="_blank">世界时间</a></td>
    </tr>
    <tr valign="baseline">
      <td>&nbsp;</td>
      <td align="right">Lunar:</td>
      <td><input name="lunar" type="text" value="<%=(Recordset1.Fields.Item("lunar").Value)%>" size="32" /></td>
      <td><a href="http://www.hao123.com/rili" title="_blank">万年历</a></td>
    </tr>
    <tr valign="baseline">
      <td>&nbsp;</td>
      <td align="right">Weather:</td>
      <td><input type="text" name="weather" value="<%=(Recordset1.Fields.Item("weather").Value)%>" size="32">      </td>
      <td><a href="http://php.weather.sina.com.cn/search.php?city=广州" target="_blank">天气预报(GZ)</a> <a href="weather.html" target="_blank">天气词汇 </a><a href="http://lishi.tianqi.com/guangzhou/index.html" target="_blank">天气后报(GZ)</a> <a href="http://lishi.tianqi.com/guangzhou/index.html" target="_blank">2</a></td>
    </tr>
    <tr valign="baseline">
      <td>&nbsp;</td>
      <td align="right">Summary:</td>
      <td><input type="text" name="title" value="<%=(Recordset1.Fields.Item("title").Value)%>" size="32">      </td>
      <td></td>
    </tr>
    <tr>
      <td valign="top"><table class="tableinner">
        <tr></tr>
        <tr>
          <td><span style="text-align:left;"><a href="http://www.iciba.com" target="_blank">iciba</a></span></td>
        </tr>
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
        </tr>
      </table></td>
      <td align="right" valign="top">Content:</td>
      <td colspan="2" valign="baseline"><textarea name="content" cols="70" rows="12"><%=(Recordset1.Fields.Item("content").Value)%></textarea>      </td>
    </tr>
    <tr valign="baseline">
      <td>&nbsp;</td>
      <td align="right">&nbsp;</td>
      <td><input type="submit" value="更新记录">      </td>
      <td><a href="admin.asp" target="_self">回到列表</a></td>
    </tr>
  </table>
  <input type="hidden" name="MM_update" value="form1">
  <input type="hidden" name="MM_recordId" value="<%= Recordset1.Fields.Item("ID").Value %>">
</form>
<div id="tab">
<h3 class="up" onclick="goto1(1);">bdCidian</h3>
<h3 onclick="goto1(2);">tqch</h3>
<h3 onclick="goto1(3);">Luxun</h3>
<h3 onclick="goto1(4);">Yudafu</h3>
<h3 onclick="goto1(5);">weather</h3>
<h3 onclick="goto1(6);">others</h3>

<div class="block" id="c11"><!--p11  -->

<iframe width="100%" height="220" src="http://dict.baidu.com/" frameborder="no" border="0" marginwidth="0" marginheight="88" scrolling="auto"></iframe>


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

<iframe width="100%" height="230" src="http://php.weather.sina.com.cn/search.php?city=%B9%E3%D6%DD" frameborder="no" border="0" marginwidth="0" marginheight="88" scrolling="auto"></iframe>

</div> <!--p15 -->

<div><!--p16 -->

</div><!--p16 -->
			</div>
</body>
</html>
<%
Recordset1.Close()
Set Recordset1 = Nothing
%>
