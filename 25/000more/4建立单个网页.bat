chcp 65001

echo ^<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" >more.html
echo  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"^> >>more.html
echo ^<html xmlns="http://www.w3.org/1999/xhtml"^> >>more.html
echo ^<base target="_blank" /^> >>more.html

echo ^<head^> >>more.html
echo ^<title^>contents^</title^> >>more.html
echo ^<link  href="../../more.css" rel="stylesheet" type="text/css" /^> >>more.html
echo ^<style type=text/css^> >>more.html
echo ^</style^>^</head^> >>more.html
echo ^<body^>^<div^> >>more.html

for /f "tokens=1,2 usebackq delims=." %%a in (`dir  /o:n /b`) do (
	if "%%a.%%b"=="%%a." (
	if not "%%a"=="backup" (
		echo ^<li^>^<a href="%%a/a.html"^>^<span style="color:blue; "^>%%a^</a^>^</a^>^</li^> >>more.html
	)
	)

)
::echo ^<li^>^</li^>^<li^>^</li^> >>more.html
::html文件与非html文件分开
for /f "tokens=1,2 usebackq delims=." %%a in (`dir  /o:n /b`) do (

	if not "%%a.%%b"=="%%a." (
	if not "%%a.%%b"=="more.html" (
	if not "%%b"=="bat" (
		if "%%b"=="html" (
			echo ^<li^>^<a href="%%a.%%b"^>%%a^</a^>^</li^> >>more.html 
		)
	)
	)
	)
)
::echo ^<li^>^</li^>^<li^>^</li^> >>more.html
for /f "tokens=1,2 usebackq delims=." %%a in (`dir  /o:n /b`) do (

	if not "%%a.%%b"=="%%a." (
	if not "%%a.%%b"=="more.html" (
	if not "%%b"=="bat" (
		if not "%%b"=="html" (
			echo ^<li^>^<a href="%%a.%%b"^>%%a.^<span style="color:red; "^>%%b^</span^>^</a^>^</li^> >>more.html
		)
	)
	)
	)
)
echo ^</div^> >>more.html
echo ^</body^> >>more.html
echo ^</html^> >>more.html

::if not "%%b"=="jpg" (
::大小写敏感，如jpg与JPG
::PowerShell -Command "& {get-content more.html -encoding unicode | set-content more2.html -encoding utf8}"
::unicode或ansi或ascii都是乱码