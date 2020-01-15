<%@LANGUAGE="VBSCRIPT" CODEPAGE="936"%>
 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>add self</title>
</head>

<body>
<%
classify1 = trim(request.Form("classify"))
summary1 = trim(request.Form("summary"))
content1 = trim(request.Form("content"))
%>
<%
dim oCmd,oConn,db
set oConn = Server.CreateObject("ADODB.Connection")
set oCmd = Server.CreateObject("ADODB.command")
db = "\wwu.accdb"
oConn.ConnectionString="Provider=Microsoft.ACE.OLEDB.12.0;"&_
"Data Source=" & Server.MapPath(db)

oConn.open
Set oCmd.ActiveConnection = oConn
oCmd.CommandText = "INSERT INTO records (summary,content,classify) VALUES ('"& summary1 &"','"& content1 &"','"& classify1 &"')"
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
<%
Recordset1.Close()
Set Recordset1 = Nothing
%>
