@echo off
echo.
echo.    _______________________________________________________________
echo.
:menu
echo 输入h，表示复制NovelCNen.html：
echo 输入x，表示复制module.xlsm：
echo 输入0，表示退出：
setlocal enabledelayedexpansion
set /p file=  


if /i "%file%" == "0" goto 0
if /i "%file%" == "h" (
echo 开始复制NovelCNen.html……
set /p i=  输入序列号起始值做为文件名: 
set /p j=  输入序列号终止值做为文件名: 
set name=NovelCNen
set ext=html
)
if /i "%file%" == "x" (
echo 开始复制module.xlsx……
set /p i=  输入序列号起始值做为文件名: 
set /p j=  输入序列号终止值做为文件名: 

set name=module
set ext=xlsm )

echo 正在创建%file%的%i%.%ext%~%j%.%ext%共%k%个文件...

for /l %%n in (%i%,1,%j%) do (  copy %name%.%ext% %%n.%ext% )

set name=
set ext=
goto menu
rem:in后应有空格, (不要换行
echo 文件创建完毕！
:0
set time=
set cho=
cls
rem 等于号=两旁不要有空格