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

/*——————实现下拉列表可输入(firefox不支持this.parentNode.nextSibling.value=this.value；支持this.parentNode.nextElementSibling.value=this.value，firfox默认nextSibling是空格或回车，所以把两个node对应的空格删掉，代码写到一起，tag之间没有空格即可解决问题；)－－－－－*/
/*——————onchange="this.parentNode.nextSibling.value=this.value"－－－－－*/

.span1{position:relative}/*包围整个可输入的下拉框，以下三个元素*/
.span2{
	margin-left:45px;
	overflow:hidden;}/*包围select元素*/
.selectcss{     /*select元素*/
	width:139px;
	margin-left:-45px;
	margin-left:-46px\9;
 }
.inputcss{       /*input元素*/
	width:115px;
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
  <table class="table1">
    <tr>
      <td colspan="2"><span style="font-size:1.2em; font-weight:bold;">添加记录操作页面</span></td>
    </tr>
    <tr>
      <td>classify:</td>
      <td>
<span class="span1">
		<span class="span2">
		<select class="selectcss" onchange="this.parentNode.nextSibling.value=this.value">
		
		<option value="  ">  </option>
		<option value="百科">百科</option>
		<option value="计算机知识">计算机知识</option>
		<option value="编程">编程</option>
		<option value="英文">英文</option>
		<option value="其它">其它</option>

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
      <td><input type="submit" name="Submit" value="提交" />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <input type="reset" name="Submit2" value="重置" /></td>
    </tr>
  </table>
 
</form>
</body>
</html>
<%
Recordset1.Close()
Set Recordset1 = Nothing
%>
