<%@LANGUAGE="VBSCRIPT" CODEPAGE="936"%>
<!--#include file="../Connections/selfrecords.asp" -->

<%
' *** Edit Operations: declare variables

Dim MM_editAction
Dim MM_abortEdit
Dim MM_editQuery
Dim MM_editCmd

Dim MM_editConnection
Dim MM_editTable
Dim MM_editRedirectUrl
Dim MM_editColumn
Dim MM_recordId

Dim MM_fieldsStr
Dim MM_columnsStr
Dim MM_fields
Dim MM_columns
Dim MM_typeArray
Dim MM_formVal
Dim MM_delim
Dim MM_altVal
Dim MM_emptyVal
Dim MM_i

MM_editAction = CStr(Request.ServerVariables("SCRIPT_NAME"))
If (Request.QueryString <> "") Then
  MM_editAction = MM_editAction & "?" & Server.HTMLEncode(Request.QueryString)
End If

' boolean to abort record edit
MM_abortEdit = false

' query string to execute
MM_editQuery = ""
%>
<%
' *** Delete Record: declare variables

if (CStr(Request("MM_delete")) = "form1" And CStr(Request("MM_recordId")) <> "") Then

  MM_editConnection = MM_selfrecords_STRING
  MM_editTable = "bmgmt"
  MM_editColumn = "ID"
  MM_recordId = "" + Request.Form("MM_recordId") + ""
  MM_editRedirectUrl = "admin.asp"

  ' append the query string to the redirect URL
  If (MM_editRedirectUrl <> "" And Request.QueryString <> "") Then
    If (InStr(1, MM_editRedirectUrl, "?", vbTextCompare) = 0 And Request.QueryString <> "") Then
      MM_editRedirectUrl = MM_editRedirectUrl & "?" & Request.QueryString
    Else
      MM_editRedirectUrl = MM_editRedirectUrl & "&" & Request.QueryString
    End If
  End If
  
End If
%>
<%
' *** Delete Record: construct a sql delete statement and execute it

If (CStr(Request("MM_delete")) <> "" And CStr(Request("MM_recordId")) <> "") Then

  ' create the sql delete statement
  MM_editQuery = "delete from " & MM_editTable & " where " & MM_editColumn & " = " & MM_recordId

  If (Not MM_abortEdit) Then
    ' execute the delete
    Set MM_editCmd = Server.CreateObject("ADODB.Command")
    MM_editCmd.ActiveConnection = MM_editConnection
    MM_editCmd.CommandText = MM_editQuery
    MM_editCmd.Execute
    MM_editCmd.ActiveConnection.Close

    If (MM_editRedirectUrl <> "") Then
      Response.Redirect(MM_editRedirectUrl)
    End If
  End If

End If
%>
<%
Dim Recordset1
Dim Recordset1_numRows

Set Recordset1 = Server.CreateObject("ADODB.Recordset")
Recordset1.ActiveConnection = MM_selfrecords_STRING
Recordset1.Source = "SELECT * FROM Bmgmt ORDER BY ID DESC"
Recordset1.CursorType = 0
Recordset1.CursorLocation = 2
Recordset1.LockType = 1
Recordset1.Open()

Recordset1_numRows = 0
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<style type="text/css">
.table1{
border-collapse:collapse;
width:80%;
margin:auto;
}
.table1 th{
background-color:#FFCC00;
background-color:#DEDCFE;
font-size:1.1em;
font-weight:bold;
}
.table1 th, .table1 td{
border:1px solid #888;
padding:4px;
}
.table1 tr>td{/*第1列time*/
font-size:16px;
}
.table1 tr>td+td{
font-size:16px;/*第2列week*/
}
.table1 tr>td+td+td{/*第3列*/
font-size:16px;

}
.table1 tr>td+td+td+td{/*第41列*/
font-size:16px;
}
.table1 tr>td+td+td+td+td{/*第5列*/
font-size:16px;
text-indent:2em;
}
.table1 tr>td+td+td+td+td+td{/*第6列*/
font-size:16px;text-indent:0em;
}
.STYLE1 {color: #FF0000}
.table2{
width:80%;
margin:auto;
margin-bottom:8px;
}
.table2 td{
border:0px solid red;
}
</style>
<title>del</title>
</head>

<body>
<table class="table2">
<tr><td style="font-size:1.2em; font-weight:bold;">删除记录操作页面</td></tr></table>

<table class="table1">
<colgroup>
<col width="3%" />
<col width="8%" />
<col width="8%" />
<col width="30%" />
<col width="29%" />
<col width="4%" />
<col width="14%" />
<col width="4%" />
</colgroup>
  <tr>
    <th>id</th>
    <th>startTime</th>
    <th>endTime</th>
    <th>business content </th>
    <th>progress</th>
    <th>Finished?</th>
    <th>remark</th>

  </tr>

    <tr>
      <td><%=(Recordset1.Fields.Item("ID").Value)%></td>
      <td><%=(Recordset1.Fields.Item("startTime").Value)%></td>
      <td><%=(Recordset1.Fields.Item("endTime").Value)%></td>
      <td><%=(Recordset1.Fields.Item("business").Value)%></td>
      <td><%=(Recordset1.Fields.Item("progress").Value)%></td>
      <td><%=(Recordset1.Fields.Item("finish").Value)%></td>
      <td><%=(Recordset1.Fields.Item("remark").Value)%></td>
      
    </tr>


</table>
  <br />
  <table class="table2" align="center">
  <colgroup>

<col width="60%" />
<col width="20%" />
<col width="20%" />
</colgroup>
  <tr>
    <td>删除以上记录请按&quot;<span class="STYLE1">删除记录</span>&quot;按钮,否则点击&quot;<span class="STYLE1">回到列表</span>&quot;链接;</td>
<td style="text-align:right;">
<form ACTION="<%=MM_editAction%>" METHOD="POST" id="form1" name="form1">
  <input type="submit" name="Submit" value="删除记录" />
  <input type="hidden" name="MM_delete" value="form1" />
	  
      <input type="hidden" name="MM_recordId" value="<%= Recordset1.Fields.Item("ID").Value %>">
</form></td>
<td style="text-align:right"><a href="admin.asp" target="_self">回到列表</a></td>
</tr>
</table>
</body>
</html>
<%
Recordset1.Close()
Set Recordset1 = Nothing
%>
