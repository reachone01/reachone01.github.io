setlocal enabledelayedexpansion

set n=0

set "lj=%~p0"
set "lj=%lj:\= %"
for %%a in (%lj%) do set wjj=%%a
echo �ļ�����:%wjj%

echo       [01] msinfo32 ϵͳ��Ϣ(windows������ʾ)
echo       [02] systeminfo ϵͳ��Ϣ(��������ʾ)

for /f "tokens=1,2 usebackq delims=." %%A in (`dir /o:n /b`) do (
	if not "%%~nA"=="%~n0"  (  rem ������bat�ļ������ƣ�
	if not "%%B"=="html" ( rem ������html�ļ������ƣ�
	if not "%%B"=="bat" ( rem ������html�ļ������ƣ�
	if not "%%A.%%B"=="%%A" ( rem �������ļ��е����ƣ�
		set /a n=n+1

		if !n! lss 10 (
			ren "%%A.%%B" "%wjj%0!n!.%%B"
		) else (
			ren "%%A.%%B" "%wjj%!n!.%%B"
		)

	)
	)
	)
	)
)





::ͼƬ������������ʱ�򣬿��ܻ��뵽��acdsee7.0���ϵİ汾��ʵ�֡�
::���ļ��У�ȫѡͼƬ�ļ���Ȼ����ctrl�����ţ��ڵ�һ��ͼƬ���ҽ�������������
::�������ĳ���list(1).jpg��list(2).jpg��list(3).jpg������

::set /p name=""		"="ǰ�����пո�
::) else (		"else"ǰ������пո�
:: if !n! lss 10 ( �˴����ű�����"!"��������"%";
