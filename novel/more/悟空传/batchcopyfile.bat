@echo off
echo.
echo.    _______________________________________________________________
echo.
:menu
echo 输入i，输入序列号起始值做为文件名: 
echo 输入j，输入序列号终止值做为文件名: 

setlocal enabledelayedexpansion





set /p i=  输入序列号起始值做为文件名: 
set /p j=  输入序列号终止值做为文件名: 

set name=n
set ext=html

echo 正在创建%file%的%i%.%ext%~%j%.%ext%共%k%个文件...

for /l %%n in (%i%,1,%j%) do (  copy %name%.%ext% %%n.%ext% )

set name=
set ext=
rem goto menu
rem:in后应有空格, (不要换行
echo 文件创建完毕！
:0
set time=
set cho=
cls
rem 等于号=两旁不要有空格