cls
@echo off
rem set /p cho= 请输入用户名（即帐户名）,然后回车:
%homedrive%
cd %userprofile%\Application Data\Macromedia\Flash Player
md #Security\FlashPlayerTrust
cd %userprofile%\Application Data\Macromedia\Flash Player\#Security\FlashPlayerTrust

echo %~d0 >>shouxieshuru.txt


ren shouxieshuru.txt shouxieshuru.cfg