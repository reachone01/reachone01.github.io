<!--calendar--һ����д��Html,һ����д��JS>-->
/*ũ������һ���ʱ�������6������6���ǽ������ģ���Ϊ�����е��ַ���"2011"�����ģ�*/
                 var cnyear="��������";
                 var spd=24*60*60*1000
				var spd=86400000/*ÿ��ĺ�����*/
				var y11=new Date("1/1/2013");/*����1����*/
				var y70=new Date("1/1/1970");
				
				var sec0=y11-y70;/*1970-��������Ԫ���յĺ�����((41*365+10)*spd=1293840000000)*/
				
				var sRDate = new Date(2013, 1-1, 1);
				var eRDate = new Date(2013, 2-1, 10);/*�����ڵĹ������ڣ���2����*/
				var dday = (eRDate-sRDate)/(24*60*60*1000);

				/*var dday=23*/ /*2011�괺����2��3��(��2012��1.23,����22)����2����*/
				var totalday2011=355/*��ũ������������2012������30�죬��384������3����*/
				var year2011="30;29;30;29;30;30;29;30;29;30;29;30"; /*��ũ����ÿ����������4����*/
					year2011=year2011.split(";");
				var month2011="����;����;����;����;����;����;����;����;����;ʮ��;ʮһ��;ʮ����" ;
					month2011=month2011.split(";");/*��ũ�����·�������5����*/
				var Dn="��һ;����;����;����;����;����;����;����;����;��ʮ;ʮһ;ʮ��;ʮ��;ʮ��;ʮ��;ʮ��;ʮ��;ʮ��;ʮ��;��ʮ;إһ;إ��;إ��;إ��;إ��;إ��;إ��;إ��;إ��;��ʮ"; 
				Dn=Dn.split(";"); 
				
				var isnMonth = new
					Array("01-","02-","03-","04-","05-","06-","07-","08-","09-","10-","11-","12-");
				var isnDay = new
					Array("����","��һ","�ܶ�","����","����","����","����","����");
				var isndate=new Array("01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31");
				today = new Date() ;  
				Year=today.getYear(); 
				Daten1=today.getDate(); 
				
				
				sec1=today.getTime();/*���ڵ�1970.1.1֮��ĺ�����*/
				sec2=sec1-sec0+8*3600*1000;/*UTC+08*/
				dayed=parseInt(sec2/spd)
				cndayed=dayed-dday;/*�������������ٹ�����1��;���������ʱ��һ����*/
				dperm=totalday2011/month2011.length
				cnmonth=parseInt(cndayed/dperm);/*ũ����n-1��*/
				
				var total2=0;
				for(i=cnmonth+1;i<year2011.length;i++){
				total2=total2+parseInt(year2011[i]);
				}<!--����ʣ���·ݵ�����-->
				
				pdma=totalday2011-cndayed-total2;/*���»��м���*/
				pdm=year2011[cnmonth]-pdma+1;/*���µĵڼ���*/
				haveday=totalday2011-cndayed-1;/*�п��ڴ�����*/
				cnym=month2011[cnmonth]+Dn[pdm-1];/*ũ���º���д��һ��*/
				enym=isnMonth[today.getMonth()]+isndate[Daten1-1]/*�����º���д��һ��*/
		switch(cnym){/*�������ģ���6����*/
		case "ʮ����إ��":cnym=cnym+"&nbsp;"+"����";break;
		case "���³���":cnym=cnym+"&nbsp;"+"��ˮ";break;
		case "����إ��":cnym=cnym+"&nbsp;"+"����";break;
		case "���³���":cnym=cnym+"&nbsp;"+"����";break;
		case "����إ��":cnym=cnym+"&nbsp;"+"����";break;
		case "����ʮһ":cnym=cnym+"&nbsp;"+"����";break;
		
		case "����إ��":cnym=cnym+"&nbsp;"+"����";break;
		case "����ʮ��":cnym=cnym+"&nbsp;"+"С��";break;	
		case "����إ��":cnym=cnym+"&nbsp;"+"â��";break;
		case "����ʮ��":cnym=cnym+"&nbsp;"+"����";break;
		case "����إʮ":cnym=cnym+"&nbsp;"+"С��";break;
		case "����ʮ��":cnym=cnym+"&nbsp;"+"����";break;
		
		case "���³�һ":cnym=cnym+"&nbsp;"+"����";break;
		case "����ʮ��":cnym=cnym+"&nbsp;"+"����";break;
		case "���³���":cnym=cnym+"&nbsp;"+"��¶";break;
		case "����ʮ��":cnym=cnym+"&nbsp;"+"���";break;																
		case "���³���":cnym=cnym+"&nbsp;"+"��¶";break;					  
		case "����ʮ��":cnym=cnym+"&nbsp;"+"˪��";break;
																				
		case "ʮ�³���":cnym=cnym+"&nbsp;"+"����";break;					  
		case "ʮ��إʮ":cnym=cnym+"&nbsp;"+"Сѩ";break;														
		case "ʮһ�³���":cnym=cnym+"&nbsp;"+"��ѩ";break;	
		case "ʮһ��إʮ":cnym=cnym+"&nbsp;"+"����";break;								
		case "ʮ���³���":cnym=cnym+"&nbsp;"+"С��";break;	
		case "ʮ����إʮ":cnym=cnym+"&nbsp;"+"��";break;
		
		case "���³���":cnym=cnym+"&nbsp;"+"����";break;
		
		case "���³�һ":cnym=cnym+"&nbsp;"+"����"; break;	
		case "����ʮ��":cnym=cnym+"&nbsp;"+"Ԫ����"; break;	
		case "���³���":cnym=cnym+"&nbsp;"+"�����"; break;	
		case "����ʮ��":cnym=cnym+"&nbsp;"+"��Ԫ��"; break;	
		case "���³���":cnym=cnym+"&nbsp;"+"��Ϧ��"; break;	
		case "����ʮ��":cnym=cnym+"&nbsp;"+"�����";break;	
		case "���³���":cnym=cnym+"&nbsp;"+"������"; break;	
		case "ʮ����إ��":cnym=cnym+"&nbsp;"+"��Ϧ"; break;	
		
		case "����ʮһ":cnym=cnym+"&nbsp;"+"BrotherDay";break;
		case "���³���":cnym=cnym+"&nbsp;"+"GrandmDay";break;
		case "���³���":cnym=cnym+"&nbsp;"+"FatherDay";break;
		case "����إһ":cnym=cnym+"&nbsp;"+"MotherDay"; break;		
		}
		switch(enym){
		case "01-01":enym=enym+"&nbsp;"+"Ԫ��";break;
		case "03-08":enym=enym+"&nbsp;"+"��Ů��";break;
		case "05-04":enym=enym+"&nbsp;"+"�����";break;
		case "06-01":enym=enym+"&nbsp;"+"��ͯ��";break;
		case "07-01":enym=enym+"&nbsp;"+"������";break;
		case "08-01":enym=enym+"&nbsp;"+"������";break;
		case "09-10":enym=enym+"&nbsp;"+"��ʦ��";break;

		case "10-01":enym=enym+"&nbsp;"+"�����";break;
		}