cls
@echo off
rem set /p cho= �������û��������ʻ�����,Ȼ��س�:
%homedrive%
cd %userprofile%\Application Data\Macromedia\Flash Player
md #Security\FlashPlayerTrust
cd %userprofile%\Application Data\Macromedia\Flash Player\#Security\FlashPlayerTrust

echo %~d0 >>shouxieshuru.txt


ren shouxieshuru.txt shouxieshuru.cfg