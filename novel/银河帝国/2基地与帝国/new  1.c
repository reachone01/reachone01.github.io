#include "stdio.h"
#include "malloc.h"
typedef struct node{
	int data;
	struct node *next;
}LNode,*LinkList;
LinkList GreatLinkList(int n)
{
	/*建立一个长度为n的链表*/
	LinkList p, r, list = NULL;
	int e;
	int i;
	for (i=1;i<=n;i++){
		printf("请输入第%d个结点值（共%d）个：",i,n);
		scanf("%d",&e);						/*获取链表结点中的数据元素*/
		p=(LinkList)malloc(sizeof(LNode));	/*分配一个新的链表结点*/
		p->data=e;
		p->next=NULL;
         if (list == NULL) {
				list = p;			/*list指向第一个结点，list是头指针*/
		} else {
				r->next = p;		/*将新结点连接到链表的尾部*/
		}
		r = p;						/*指针r始终指向链表的最后一个结点*/
	}
	return list;					/*返回链表的头指针*/
}
void insertListInOrder(LinkList *list,int e)
{
	/*向按值有序(递增序列)的链表list中插入包含元素e的结点*/
	LinkList p, q, r;
	q = *list;
    p=(LinkList)malloc(sizeof(LNode));		/*生成一个新结点，由p指向它*/
    p->data=e;					/*向该结点的数据域赋值e*/
	if (*list == NULL || e < (*list)->data) {
		p->next = *list;
		*list = p;
	} else {
		while(q != NULL && e >= q->data) {	/*循环找到插入结点的位置*/
			r = q;					/*r指向q的前驱结点*/
			q = q->next;			/*q指针向后移动*/
		}
		p->next= q;				 /*插入新的结点*/
		r->next = p;
	}
}
//删除单链表中指针q指向的结点
void delLink(LinkList *list, LinkList q) {
	LinkList r;
	if (q == *list) {
		*list = q->next;			/*如果q指向的结点即为第1个结点，则需要修改list的值*/
		free(q);					/*释放被删除结点的空间*/
	} else {
		r = *list;
		while ((r->next != q)&&(r->next != NULL)) {
			r = r->next;			/*通过循环找到q所指结点的前驱结点*/
		}
		if (r->next != NULL) {
			r->next = q->next;		/*删除q所指向的结点*/
			free(q);				/*释放被删除结点的空间*/
		}
	}
}
//销毁单链表
void deleteLinkList(LinkList *list) {
	LinkList p = *list;				/*p指向第一个结点*/
	while (p != NULL) {
		*list = p ->next;			/* list指向p的下一个结点 */
		free(p);					/*释放掉p指向结点的内存空间*/
		p = *list;					/*p再指向第一个结点*/
	}
}
void printLink(LinkList list) {
	while (list != NULL) {
		printf("%3d",list->data);	/*打印出每个结点中的数据data*/
		list = list->next;
	}
	printf("\n");
}
void main() {
	int i;
	LinkList q,list = NULL;
	list = GreatLinkList(10); /*创建一个长度为10的链表*/	
	printf("The elems of this linklist is\n");
	printLink(list);		  /*打印出链表的内容*/
	printf("插入元素3\n");
	insertListInOrder(&list,3);		/*插入元素3*/
	printf("The elems of this linklist is\n");
	printLink(list);		  /*打印出链表的内容*/
	printf("插入元素0\n");
	insertListInOrder(&list,0);		/*插入元素0*/
	printf("The elems of this linklist is\n");
	printLink(list);		 /*打印出链表的内容*/
	printf("插入元素11\n");
	insertListInOrder(&list,11);	/*插入元素10*/
	printf("The elems of this linklist is\n");
	printLink(list);		 /*打印出链表的内容*/
	printf("删除链表中的第5个元素：\n");
	q=list;
	for (i=0; i<4; i++) {
		q = q->next;				/*让指针q指向链表中第5个元素*/
	}
	delLink(&list, q);				/*删除q指向的结点*/
	printLink(list);				/*打印出链表中的内容*/

	deleteLinkList(&list);	/*销毁该链表*/
	if (list == NULL) {
		printf( " This Linklist have been deleted\n");
	}
	system("pause");
}