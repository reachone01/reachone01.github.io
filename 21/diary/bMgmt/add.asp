<%@LANGUAGE="VBSCRIPT" CODEPAGE="936"%>
<!--#include file="../Connections/selfrecords.asp" -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>add self</title>
</head>

<body>
<%
dim ID,startTime,endTime,business,progress,finish,remark
startTime = trim(request.Form("startTime"))
endTime =  trim(request.Form("endTime"))
 

business = trim(request.Form("business"))
progress = trim(request.Form("progress")) 
finish = trim(request.Form("finish"))

remark = trim(request.Form("remark"))

%>
<%
dim oCmd,oConn
set oConn = Server.CreateObject("ADODB.Connection")
set oCmd = Server.CreateObject("ADODB.command")
oConn.ConnectionString = "DSN=wwu1;"
oConn.open
Set oCmd.ActiveConnection = oConn
oCmd.CommandText = "INSERT INTO bmgmt (ID,startTime,endTime,business,progress,finish,remark) VALUES ('"& startTime &"','"& endTime &"','"& business &"','"& progress &"','"& finish &"','"& remark &"')"
oCmd.Execute
Response.Write("操作成功！")

%>
<%
Dim Recordset1
Dim Recordset1_numRows

Set Recordset1 = Server.CreateObject("ADODB.Recordset")
Recordset1.ActiveConnection = MM_selfrecords_STRING
Recordset1.Source = "SELECT * FROM Bmgmt"
Recordset1.CursorType = 0
Recordset1.CursorLocation = 2
Recordset1.LockType = 1
Recordset1.Open()

Recordset1_numRows = 0
%>
<%
oConn.Close
Set oConn = Nothing
%>
<%
response.Redirect("admin.asp")
%>
</body>
</html>
<%
Recordset1.Close()
Set Recordset1 = Nothing
%>
