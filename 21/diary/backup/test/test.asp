<%@LANGUAGE="VBSCRIPT" CODEPAGE="936"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>test</title>
</head>

<body>

fix(-5.5)的值:
<%=fix(-5.5)%><br />

int(-5.5)的值:
<%=int(-5.5)%><br />

sqr(666.666)的值:
<%=sqr(666.666)%><br />

<%
if (weekday(date)) = 1 then
response.write("星期天体休息!")
else
response.Write("工作日忙碌!")
end if
%>
<br />
<%
select case (weekday(date))
case 2
response.write("今天星期一")
case 3
response.write("今天星期二")
case 4
response.write("今天星期三")
case 5
response.write("今天星期四")
case 6
response.write("今天星期五")

case else
response.write("今天周末")
end select
%>
<br />

<%
dim i
i =0
do while i<10
i=i+1
response.write("这是第" & i & "次执行<br />")
loop
%>

<br /><br />
<%
dim n
n =0
do while n<10
n=n+1
response.write("这是第" & n & "次执行<br />")
if n > 5 then
exit do
end if
loop
%>
<br /><br />

<%
for m = 1 to 10 step 1
response.write("这是第" & m & "次执行<br />")
next
%>
<br /><br />
<%
dim fso,f, f1,fc,s
set fso = CreateObject("Scripting.FileSystemObject")
set f = fso.GetFolder("g:\wwuhnwufuqun\desktop")
set fc =f.files
for each f1 in fc
s = s & f1.name
s = s & "<br />"
next
response.write(s)
%>





<br /><br />

<% response.write(now())
%>

<br /><br />
<%= weekdayname(WeekDay(now))%>
<br /><br />

<% mycolor="#0000ff"
response.write ("<font color=' "&mycolor&" '>" & mycolor & "</font>")
%>  


</body>

</html>
