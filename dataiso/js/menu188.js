var menuids=["menu1"]

// 定义主函数
function buildsubmenus_horizontal(){
for (var i=0; i<menuids.length; i++){
  //  获取指定的DIV容器中的列表元素UL
  var ultags=document.getElementById(menuids[i]).getElementsByTagName("ul")
    for (var t=0; t<ultags.length; t++){
		if (ultags[t].parentNode.parentNode.id==menuids[i]){ // 假如是顶级子菜单列表
			ultags[t].style.top=ultags[t].parentNode.offsetHeight+"px" //则设置它的位置
			// 定义类名，套用CSS样式
			ultags[t].parentNode.getElementsByTagName("a")[0].className="mainfoldericon"
		}
		else{ //假如是子菜单列表(ul)
		  ultags[t].style.left=ultags[t-1].getElementsByTagName("a")[0].offsetWidth+"px" //则设置它的位置
		  // 定义类名，套用CSS样式
    		  ultags[t].parentNode.getElementsByTagName("a")[0].className="subfoldericon"
		}
    //  定义鼠标事件函数
    ultags[t].parentNode.onmouseover=function(){
    // 鼠标移上去时显示其子列表
    this.getElementsByTagName("ul")[0].style.visibility="visible"
    }
    //  鼠标移开时将其隐藏
    ultags[t].parentNode.onmouseout=function(){
    this.getElementsByTagName("ul")[0].style.visibility="hidden"
    }
    }
  }
}
//  添加页面事件
if (window.addEventListener)
window.addEventListener("load", buildsubmenus_horizontal, false)
//  attachEvent 方法监视页面中的事件
else if (window.attachEvent)
window.attachEvent("onload", buildsubmenus_horizontal)