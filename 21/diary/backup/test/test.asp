<%@LANGUAGE="VBSCRIPT" CODEPAGE="936"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>test</title>
</head>

<body>

fix(-5.5)��ֵ:
<%=fix(-5.5)%><br />

int(-5.5)��ֵ:
<%=int(-5.5)%><br />

sqr(666.666)��ֵ:
<%=sqr(666.666)%><br />

<%
if (weekday(date)) = 1 then
response.write("����������Ϣ!")
else
response.Write("������æµ!")
end if
%>
<br />
<%
select case (weekday(date))
case 2
response.write("��������һ")
case 3
response.write("�������ڶ�")
case 4
response.write("����������")
case 5
response.write("����������")
case 6
response.write("����������")

case else
response.write("������ĩ")
end select
%>
<br />

<%
dim i
i =0
do while i<10
i=i+1
response.write("���ǵ�" & i & "��ִ��<br />")
loop
%>

<br /><br />
<%
dim n
n =0
do while n<10
n=n+1
response.write("���ǵ�" & n & "��ִ��<br />")
if n > 5 then
exit do
end if
loop
%>
<br /><br />

<%
for m = 1 to 10 step 1
response.write("���ǵ�" & m & "��ִ��<br />")
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
