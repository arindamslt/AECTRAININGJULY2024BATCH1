package com.arindam.app;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.arindam.bean.Category;
import com.arindam.bean.Customer;
import com.arindam.bean.Customer1;
import com.arindam.config.SpringConfig;

public class ClientApp {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
/*AnnotationConfigApplicationContext ac=new AnnotationConfigApplicationContext();//read the data from container
ac.scan("com.arindam");
ac.refresh();
Customer cst=(Customer)ac.getBean("customer");
System.out.println(cst);*/
/*AnnotationConfigApplicationContext ac=new AnnotationConfigApplicationContext(SpringConfig.class);//read the data from container
Customer1 cst=(Customer1)ac.getBean("csts");
System.out.println(cst);*/

AnnotationConfigApplicationContext ac=new AnnotationConfigApplicationContext(SpringConfig.class);//read the data from container
Category cg=(Category)ac.getBean("cgs");
System.out.println(cg);
	}

}
