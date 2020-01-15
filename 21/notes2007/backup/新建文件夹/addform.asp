<%@LANGUAGE="VBSCRIPT" CODEPAGE="936"%>
<!--#include file="Connections/notes.asp" -->
<%
Dim Recordset1
Dim Recordset1_numRows

Set Recordset1 = Server.CreateObject("ADODB.Recordset")
Recordset1.ActiveConnection = MM_notes_STRING
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
.table2{
width:80%;
margin:auto;
margin-bottom:8px;
}
.table2 td{
border:0px solid red;
}
.table2 tr>td+td+td{
text-align:left;}
.table2 tr>td+td{
text-align:left;
padding-right:6px;
}
.table3{
width:85%;
margin:auto;
margin-bottom:2px;
font-size:14px;
}
.table3 td{
border:0px solid red;
vertical-align:top;
}
.table3 p{
line-height:18px;
margin:0;

}
</style>
<title>add record</title>
</head>

<body>



<form ACTION="add.asp" METHOD="POST" id="form1" name="form1">
  <table class="table2">
    <tr>
      <td colspan="2"><span style="font-size:1.2em; font-weight:bold;">添加记录操作页面</span></td>
    </tr>
    <tr>
   <td>summary:</td>
      <td><input name="summary" type="text" id="summary" size="60" /></td>
    </tr>
    <tr>
      <td>content:</td>
      <td><textarea name="content" cols="120" rows="30" id="content"></textarea></td>
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
