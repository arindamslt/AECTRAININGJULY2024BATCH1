package com.arindam.bean;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Component(value="csts")
public class Customer1 {
	@Value("C1")
	private String cid;
		@Value("ARUP")
	private String cname;
		@Value("65565")
	private String cphno;
}
