::for %a in (*.html) do echo "<a href=%a>%a</a>" >index.html

type head.txt >>index.html
echo ^<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"^> >>index.html
echo ^<html xmlns="http://www.w3.org/1999/xhtml"^> >>index.html

echo ^<head^> >>index.html
echo ^<title^>pic list^</title^> >>index.html
echo ^<style type=text/css^> >>index.html
echo div{width:94.125^%;} >>index.html
echo div{margin^:auto^;} >>index.html
echo img{display^:block^;margin^:auto;} >>index.html
echo img{padding^:2px 22px;} >>index.html
echo img{border^:0 red solid;} >>index.html
echo a:link{text-decoration: none; color:#fff;} >>index.html

echo ^</style^>^</head^> >> index.html

echo ^<body^>^<div^> >>index.html

for /f "tokens=* usebackq " %%b in (`dir /o:d /b`) do (

echo ^<p^>%%b^</p^> >>index.html
echo ^<a href="%%b" title="%%b"^>^<img src="%%b" /^>^</a^> >>index.html

)
type end.txt >>index.html
echo ^</div^> >>index.html
echo ^</body^> >>index.html
echo ^</html^> >>index.html