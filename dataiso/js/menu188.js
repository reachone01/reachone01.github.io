var menuids=["menu1"]

// ����������
function buildsubmenus_horizontal(){
for (var i=0; i<menuids.length; i++){
  //  ��ȡָ����DIV�����е��б�Ԫ��UL
  var ultags=document.getElementById(menuids[i]).getElementsByTagName("ul")
    for (var t=0; t<ultags.length; t++){
		if (ultags[t].parentNode.parentNode.id==menuids[i]){ // �����Ƕ����Ӳ˵��б�
			ultags[t].style.top=ultags[t].parentNode.offsetHeight+"px" //����������λ��
			// ��������������CSS��ʽ
			ultags[t].parentNode.getElementsByTagName("a")[0].className="mainfoldericon"
		}
		else{ //�������Ӳ˵��б�(ul)
		  ultags[t].style.left=ultags[t-1].getElementsByTagName("a")[0].offsetWidth+"px" //����������λ��
		  // ��������������CSS��ʽ
    		  ultags[t].parentNode.getElementsByTagName("a")[0].className="subfoldericon"
		}
    //  ��������¼�����
    ultags[t].parentNode.onmouseover=function(){
    // �������ȥʱ��ʾ�����б�
    this.getElementsByTagName("ul")[0].style.visibility="visible"
    }
    //  ����ƿ�ʱ��������
    ultags[t].parentNode.onmouseout=function(){
    this.getElementsByTagName("ul")[0].style.visibility="hidden"
    }
    }
  }
}
//  ���ҳ���¼�
if (window.addEventListener)
window.addEventListener("load", buildsubmenus_horizontal, false)
//  attachEvent ��������ҳ���е��¼�
else if (window.attachEvent)
window.attachEvent("onload", buildsubmenus_horizontal)