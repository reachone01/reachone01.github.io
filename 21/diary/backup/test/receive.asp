<%@LANGUAGE="VBSCRIPT" CODEPAGE="936"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>���ձ���Ϣ</title>
</head>

<body>
post������rquest.form("name");<br />
get������request.querystring("name");<br /><br />

<%= " ����: " + Trim(Request.Form("xm")) + "<br />" %>
<%= " �绰: " + Trim(Request.Form("dh")) + "<br />" %>
<%= " QQ:   " + Trim(Request.Form("qq")) + "<br />" %>

<%= " ����: " + Trim(Request.Form("yx")) + "<br />" %>
<%= " ����: " + Trim(Request.Form("lx")) + "<br />" %>
<%= " ����: " + Trim(Request.Form("nr")) + "<br />" %>

<%= " ��֤��: " + Trim(Request.Form("CheckCode")) + "<br />" %>
<br /><br />
<%
dim name1, mobile
name1 = request.Form("xm")
mobile = request.Form("dh")
response.Write(name1 + "<br />")
response.Write(mobile)
%>
<br /><br />
<%
nickname=request.form("yourname")
response.cookies("yourname")=nickname
response.Write("��ӭ��:" &request.cookies("yourname"))
%>
</body>
</html>
