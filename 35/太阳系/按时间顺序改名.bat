setlocal enabledelayedexpansion
set n=0
for /f "tokens=1,2 usebackq delims=." %%A in (`dir /o:d /b`) do (
if not "%%A.%%B"=="按时间顺序改名.bat" (
if not "%%A.%%B"=="list.html" (
if not "%%A.%%B"=="%%A" ( rem 不更改文件夹名称；
set /a n=n+1
ren "%%A.%%B" !n!.%%B"
)
)
)
)