package com.arindam;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.arindam.entity.Product;
import com.arindam.service.ProductService;

@SpringBootApplication
public class BootDataJpaApplication implements CommandLineRunner {
	@Autowired
private ProductService pservice;
	public static void main(String[] args) {
		SpringApplication.run(BootDataJpaApplication.class, args);
	}
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		Product pd1=new Product("P1","TV",5,25000.00,"SAMSUNG");
		Product pd2=new Product("P2","TAB",2,35000.00,"HP");
		//pservice.addData(pd1);
		 pservice.addData(pd2);
		//pservice.deleteData("P2");
		pservice.updateData("P1", 15,32000.00,"SONY","TV");
		List<Product> plist=pservice.getData();
		plist.stream().forEach(System.out::println);
	}

}
