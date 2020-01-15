import re
rInit = open('original.txt','rU',encoding='UTF-8')
wPDFen = open('PDFen.txt','w',encoding="UTF-8")

# 处理一些不需要的内容或字符串
s = rInit.read()                        # 整个文本文件作为一个字符串返回
s = s.replace('　','')                  # 处理全角空格
s = s.replace('  ',' ')                  # 处理两个空格
s = s.replace('' , '\n\n') 
 
  
s = s.replace('' , '')
s = s.replace('Agatha Christie .. MURDER ON THE ORIENT EXPRESS' , '')
re1 = re.compile(r'”\s*“')         # 处理”“分段
s = re1.sub(r'”\n“', s)

s = s.replace('\n\n\n','')
s = s.replace('\n\n\n','')
s = s.strip() + "\n"


# 处理用空行分段的文本（空行中间的段落合并）
s = s.replace('\n\n','a1b2c3z0')        # 用'a1b2c3z0'作段落标记
s = s.replace('\n','')
s = s.replace('a1b2c3z0','\n\n')

wPDFen.write(s)
rInit.close()
wPDFen.close()

with open('PDFen.txt','rU',encoding="UTF-8") as rPDFen:
    str = rPDFen.read()
re2 = re.compile(r'”\s*“')         # 处理”“分段
str = re1.sub(r'”\n\n“', str)
with open('PDFen2.txt','w',encoding='UTF-8') as wPDFen2:
    wPDFen2.write(str)
