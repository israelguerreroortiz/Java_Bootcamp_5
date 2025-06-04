package com.example.FrasesMotivacionales;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;

@SpringBootApplication
@RestController
public class FrasesMotivacionalesApplication {
	ArrayList<Frase> frases = new ArrayList<>();

	@GetMapping("/frases")
	public ArrayList<Frase> getFrases() {
		return frases;
	}
	@GetMapping("frases/{id}")
	public String getFraseById(@PathVariable int id) {
		if (id >= 0 && id < frases.size()) {
			Frase frase = frases.get(id);
			return frase.getFrase() + " - " + frase.getAutor();
		} else {
			return "Frase no encontrada";
		}
	}
	@PostMapping("/frases")
	public String addFrase(@RequestBody Frase nuevaFrase) {
		frases.add(nuevaFrase);
		return "Frase añadida correctamente";
	}
	public static void main(String[] args) {
		SpringApplication.run(FrasesMotivacionalesApplication.class, args);
	}

}

class Frase {
	private String frase;
	private String autor;

	public Frase(String frase, String autor) {
		this.frase = frase;
		this.autor = autor;
	}

	public String getFrase() {
		return frase;
	}

	public void setFrase(String frase) {
		this.frase = frase;
	}

	public String getAutor() {
		return autor;
	}

	public void setAutor(String autor) {
		this.autor = autor;
	}
}
