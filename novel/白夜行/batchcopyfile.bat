@echo off
@cd c:\user\wwu\desktop\
@cd c:
echo ���ڴ���file0.txt~file9.txt��10���ļ�...
echo.
echo.
for /l %%n in (2,1,22) do ( 
 
	if !n! lss 10 (
		copy NovelCN.html %%n.html 
		rem: copy NovelCN.html 0%%n.html 			

	) else (
		copy NovelCN.html %%n.html
	)

)
rem:in��Ӧ�пո�, (��Ҫ����
echo �ļ�������ϣ�


