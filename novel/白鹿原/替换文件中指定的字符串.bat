echo off
setlocal disabledelayedexpansion

set "dir=F:\wwuhn\novel\��¹ԭ"
set "old=ɫ*"
set "new=ɫ"

findstr /s /m /c:"%old%" "%dir%\*.html" >..tmp

for /f "delims=" %%i in (..tmp) do (
    findstr /n .* "%%i" >..tmp
    (
        for /f "delims=" %%a in (..tmp) do (
            set str=%%a
            setlocal enabledelayedexpansion
            set "str=!str:%old%=%new%!"
            echo,!str:*:=!
            endlocal
        )
    ) >"%%i"
)


del ..tmp

:exit
title ���
del ..tmp 2>nul
echo,
echo ��������˳�...
pause >nul
