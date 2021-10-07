chcp 65001

::type head.txt >a.html

echo ^<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"^> >a.html
echo ^<html xmlns="http://www.w3.org/1999/xhtml"^> >>a.html
echo ^<meta content="text/html; charset=utf-8" /^> >>a.html

echo ^<head^> >>a.html
echo ^<title^>picList^</title^> >>a.html
echo ^<style type=text/css^> >>a.html
echo div{width:74.125^%%;} >>a.html
echo div{margin^:auto^;} >>a.html
echo img{display^:block^;margin^:auto;} >>a.html
echo img{padding^:2px 22px;} >>a.html
echo img{border^:0 red solid;} >>a.html
echo a:link{text-decoration: none; color:#fff;} >>a.html

echo ^</style^>^</head^> >> a.html

echo ^<body^>^<div^> >>a.html


for /f "tokens=1,2 usebackq delims=." %%b in (`dir /o:d /b`) do (
	if not "%%c" == "bat" (
	if not "%%c" == "html" (
		echo ^<a href="%%b.%%c" title="%%b.%%c"^>^<img src="%%b.%%c" /^>^</a^> >>a.html
	)
	)
)

echo ^</div^> >>a.html
echo ^</body^> >>a.html
echo ^</html^> >>a.html

::for %a in (*.html) do echo "<a href=%a>%a</a>" >>a.html
::type end.txt >>a.html
::delims=.后面如果有空格，对于文件名中如果有空格时则会出错；
::dir /o:d /b：显示文件夹名或文件名（包括扩展名）；