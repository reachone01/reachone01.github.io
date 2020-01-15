<%@LANGUAGE="VBSCRIPT" CODEPAGE="936"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<script language="javascript">
function check(){

if(document.form1.all.checked)
document.form1.action="resultall.asp";
else
document.form1.action="result.asp";

}
</script>
<style type="text/css">
p{
margin:2px;
text-indent:0em;
}
table{

border-collapse:collapse;
}
table tr>td{
text-align:right;
height:38px;

}
.bor{
border:1px solid #888;}
table tr>td+td{
text-align:left;
}
</style>
<title>search</title>
</head>

<body>
<table width="650" align="center">
<tr><td style="text-align:left; font-size:1.2m; font-weight:bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;查询界面</td></tr>
 </table>
<form action="result.asp" method="post" name="form1" target="_blank" id="form1">
  <table width="650" border="0" align="center">
    
    <tr>
      <td>请选择需要查询的列:</td>
      <td><input type="radio" name="colkey" value="vtime" />time</td>
      <td><input type="radio" name="colkey" value="week" />week</td>
      <td><input type="radio" name="colkey" value="weather" />weather</td>
      <td><input type="radio" name="colkey" value="title" />summary</td>
      <td><input type="radio" name="colkey" value="content" checked="checked" />content</td>
	  <td><input type="radio" name="colkey" value="content" id="all" />all cols</td>
	  
    </tr>
    <tr>
      <td><p>需要在上述选中的列中&nbsp;</p>
      <p>模糊匹配的关键字: </p></td>
      <td colspan="5"><input name="key" type="text" id="key" size="40" /></td>
      <td><input onclick="check();" type="submit" name="Submit" value="search" /></td>
    </tr>
  </table>
</form>
</body>
</html>
