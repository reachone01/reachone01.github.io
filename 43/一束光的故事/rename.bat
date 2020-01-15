@echo off
setlocal enabledelayedexpansion
for /r %%i in (*.*) do (
	set name=%%~ni
	set name=!name:~-2!
	ren %%~fi !name!%%~xi
)