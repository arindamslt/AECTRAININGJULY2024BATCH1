package com.arindam.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
	@GetMapping("/show")
public String show()
{
	return "WELCCOME SPRING BOOT WEB APPLICATION";
}
}
