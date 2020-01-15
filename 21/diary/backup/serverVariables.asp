<%@LANGUAGE="VBSCRIPT" CODEPAGE="936"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<style type="text/css">
table{
table-layout:auto;
border-collapse:collapse;
width:60%;
margin:auto;
}
</style>
<title>serverVariables</title>
</head>

<body>
<table width="50%" border="1">
<tr>
<td> server variable</td>
<td> value</td>
</tr>
<% for each item in request.serverVariables %>
<tr>
<td><%= item %></td>
<td><%= request.ServerVariables(item) %></td>
</tr>
<%next%>
</table>
</body>
</html>
