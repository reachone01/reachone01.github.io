setlocal enabledelayedexpansion
set n=0
set /p name=请输入更改后的文件前缀字母部分,如pic2009001.jpg格式则输入pic,如不需要则直接回车：
for /f "tokens=1,2 usebackq delims=." %%A in (`dir /o:d /b`) do (
	if not "%%~nA"=="%~n0"  (  rem 不更改bat文件的名称；
	if not "%%B"=="html" ( rem 不更改html文件的名称；
	if not "%%A.%%B"=="%%A" ( rem 不更改文件夹的名称；
		set /a n=n+1

		if !n! lss 10 (
			ren "%%A.%%B" "!name!0!n!.%%B"
		) else (
			ren "%%A.%%B" "!name!!n!.%%B"
		)

	)
	)
	)
)


::图片批量重命名的时候，可能会想到用acdsee7.0以上的版本来实现。
::打开文件夹，全选图片文件，然后按着ctrl键不放，在第一个图片上右健单击重命名，就批量改成了list(1).jpg、list(2).jpg、list(3).jpg这样。

::set /p name=""		"="前后不能有空格；
::) else (		"else"前后必须有空格；
:: if !n! lss 10 ( 此处符号必须是"!"，而不是"%";
