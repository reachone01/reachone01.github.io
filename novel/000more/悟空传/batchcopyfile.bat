@echo off
echo.
echo.    _______________________________________________________________
echo.
:menu
echo ����i���������к���ʼֵ��Ϊ�ļ���: 
echo ����j���������к���ֵֹ��Ϊ�ļ���: 

setlocal enabledelayedexpansion





set /p i=  �������к���ʼֵ��Ϊ�ļ���: 
set /p j=  �������к���ֵֹ��Ϊ�ļ���: 

set name=n
set ext=html

echo ���ڴ���%file%��%i%.%ext%~%j%.%ext%��%k%���ļ�...

for /l %%n in (%i%,1,%j%) do (  copy %name%.%ext% %%n.%ext% )

set name=
set ext=
rem goto menu
rem:in��Ӧ�пո�, (��Ҫ����
echo �ļ�������ϣ�
:0
set time=
set cho=
cls
rem ���ں�=���Բ�Ҫ�пո�