<%@LANGUAGE="VBSCRIPT" CODEPAGE="936"%>
 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>add self</title>
</head>

<body>
<%
dim vtime1,week1,weather1,title1,content1
vtime1 = trim(request.Form("vtime"))
vtimelen = len(vtime1)
vtime1 = left(vtime1,vtimelen-3)

week1 = trim(request.Form("week"))
lunar = trim(request.Form("day1")) +"<br />"+ trim(request.Form("day2"))
weather5 = trim(request.Form("weather")) + "-" + trim(request.Form("weather2")) + "&deg;" +"<br />"+ ltrim(request.Form("weather3")) +"<br />" + request.Form("weather4")

title1 = trim(request.Form("title"))
content1 = trim(request.Form("content"))
%>
<%
dim oCmd,oConn
set oConn = Server.CreateObject("ADODB.Connection")
set oCmd = Server.CreateObject("ADODB.command")
oConn.ConnectionString = "DSN=wwu1;"
oConn.open
Set oCmd.ActiveConnection = oConn
oCmd.CommandText = "INSERT INTO news (vtime,week,lunar,weather,title,content) VALUES ('"& vtime1 &"','"& week1 &"','"& lunar &"','"& weather5 &"','"& title1 &"','"& content1 &"')"
oCmd.Execute
Response.Write("操作成功！")

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
