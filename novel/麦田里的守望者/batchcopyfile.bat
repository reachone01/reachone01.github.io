@echo off
@cd c:\user\wwu\desktop\
@cd c:
echo ���ڴ���file0.txt~file9.txt��10���ļ�...
echo.
echo.
for /l %%n in (0,1,27) do (  copy NovelCNen.html %%n.html )
rem:in��Ӧ�пո�, (��Ҫ����
echo �ļ�������ϣ�