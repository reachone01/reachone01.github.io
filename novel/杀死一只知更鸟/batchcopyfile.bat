@echo off
echo.
echo.    _______________________________________________________________
echo.
setlocal enabledelayedexpansion
set /p file=  ����a����ʾ����NovelCNen.html���������Ǹ���module.xlsx:
set /p i=  �������к���ʼֵ��Ϊ�ļ���: 
set /p j=  �������к���ֵֹ��Ϊ�ļ���: 
set /a k=%i%-%j%

if /i "%file%" == "a" (
set name=NovelCNen
set ext=html
) else (

set name=module
set ext=xlsx )

echo ���ڴ���%file%��%i%.%ext%~%j%.%ext%��%k%���ļ�...

for /l %%n in (%i%,1,%j%) do (  copy %name%.%ext% %%n.%ext% )

set name=
set ext=

rem:in��Ӧ�пո�, (��Ҫ����
echo �ļ�������ϣ�

rem ���ں�=���Բ�Ҫ�пո�