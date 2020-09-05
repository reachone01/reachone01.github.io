chcp 65001

echo ^<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"^> >a.html
echo ^<html xmlns="http://www.w3.org/1999/xhtml"^> >>a.html
echo ^<base target="_blank" /^> >>a.html

echo ^<head^> >>a.html
echo ^<title^>contents^</title^> >>a.html

echo ^<style type=text/css^> >>a.html
echo div{width^:74.125^%%;} >>a.html
echo div{margin^:auto;} >>a.html
echo div{margin^:auto;} >>a.html
echo li{width^:49^%%;} >>a.html
echo li{float^:left;} >>a.html
echo li{height^:32px;} >>a.html
echo li{line-height^:32px;} >>a.html
echo li{overflow^:hidden;} >>a.html
echo li{white-space^:nowrap;} >>a.html
echo li{text-overflow^:ellipsis;} >>a.html
echo img{border^:0 red solid;} >>a.html
echo a:link{text-decoration: none; color:#000;} >>a.html
		


echo ^</style^>^</head^> >>a.html

echo ^<body^>^<div^> >>a.html
for /f "tokens=1,2 usebackq delims=." %%a in (`dir  /o:n /b`) do (

	if not "%%a.%%b"=="%%a." (
	if not "%%b"=="bat" (
	if not "%%a.%%b"=="a.html" (
		if "%%b"=="html" (
			echo ^<li^>^<a href="%%a.%%b"^>%%a^</a^>^</li^> >>a.html 
		) else (
			echo ^<li^>^<a href="%%a.%%b"^>%%a.^<span style="color:red; "^>%%b^</span^>^</a^>^</li^> >>a.html
		)
	)
	)
))
for /f "tokens=1,2 usebackq delims=." %%a in (`dir  /o:n /b`) do (
	if "%%a.%%b"=="%%a." (
		echo ^<li^>^<a href="%%a/a.html"^>^<span style="color:blue; "^>%%a^</span^>^</a^>^</li^> >>a.html
	)

)
echo ^</div^> >>a.html
echo ^</body^> >>a.html
echo ^</html^> >>a.html
