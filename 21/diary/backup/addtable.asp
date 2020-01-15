<%@LANGUAGE="VBSCRIPT" CODEPAGE="936"%>
<!--#include file="Connections/selfrecords.asp" -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>records</title>
</head>

<body>
<%
dim ocmd,oconn
set oconn = server.CreateObject("adodb.connection")
set ocmd = server.CreateObject("adodb.command")
oconn.connectionstring="dsn=wwu1;"
oconn.open
set ocmd.activeconnection = oconn
ocmd.commandtext = "create table records(id text(15),record text(60))"
ocmd.execute
response.Write("operation success!")
%>
<%
oconn.close
set oconn = nothing
%>

</body>
</html>
