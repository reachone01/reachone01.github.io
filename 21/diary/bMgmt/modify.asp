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
' *** Update Record: set variables

If (CStr(Request("MM_update")) = "form1" And CStr(Request("MM_recordId")) <> "") Then

  MM_editConnection = MM_selfrecords_STRING
  MM_editTable = "Bmgmt"
  MM_editColumn = "ID"
  MM_recordId = "" + Request.Form("MM_recordId") + ""
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
' *** Update Record: construct a sql update statement and execute it

If (CStr(Request("MM_update")) <> "" And CStr(Request("MM_recordId")) <> "") Then

  ' create the sql update statement
  MM_editQuery = "update " & MM_editTable & " set "
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
      MM_editQuery = MM_editQuery & ","
    End If
    MM_editQuery = MM_editQuery & MM_columns(MM_i) & " = " & MM_formVal
  Next
  MM_editQuery = MM_editQuery & " where " & MM_editColumn & " = " & MM_recordId

  If (Not MM_abortEdit) Then
    ' execute the update
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
Dim Recordset1__MMColParam
Recordset1__MMColParam = "1"
If (Request.QueryString("ID") <> "") Then 
  Recordset1__MMColParam = Request.QueryString("ID")
End If
%>
<%
Dim Recordset1
Dim Recordset1_numRows

Set Recordset1 = Server.CreateObject("ADODB.Recordset")
Recordset1.ActiveConnection = MM_selfrecords_STRING
Recordset1.Source = "SELECT * FROM Bmgmt WHERE ID = " + Replace(Recordset1__MMColParam, "'", "''") + ""
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
.table2{
width:40%;
margin:auto;
margin-bottom:8px;
}
.table2 td{
border:0px solid red;
}
</style>
<title>modify</title>
</head>

<body>
<table class="table2">
<tr><td style="font-size:1.2em; font-weight:bold;">修改记录操作页面</td></tr></table>

<form method="POST" action="<%=MM_editAction%>" name="form1">
  <table align="center">
    <tr valign="baseline">
      <td nowrap align="right">start time :</td>
      <td colspan="2"><input name="startTime" type="text" id="startTime" value="<%=(Recordset1.Fields.Item("startTime").Value)%>" size="20" /></td>
    </tr>
    <tr valign="baseline">
      <td nowrap align="right">end time :</td>
      <td colspan="2"><input name="endTime" type="text" id="endTime" value="<%=(Recordset1.Fields.Item("endTime").Value)%>" size="20" /></td>
    </tr>
    <tr valign="baseline">
      <td>business:</td>
      <td colspan="2"><textarea name="business" cols="60" rows="3" id="business"><%=(Recordset1.Fields.Item("business").Value)%></textarea>      </td>
    </tr>
    <tr valign="baseline">
      <td>progress:</td>
      <td colspan="2"><textarea name="progress" cols="60" rows="2" id="progress"><%=(Recordset1.Fields.Item("progress").Value)%></textarea>      </td>
    </tr>
    <tr>
      <td>finished or not: </td>
      <td colspan="2" valign="baseline"><textarea name="finish" cols="60" rows="2" id="finish"><%=(Recordset1.Fields.Item("finish").Value)%></textarea></td>
    </tr>
    <tr>
      <td>remark:</td>
      <td colspan="2" valign="baseline"><textarea name="remark" cols="60" rows="2" id="remark"><%=(Recordset1.Fields.Item("remark").Value)%></textarea>      </td>
    </tr>
    <tr valign="baseline">
      <td nowrap align="right">&nbsp;</td>
      <td><input type="submit" value="更新记录">      </td>
      <td><a href="admin.asp" target="_self">回到列表</a></td>
    </tr>
  </table>
  <input type="hidden" name="MM_update" value="form1">
  <input type="hidden" name="MM_recordId" value="<%= Recordset1.Fields.Item("ID").Value %>">
</form>
<p>&nbsp;</p>
</body>
</html>
<%
Recordset1.Close()
Set Recordset1 = Nothing
%>
