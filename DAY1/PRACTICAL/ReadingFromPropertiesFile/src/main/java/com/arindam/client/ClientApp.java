package com.arindam.client;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;


import com.arindam.bean.Employee;
import com.arindam.config.SpringConfig;

public class ClientApp {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		AnnotationConfigApplicationContext ac=new AnnotationConfigApplicationContext(SpringConfig.class);//read the data from container
		Employee empl=(Employee)ac.getBean("emp");
		System.out.println(empl);
	}

}
