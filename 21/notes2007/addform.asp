<%@LANGUAGE="VBSCRIPT" CODEPAGE="936"%>

<%
Dim Recordset1
Dim Recordset1_numRows

dim oConn
dim db
set oConn = Server.CreateObject("ADODB.Connection")
db = "\wwu.accdb"
oConn.ConnectionString="Provider=Microsoft.ACE.OLEDB.12.0;"&_
"Data Source=" & Server.MapPath(db)

oConn.open()

Set Recordset1 = Server.CreateObject("ADODB.Recordset")
Recordset1.ActiveConnection = oConn
Recordset1.Source = "SELECT * FROM records ORDER BY id DESC"
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
<style type="text/css">
.table1{
width:88%;
margin:auto;
margin-bottom:8px;border:1px solid #eee;

}
.table1 td{
border:0px solid red;
padding-left:6px;
height:28px;
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
	width:139px;
	margin-left:-45px;
	margin-left:-46px\9;
 }
.inputcss{       /*inputԪ��*/
	width:115px;
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
  <table class="table1">
    <tr>
      <td colspan="2"><span style="font-size:1.2em; font-weight:bold;">��Ӽ�¼����ҳ��</span></td>
    </tr>
    <tr>
      <td>classify:</td>
      <td>
<span class="span1">
		<span class="span2">
		<select class="selectcss" onchange="this.parentNode.nextSibling.value=this.value">
		
		<option value="  ">  </option>
		<option value="�ٿ�">�ٿ�</option>
		<option value="�����֪ʶ">�����֪ʶ</option>
		<option value="���">���</option>
		<option value="Ӣ��">Ӣ��</option>
		<option value="����">����</option>

		</select>
		</span><input class="inputcss" name="classify" id="classify" size="15" />
	</span>
	  </td>
    </tr>
    <tr>
   <td>summary:</td>
      <td><input name="summary" type="text" id="summary" size="60" /></td>
    </tr>
    <tr>
      <td>content:</td>
      <td><textarea name="content" cols="120" rows="30" id="content">
<p></p>
<p>&nbsp</p>

<p></p>
<p>&nbsp</p>

<p></p>
<p>&nbsp</p>

<p></p>
<p>&nbsp</p>

<p></p>
<p>&nbsp</p>

<p></p>
<p>&nbsp</p>

<p><a target="blank" href=""></a></p>
	  
	  
	  
	  
	  </textarea></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td><input type="submit" name="Submit" value="�ύ" />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <input type="reset" name="Submit2" value="����" /></td>
    </tr>
  </table>
 
</form>
</body>
</html>
<%
Recordset1.Close()
Set Recordset1 = Nothing
%>
