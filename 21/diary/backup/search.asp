<%@LANGUAGE="VBSCRIPT" CODEPAGE="936"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>research</title>
</head>

<body>

  <table width="800" border="0" align="center">
    <tr>
      <td>time</td>
      <td>关键字查询: </td>
      <td><form action="time_result.asp" method="post" name="form1" target="_blank" id="form1">
          <input name="key" type="text" id="key" size="45" />
          <input type="submit" name="Submit1" value="search" />
      </form></td>
    </tr>
    <tr>
      <td>week</td>
      <td>关键字查询: </td>
      <td><form action="week_result.asp" method="post" name="form2" target="_blank" id="form2">
          <input name="key" type="text" id="key" size="45" />
          <input type="submit" name="Submit2" value="search" />
      </form></td>
    </tr>
    <tr>
      <td>weather</td>
      <td>关键字查询: </td>
      <td><form action="weather_result.asp" method="post" name="form5" target="_blank" id="form5">
          <input name="key" type="text" id="key" size="45" />
          <input type="submit" name="Submit3" value="search" />
      </form></td>
    </tr>
    <tr>
      <td>summary</td>
      <td>关键字查询: </td>
      <td><form action="summary_result.asp" method="post" name="form3" target="_blank" id="form3">
          <input name="key" type="text" id="key" size="45" />
          <input type="submit" name="Submit4" value="search" />
      </form></td>
    </tr>
    <tr>
      <td>content</td>
      <td>关键字查询: </td>
      <td><form action="content_result.asp" method="post" name="form4" target="_blank" id="form4">
        <input name="key" type="text" id="key" size="45" />
        <input type="submit" name="Submit5" value="search" />
		</form></td>
    </tr>
  </table>

</body>
</html>
