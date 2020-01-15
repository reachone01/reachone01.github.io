<%@LANGUAGE="VBSCRIPT" CODEPAGE="936"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>cookie</title>
</head>

<body>

 
<%@ enablesessionstate=False %>
<%
if request.Cookies("VisitorCount") = " " then
response.Cookies("VisitorCount") = 1
response.Cookies("VisitorCount").expires = "July 31,2014"
else
response.Cookies("VisitorCount") = request.Cookies("VisitorCount") + 1
end if
%>
欢迎用户第<%= request.Cookies("VisitorCount") %>访问cookie
</body>
</html>
