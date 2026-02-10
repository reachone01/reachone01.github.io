echo off
setlocal disabledelayedexpansion

set "dir=F:\wwuhn\novel\白鹿原"
set "old=色*"
set "new=色"

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
title 完成
del ..tmp 2>nul
echo,
echo 按任意键退出...
pause >nul
