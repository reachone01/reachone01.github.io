@echo off
echo.
echo.    _______________________________________________________________
echo.
:menu
echo ����h����ʾ����NovelCNen.html��
echo ����x����ʾ����module.xlsm��
echo ����0����ʾ�˳���
setlocal enabledelayedexpansion
set /p file=  


if /i "%file%" == "0" goto 0
if /i "%file%" == "h" (
echo ��ʼ����NovelCNen.html����
set /p i=  �������к���ʼֵ��Ϊ�ļ���: 
set /p j=  �������к���ֵֹ��Ϊ�ļ���: 
set name=NovelCNen
set ext=html
)
if /i "%file%" == "x" (
echo ��ʼ����module.xlsx����
set /p i=  �������к���ʼֵ��Ϊ�ļ���: 
set /p j=  �������к���ֵֹ��Ϊ�ļ���: 

set name=module
set ext=xlsm )

echo ���ڴ���%file%��%i%.%ext%~%j%.%ext%��%k%���ļ�...

for /l %%n in (%i%,1,%j%) do (  copy %name%.%ext% %%n.%ext% )

set name=
set ext=
goto menu
rem:in��Ӧ�пո�, (��Ҫ����
echo �ļ�������ϣ�
:0
set time=
set cho=
cls
rem ���ں�=���Բ�Ҫ�пո�