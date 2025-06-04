package com.example.HolaMundo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class HolaMundoApplication {

	@GetMapping("/hello")
	public String hello() {
		return "Hola Mundo";
	}
	public static void main(String[] args) {
		SpringApplication.run(HolaMundoApplication.class, args);
	}

}
