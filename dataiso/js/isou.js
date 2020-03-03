//1 综合搜索zh
//2 新闻搜索xw
//3 百科bk
//4 文库wk
//5  book
//6 词典cidian
//7 图片tp
//8 MP3
//9 视频电影sp
//10 bt
//11 软件rj
//12 购物搜索gw
/*
encodeURI(苹果)=%E8%8B%B9%E6%9E%9C
encodeToGb2312(苹果)=%C6%BB%B9%FB
+ decodeFromGb2312(formmain.kw.value) + 

*/
//特别注意，如果在Html文档中删除了一个单选框，则下面对应的函数必须删掉，否则会出错；即html与js对应，js不能多；

function search(){
	/*var keywords = document.formmain.kw.value;
	if (keywords==""){
		alert("请先输入您想搜索的关键词，然后单击“单选按钮”即开始搜索，\n如果想直接浏览站点，则单击“单选按钮”后的“超链接”即可!\nPlease input keyword firstly!");
		document.formmain.kw.focus();}
	

//综合搜索
else */

if(formmain.rdbaidu.checked)
window.open("http://www.baidu.com/baidu?&ct=&lm=&z=&rn=&word="+ encodeURI(formmain.kw.value) +"&_si.x=4&_si.y=2");

else if(formmain.rdgoogle.checked)
window.open("http://www.google.com.hk/search?hl=zh-CN&q=" + encodeURI(formmain.kw.value));

else if(formmain.rdyahoozhongguo.checked)
window.open("http://search.cn.yahoo.com/s?pid=402877_1010&v=web&p=" + formmain.kw.value);

else if (formmain.rd_yahoo.checked) 
window.open("http://search.yahoo.com/search?prssweb=Search&ei=UTF-8&fr=FP-tab-web-t&fl=0&x=wrt&p=" + encodeURI(formmain.kw.value));

else if(formmain.rdbingzonghe.checked)
window.open("http://cn.bing.com/search?FORM=BWFD&q=" + encodeURI(formmain.kw.value));


else if(formmain.rdsoso.checked)
window.open("http://www.soso.com/q?pid=s.idx&w=" + encodeURI(formmain.kw.value));

else if(formmain.rdsogou.checked)
window.open("http://www.sogou.com/web?query="+ encodeURI(formmain.kw.value+"&sogouhome="));

else if(formmain.rdyoudao.checked)
window.open("http://www.youdao.com/search?keyfrom=web.index.suggest&q="+encodeURI(formmain.kw.value)+"&btnIndex="+ encodeURI(formmain.kw.value));

else if(formmain.rdzhongsou.checked)
window.open("http://www.zhongsou.com/third.cgi?w="+encodeToGb2312(formmain.kw.value) + "&kid=&y=5&stag=1&dt=0&pt=0"); 	

else if(formmain.rd_panggu.checked)
window.open("http://search.panguso.com/pagesearch.htm?q="+encodeURI(formmain.kw.value));

else if(formmain.rd_cctvsearch.checked)
window.open("http://search.cctv.com/search.php?qtext="+encodeURI(formmain.kw.value));

else if(formmain.rd_jikesou.checked)
window.open("http://www.jike.com/so?q=" + encodeURI(formmain.kw.value));

else if(formmain.rd_360sou.checked)
window.open("http://www.so.com/s?ie=utf-8&src=360sou_home&q=" + encodeURI(formmain.kw.value) +"&_re=0");

else if(formmain.rd_twyahoo.checked)
window.open("http://tw.search.yahoo.com/search?p=" + encodeURI(formmain.kw.value) +"&fr=sfp&pqstr=" + encodeURI(formmain.kw.value));



else if(formmain.rd_pkuso.checked)
window.open("http://e.pku.edu.cn/cgi-bin/allsearch?word="+ encodeURI(formmain.kw.value));



else if(formmain.rd_aliyunso.checked)
window.open("http://s.aliyun.com/s?q="+ encodeURI(formmain.kw.value));

//english search

else if(formmain.rdgoogleen.checked)
window.open("http://www.google.com.hk/search?hl=en&newwindow=1&safe=strict&tbo=d&site=webhp&source=hp&q="+encodeURI(formmain.kw.value)); 

else if(formmain.rd_bing.checked)
window.open("http://www.bing.com/search?q="+formmain.kw.value);	

else if(formmain.rd_lycos.checked)
window.open("http://search.lycos.com/web?q="+ encodeURI(formmain.kw.value));

else if(formmain.rd_blekko.checked)
window.open("http://blekko.com/ws/?q="+ encodeURI(formmain.kw.value));

else if(formmain.rd_gigablast.checked)
window.open("http://gigablast.com/search?k8g=62599&q="+ encodeURI(formmain.kw.value));

else if(formmain.rd_teoma.checked)
window.open("http://www.teoma.com/web?qsrc=0&o=102541&l=dir&fhp=1&q="+ encodeURI(formmain.kw.value));

else if(formmain.rd_altavista.checked)
window.open("http://us.yhs4.search.yahoo.com/yhs/search?p="+ encodeURI(formmain.kw.value+"&fr=altavista&fr2=sfp&iscqry="));

else if(formmain.rd_askcom.checked)
window.open("http://www.ask.com/web?q=" + encodeURI(formmain.kw.value) + "&search=&qsrc=364&o=0&l=dir");

else if(formmain.rd_yahoosearch.checked)
window.open("http://search.yahoo.com/search?p="+ encodeURI(formmain.kw.value+"&fr=sfp&fr2=&iscqry="));

else if(formmain.rd_yandex.checked)
window.open("http://www.yandex.com/yandsearch?text="+ encodeURI(formmain.kw.value+"&lr=87"));

//新闻搜索
else if(formmain.rdbaidunews.checked)
window.open("http://news.baidu.com/ns?word="+encodeToGb2312(formmain.kw.value)+"&content=%C8%AB%CE%C4%CB%D1%CB%F7&cl=2&ct=0&rn=20&tn=news");

else if(formmain.rdgooglenews.checked)
window.open("http://news.google.com/news?hl=zh-CN&ned=cn&q="+encodeURI(formmain.kw.value)+"&btnG=%E6%90%9C%E7%B4%A2%E6%96%B0%E9%97%BB");

else if(formmain.rdyahoocnnews.checked)
window.open("http://news.yahoo.cn/s?q="+encodeURI(formmain.kw.value));

else if(formmain.rdcctvnews.checked)
window.open("http://so.cntv.cn/search.php?qtext="+ encodeURI(formmain.kw.value) + "&sid=0088&pid=0000&type=1");

else if(formmain.rdqqnews.checked)
window.open("http://www.soso.com/q?w="+encodeURI(formmain.kw.value) + "&cid=qs.news.se&site=news.qq.com&idx=f");

else if(formmain.rdsouhunews.checked)
window.open("http://news.sogou.com/news?mode=1&h=&query="+encodeURI(formmain.kw.value));

else if(formmain.rd163news.checked)
window.open("http://news.yodao.com/search?keyfrom=news.163&site=%CD%F8%D2%D7&suser=user163&in=page&Submit.x=23&Submit.y=7&q="+encodeURI(formmain.kw.value));

else if(formmain.rdxinhuanews.checked)
window.open("http://news.panguso.com/newssearch.htm?ptn=xinhua&pmd=zzpt&srv=web_news&wid=w4&q="+encodeURI(formmain.kw.value));

else if(formmain.rd_news_ifeng.checked)
window.open("http://search.ifeng.com/sofeng/search.action?c=1&u=&q="+encodeURI(formmain.kw.value));

else if(formmain.rd_360news.checked)
window.open("http://news.so.com/ns?q="+encodeURI(formmain.kw.value) + "&src=newhome&tn=news");

else if(formmain.rd_bingnews.checked)
window.open("http://cn.bing.com/news/search?q="+encodeURI(formmain.kw.value) + "&qs=n&form=QBNT&pq=%E6%90%9C%E7%B4%A2&sc=8-2&sp=-1&sk=");

else if(formmain.rd_sinanews.checked)
window.open("http://search.sina.com.cn/?q="+encodeToGb2312(formmain.kw.value) + "&c=news&from=channel");

else if(formmain.rd_cankaonews.checked)
window.open("http://app.cankaoxiaoxi.com/?app=search&controller=index&action=search&type=all&wd="+encodeURI(formmain.kw.value));


//english news
else if(formmain.rd_news_msn.checked)
window.open("http://search.msn.com/news/results.aspx?FORM=MSNH&q="+encodeURI(formmain.kw.value));

else if(formmain.rd_news_aol.checked)
window.open("http://search.aol.com/aol/news?invocationType=topsearchbox.newshome&query="+encodeURI(formmain.kw.value));

else if(formmain.rd_news_google.checked)
window.open("http://news.google.com/news?hl=en&ned=us&btnG=Search+News&q="+encodeURI(formmain.kw.value));

else if(formmain.rd_news_yahoo.checked)
window.open("http://news.search.yahoo.com/search/news?sm=Yahoo%21+Search&fr=FP-tab-news-t&toggle=1&cop=&ei=UTF-8&p="+encodeURI(formmain.kw.value)); 

else if(formmain.rd_news_abc.checked)
window.open("http://abc.go.com/search?search="+encodeURI(formmain.kw.value)); 

else if(formmain.rd_news_usatoday.checked)
window.open("http://www.usatoday.com/search/"+encodeURI(formmain.kw.value) +"/"); 

else if(formmain.rd_news_espn.checked)
window.open("http://search.espn.go.com/"+formmain.kw.value +"/"); 

else if(formmain.rd_news_bbc.checked)
window.open("http://www.bbc.co.uk/search/news/?q="+encodeURI(formmain.kw.value)); 

<!--百科-->
else if(formmain.rd_bdbk.checked)
window.open("https://baike.baidu.com/item/" + encodeURI(formmain.kw.value));

else if(formmain.rd_hd.checked)
window.open("http://so.baike.com/s/doc/" + encodeURI(formmain.kw.value));

else if(formmain.rd_wk.checked)
window.open("http://zh.wikipedia.org/wiki/" + encodeURI(formmain.kw.value));

else if(formmain.rd_wken.checked)
window.open("http://en.wikipedia.org/wiki/" + encodeURI(formmain.kw.value));

else if(formmain.rd_cnfa.checked)/*problem*/
window.open("http://law.law-star.com/search?dbsType=chl/lar/iel/scs/hnt/eag/cas&rjs0=" + formmain.kw.value);

else if(formmain.rd_flag.checked)
window.open(" http://tools.2345.com/geguo/search.php?word=" + encodeToGb2312(formmain.kw.value) + "&type=1");

else if(formmain.rd_jbcx.checked)/*note:不用encodeURI*/
window.open("http://dise.health.sohu.com/diseaseSearch.sip?item=" + formmain.kw.value + "&pageNo=1&onePageNo=20&flag=common");

else if(formmain.rd_yao39.checked)
window.open("http://so.39.net/ypk.aspx?words=" + formmain.kw.value);

else if(formmain.rd_sosobaike.checked)
window.open("http://www.baidu.com/baidu?word=" + encodeURI(formmain.kw.value) + "&tn=bds&cl=3&ct=2097152&si=baike.soso.com&s=on");
 
else if(formmain.rd_360baike.checked)
window.open("http://baike.so.com/search/doentry?q=" + encodeURI(formmain.kw.value));

else if(formmain.rd_qianzhan.checked)
window.open("http://www.qianzhan.com/report/search/k-" + formmain.kw.value + ".html");

else if(formmain.rd_ttpaihang.checked)
window.open("http://www.ttpaihang.com/search/vote_result.php?keywords=" + formmain.kw.value);

else if(formmain.rd_dabk.checked)
window.open("http://www.dakepu.org/documents/search.aspx?key=" + encodeURI(formmain.kw.value));

else if(formmain.rd_wuzhong.checked)
window.open("http://www.nature-museum.net/Spdb/spsearch.aspx?aname=" + encodeURI(formmain.kw.value));


<!--医学-->
else if(formmain.rd_360iy.checked)
window.open("http://ly.so.com/s?q=" + encodeURI(formmain.kw.value) + "&src=ly_home");

else if(formmain.rd_haodf.checked)
window.open("http://search.haodf.com/all.php?kw=" + encodeToGb2312(formmain.kw.value));

else if(formmain.rd_120ask.checked)
window.open("http://www.120ask.com/rel/q/?w=" + encodeURI(formmain.kw.value) + "&f=s");

else if(formmain.rd_pharmnet.checked)
window.open("http://www.baidu.com/baidu?word=" + encodeURI(formmain.kw.value) + "&tn=bds&cl=3&ct=2097152&si=" + "pharmnet.com.cn" + "&s=on");

else if(formmain.rd_sfda.checked)
window.open("http://www.baidu.com/baidu?word=" + encodeURI(formmain.kw.value) + "&tn=bds&cl=3&ct=2097152&si=" + "sfda.gov.cn" + "&s=on");

else if(formmain.rd_2345com.checked)
window.open("http://www.baidu.com/baidu?word=" + encodeURI(formmain.kw.value) + "&tn=bds&cl=3&ct=2097152&si=" + "2345.com" + "&s=on");


<!--问答-->
else if(formmain.rd_bdzhidao.checked)
window.open("http://zhidao.baidu.com/search?lm=0&rn=10&pn=0&fr=search&ie=gbk&word=" + encodeToGb2312(formmain.kw.value));

else if(formmain.rd_iask.checked)
window.open("http://iask.sina.com.cn/search_engine/search_knowledge_engine.php?title=" + encodeURI(formmain.kw.value) + "&search=&key=" + encodeURI(formmain.kw.value) + "&classid=0&gjss=0&type=0&tag=0");

else if(formmain.rd_tianyaw.checked)/*engine bing*/
window.open("http://cn.bing.com/search?form=TYNEW1&q=" + encodeURI(formmain.kw.value) + "+site%3A" + "wenda.tianya.cn" + "&qs=n&sk=");

else if(formmain.rd_sosow.checked)
window.open("http://wenwen.soso.com/z/Search.e?sp=S" + encodeURI(formmain.kw.value) + "&ch=w.search.sb");

else if(formmain.rd_sogouzhishi.checked)
window.open("http://zhishi.sogou.com/zhishi?query=" + encodeURI(formmain.kw.value));

else if(formmain.rd_baidujinyan.checked)
window.open("http://jingyan.baidu.com/search?word=" + encodeURI(formmain.kw.value));

else if(formmain.rd_qihoowenda.checked)
window.open("http://www.qihoo.com/wenda.php?kw=" + encodeToGb2312(formmain.kw.value) + "&ff=1&do=search&noq=q&src=nindex");


else if(formmain.rd_yahoozhi.checked)
window.open("http://ks.cn.yahoo.com/search.php?keyword=" + encodeURI(formmain.kw.value) + "&header%2Fsearch%2F1=%E6%90%9C%E7%B4%A2%E7%AD%94%E6%A1%88");

else if(formmain.rd_answers.checked)
window.open("http://www.answers.com/topic/" + encodeURI(formmain.kw.value));

<!--文库-->

else if(formmain.rd_bd.checked)
window.open("http://wenku.baidu.com/search?word="+encodeToGb2312(formmain.kw.value));

else if(formmain.rd_xl.checked)/*note:need not encodeURI*/
window.open("http://ishare.iask.sina.com.cn/search.php?key="+formmain.kw.value + "&from=index&format=");

else if(formmain.rd_119.checked)/*engine baidu*/
window.open("http://www.baidu.com/baidu?word=" + encodeURI(formmain.kw.value) + "&tn=bds&cl=3&ct=2097152&si=" + "d.119g.com" + "&s=on");

else if(formmain.rddoc88.checked)
window.open("http://www.doc88.com/tag/" + encodeURI(formmain.kw.value));

else if(formmain.rddocin.checked)
window.open("http://www.docin.com/search.do?searchcat=2&searchType_banner=p&nkey=" + encodeURI(formmain.kw.value));

else if(formmain.rd360doc.checked)
window.open("http://www.360doc.com/search.html?type=0&word=" + encodeURI(formmain.kw.value));

else if(formmain.rdxidong.checked)
window.open("http://xidong.net/search?q=" + encodeURI(formmain.kw.value) + "&utf8=%E2%9C%93");

else if(formmain.rd21wenku.checked)
window.open("http://www.21wenku.com/Search.asp?KeyWord=" + formmain.kw.value);

else if(formmain.rddownhot.checked)
window.open("http://www.baidu.com/baidu?word=" + encodeURI(formmain.kw.value) + "&cl=3&ct=2097152&si=www.downhot.com&sub.x=34&sub.y=16");

else if(formmain.rd_wenmi114.checked)
window.open("http://www.wenmi114.com/search/so.asp?w="+encodeToGb2312(formmain.kw.value));
else if(formmain.rd_18wk.checked)
window.open("http://www.18wk.com/search.html?q="+formmain.kw.value);
else if(formmain.rd_liyu.checked)
window.open("http://www.iliyu.com/source/search-"+encodeURI(formmain.kw.value)+"-1.html");

//文档
else if(formmain.rd_bddoc.checked)
window.open("http://www.baidu.com/s?wd="+encodeURI(formmain.kw.value) + "+filetype%3Adoc+intitle%3A" + encodeURI(formmain.kw.value));

else if(formmain.rd_bdppt.checked)
window.open("http://www.baidu.com/s?wd="+encodeURI(formmain.kw.value) + "+filetype%3Appt+intitle%3A" + encodeURI(formmain.kw.value));

else if(formmain.rd_bdpdf.checked)
window.open("http://www.baidu.com/s?wd="+encodeURI(formmain.kw.value) + "+filetype%3Apdf+intitle%3A" + encodeURI(formmain.kw.value));

else if(formmain.rd_bdtxt.checked)
window.open("http://www.baidu.com/s?wd="+encodeURI(formmain.kw.value) + "+filetype%3Atxt+intitle%3A" + encodeURI(formmain.kw.value));

else if(formmain.rd_bdxls.checked)
window.open("http://www.baidu.com/s?wd="+encodeURI(formmain.kw.value) + "+filetype%3Axls+intitle%3A" + encodeURI(formmain.kw.value));

else if(formmain.rd_bdalldoc.checked)
window.open("http://www.baidu.com/s?wd=filetype%3Aall+"+encodeURI(formmain.kw.value) + "+intitle%3A" + encodeURI(formmain.kw.value));

else if(formmain.rd_sogouwendang.checked)
window.open("http://wendang.sogou.com/web?query=" + encodeToGb2312(formmain.kw.value) + "&_asf=www.sogou.com&_ast=1363273922&w=01019900&interation=196617&chuidq=9&p=40040100&sut=2461&sst0=1363273922440");

else if(formmain.rd_eapoo.checked)
window.open("http://search.eapoo.com/s/?cid=3&keyword=" + encodeURI(formmain.kw.value));

else if(formmain.rd_wendang.checked)
window.open("http://www.wendang.cc/search.aspx?wd=" + formmain.kw.value + "&type=all");


//book
else if(formmain.rd_ggbook.checked)
window.open("http://www.google.com.hk/search?tbm=bks&hl=zh-CN&q=" + encodeURI(formmain.kw.value));

else if(formmain.rd_ggbooken.checked)
window.open("http://www.google.com.hk/search?tbm=bks&hl=en&q=" + encodeURI(formmain.kw.value));

else if(formmain.rd_wenjin.checked)
window.open("http://find.nlc.gov.cn/search/doSearch?query=" + encodeURI(formmain.kw.value) + "&secQuery=&actualQuery=" + encodeURI(formmain.kw.value) + "%E5%85%A8%E9%83%A8&isGroup=isGroup&targetFieldLog=%E5%85%A8%E9%83%A8%E5%AD%97%E6%AE%B5&orderBy=RELATIVE&fromHome=true"  );

else if(formmain.rd_doubanbook.checked) 
window.open("http://book.douban.com/subject_search?search_text=" + encodeURI(formmain.kw.value) + "&cat=1001");
 
else if(formmain.rd_sinabook.checked)
window.open("http://vip.book.sina.com.cn/s.php?k=" + encodeToGb2312(formmain.kw.value) + "&s_type=");

else if(formmain.rd_sohubook.checked)
window.open("http://lz.book.sohu.com/lz_search.php?searchvalue=" + encodeToGb2312(formmain.kw.value) + "&Submit_btn=%CB%D1%CA%E9");
 
else if(formmain.rd_163book.checked)
window.open("http://yuedu.163.com/search.do?key=" + encodeURI(formmain.kw.value) + "&type=4");
 
else if(formmain.rd_qqbook.checked)
window.open("http://www.soso.com/q?sc=web&site=book.qq.com&cid=w.q.book&w=" + encodeToGb2312(formmain.kw.value));

else if(formmain.rd_bookdao.checked)
window.open("http://www.bookdao.com/search/?t=99&k=" + encodeURI(formmain.kw.value));

else if(formmain.rd_writerbook.checked)
window.open("http://web.chinawriter.com.cn/s.php?intro=title&k=" + encodeToGb2312(formmain.kw.value) + "&dpc=1&t=title&x=35&y=9");
 
else if(formmain.rd_isoshu.checked) 
window.open("http://tel.isoshu.com/search/book/" + encodeURI(formmain.kw.value) + "/1-all-undefined-all");

else if(formmain.rd_sodu.checked)
window.open("http://search.sodu.org/searchname.aspx?wd=" + encodeURI(formmain.kw.value));

else if(formmain.rd_baiduReading.checked)
window.open("http://yuedu.baidu.com/book/search?word=intitle:" + encodeToGb2312(formmain.kw.value));


//讲座
else if(formmain.rd_pkulecture.checked)
window.open("http://lecture.pku.edu.cn/find.php?method=sp&keyword=" + encodeURI(formmain.kw.value));
 
else if(formmain.rd_sinaopen.checked)
window.open("http://open.sina.com.cn/search/" + encodeURI(formmain.kw.value) + "/");

else if(formmain.rd_icourses.checked)
window.open("http://www.icourses.edu.cn/search?title=" + encodeURI(formmain.kw.value) + "&school=&inCharge=&queryTemplate=+AND+title_Search%3D%22" + encodeURI(formmain.kw.value) + "%22&submit=%C2%A0%E6%90%9C+%E7%B4%A2%C2%A0");

else if(formmain.rd_163open.checked)
window.open("http://so.open.163.com/movie/search/searchprogram/ot0/" + encodeURI(formmain.kw.value) + "/1.html?vs=" + encodeToGb2312(formmain.kw.value) + "&pltype=2&sub=");

else if(formmain.rd_cntvopen.checked)
window.open("http://so.cntv.cn/search.php?qtext=" + encodeURI(formmain.kw.value) + "&sid=0035&pid=0000");

else if(formmain.rd_jc88.checked)
window.open("http://jc88.net/plus/search.php?kwtype=0&q=" + encodeToGb2312(formmain.kw.value));

else if(formmain.rd_21edu8.checked)
window.open("http://www.21edu8.com/search.php?q=" + encodeToGb2312(formmain.kw.value));

else if(formmain.rd_51zixue.checked)
window.open("http://www.baidu.com/baidu?word=" + encodeToGb2312(formmain.kw.value) + "&tn=bds&cl=3&ct=2097152&si=51zxw.net&s=on");
 

//诗词搜索
else if(formmain.rd_gushiwen.checked)
window.open("http://www.gushiwen.org/GuShiWenKey.aspx?kw=gushi&txtKey=" + encodeURI(formmain.kw.value));
 
else if(formmain.rd_hanyushi.checked)
window.open("http://hanyu.iciba.com/shi/search_all_" + encodeURI(formmain.kw.value) + "/");

else if(formmain.rd_xigutang111.checked)
window.open("http://www.baidu.com/baidu?word=" + encodeURI(formmain.kw.value) + "&tn=bds&cl=3&ct=2097152&si=" + "xigutang.com" + "&s=on");
 
else if(formmain.rd_diyifanwen.checked)
window.open("http://www.baidu.com/baidu?word=" + encodeURI(formmain.kw.value) + "&tn=bds&cl=3&ct=2097152&si=" + "www.diyifanwen.com" + "&s=on");

else if(formmain.rd_cnpoet.checked)
window.open("http://www.baidu.com/baidu?word=" + encodeURI(formmain.kw.value) + "&tn=bds&cl=3&ct=2097152&si=" + "www.cnpoet.com" + "&s=on");

else if(formmain.rd_shufami.checked)
window.open("http://www.shufami.com/?char=" + encodeURI(formmain.kw.value) + "&font=%E8%A1%8C%E4%B9%A6&fp=0&fs=128&fm=1&ff=CC3300&fb=F9F2DE");


//词典
else if(formmain.rd_iciba.checked)
window.open("http://www.iciba.com/" + encodeURI(formmain.kw.value));

else if(formmain.rd_baiducidian.checked)
window.open("http://dict.baidu.com/s?wd=" + encodeURI(formmain.kw.value));

else if(formmain.rd_handian.checked) {
	var zi ="";
	var my_friends;
		my_friends=encodeURI(formmain.kw.value);
	
	var friend_array =my_friends.split("%");
	for (loop=0; loop < friend_array.length;loop++)
	{zi=zi + "Zdic" + friend_array[loop]; 
	}
	zizi=zi.substring(4,92);
	window.open("http://www.zdic.net/zd/zi/" + zizi + ".htm");
}
	
else if(formmain.rd_hanyuciba.checked)
window.open("http://hanyu.iciba.com/hy/" + encodeURI(formmain.kw.value));

else if(formmain.rd_hanyuidiom.checked)
window.open("http://www.kingsnet.biz/Idiom/Search/" + formmain.kw.value + ".html");

else if(formmain.rd_bingci.checked)
window.open("http://cn.bing.com/dict/search?q="+encodeURI(formmain.kw.value)+"&go=%E6%90%9C%E7%B4%A2&qs=ds&form=Z9LH5"); 

else if(formmain.rd_chacha.checked)
window.open("http://www.ichacha.net/"+encodeURI(formmain.kw.value)+".html"); 

else if(formmain.rd_eudic.checked)
window.open("http://dict.eudic.net/dicts/en/" + encodeURI(formmain.kw.value));

else if(formmain.rd_cibo.checked)
window.open("http://www.cibo.cn/search.php?dictkeyword=" + encodeURI(formmain.kw.value));

else if(formmain.rd_linedict.checked)
window.open("http://ce.linedict.com/dict.html#/cnen/search?query=" + encodeURI(formmain.kw.value));

else if(formmain.rd_dictall.checked)
window.open("http://www.dictall.com/dictall/result.jsp?cd=UTF-8&keyword=" + encodeURI(formmain.kw.value));



//图片检索	
else if(formmain.rdbaiduimage.checked)
window.open("http://image.baidu.com/i?ct=201326592&cl=2&nc=1&lm=-1&st=-1&tn=baiduimage&istype=2&fm=index&pv=&z=0&ie=utf-8&word="+encodeURI(formmain.kw.value));

else if(formmain.rdmsnimage.checked)
window.open("http://cnweb.search.live.com/images/results.aspx?go=%E6%90%9C%E7%B4%A2%E5%9B%BE%E7%89%87&form=QBIR&q="+encodeURI(formmain.kw.value));

else if(formmain.rdyahoozhongguoimage.checked)
window.open("http://image.yahoo.cn/s?q="+encodeURI(formmain.kw.value));
           
else if(formmain.rdsouhuimage.checked)
window.open("http://pic.sogou.com/pics?mode=1&sid=&pid=&duppid=&query="+encodeURI(formmain.kw.value));

else if(formmain.rdyahooimage.checked)
window.open("http://images.search.yahoo.com/search/images?sm=Yahoo%21+Search&fr=FP-tab-img-t&toggle=1&cop=&ei=UTF-8&p="+encodeURI(formmain.kw.value));

else if (formmain.rd_aol_image.checked)
window.open("http://search.aol.com/aol/image?s_it=topsearchbox.imagehome&q=" + encodeURI(formmain.kw.value));
   
else if(formmain.rdgoogleimagecn.checked)
window.open("http://www.google.com.hk/search?hl=zh-CN&newwindow=1&safe=strict&site=imghp&tbm=isch&source=hp&biw=1280&bih=631&q="+encodeURI(formmain.kw.value)+"&gs_l=img.12...4735.4735.0.6666.1.1.0.0.0.0.0.0..0.0...0.0...1ac.4j1.3.img.KNPP8GVIqOI"); 

else if(formmain.rd163pic.checked)
window.open("http://image.yodao.com/search?q="+encodeURI(formmain.kw.value)); 

else if(formmain.rd360pic.checked)
window.open("http://image.so.com/i?q="+encodeURI(formmain.kw.value) +"&src=srp"); 


//mP3搜索
else if(formmain.rdbaidump3.checked)
window.open("http://music.baidu.com/search?key="+encodeURI(formmain.kw.value));

else if(formmain.rdyahoomp3.checked)
window.open("http://music.yahoo.com/search/?p="+encodeURI(formmain.kw.value));

else if(formmain.rddsogou.checked)
window.open("http://mp3.sogou.com/music.so?query="+encodeToGb2312(formmain.kw.value)+"&class=1&pf=&w=02009900&st=&ac=1&sourcetype=sugg&_asf=mp3.sogou.com&_ast=1361164662");

else if(formmain.rdmp3zhongsou.checked)
window.open("http://mp3.zhongsou.com/musicResult.html?w="+encodeURI(formmain.kw.value));

else if(formmain.rd_soso_music.checked)/*note:need not encode*/
window.open("http://music.soso.com/q?sc=mus&ch=w.ptl&ty=1&x=36&y=12&w="+formmain.kw.value);

else if(formmain.rd_yinyuetai.checked)
window.open("http://www.yinyuetai.com/search/mv?keyword=" + encodeURI(formmain.kw.value));
 
else if(formmain.rd_1ting.checked)
window.open("http://so.1ting.com/song?q=" + encodeURI(formmain.kw.value));

else if(formmain.rd_xiamimusic.checked)
window.open("http://www.xiami.com/search?key=" + encodeURI(formmain.kw.value));


else if(formmain.rd_kugoum.checked)
window.open("http://www.kugou.com/common/search.php?keyword=" + encodeURI(formmain.kw.value));


else if(formmain.rd_9skym.checked)
window.open("http://www.9sky.com/search/trk/"+encodeURI(formmain.kw.value));

else if(formmain.rd_118100.checked)
window.open("http://www.118100.cn/v5/s/?keywords=" + encodeURI(formmain.kw.value) + "&stype=0&pageCount=1");

else if(formmain.rd_top100.checked)
window.open("http://www.top100.cn/search/?act=allsong&keyword=" + encodeURI(formmain.kw.value));


//视频
else if(formmain.rdgooglevideo.checked)
window.open("http://www.google.com.hk/search?tbo=p&tbs=vid:1&source=vgc&hl=zh-CN&aq=f&q="+encodeURI(formmain.kw.value)); 
	
else if(formmain.rdbaiduvideo.checked)
window.open("http://video.baidu.com/v?word="+encodeToGb2312(formmain.kw.value)+"&ct=301989888&rn=20&pn=0&db=0&s=0&fbl=800");

else if(formmain.rdyahoovideo.checked)
window.open("http://video.search.yahoo.com/search/video;_ylt=A0S00Mh4BBVRNzUAo._7w8QF;_ylu=X3oDMTBrMWQyNXBmBHNlYwNzZWFyY2gEdnRpZANWMTM2?p="+encodeURI(formmain.kw.value) + "&ei=utf-8&fr=sfp-vid");
	
else if(formmain.rdsougoushipin.checked)
window.open("http://v.sogou.com/v?w=06009900&query="+encodeURI(formmain.kw.value));

else if(formmain.rdyoutubevideo.checked)
window.open("http://www.youtube.com/results?search=Search&search_query="+encodeURI(formmain.kw.value));
	
else if(formmain.rdtoudushipin.checked)
window.open("http://www.soku.com/t/nisearch/"+ encodeURI(formmain.kw.value)+"/");

else if(formmain.rdyoukushipin.checked)
window.open("http://so.youku.com/search_video/q_"+ encodeURI(formmain.kw.value));

else if(formmain.rdgougou.checked)
window.open("http://movie.gougou.com/search?suffix=&id=1&search="+ encodeURI(formmain.kw.value));

else if(formmain.rdsohuship.checked)
window.open("http://so.tv.sohu.com/mts?box=1&wd="+encodeURI(formmain.kw.value)); 
	
else if(formmain.rdxlkk.checked)
window.open("http://search.kankan.com/search.php?keyword="+ encodeURI(formmain.kw.value));

else if(formmain.rdkxsp.checked)
window.open("http://www.baidu.com/baidu?word=" + encodeURI(formmain.kw.value) + "&tn=bds&cl=3&ct=2097152&si=" + "v.kaixin001.com/" + "&s=on");

else if(formmain.rdqiyi.checked)
window.open("http://so.iqiyi.com/so/q_"+ encodeURI(formmain.kw.value));

else if(formmain.rd_ifengv.checked)
window.open("http://so.v.ifeng.com/video?q=" + encodeURI(formmain.kw.value) + "&c=5");
 
else if(formmain.rd_sinav.checked)
window.open("http://video.sina.com.cn/search/index.php?k=" + encodeURI(formmain.kw.value));
 
else if(formmain.rd_qqv.checked)
window.open("http://v.qq.com/search.html?pagetype=3&stj2=search.search&stag=txt.index&ms_key=" + encodeURI(formmain.kw.value));
 
else if(formmain.rd_ppsv.checked)
window.open("http://so.pps.tv/search?q=" + encodeURI(formmain.kw.value));
 
else if(formmain.rd_56v.checked)
window.open("http://so.56.com/all/" + encodeURI(formmain.kw.value) + "/");
else if(formmain.rd_bili.checked)
window.open("https://search.bilibili.com/all?keyword=" + encodeURI(formmain.kw.value) + "&from_source=banner_search");
else if(formmain.rd_ku6v.checked)
window.open("http://my.ku6.com/search?q=" + encodeURI(formmain.kw.value));

else if(formmain.rd_pptv.checked)
window.open("http://search.pptv.com/s_video/q_" + encodeURI(formmain.kw.value));

else if(formmain.rd_cctvvideo.checked)
window.open("http://so.cntv.cn/search.php?qtext=" + encodeURI(formmain.kw.value) + "&sid=0088&pid=0023&type=0");
 
else if(formmain.rd_letvvideo.checked)
window.open("http://so.letv.com/s?wd=" + encodeURI(formmain.kw.value) + "&from=play&index=0");

else if(formmain.rdverycdbt.checked)
window.open("http://find.verycd.com/folders/"+ encodeURI(formmain.kw.value));

//movie
else if(formmain.rdyes80.checked)/*note need not encode*/
window.open("http://www.yes80.net/SearchPlayFile.aspx?"+ formmain.kw.value);

else if(formmain.rddy161.checked)
window.open("http://www.baidu.com/baidu?word=" + encodeURI(formmain.kw.value) + "&tn=bds&cl=3&ct=2097152&si=" + "www.dy161.com" + "&s=on");

else if(formmain.rdm1905.checked)
window.open("http://www.m1905.com/search/?q=" + encodeURI(formmain.kw.value));

else if(formmain.rdsheshou.checked)
window.open("http://shooter.cn/search/" + encodeURI(formmain.kw.value));

else if(formmain.rdmtime.checked)
window.open("http://search.mtime.com/search/?" + encodeURI(formmain.kw.value));

else if(formmain.rdbabykan.checked)/*note need not encode*/
window.open("http://www.babykan.com/SearchPlayFile.aspx?"+ formmain.kw.value);

else if(formmain.rd_baidubaoku.checked)
window.open("http://baoku.player.baidu.com/new/search.php?ie=utf8&flag=sug&word="+ encodeURI(formmain.kw.value)) ;

else if(formmain.rd_dy2018.checked)/*note need not encode*/
window.open("http://so.kujian.com/plus/search.php?kwtype=0&keyword="+ formmain.kw.value);

else if(formmain.rd_imdbcn.checked)
window.open("http://www.imdb.cn/searchh.php?keyword="+ encodeToGb2312(formmain.kw.value) +"&a=search&Type=movie&x=29&y=13") ;

else if(formmain.rd_imdb.checked)
window.open("http://www.imdb.com/find?q="+ encodeURI(formmain.kw.value) +"&s=all") ;

else if(formmain.rd_doubanm.checked)
window.open("http://movie.douban.com/subject_search?search_text="+ encodeURI(formmain.kw.value) +"&cat=1002") ;


else if(formmain.rd_923d.checked)
window.open("http://www.923d.com/So/?keyword="+ encodeToGb2312(formmain.kw.value)) ;


//btsearch
else if(formmain.rdsougoubt.checked)
window.open("http://www.sogou.com/web?_asf=www.sogou.com&query=" + encodeURI(formmain.kw.value) + ".torrent");

else if(formmain.rdbaidubt.checked)
window.open("http://www.baidu.com/baidu?tn=zhongguosou&ct=&lm=&z=&rn=&_si.x=4&_si.y=2&word=" + encodeURI(formmain.kw.value) + ".torrent");

else if (formmain.rdyahoobt.checked) 
window.open("http://search.yahoo.com/search?vc=&fr=yfp-t-313&toggle=1&cop=mss&ei=UTF-8&fp_ip=CN&p=" + encodeURI(formmain.kw.value) + ".torrent");

else if(formmain.rdgooglebt.checked)
window.open("http://www.google.com.hk/search?q=" + encodeURI(formmain.kw.value)+".torrent");

else if(formmain.rdgougoubt.checked)
window.open("http://www.gougou.com/search?id=1&ty=1&search="+ encodeURI(formmain.kw.value));

else if(formmain.rdbtbotbt.checked)
window.open("http://torrentportal.com/torrents-search.php?search=" + encodeURI(formmain.kw.value));

else if(formmain.rdisohuntbt.checked)
window.open("http://www.mininova.org/search/?search=" + encodeURI(formmain.kw.value) + "&cat=0");

else if(formmain.rdnewtorrents.checked)
window.open("http://www.newtorrents.info/search/" + encodeURI(formmain.kw.value));

else if(formmain.rd_torrentz.checked)
window.open("http://torrentz.eu/search?f=" + formmain.kw.value);

//软件下载
else if(formmain.rdpconline.checked)/*note need not encode*/
window.open("http://ks.pconline.com.cn/download.jsp?forumName=%C8%AB%B2%BF%C0%E0%D0%CD&qx=%C8%AB%B2%BF%C0%E0%D0%CD&forumValue=&forumOrgID=&forumOrgName=&q="+ encodeToGb2312(formmain.kw.value));

else if(formmain.rdduote.checked)/*note need not encode*/
window.open("http://www.duote.com/search.php?searchType=&so="+ formmain.kw.value);

else if(formmain.rdonlinedown.checked)
window.open("http://search.newhua.com/search_list.php?searchname="+encodeURI(formmain.kw.value));

else if(formmain.rdskycn.checked)
window.open("http://www.skycn.com/search.php?sf=default&ss_name="+ formmain.kw.value);

else if(formmain.rdmydown.checked)/*note need not encode*/
window.open("http://search.yesky.com/searchdownload.do?ss=%26%23160%3B&wd=" + formmain.kw.value);

else if(formmain.rdsoftgougou.checked)
window.open("http://www.gougou.com/search?suffix=&restype=2&id=2&search="+ encodeURI(formmain.kw.value));

else if(formmain.rdxinlang.checked)/*note need not encode*/
window.open("http://down.tech.sina.com.cn/download/search.php?f_name=" + formmain.kw.value + "&x=23&y=11");

else if(formmain.rdsoft8.checked)/*note need not encode*/
window.open("http://www.soft8.net/soft8.php?page=1&by=name&site=all&word="+ formmain.kw.value);

else if(formmain.rdgooglesoft.checked)
window.open("http://www.google.com.hk/search?q=" + encodeURI(formmain.kw.value)+" .rar OR "+ encodeURI(formmain.kw.value)+" .iso");

else if(formmain.rdbaidusoft.checked)
window.open("http://www.baidu.com/baidu?tn=zhongguosou&ct=&lm=&z=&rn=&word=" + encodeURI(formmain.kw.value)+" .rar");

else if(formmain.rdit168.checked)/*problem cannot search*/
window.open("http://down.it168.com/soft_search.html?keyword="+ formmain.kw.value);

else if(formmain.rdpchome.checked)
window.open("http://download.pchome.net/search-"+ encodeURI(formmain.kw.value)+"---0-1.html");

else if(formmain.rdxiazaiba.checked)
window.open("http://www.xiazaiba.com/word/"+ encodeURI(formmain.kw.value));

else if(formmain.rdxp510.checked)
window.open("http://www.xp510.com/index.php?m=search&c=index&a=init&typeid=2&q="+ formmain.kw.value);

else if(formmain.rd331c.checked)
window.open("http://www.33lc.com/index.php?m=search&c=index&a=init&typeid=2&siteid=1&q="+ formmain.kw.value);


else if(formmain.rdxtzj.checked)
window.open("http://www.355189.com/plus/search.php?q="+ formmain.kw.value+"&submit=&mid=1&dopost=search");

else if(formmain.rdddxt.checked)
window.open("http://www.dedexitong.com/plus/search.php?q="+ formmain.kw.value+"&submit=&mid=1&dopost=search");

else if(formmain.rdylmf.checked)
window.open("http://www.startos.com/cms/apps/search.php?searchtype=titlekeyword&keyword="+ encodeURI(formmain.kw.value));

else if(formmain.rdfqhh.checked)
window.open("http://search.tomatolei.com/f/discuz?mod=forum&formhash=1c5bd8fe&srchtype=title&srhfid=0&srhlocality=portal%3A%3Aindex&sId=7413162&ts=1359996706&cuId=0&cuName=&gId=7&agId=0&egIds=&fmSign=&ugSign7=&sign=53e51ff13b4588f6a47cc3708088efc7&charset=gbk&source=discuz&fId=0&q="+ formmain.kw.value+"&srchtxt=ghost&searchsubmit=true");

else if(formmain.rd51dd.checked)/*problem cannot search*/
window.open("http://www.51dd.com/Search.asp?classID=&t=name&image.x=12&image.y=7&q="+ formmain.kw.value);

else if(formmain.rd_cnd8.checked)
window.open("http://so.cnd8.com/?k="+ formmain.kw.value + "&pd=soft"); 

else if (formmain.rdmydrivers.checked)
window.open("http://so.mydrivers.com/drivers.aspx?classtype=all&q="+ formmain.kw.value);

else if(formmain.rd_download_enet.checked)
window.open("http://download.enet.com.cn/search.php?platformid=&submit.x=8&submit.y=12&keyword="+ formmain.kw.value);

else if(formmain.rd_ttdown.checked)
window.open("http://www.baidu.com/baidu?word=" + encodeURI(formmain.kw.value) + "&tn=bds&cl=3&ct=2097152&si=" + "www.ttdown.com" + "&s=on");
 
else if(formmain.rddownloadcom.checked)
window.open("http://www.download.com/3120-20-0.html?qt="+ encodeToGb2312(formmain.kw.value));

else if(formmain.rd_softped.checked)
window.open("http://www.softpedia.com/dyn-search.php?search_term=" + encodeURI(formmain.kw.value + "&x=5&y=11"));



//硬件搜索
else if(formmain.rd_zol.checked)
window.open("http://detail.zol.com.cn/index.php?keyword=" + decodeFromGb2312(formmain.kw.value) + "&c=SearchList");
 
else if(formmain.rd_pconline.checked)
window.open("http://ks.pconline.com.cn/?q=" + decodeFromGb2312(formmain.kw.value));
 
else if(formmain.rd_pchome1.checked)
window.open("http://search.pchome.net/search.php?wd=" + decodeFromGb2312(formmain.kw.value) + "&aritcleType=cms&act=more");

else if(formmain.rd_pcpop.checked)
window.open("http://product.pcpop.com/00000_k" + encodeURI(formmain.kw.value) + "@_1.html");

else if(formmain.rd_beargoo.checked)
window.open("http://search.beargoo.com.cn/searchlist.php?kw=" + encodeURI(formmain.kw.value));

else if(formmain.rd_yesky.checked)
window.open("http://search.yesky.com/search.do?wd=" + encodeToGb2312(formmain.kw.value));


//购物搜索
else if(formmain.rddangdanggw.checked)
window.open("http://union.dangdang.com/transfer.php?from=P-138512&ad_type=10&sys_id=1&backurl=http://search.dangdang.com/search.php?key=" + encodeURI(formmain.kw.value));

else if(formmain.rdjingdonggouwu.checked)
window.open("http://search.jd.com/Search?keyword=" + formmain.kw.value+"&enc=utf-8&suggest=1");

else if(formmain.rdalibaba.checked)
window.open("http://search.china.alibaba.com/selloffer/offer_search.htm?keywords="+ formmain.kw.value);

else if(formmain.rdalibabaen.checked)
window.open("http://www.alibaba.com/trade/search?fsb=y&IndexArea=product_en&CatId=&SearchText="+ encodeURI(formmain.kw.value));
 
else if(formmain.rdamazongouwu.checked)
window.open("http://www.amazon.com/exec/obidos/external-search?tag=oduen-20&keyword="+ encodeURI(formmain.kw.value)+"&mode=blended");

else if (formmain.rdgooglegouwu.checked)
window.open("http://www.google.cn/products?q=" + encodeURI(formmain.kw.value));
	
else if(formmain.rdtaobaogw.checked)
window.open("http://search1.taobao.com/browse/search_auction.htm?at_topsearch=0&q="+ formmain.kw.value);

else if(formmain.rdjoyogw.checked)
window.open("http://www.amazon.cn/gp/search?ie=UTF8&tag=zhongguosou-23&index=aps&linkCode=ur2&camp=0&creative=0&keywords="+ encodeURI(formmain.kw.value));

else if (formmain.rdyiqugouwu.checked)
window.open("http://search2.eachnet.com/search/" + encodeURI(formmain.kw.value) + "--0--productlist------basicsearch.html");

else if (formmain.rdpaipai.checked)/*problem cannot search*/
window.open("http://sse1.paipai.com/s-" + encodeURI(formmain.kw.value) + "--1--80---3-4-3----2-2--128-0-0-PTAG,20084.2.2-as,1.html");

else if (formmain.rdtianmao.checked)
window.open("http://list.tmall.com/search_product.htm?q=" + formmain.kw.value + "&cat=all&userBucket=14&userCell=14");
 
else if(formmain.rd1hao.checked)
window.open("http://search.yihaodian.com/s2/c0-0/k"+ encodeURI(formmain.kw.value) + "/20/");

else if(formmain.rd58tc.checked)
window.open("http://gz.58.com/fushi/?key=" + encodeURI(formmain.kw.value));

else if(formmain.rdgjw.checked)
window.open("http://gz.ganji.com/wu/b1/s/_" + encodeURI(formmain.kw.value));

else if(formmain.rdfkcp.checked)
window.open("http://s.vancl.com/27540.html?k=" + encodeURI(formmain.kw.value));

else if(formmain.rdsuning.checked)
window.open("http://search.suning.com/emall/search.do?keyword=" + encodeURI(formmain.kw.value));

else if(formmain.rdgome.checked)
window.open("http://www.gome.com.cn/ec/homeus/n/search/gomeSearchResults.jsp?question=" + encodeURI(formmain.kw.value));

else if(formmain.rd_hc360.checked)
window.open("http://s.hc360.com/supply/" + decodeFromGb2312(formmain.kw.value) + ".html");

else if(formmain.rd_manmanbuy.checked)
window.open("http://s.manmanbuy.com/Default.aspx?key=" + decodeFromGb2312(formmain.kw.value) + "&btnSearch.x=28&btnSearch.y=12");



//商机
else if(formmain.rd_efu.checked)
window.open("http://search.efu.com.cn/search.aspx?keyword=" + formmain.kw.value);

else if(formmain.rd_texnet.checked)
window.open("http://www.texnet.com.cn/product/?p=1&ff=texweb&f=search&terms=" + decodeFromGb2312(formmain.kw.value));

else if(formmain.rd_chinawj.checked)
window.open("http://so.chinawj.com.cn/info.php?wd=" + encodeURI(formmain.kw.value));

else if(formmain.rd_chemnet.checked)
window.open("http://search.chemnet.com/cn.search?c=12&query=" + encodeURI(formmain.kw.value));

else if(formmain.rd_agroche.checked)
window.open("http://www.agrochemnet.cn/product/search-" + encodeURI(formmain.kw.value) + "9C-1.html");

else if(formmain.rd_gb78.checked)
window.open("http://gb.78.cn/search.php?keyword=" + encodeURI(formmain.kw.value));

else if(formmain.rd_taojindi.checked)
window.open("http://search.taojindi.com/product_" + encodeURI(formmain.kw.value) + "_1.html");

else if(formmain.rd_youboy.checked)
window.open("http://www.youboy.com/s/s.jsp?kw=" + encodeURI(formmain.kw.value));

else if(formmain.rd_b2bcn.checked)
window.open("http://search.b2b.cn/product/?k=" + decodeFromGb2312(formmain.kw.value));


//行业
else if(formmain.rd_sounong.checked)
window.open("http://www.sounong.net/gq.jsp?q=" + encodeURI(formmain.kw.value) + "&adr=&sa%2F=%E4%BE%9B%E6%B1%82%E6%90%9C%E7%B4%A2&sort=2&type=&flt=1&flag=show");

else if(formmain.rd_sddnet.checked)
window.open("http://www.sdd.net.cn/search/s.aspx?q=" + encodeURI(formmain.kw.value));

else if(formmain.rd_soufun.checked)
window.open("http://search.soufun.com/news/search.jsp?sll=title&q=" + encodeToGb2312(formmain.kw.value) + "&Submit=+");

else if(formmain.rd_qwjian.checked)
window.open("http://guangzhou.qwjian.com/s/_" + encodeURI(formmain.kw.value) + "_");

else if(formmain.rd_shoesnet.checked)
window.open("http://www.shoes.net.cn/product/search.html?keyword=" + encodeURI(formmain.kw.value));

else if(formmain.rd_makepolo.checked)
window.open("http://caigou.makepolo.com/spc_new.php?search_flag=0&q=" + encodeToGb2312(formmain.kw.value));
 
//地图map
else if(formmain.rdbaidumap.checked)
window.open("http://map.baidu.com/m?word=" + encodeURI(formmain.kw.value));

else if(formmain.rdsosomap.checked)
window.open("http://map.soso.com/?w=" + encodeURI(formmain.kw.value));

else if(formmain.rdsogoumap.checked)
window.open("http://map.sogou.com/?lq=" + encodeURI(formmain.kw.value));

else if(formmain.rdgooglemap.checked)
window.open("http://ditu.google.cn/maps?q=" + encodeURI(formmain.kw.value));

else if(formmain.rd360map.checked)
window.open("http://map.so.com/?ie=utf-8&t=map&k=" + encodeURI(formmain.kw.value) + "&src=tab_web");


//旅游

else if(formmain.rd_baidulvyou.checked)
window.open("http://lvyou.baidu.com/" + encodeToPinying(formmain.kw.value));

else if(formmain.rd_tuniu.checked)
window.open("http://s.tuniu.com/search_complex?q=" + encodeURI(formmain.kw.value) + "&st=1");


//微博 贴吧
else if(formmain.rdsinaweibo.checked)
window.open("http://s.weibo.com/weibo/" + encodeURI(formmain.kw.value) + "&Refer=STopic_box");

else if(formmain.rdsinaweiboname.checked)
window.open("http://s.weibo.com/user/" + encodeURI(formmain.kw.value) + "&Refer=SUer_all");

else if(formmain.rd_baidutieba.checked)
window.open("http://tieba.baidu.com/f?ie=utf-8&kw=" + encodeURI(formmain.kw.value));

else if(formmain.rd_sosotieba.checked)
window.open("http://sobar.soso.com/search/" + encodeURI(formmain.kw.value) + "?ch=top.post&type=0");

else if(formmain.rd_sinablog.checked)
window.open("http://search.sina.com.cn/?by=all&q=" + encodeToGb2312(formmain.kw.value) + "&c=blog&range=article");



//社区 论坛

else if(formmain.rd_tianyabbs.checked)
window.open("http://www.tianya.cn/search/bbs?q=" + encodeURI(formmain.kw.value));

else if(formmain.rd_hualongxiang.checked)
window.open("http://so.hualongxiang.com/?keyword=" + encodeURI(formmain.kw.value));

else if(formmain.rd_vocbbs.checked)
window.open("http://bbs.voc.com.cn/search.php?orderby=dateline&ascdesc=desc&searchsubmit=yes&srchtxt=" + encodeURI(formmain.kw.value));

else if(formmain.rd_zolbbs.checked)
window.open("http://bbs.zol.com.cn/search.php?kword=" + encodeURI(formmain.kw.value));

else if(formmain.rd_csdnbbs.checked)
window.open("http://so.csdn.net/search?t=thread&q=" + encodeURI(formmain.kw.value));

else if(formmain.rd_mopbbs.checked)
window.open("http://www.baidu.com/s?wd=site%3Amop.com+=" + encodeURI(formmain.kw.value));
//游戏
else if(formmain.rd_17173.checked)
window.open("http://search.17173.com/jsp/news.jsp?keyword=" + encodeURI(formmain.kw.value) + "&sortKind=time");

else if(formmain.rd_game4399.checked)
window.open("http://so2.4399.com/search/search.php?k=" + encodeToGb2312(formmain.kw.value));

else if(formmain.rd_youxisoso.checked)
window.open("http://www.youxisoso.com/?s=" + encodeURI(formmain.kw.value));

else if(formmain.rd_pcgames.checked)
window.open("http://ks.pcgames.com.cn/games_composite.jsp?q=" + encodeToGb2312(formmain.kw.value));

else if(formmain.rd_7k7k.checked)
window.open("http://so.7k7k.com/game/" + encodeURI(formmain.kw.value) + ".htm");

else if(formmain.rd_gamecn.checked)
window.open("http://www.game.com.cn/game/search/?g=" + encodeURI(formmain.kw.value));


//其它
else if(formmain.rd_ganji.checked)
window.open("http://gz.ganji.com/fang/s/_" + encodeURI(formmain.kw.value));

else if(formmain.rdmobileplace.checked)
window.open("http://www.showji.com/search.htm?m=" + formmain.kw.value);

else if(formmain.rd_17173.checked)
window.open("http://search.17173.com/jsp/news.jsp?keyword=" + encodeURI(formmain.kw.value) + "&sortKind=time");

else if(formmain.rd_game4399.checked)
window.open("http://so2.4399.com/search/search.php?k=" + encodeToGb2312(formmain.kw.value));



else
window.open("http://www.baidu.com/baidu?&ct=&lm=&z=&rn=&word="+encodeURI(formmain.kw.value)+"&_si.x=4&_si.y=2");


}

<!--定向搜索-->
function googleSearch() {
window.open("http://www.google.com.hk/search?q=" + formmain.kw.value + "&sitesearch=" + formmain.sitesearch.value + "&domains=" + formmain.sitesearch.value + "&sa=%E6%90%9C%C2%A0%E7%B4%A2&prog=aff&client=pub-4055365977023692&hl=zh-CN&source=sdo_sb&sdo_rt=ChBNfvf1AA5v2QqkgIvyIjvnEg5fX1JMX0RFRkFVTFRfXxoI-PektCokDFUoAVidyNe9ldivpRg");
}

/*
function baiduSearch() {//在搜索页面中有一个“互联网”的单选按钮；
window.open("http://www.baidu.com/baidu?word=" + encodeToGb2312(formmain.kw.value) + "&tn=bds&cl=3&ct=2097152&si=" + formmain.sitesearch.value + "&s=on");
}
*/
function baiduSearch() {//在搜索页面中有一个“互联网”的单选按钮；
var txt = formmain.sitesearch.value;
txt = txt.trim();
if(txt.indexOf("https://www.")==0)
	txt = txt.substr(12);;
if(txt.indexOf("http://www.")==0)
	txt = txt.substr(11);
if(txt.indexOf("www.")==0)
	txt = txt.substr(4);
window.open("https://www.baidu.com/s?q1=" + encodeToGb2312(formmain.kw.value) +"&rn=10&lm=0&ct=0&ft=&q5=&q6=" + txt + "&tn=baiduadv");
}

/*
不同于site:xigutang.com站内搜索，在搜索页面中有一个“互联网”的单选按钮；
else if(formmain.rd_xigutang111.checked)
window.open("http://www.baidu.com/baidu?word=" + encodeURI(formmain.kw.value) + "&tn=bds&cl=3&ct=2097152&si=" + "xigutang.com" + "&s=on");

if(formmain.rdxinlang.checked)     window.open("http://www.google.com/custom?btnG=%D5%BE%C4%DA%CB%D1%CB%F7&sitesearch=tech.sina.com.cn/down/&ie=GB2312&oe=GB2312&hl=zh-CN&lr=&q="+formmain.searchkey.value);

else if(formmain.rd_sinabook.checked)
window.open("http://vip.book.sina.com.cn/s.php?k=" + encodeToGb2312(formmain.kw.value) + "&s_type=");

else if(formmain.rd_360sou.checked)
window.open("http://www.so.com/s?ie=utf-8&src=360sou_home&q="+ encodeURI(formmain.kw.value+"&_re=0"));
*/

/*
encodeURI(苹果)=%E8%8B%B9%E6%9E%9C
encodeToGb2312(苹果)=%C6%BB%B9%FB
+ decodeFromGb2312(formmain.kw.value) + 

*/