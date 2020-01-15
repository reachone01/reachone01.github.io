import re

rInit = open('init.txt','rU',encoding='UTF-8')
wTemp = open('temp.txt','w',encoding="UTF-8")
s = rInit.read()                            # 整个文本文件作为一个字符串返回
s = s.replace('　','')                  # 处理全角空格
s = s.replace('' , '\n\n') 
s = s.replace('”“' , '”\n\n“')
s = s.replace('“”' , '”\n\n“')

s = s.replace(' 　　　　　　' , '\n\n')
s = re.sub(r'\(淫色淫色\S+\)', '', s)

wTemp.write(s)
rInit.close()
wTemp.close()



