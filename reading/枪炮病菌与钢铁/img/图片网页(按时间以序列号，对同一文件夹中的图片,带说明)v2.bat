::chcp 65001
::type head.txt >picList.html

echo ^<!DOCTYPE html^> >picList.html
echo ^<html xmlns="http://www.w3.org/1999/xhtml"^> >>picList.html
echo ^<meta content="text/html; charset=utf-8" /^> >>picList.html

echo ^<head^> >>picList.html
echo ^<title^>picList^</title^> >>picList.html
echo ^<style type=text/css^> >>picList.html
echo div{width:74.125^%%;} >>picList.html
echo div{margin^:auto;} >>picList.html
echo img{display^:block;} >>picList.html
::echo img{margin^:auto;} // ͼƬ������>>picList.html
echo img{padding^:2px 0px 16px 0px;} >>picList.html
echo img{border^:0 red solid;} >>picList.html
echo a:link{text-decoration: none; color:#fff;} >>picList.html
echo ^</style^> >> picList.html
echo ^</head^> >> picList.html

echo ^<script^> >>picList.html	
echo window.onload = function() { // ����������ȵ�ͼƬ�����������ʾ >>picList.html	
echo     var div = document.getElementsByTagName("div"); >>picList.html	
echo     //var _w = div.offsetWidth;    // ����Ԫ�ص��ܿ�� >>picList.html	
echo     var _w = document.querySelector(".wrap").offsetWidth >>picList.html	
echo     var Imgarray = document.getElementsByTagName("img"); >>picList.html	
echo     var realWidth; //��ʵ�Ŀ�� >>picList.html	
echo     var realHeight; //��ʵ�ĸ߶� >>picList.html	
echo     for (var i = 0; i ^< Imgarray.length; i++) { >>picList.html	
echo         var imgtemp = new Image(); //����һ��image���� >>picList.html	
echo         imgtemp.src = Imgarray[i].src; >>picList.html	
echo         imgtemp.index = i; //ָ��һ������ֵ������ȷ��������ͼ >>picList.html	
echo         imgtemp.onload = function() { //ͼƬ������ɺ�ִ�� >>picList.html	
echo             var _stemp = this; //����ǰָ�븴�Ƹ��µı�������Ȼ�ᵼ�±������� >>picList.html	
echo             realWidth = this.width; >>picList.html	
echo             if (realWidth ^>= _w) { >>picList.html	
echo                 Imgarray[_stemp.index].style.width = _w + 'px'; >>picList.html	
echo             } else { >>picList.html	
echo                 Imgarray[_stemp.index].style.width = realWidth + 'px'; >>picList.html	
echo             }}}} >>picList.html	
echo ^</script^> >>picList.html

echo ^<body^> >>picList.html
echo ^<div class=wrap^> >>picList.html
for /f "tokens=1,2 usebackq delims=." %%b in (`dir /o:n /b`) do (  ::n�ǰ��ļ�����d�ǰ�����
	if not "%%c" == "bat" (
	if not "%%c" == "html" (
		echo ^<p style="text-indent:-2em;"^>%%b ��^</p^> >>picList.html
		echo ^<a href="%%b.%%c" title="%%b.%%c"^>^<img src="%%b.%%c" /^>^</a^> >>picList.html
	)
	)
)

echo ^</div^> >>picList.html
echo ^</body^> >>picList.html
echo ^</html^> >>picList.html

::for %a in (*.html) do echo "<a href=%a>%a</a>" >>picList.html
::type end.txt >>picList.html
::delims=.��������пո񣬶����ļ���������пո�ʱ������
::dir /o:d /b����ʾ�ļ��������ļ�����������չ������