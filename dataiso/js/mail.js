var ua=navigator.userAgent.toLowerCase();
var isIE=ua.indexOf("msie")>-1;
var isFF=ua.indexOf("firefox")>-1;
function regE(c,b,a){
	if(window.attachEvent){
		c.attachEvent(b,a)
	}else {
		c.addEventListener(b.replace(/^on/,""),a,true)
	}
}function $(a){
	return document.getElementById(a)
}function os(a){
	return $(a).style
}function ResumeError(){
	return true
}window.onerror=ResumeError;

// JavaScript Document
/*var gm=document.gomail;
var vDomain=gm.domains;
var vName=gm.uName;
var vPw=gm.uPw;*/
function checktype(obj){
	if(obj.domains.value=="selected"){alert("您没有选择邮箱");obj.domains.focus();return false}
	if(obj.uName.value==""){alert("您没有填写用户名");obj.uName.focus();return false}
	if(obj.uPw.value==""){alert("您没有填写密码");obj.uPw.focus();return false}
	if(obj.domains.value=="163"||obj.domains.value=="126"||obj.domains.value=="yeah")
	{checkwangyi(obj);}
	else{clickMail(obj);}	
	obj.uPw.value="";	
	return ;
	this.location.reload();
}
function clickMail(obj){
obj.target="_blank"
switch(obj.domains.value){	 
case "188":
obj.action="http://reg.mail.188.com/servlet/coremail/login?language=0&style=1"

obj.user.value=obj.uName.value
obj.pass.value=obj.uPw.value
break
case "vip163":
obj.action="https://ssl1.vip.163.com/logon.m?language=-1&style=-1"
obj.username.value=obj.uName.value
obj.password.value=obj.uPw.value
break
case "netease":
obj.action="http://web.netease.com/cgi/login?verifycookie=1&language=0"
obj.username.value=obj.uName.value
obj.password.value=obj.uPw.value
break
case "sohu":
obj.action="http://passport.sohu.com/login.jsp"
obj.url.value=""

obj.UserName.value=obj.uName.value
obj.Password.value=obj.uPw.value
obj.id.value=obj.uName.value
obj.username.value=obj.uName.value
obj.password.value=obj.uPw.value
obj.m.value=obj.uName.value
obj.passwd.value=obj.uPw.value
obj.mpass.value=obj.uPw.value
obj.loginid.value=obj.uName.value+"@sohu.com"
obj.fl.value="1"
obj.vr.value="1|1"
obj.appid.value="1000"
obj.ru.value="http://login.mail.sohu.com/servlet/LoginServlet"
obj.eru.value="http://login.mail.sohu.com/login.jsp"
obj.ct.value="1173080990"
obj.sg.value="5082635c77272088ae7241ccdf7cf062"
break
case "yahoo":
obj.action="https://edit.bjs.yahoo.com/config/login"
obj.login.value=obj.uName.value
obj.passwd.value=obj.uPw.value
break
case "yahoocn":
obj.action="https://edit.bjs.yahoo.com/config/login"
obj.login.value=obj.uName.value+"@yahoo.cn"
obj.passwd.value=obj.uPw.value
break
case "tom":
obj.action="http://bjweb.163.net/cgi/163/login_pro.cgi"
obj.user.value=obj.uName.value
obj.pass.value=obj.uPw.value
break
case "21cn":
obj.action="http://passport.21cn.com/maillogin.jsp"
obj.LoginName.value=obj.uName.value
obj.passwd.value=obj.uPw.value
obj.domainname.value="21cn.com"
obj.UserName.value=obj.uName.value+'@21cn.com'
break
case "china":
obj.action="http://mail.china.com/coremail/fcg/login"
obj.user.value=obj.uName.value
obj.pass.value=obj.uPw.value
obj.domainname.value="china.com"
//obj.passwd.value=obj.uPw.value
break
case "mailchina":
obj.action="http://freemail.china.com/extend/gb/NULL/NULL/NULL/SignIn.gen"
obj.LoginName.value=obj.uName.value
obj.passwd.value=obj.uPw.value
break
case "citiz":
obj.action="http://citiz.online.sh.cn/default/login_billing.jsp"
obj.username.value=obj.uName.value+"@citiz.net"
obj.password.value=obj.uPw.value
break
case "56":
var gUrsHost=["m113","m48","m49"];
obj.action="http://"+gUrsHost[((new Date()).getSeconds())%3]+".56.com/mail/mail.56"
obj.username.value=obj.uName.value
obj.password.value=obj.uPw.value
break
case "Xinhuanet":
obj.action="http://mail.xinhuanet.com/login.jsp"
obj.username.value=obj.uName.value
obj.password.value=obj.uPw.value
obj.domainname.value='xinhuanet.com'
break
case "sina":

obj.action="http://mail.sina.com.cn/cgi-bin/login.cgi"
obj.u.value=obj.uName.value
obj.psw.value=obj.uPw.value
break
case "eyou":
obj.action="http://ssl.eyou.com/mail_login.php"
obj.LoginName.value=obj.uName.value
obj.Password.value=obj.uPw.value
break
case "263":
obj.action="http://g2wm.263.net/xmweb"
obj.usr.value=obj.uName.value
obj.pass.value=obj.uPw.value
obj.domain.value="263.net"
obj.func.value="login"
break
case "qq":
obj.action="http://mail.qq.com/cgi-bin/login"
obj.u.value=obj.uName.value
obj.p.value=obj.uPw.value
obj.starttime.value=(new Date()).valueOf()
break
case "vipsina":
obj.action="http://vip.sina.com.cn/cgi-bin/login.php"
obj.domain.value='vip.sina.com'
obj.u.value=obj.uName.value
obj.psw.value=obj.uPw.value
break;
case "cren":
obj.action="http://passport.sohu.com/login.jsp"
obj.loginid.value=obj.uName.value+"@chinaren.com"
obj.passwd.value=obj.uPw.value
obj.fl.value="1"
obj.vr.value="1|1"
obj.appid.value="1005"
obj.ru.value="http://profile.chinaren.com/urs/setcookie.jsp?burl=http://alumni.chinaren.com/"
obj.ct.value="1174378209"
obj.sg.value="84ff7b2e1d8f3dc46c6d17bb83fe72bd"
break
case "tianya":
obj.action="http://www.tianya.cn/user/loginsubmit.asp"
obj.vwriter.value=obj.uName.value
obj.vpassword.value=obj.uPw.value
break
case "51":
obj.action="http://passport.51.com/login.5p"
obj.passport_51_user.value=obj.uName.value
obj.passport_51_password.value=obj.uPw.value
obj.gourl.value="http%3A%2F%2Fmy.51.com%2Fwebim%2Findex.php"
break
case "renren":
obj.action="http://login.renren.com/Login.do"
obj.email.value=obj.uName.value
obj.password.value=obj.uPw.value
break
case "baidu":
obj.action="https://passport.baidu.com/?login"
obj.username.value=obj.uName.value
obj.password.value=obj.uPw.value
obj.u.value="http://www.baidu.com/index.php?tn=fm991_pg"
break}
obj.uPw.value = ""
SetmailCookie('m',obj.domains.selectedIndex,5184000,'/')
//obj.uPw.value = ""
return true}
function checkwangyi(obj){ 
obj.target="_parent"
var url="";
var lname=obj.uName.value;
var lpass=obj.uPw.value;
var lindex=obj.domains.selectedIndex;

	if(lindex==0) url="http://reg.163.com/logins.jsp?type=1&url=http://fm163.163.com/coremail/fcg/ntesdoor2?&username="+lname+"&password="+lpass;
	if(lindex==1) url="http://reg.163.com/logins.jsp?type=1&url=http://entry.mail.126.com/cgi/ntesdoor?&username="+lname+"@126.com"+"&password="+lpass;
	if(lindex==12) url="http://reg.163.com/logins.jsp?type=1&url=http://entry.mail.yeah.net/cgi/ntesdoor?&username="+lname+"@yeah.net"+"&password="+lpass;
	openWin(url);
	
// else obj.submit();

return true; 
}
function shortcut(){
	var gm=document.f;
	var vDomain=gm.domains,vName=gm.uName,vPw=gm.uPw;
	if(vDomain.value=="qq")window.open("http://mail.qq.com");
	else if(vDomain.value=="hotmail")window.open("http://login.live.com/");
	else if(vDomain.value=="sogou")window.open("http://mail.sogou.com/");
	else if(vDomain.value=="139")window.open("http://mail.139.com/");
	else if(vDomain.value=="gmail")window.open("http://mail.google.com/");
	else if(vDomain.value=="188")window.open("http://www.188.com/");
        else if(vDomain.value=="kaixin001")window.open("http://www.kaixin001.com/");
	setCookies();
	
}
function setCookies(){
	var gm=document.m;
	var vDomain=gm.domains,vName=gm.uName;
	if(vDomain.value!="qq"&&vDomain.value!="hotmail"&&vDomain.value!="sogou"&&vDomain.value!="139"&&vDomain.value!="gmail"&&vDomain.value!="188"&&vDomain.value!="kaixin001"){
		setmailCookie('mailType',vDomain.selectedIndex.toString ());
		if(vName.value)setmailCookie('username',vName.value.toString ());
		
	}else {
		var mailType=getCookie('mailType')?getCookie('mailType'):0;
		for(var i=0;i<vDomain.options.length;i++){
			if(i!=parseInt(mailType)){
				vDomain.options[i].removeAttribute("selected");
				
			}else {
				vDomain.options[mailType].setAttribute("selected","true");
				
			}
		}
	}
}
function openWin(url){
	window.open(url);	
}
function SetmailCookie(n,v,t,dm){}
