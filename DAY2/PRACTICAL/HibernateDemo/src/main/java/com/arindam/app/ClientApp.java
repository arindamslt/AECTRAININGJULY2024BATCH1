package com.arindam.app;

import java.util.Date;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import com.arindam.entity.Adhar;
import com.arindam.entity.Candidate;
import com.arindam.entity.Customer;
import com.arindam.entity.Employee;

public class ClientApp {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
EntityTransaction tx=null;
//READING THE JDBC CONFIGURATION FROM PERSISTANCE.XML FILE
EntityManagerFactory emf=Persistence.createEntityManagerFactory("AppDB");
//CREATE TABLE UPDATE TABLE
EntityManager em=emf.createEntityManager();
//TRANSACTION CREATED
tx=em.getTransaction();
//BEGIN THE TRANSACTION
tx.begin();
//Customer cs1=new Customer("C3","AMAR","56565");
/*Employee emp1=new Employee();
Employee emp2=new Employee();
emp1.setEname("SWARUP");
emp1.setEdesig("MANAGER");
emp1.setJoindt(new Date());
emp1.setWorkhr(new Date());
emp1.setEmail("sw@gmail.com");
emp2.setEname("SOUMYA");
emp2.setEdesig("ANALYST");
emp2.setJoindt(new Date());
emp2.setWorkhr(new Date());
emp2.setEmail("sm@gmail.com");*/
//INSERT DATA AND CREATE THE TABLE
//em.persist(cs1);
//em.persist(emp1);
//em.persist(emp2);
Adhar ah1=new Adhar("656565","KOLKATA");
Adhar ah2=new Adhar("343434","DELHI");
Candidate cd1=new Candidate("C1","RUPAM",ah1);
Candidate cd2=new Candidate("C2","ANUP",ah2);
em.persist(ah1);
em.persist(ah2);
em.persist(cd1);
em.persist(cd2);

//SAVE THE DATA
tx.commit();
//close the connection
emf.close();

	}

}
