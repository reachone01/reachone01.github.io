::type head.txt >picList.html

echo ^<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"^> >picList.html
echo ^<html xmlns="http://www.w3.org/1999/xhtml"^> >>picList.html

echo ^<head^> >>picList.html
echo ^<title^>picList^</title^> >>picList.html
echo ^<style type=text/css^> >>picList.html
echo div{width:74.125^%%;} >>picList.html
echo div{margin^:auto^;} >>picList.html
echo img{display^:block^;margin^:auto;} >>picList.html
echo img{padding^:2px 22px;} >>picList.html
echo img{border^:0 red solid;} >>picList.html
echo a:link{text-decoration: none; color:#fff;} >>picList.html

echo ^</style^>^</head^> >> picList.html

echo ^<body^>^<div^> >>picList.html


for /f "tokens=1,2 usebackq delims=." %%b in (`dir /o:d /b`) do (
	if not "%%c" == "bat" (
	if not "%%c" == "html" (
		echo ^<p style="text-indent:-2em;"^>%%b ↓^</p^> >>picList.html
		echo ^<a href="%%b.%%c" title="%%b.%%c"^>^<img src="%%b.%%c" /^>^</a^> >>picList.html
	)
	)
)

echo ^</div^> >>picList.html
echo ^</body^> >>picList.html
echo ^</html^> >>picList.html

::for %a in (*.html) do echo "<a href=%a>%a</a>" >>picList.html
::type end.txt >>picList.html
::delims=.后面如果有空格，对于文件名中如果有空格时则会出错；
::dir /o:d /b：显示文件夹名或文件名（包括扩展名）；