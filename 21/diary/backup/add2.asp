<%@LANGUAGE="VBSCRIPT" CODEPAGE="936"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>add2</title>
</head>

<body>
<!--#include file="adovbs.inc" -->
<%
dim oRS,oconn
Set oconn = server.CreateObject("ADODB.connection")
Set oRS = server.CreateObject("ADODB.Recordset")
oconn.ConnectionString = "DSN=wwu;"
oconn.open
set oRS.ActiveConnection = oconn
oRS.Source = "SELECT vtime,week,weather,title,content FROM news"
oRS.CursorType = adOpenKeyset
oRS.CursorLocation = adUseClient
oRS.LockType = adLockOptimistic
oRS.open()

oRS.AddNew
oRS("vtime") = "2015/3/3"
oRS("week") = "week"
oRS("weather") = "weather"
oRS("title") = "title"
oRS("content") = "content"
oRS.Update
Response.Write("operatio success!")
%>

<%
oRS.Close
Set oRS = Nothing
%>
</body>
</html>
