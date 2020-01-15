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
Response.Write "数据库连接出错[代码：01]，请检查数据库链接文件中的连接字串。"
Response.End
End If
%>
