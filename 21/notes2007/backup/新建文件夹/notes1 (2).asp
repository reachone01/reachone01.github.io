<%
' FileName="Connection_odbc_conn_dsn.htm"
' Type="ADO"
' DesigntimeType="ADO"
' HTTP="false"
' Catalog=""
' Schema=""
Dim MM_notes_STRING
MM_notes_STRING = "dsn=wwuself;"
dim DB,MM_conn_STRING
DB = "wwu.mdb"
MM_conn_STRING = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source =" & Server.MapPath(DB)
set conn = Server.CreateObject("ADODB.Connection")
conn.open MM_notes_STRING
if Err Then
err.Clear
Set Conn = Nothing
Response.Write "���ݿ����ӳ���[���룺01]���������ݿ������ļ��е������ִ���"
Response.End
End If
%>
