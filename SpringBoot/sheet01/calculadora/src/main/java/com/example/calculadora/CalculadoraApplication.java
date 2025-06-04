package com.example.calculadora;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class CalculadoraApplication {

	@GetMapping("/multiplica")
	public int multiplica(@RequestParam int a, @RequestParam int b) {
		return a * b;
	}
	@GetMapping("/suma/{a}/{b}")
	public int suma(@PathVariable int a, @PathVariable int b) {
		return a + b;
	}
	public static void main(String[] args) {
		SpringApplication.run(CalculadoraApplication.class, args);
	}

}
