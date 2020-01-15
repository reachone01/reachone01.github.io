<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<style type="text/css">
div{
width:80%;
margin:auto;
}
table{
border-collapse:collapse;
width:100%;
margin:auto;
}
td{
border:1px solid #888;
}
th{
background-color:#FFCCCC;
background-color:#F9EAF1;
border:#888 solid 1px;
text-align:left;
font-weight:bold;
}
tr>td{
font-weight:bold;
}
tr>td+td{
background-color:white;
font-weight:normal;
}
p{
margin:4px;
text-indent:2em;
}
</style>
<title>localSite2</title>
</head>

<body>
<div>
<table>
<tr><th></th>
<th>selfRecord</th>
<th>records</th>
<th>apacheSite</th>
<th>jspSite</th>
</tr><tr>
<td>name:</td><td><a href="http://localhost:8088" target="_blank">wwu</a></td>

<td><a href="http://localhost:8086" target="_blank">records</a></td>

<td><a href="http://localhost:80" target="_blank">Apachesite</a></td>
<td><a href="http://localhost:8080/wwu/index.jsp" target="_blank">jspSite</a></td>
</tr><tr><td>port:</td>
  <td>8088</td>
<td>8086</td>
<td>80</td>
<td>8080</td>
</tr><tr><td>hisical path:</td><td>I:\wwuhn\Website\witiso\21\myDsite</td>
<td>I:\wwuhn\Website\witiso\21\records</td>
<td>&nbsp;</td>
<td>%workpath%\wwu\WebContent\index.jsp</td>
</tr><tr><td>default file:</td><td>admin.asp</td>
<td>index.asp</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
  <td>start</td>
  <td colspan="2">IIS+DM:sitesetup(path,port);DM:diff DSN; </td>
  <td>setup</td>
  <td>setup:JDK+TomCat;open:Eclipse,new project(start server); </td>
</tr>
<tr>
  <td>others</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  <td>&nbsp;</td>
  <td>http://localhost:8080/wwuhn/index.jsp</td>
</tr>
<tr>
  <td>&nbsp;</td>
  <td colspan="4">每一个server都可以进行服务的start,pause,stop.</td>
  </tr>
</table>
<br />
<table>
  <tr>
    <th colspan="3">JSP</th>
    </tr>
  <tr>
    <td>JDK </td>
    <td>&nbsp;</td>
    <td>DevelopmentTool+source code+public JRE(JVM)</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>1 setup path:</td>
    <td>d:\java\jdk </td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>2 JRE7的安装路径 </td>
    <td>d:\java\jdk\jre7(JRE可单独安装和卸载）</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>3 配置环境变量：</td>
    <td>java_home:D:\java\jdk</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>classPath:.;%java_home%\lib\rt.jar;...tools.jar;</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>path:+%java_home%\bin</td>
  </tr>
  <tr>
    <td>TomCat</td>
    <td>&nbsp;</td>
    <td>function:web server+app server </td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>1JVM path: </td>
    <td>d:\java\jdk\jre7</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>2 config</td>
    <td>D:\Program Files\Apache Software Foundation\Tomcat 7.0\bin\Tomcat7w.exe（JRE）</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>3 config file </td>
    <td>D:\Program Files\Apache Software Foundation\Tomcat 7.0\conf\server.xml</td>
  </tr>
  <tr>
    <td>Eclipse</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>1 workpath </td>
    <td>I:\wwuhn\Website\witiso\21\jspsite</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>2 preferences </td>
    <td>menu:windows-preference-server(JRE)</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>3 new project </td>
    <td>new-project-web:dynamic web site-name:jspsite-server-Root: jspsite, dir:webContent </td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>4 new server </td>
    <td>new-others-server:选择apache,并添加项目jspsite；</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>5 new jsp </td>
    <td>项目jspsite\webContent下,&lt;% java.util.Date d = new java.util.Date(); %&gt;&lt;%= d.toString() %&gt;</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>6 star server </td>
    <td>在该环境下启动server（TomCat）,需先确保TomCat是“stop”状态；</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>7 临时分布jsp</td>
    <td>jsp右击－run as-run on server; </td>
  </tr>
</table>
<p>&nbsp;</p>
<table>
  <tr>
    <th>Apache</th>
    <th colspan="2">只是一个网页服务器,在http://localhost下可以返回html\jsp（jsp代码忽略）（asp不行）返回,不能返回动态页面;</th>
    </tr>
  <tr>
    <td>&nbsp;</td>
    <td>config file </td>
    <td>D:\Program Files\Apache Software Foundation\Apache2.2\conf\httpd</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>DocumentRoot</td>
    <td>默认：D:\Program Files\Apache Software Foundation\Apache2.2\htdocs</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>DocumentRoot &quot;I:\wwuhn\Website\witiso\21\apacheSite&quot;</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&lt;Directory   &quot;I:\wwuhn\Website\witiso\21\apacheSite&quot;&gt;</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>default file </td>
    <td>irectoryIndex index.html</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>Listen 80</td>
    <td>默认端口：80</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td>虚拟目录</td>
    <td>#Alias /webpath /full/filesystem/pat，将前面的#去掉，改为以下虚拟目录Alias /Webpath/   &quot;D:/Data&quot;，重启apache，在浏览器中输入<a href="http://localhost:8080/data/">http://localhost:8080/data/</a>的时候就会访问服务器的&quot;D:/Data&quot;目录；</td>
  </tr>
</table>
<%= now() %>
</div>
</body>
</html>
