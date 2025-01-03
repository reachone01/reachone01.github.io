<%@LANGUAGE="VBSCRIPT" CODEPAGE="936"%>
<!--#include file="../Connections/selfrecords.asp" -->
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
<%
Dim Repeat1__numRows
Dim Repeat1__index

Repeat1__numRows = 6
Repeat1__index = 0
Recordset1_numRows = Recordset1_numRows + Repeat1__numRows
%>
<%
'  *** Recordset Stats, Move To Record, and Go To Record: declare stats variables

Dim Recordset1_total
Dim Recordset1_first
Dim Recordset1_last

' set the record count
Recordset1_total = Recordset1.RecordCount

' set the number of rows displayed on this page
If (Recordset1_numRows < 0) Then
  Recordset1_numRows = Recordset1_total
Elseif (Recordset1_numRows = 0) Then
  Recordset1_numRows = 1
End If

' set the first and last displayed record
Recordset1_first = 1
Recordset1_last  = Recordset1_first + Recordset1_numRows - 1

' if we have the correct record count, check the other stats
If (Recordset1_total <> -1) Then
  If (Recordset1_first > Recordset1_total) Then
    Recordset1_first = Recordset1_total
  End If
  If (Recordset1_last > Recordset1_total) Then
    Recordset1_last = Recordset1_total
  End If
  If (Recordset1_numRows > Recordset1_total) Then
    Recordset1_numRows = Recordset1_total
  End If
End If
%>
<%
' *** Recordset Stats: if we don't know the record count, manually count them

If (Recordset1_total = -1) Then

  ' count the total records by iterating through the recordset
  Recordset1_total=0
  While (Not Recordset1.EOF)
    Recordset1_total = Recordset1_total + 1
    Recordset1.MoveNext
  Wend

  ' reset the cursor to the beginning
  If (Recordset1.CursorType > 0) Then
    Recordset1.MoveFirst
  Else
    Recordset1.Requery
  End If

  ' set the number of rows displayed on this page
  If (Recordset1_numRows < 0 Or Recordset1_numRows > Recordset1_total) Then
    Recordset1_numRows = Recordset1_total
  End If

  ' set the first and last displayed record
  Recordset1_first = 1
  Recordset1_last = Recordset1_first + Recordset1_numRows - 1
  
  If (Recordset1_first > Recordset1_total) Then
    Recordset1_first = Recordset1_total
  End If
  If (Recordset1_last > Recordset1_total) Then
    Recordset1_last = Recordset1_total
  End If

End If
%>
<%
Dim MM_paramName 
%>
<%
' *** Move To Record and Go To Record: declare variables

Dim MM_rs
Dim MM_rsCount
Dim MM_size
Dim MM_uniqueCol
Dim MM_offset
Dim MM_atTotal
Dim MM_paramIsDefined

Dim MM_param
Dim MM_index

Set MM_rs    = Recordset1
MM_rsCount   = Recordset1_total
MM_size      = Recordset1_numRows
MM_uniqueCol = ""
MM_paramName = ""
MM_offset = 0
MM_atTotal = false
MM_paramIsDefined = false
If (MM_paramName <> "") Then
  MM_paramIsDefined = (Request.QueryString(MM_paramName) <> "")
End If
%>
<%
' *** Move To Record: handle 'index' or 'offset' parameter

if (Not MM_paramIsDefined And MM_rsCount <> 0) then

  ' use index parameter if defined, otherwise use offset parameter
  MM_param = Request.QueryString("index")
  If (MM_param = "") Then
    MM_param = Request.QueryString("offset")
  End If
  If (MM_param <> "") Then
    MM_offset = Int(MM_param)
  End If

  ' if we have a record count, check if we are past the end of the recordset
  If (MM_rsCount <> -1) Then
    If (MM_offset >= MM_rsCount Or MM_offset = -1) Then  ' past end or move last
      If ((MM_rsCount Mod MM_size) > 0) Then         ' last page not a full repeat region
        MM_offset = MM_rsCount - (MM_rsCount Mod MM_size)
      Else
        MM_offset = MM_rsCount - MM_size
      End If
    End If
  End If

  ' move the cursor to the selected record
  MM_index = 0
  While ((Not MM_rs.EOF) And (MM_index < MM_offset Or MM_offset = -1))
    MM_rs.MoveNext
    MM_index = MM_index + 1
  Wend
  If (MM_rs.EOF) Then 
    MM_offset = MM_index  ' set MM_offset to the last possible record
  End If

End If
%>
<%
' *** Move To Record: if we dont know the record count, check the display range

If (MM_rsCount = -1) Then

  ' walk to the end of the display range for this page
  MM_index = MM_offset
  While (Not MM_rs.EOF And (MM_size < 0 Or MM_index < MM_offset + MM_size))
    MM_rs.MoveNext
    MM_index = MM_index + 1
  Wend

  ' if we walked off the end of the recordset, set MM_rsCount and MM_size
  If (MM_rs.EOF) Then
    MM_rsCount = MM_index
    If (MM_size < 0 Or MM_size > MM_rsCount) Then
      MM_size = MM_rsCount
    End If
  End If

  ' if we walked off the end, set the offset based on page size
  If (MM_rs.EOF And Not MM_paramIsDefined) Then
    If (MM_offset > MM_rsCount - MM_size Or MM_offset = -1) Then
      If ((MM_rsCount Mod MM_size) > 0) Then
        MM_offset = MM_rsCount - (MM_rsCount Mod MM_size)
      Else
        MM_offset = MM_rsCount - MM_size
      End If
    End If
  End If

  ' reset the cursor to the beginning
  If (MM_rs.CursorType > 0) Then
    MM_rs.MoveFirst
  Else
    MM_rs.Requery
  End If

  ' move the cursor to the selected record
  MM_index = 0
  While (Not MM_rs.EOF And MM_index < MM_offset)
    MM_rs.MoveNext
    MM_index = MM_index + 1
  Wend
End If
%>
<%
' *** Move To Record: update recordset stats

' set the first and last displayed record
Recordset1_first = MM_offset + 1
Recordset1_last  = MM_offset + MM_size

If (MM_rsCount <> -1) Then
  If (Recordset1_first > MM_rsCount) Then
    Recordset1_first = MM_rsCount
  End If
  If (Recordset1_last > MM_rsCount) Then
    Recordset1_last = MM_rsCount
  End If
End If

' set the boolean used by hide region to check if we are on the last record
MM_atTotal = (MM_rsCount <> -1 And MM_offset + MM_size >= MM_rsCount)
%>
<%
' *** Go To Record and Move To Record: create strings for maintaining URL and Form parameters

Dim MM_keepNone
Dim MM_keepURL
Dim MM_keepForm
Dim MM_keepBoth

Dim MM_removeList
Dim MM_item
Dim MM_nextItem

' create the list of parameters which should not be maintained
MM_removeList = "&index="
If (MM_paramName <> "") Then
  MM_removeList = MM_removeList & "&" & MM_paramName & "="
End If

MM_keepURL=""
MM_keepForm=""
MM_keepBoth=""
MM_keepNone=""

' add the URL parameters to the MM_keepURL string
For Each MM_item In Request.QueryString
  MM_nextItem = "&" & MM_item & "="
  If (InStr(1,MM_removeList,MM_nextItem,1) = 0) Then
    MM_keepURL = MM_keepURL & MM_nextItem & Server.URLencode(Request.QueryString(MM_item))
  End If
Next

' add the Form variables to the MM_keepForm string
For Each MM_item In Request.Form
  MM_nextItem = "&" & MM_item & "="
  If (InStr(1,MM_removeList,MM_nextItem,1) = 0) Then
    MM_keepForm = MM_keepForm & MM_nextItem & Server.URLencode(Request.Form(MM_item))
  End If
Next

' create the Form + URL string and remove the intial '&' from each of the strings
MM_keepBoth = MM_keepURL & MM_keepForm
If (MM_keepBoth <> "") Then 
  MM_keepBoth = Right(MM_keepBoth, Len(MM_keepBoth) - 1)
End If
If (MM_keepURL <> "")  Then
  MM_keepURL  = Right(MM_keepURL, Len(MM_keepURL) - 1)
End If
If (MM_keepForm <> "") Then
  MM_keepForm = Right(MM_keepForm, Len(MM_keepForm) - 1)
End If

' a utility function used for adding additional parameters to these strings
Function MM_joinChar(firstItem)
  If (firstItem <> "") Then
    MM_joinChar = "&"
  Else
    MM_joinChar = ""
  End If
End Function
%>
<%
' *** Move To Record: set the strings for the first, last, next, and previous links

Dim MM_keepMove
Dim MM_moveParam
Dim MM_moveFirst
Dim MM_moveLast
Dim MM_moveNext
Dim MM_movePrev

Dim MM_urlStr
Dim MM_paramList
Dim MM_paramIndex
Dim MM_nextParam

MM_keepMove = MM_keepBoth
MM_moveParam = "index"

' if the page has a repeated region, remove 'offset' from the maintained parameters
If (MM_size > 1) Then
  MM_moveParam = "offset"
  If (MM_keepMove <> "") Then
    MM_paramList = Split(MM_keepMove, "&")
    MM_keepMove = ""
    For MM_paramIndex = 0 To UBound(MM_paramList)
      MM_nextParam = Left(MM_paramList(MM_paramIndex), InStr(MM_paramList(MM_paramIndex),"=") - 1)
      If (StrComp(MM_nextParam,MM_moveParam,1) <> 0) Then
        MM_keepMove = MM_keepMove & "&" & MM_paramList(MM_paramIndex)
      End If
    Next
    If (MM_keepMove <> "") Then
      MM_keepMove = Right(MM_keepMove, Len(MM_keepMove) - 1)
    End If
  End If
End If

' set the strings for the move to links
If (MM_keepMove <> "") Then 
  MM_keepMove = Server.HTMLEncode(MM_keepMove) & "&"
End If

MM_urlStr = Request.ServerVariables("URL") & "?" & MM_keepMove & MM_moveParam & "="

MM_moveFirst = MM_urlStr & "0"
MM_moveLast  = MM_urlStr & "-1"
MM_moveNext  = MM_urlStr & CStr(MM_offset + MM_size)
If (MM_offset - MM_size < 0) Then
  MM_movePrev = MM_urlStr & "0"
Else
  MM_movePrev = MM_urlStr & CStr(MM_offset - MM_size)
End If
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<script charset="GB2312" language="JavaScript" type="text/javascript" src="js/calendar.js"></script>
<style type="text/css">
table{
margin:2px 0px 2px 0px;
}
.table1{
border-collapse:collapse;
width:80%;
margin:auto;
table-layout:fixed;
overflow:hidden;
}
.table1 th{
background-color:#FFCC00;
background-color:#DEDCFE;
font-size:1.1em;
font-weight:bold;vertical-align:top;
}
.table1 th, .table1 td{
border:1px solid #D7DCF9;
padding:4px;
overflow:hidden;
white-space:normal;vertical-align:top;

}
.table1 tr>td{/*第1列time*/
font-size:16px;
}
.table1 tr>td+td{
font-size:16px;/*第2列week*/
}
.table1 tr>td+td+td{/*第3列*/
font-size:12px;

}
.table1 tr>td+td+td+td{/*第41列*/
font-size:12px;
white-space:normal;
nowrap:nowrap;
}
.table1 tr>td+td+td+td+td{/*第5列*/
font-size:16px;

}
.table1 tr>td+td+td+td+td+td{/*第6列*/
font-size:16px;
text-indent:2em;

}
.table1 tr>td+td+td+td+td+td{/*第6列*/
font-size:16px;
text-indent:0em;
}
.table2{
width:80%;
margin:auto;
}
.table2 td{
border:0px solid red;
padding:5px;
text-align:right;

}
p{
margin:2px;
text-indent:2em;
}
body {
	margin-top: 0px;
	margin-bottom: 0px;
	
}
.time{
	margin:auto;
	width:85%;	
	font-size:12px;
	text-align:center;
    margin-top:-4px;
	margin-bottom:4px;
	border:0px solid #000000;
	height:18px;
}
li{
	list-style:none;
	height:24px;
	font-size:14px;
	list-style-position:inside;
}
.STYLE1 {width:85%; text-align:left; margin-top:-4px; margin-bottom:4px; border:0px solid #000000; height:18px; margin: auto;}
</style>
<title>selfRecord</title>
</head>

<body>
<table class="table2">

<colgroup>

<col width="10%" />
<col width="10%" />
<col width="10%" />
<col width="60%" />
<col width="10%" />
</colgroup>
  <tr>
<tr>
<td style="text-align:left;"><a href="addnews.asp" target="_self">AddRecord</a></td>
  <td><a href="list.asp">list100</a></td>
  <td><a href="search.asp" target="_blank">search</a><span class="time"></span></td>
  <td class="time"><div class="time">
<!--calendar--一部分写在Html,一部份写在JS-->
		<script type="text/javascript">     //农历的另一年份时，需更改6处（第6处是节气更改，作为变量中的字符的"2011"不更改）	
	
				document.write(Year+"-"+"<font color=#008040>"+"<strong>"+"<span style='FONT-SIZE: 12px'>"+enym+"&nbsp;"+isnDay[today.getDay()]+"</font>"+"</strong>"+"</span>"+"&nbsp;")
				
				document.write(cnyear+"<strong>"+"<span style='FONT-SIZE: 12px'>"+"<font color=#0000FF>"+cnym+"</span>"+"</strong>"+"</font>"+"&nbsp;")/*农历月日*/
				document.write("已逝:"+cndayed+"天"+"<sup>"+"+"+"</sup>"+"&nbsp;")
				document.write("可期:"+"<font face='Arial' size='2px' color=#FF8040>"+"<strong>"+haveday+"</strong>"+"</font>"+"天"+"<sup>"+"+"+"</sup>"+"&nbsp;"+"&nbsp;")
		</script>
  </div>
<!--calendar一部分写在Html,一部份写在JS--></td>
  <td><a href="bmgmt/admin.asp" target="_blank">BusinessMgmt</a></td>
</tr></table>

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
    <th>time</th>
    <th>startTime</th>
    <th>endTime</th>
    <th>business content </th>
    <th>progress</th>
    <th>Finished?</th>
    <th>remark</th>
    <th>edit</th>
  </tr>
  <% While ((Repeat1__numRows <> 0) AND (NOT Recordset1.EOF)) %>
    <tr>
      <td><%=(Recordset1.Fields.Item("ID").Value)%></td>
      <td><%=(Recordset1.Fields.Item("startTime").Value)%></td>
      <td><%=(Recordset1.Fields.Item("endTime").Value)%></td>
      <td><%=(Recordset1.Fields.Item("business").Value)%></td>
      <td><%=(Recordset1.Fields.Item("progress").Value)%></td>
      <td><%=(Recordset1.Fields.Item("finish").Value)%></td>
      <td><%=(Recordset1.Fields.Item("remark").Value)%></td>
      <td><A HREF="modify.asp?<%= Server.HTMLEncode(MM_keepNone) & MM_joinChar(MM_keepNone) & "ID=" & Recordset1.Fields.Item("ID").Value %>">modi</A> <A HREF="del.asp?<%= Server.HTMLEncode(MM_keepNone) & MM_joinChar(MM_keepNone) & "ID=" & Recordset1.Fields.Item("ID").Value %>">del</A></td>
    </tr>
    <% 
  Repeat1__index=Repeat1__index+1
  Repeat1__numRows=Repeat1__numRows-1
  Recordset1.MoveNext()
Wend
%>
</table>

  <div style="position:absolute; top:34px; left:1150px; border:1px #eee solid; width:100px;  margin:0; padding:0;">
  <ul style="margin-left:4px; padding:0;">
    <li><% If MM_offset <> 0 Then %>
        <a href="<%=MM_moveFirst%>">第一页</a>
        <% End If ' end MM_offset <> 0 %></li>
    <li><% If MM_offset <> 0 Then %>
        <a href="<%=MM_movePrev%>">前一页</a>
        <% End If ' end MM_offset <> 0 %>    </li>
    <li><% If Not MM_atTotal Then %>
        <a href="<%=MM_moveNext%>">下一页</a>
        <% End If ' end Not MM_atTotal %></li>
    <li><% If Not MM_atTotal Then %>
        <a href="<%=MM_moveLast%>">最后一页</a>
        <% End If ' end Not MM_atTotal %>    </li>
<li>记录 <%=(Recordset1_first)%> 到 <%=(Recordset1_last)%> </li>
<li>总共 <%=(Recordset1_total)%></li>
  </ul>
</div>
</body>
</html>
<%
Recordset1.Close()
Set Recordset1 = Nothing
%>
