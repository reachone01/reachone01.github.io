@echo off
echo.
echo.    _______________________________________________________________
echo.
setlocal enabledelayedexpansion
set /p file=  输入a，表示复制NovelCNen.html，其它则是复制module.xlsx:
set /p i=  输入序列号起始值做为文件名: 
set /p j=  输入序列号终止值做为文件名: 
set /a k=%i%-%j%

if /i "%file%" == "a" (
set name=NovelCNen
set ext=html
) else (

set name=module
set ext=xlsx )

echo 正在创建%file%的%i%.%ext%~%j%.%ext%共%k%个文件...

for /l %%n in (%i%,1,%j%) do (  copy %name%.%ext% %%n.%ext% )

set name=
set ext=

rem:in后应有空格, (不要换行
echo 文件创建完毕！

rem 等于号=两旁不要有空格