<%@LANGUAGE="VBSCRIPT" CODEPAGE="936"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>接收表单信息</title>
</head>

<body>
post方法用rquest.form("name");<br />
get方法用request.querystring("name");<br /><br />

<%= " 姓名: " + Trim(Request.Form("xm")) + "<br />" %>
<%= " 电话: " + Trim(Request.Form("dh")) + "<br />" %>
<%= " QQ:   " + Trim(Request.Form("qq")) + "<br />" %>

<%= " 邮箱: " + Trim(Request.Form("yx")) + "<br />" %>
<%= " 类型: " + Trim(Request.Form("lx")) + "<br />" %>
<%= " 内容: " + Trim(Request.Form("nr")) + "<br />" %>

<%= " 验证码: " + Trim(Request.Form("CheckCode")) + "<br />" %>
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
response.Write("欢迎您:" &request.cookies("yourname"))
%>
</body>
</html>
