package com.example.sheet02;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

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

