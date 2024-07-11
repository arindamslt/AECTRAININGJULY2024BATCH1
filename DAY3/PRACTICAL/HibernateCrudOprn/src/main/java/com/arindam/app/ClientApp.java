package com.arindam.app;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.Query;

import com.arindam.entity.Product;

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
		Product prd1=new Product("P1","TV",5,25000.00);
		Product prd2=new Product("P2","TAB",2,18000.00);
		Product prd3=new Product("P3","CONVECTION",6,22000.00);
		Product prd4=new Product("P4","LAPTOP",15,45000.00);
		System.out.println("INSERT OPERATION=======");
		//em.persist(prd1);
		//em.persist(prd2);
		//em.persist(prd3);
		//em.persist(prd4);
		/*System.out.println("DELETE DATA=============");
		Product pds=em.find(Product.class,"P4");
			if(pds!=null)
		{
			em.remove(pds);
		}*/
		System.out.println("UPDATE DATA==================");
		Product pds1=em.find(Product.class,"P3");
		if(pds1!=null)
	  {
		pds1.setPname("MOBILE");
		pds1.setPqty(12);
		pds1.setPrice(12000.00);
		em.merge(pds1);
	  }
			
		System.out.println("DISPLAY DATA==========");
		String jpql="select p from Product p";
		Query query=em.createQuery(jpql);//execute query
		List<Product> plist=query.getResultList();//Return data from database into List
		plist.stream().forEach(System.out::println);
		tx.commit();
		//SAVE THE DATA INTO DATABASE
		emf.close();
	}

}
