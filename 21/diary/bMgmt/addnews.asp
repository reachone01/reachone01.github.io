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
' *** Insert Record: set variables

If (CStr(Request("MM_insert")) = "form1") Then

  MM_editConnection = MM_selfrecords_STRING
  MM_editTable = "Bmgmt"
  MM_editRedirectUrl = "admin.asp"
  MM_fieldsStr  = "startTime|value|endTime|value|business|value|progress|value|finish|value|remark|value"
  MM_columnsStr = "startTime|',none,NULL|endTime|',none,NULL|business|',none,''|progress|',none,''|finish|',none,''|remark|',none,''"

  ' create the MM_fields and MM_columns arrays
  MM_fields = Split(MM_fieldsStr, "|")
  MM_columns = Split(MM_columnsStr, "|")
  
  ' set the form values
  For MM_i = LBound(MM_fields) To UBound(MM_fields) Step 2
    MM_fields(MM_i+1) = CStr(Request.Form(MM_fields(MM_i)))
  Next

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
' *** Insert Record: construct a sql insert statement and execute it

Dim MM_tableValues
Dim MM_dbValues

If (CStr(Request("MM_insert")) <> "") Then

  ' create the sql insert statement
  MM_tableValues = ""
  MM_dbValues = ""
  For MM_i = LBound(MM_fields) To UBound(MM_fields) Step 2
    MM_formVal = MM_fields(MM_i+1)
    MM_typeArray = Split(MM_columns(MM_i+1),",")
    MM_delim = MM_typeArray(0)
    If (MM_delim = "none") Then MM_delim = ""
    MM_altVal = MM_typeArray(1)
    If (MM_altVal = "none") Then MM_altVal = ""
    MM_emptyVal = MM_typeArray(2)
    If (MM_emptyVal = "none") Then MM_emptyVal = ""
    If (MM_formVal = "") Then
      MM_formVal = MM_emptyVal
    Else
      If (MM_altVal <> "") Then
        MM_formVal = MM_altVal
      ElseIf (MM_delim = "'") Then  ' escape quotes
        MM_formVal = "'" & Replace(MM_formVal,"'","''") & "'"
      Else
        MM_formVal = MM_delim + MM_formVal + MM_delim
      End If
    End If
    If (MM_i <> LBound(MM_fields)) Then
      MM_tableValues = MM_tableValues & ","
      MM_dbValues = MM_dbValues & ","
    End If
    MM_tableValues = MM_tableValues & MM_columns(MM_i)
    MM_dbValues = MM_dbValues & MM_formVal
  Next
  MM_editQuery = "insert into " & MM_editTable & " (" & MM_tableValues & ") values (" & MM_dbValues & ")"

  If (Not MM_abortEdit) Then
    ' execute the insert
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
Recordset1.Source = "SELECT * FROM Bmgmt"
Recordset1.CursorType = 0
Recordset1.CursorLocation = 2
Recordset1.LockType = 1
Recordset1.Open()

Recordset1_numRows = 0
%><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<style type="text/css">
.table2{
width:50%;
margin:auto;
margin-bottom:8px;
}
.table2 td{
border:0px solid red;
}
</style>
<title>add record</title>
</head>

<body>

<table class="table2">
<tr><td style="font-size:1.2em; font-weight:bold;">添加记录操作页面</td></tr></table>

<form ACTION="<%=MM_editAction%>" METHOD="POST" id="form1" name="form1">
  <table width="50%" border="0" align="center">
    <tr>
      <td>start time:</td>
      <td colspan="3"><input name="startTime" type="text" id="startTime" value="<%=(Recordset1.Fields.Item("startTime").Value)%>" size="20" /></td>
    </tr>
    <tr>
      <td>end time: </td>
      <td colspan="3"><input name="endTime" type="text" id="endTime" value="<%=(Recordset1.Fields.Item("endTime").Value)%>" size="20" /></td>
    </tr>
    <tr>
      <td>business:</td>
      <td colspan="3"><textarea name="business" cols="60" rows="3" id="business"></textarea></td>
    </tr>
    <tr>
      <td>progress:</td>
      <td colspan="3"><textarea name="progress" cols="60" rows="2" id="progress"></textarea></td>
    </tr>
    <tr>
      <td>finished or not: </td>
      <td colspan="3"><textarea name="finish" cols="60" rows="2" id="finish"></textarea></td>
    </tr>
    <tr>
      <td>remark:</td>
      <td colspan="3"><textarea name="remark" cols="60" rows="2" id="remark"></textarea></td>
    </tr>
    <tr>
      <td>&nbsp;</td>
      <td><input type="submit" name="Submit" value="提交" /></td>
      <td><input type="reset" name="Submit2" value="重置" /></td>
      <td><a href="admin.asp" target="_self">回到列表</a></td>
    </tr>
  </table>

  

  

  <input type="hidden" name="MM_insert" value="form1">
</form>
</body>
</html>
<%
Recordset1.Close()
Set Recordset1 = Nothing
%>
