package com.arindam.bean;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Component(value="emp")
public class Employee {
	@Value("${eid}")
private String eid;
	@Value("${ename}")
private String ename;
	@Value("${dept}")
private String dept;
	@Value("${friends}")
private List<String> friends;
	@Value("${phno}")
	private Set<String> phno;
}
