setlocal enabledelayedexpansion
set n=0
for /f "tokens=1,2 usebackq delims=." %%A in (`dir /o:d /b`) do (
if not "%%A.%%B"=="��ʱ��˳�����.bat" (
if not "%%A.%%B"=="list.html" (
if not "%%A.%%B"=="%%A" ( rem �������ļ������ƣ�
set /a n=n+1
ren "%%A.%%B" !n!.%%B"
)
)
)
)