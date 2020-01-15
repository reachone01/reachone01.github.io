<%@LANGUAGE="VBSCRIPT" CODEPAGE="936"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>一元二次方程求解</title>

</head>

<body>
<%
dim a,b,c,d,x1,x2
a=CSng(Request.Form("txta"))
b=CSng(Request.Form("txtb"))
c=CSng(Request.Form("txtc"))
d= b*b-4*a*c





Response.Write("方程：" & a & "x<sup>2</sup>+" & b & "x+" &  c )
If d<0 Then
	Response.Write("没有根；")
ElseIf d=0 Then
	Response.Write("有一个根：<br />")
	x1=(-b-Sqr(d))/(2*a)
	Response.Write("x1=" & x1 & "&nbsp;")
Else
	Response.Write("有两个根：<br />")
	x1=(-b-Sqr(d))/(2*a)
	Response.Write("x1=" & x1 & "<br />")
	x2=(-b+Sqr(d))/(2*a)
	Response.Write("x2=" & x2 & "&nbsp;")
End If

%>


</body>
</html>