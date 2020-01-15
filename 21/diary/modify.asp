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
width:80%;/* ����ѡ��������� */
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
<script type="text/javascript">     //ũ������һ���ʱ�������6������6���ǽ������ģ���Ϊ�����е��ַ���"2011"�����ģ�	
	
				document.write(Year+"-"+"<font color=#008040>"+"<strong>"+"<span style='FONT-SIZE: 12px'>"+enym+"&nbsp;"+isnDay[today.getDay()]+"</font>"+"</strong>"+"</span>"+"&nbsp;")
				
				document.write(cnyear+"<strong>"+"<span style='FONT-SIZE: 12px'>"+"<font color=#0000FF>"+cnym+"</span>"+"</strong>"+"</font>"+"&nbsp;")/*ũ������*/
				document.write("����:"+cndayed+"��"+"<sup>"+"+"+"</sup>"+"&nbsp;")
				document.write("����:"+"<font face='Arial' size='2px' color=#FF8040>"+"<strong>"+haveday+"</strong>"+"</font>"+"��"+"<sup>"+"+"+"</sup>"+"&nbsp;"+"&nbsp;")
		</script></td>
    </tr>
    <tr valign="baseline">
      <td>&nbsp;</td>
      <td align="right">Week:</td>
      <td><input type="text" name="week" value="<%=(Recordset1.Fields.Item("week").Value)%>" size="32">      </td>
      <td><a href="http://www.worldtimezone.com/" target="_blank">����ʱ��</a></td>
    </tr>
    <tr valign="baseline">
      <td>&nbsp;</td>
      <td align="right">Lunar:</td>
      <td><input name="lunar" type="text" value="<%=(Recordset1.Fields.Item("lunar").Value)%>" size="32" /></td>
      <td><a href="http://www.hao123.com/rili" title="_blank">������</a></td>
    </tr>
    <tr valign="baseline">
      <td>&nbsp;</td>
      <td align="right">Weather:</td>
      <td><input type="text" name="weather" value="<%=(Recordset1.Fields.Item("weather").Value)%>" size="32">      </td>
      <td><a href="http://php.weather.sina.com.cn/search.php?city=����" target="_blank">����Ԥ��(GZ)</a> <a href="weather.html" target="_blank">�����ʻ� </a><a href="http://lishi.tianqi.com/guangzhou/index.html" target="_blank">������(GZ)</a> <a href="http://lishi.tianqi.com/guangzhou/index.html" target="_blank">2</a></td>
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
      <td><input type="submit" value="���¼�¼">      </td>
      <td><a href="admin.asp" target="_self">�ص��б�</a></td>
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
