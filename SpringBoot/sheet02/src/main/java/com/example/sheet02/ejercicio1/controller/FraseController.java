package com.example.sheet02.ejercicio1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import com.example.sheet02.ejercicio1.model.Frase;
import com.example.sheet02.ejercicio1.repository.FraseRepository;
import org.springframework.http.HttpStatus;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/frases")
public class FraseController {

    @Autowired
    private FraseRepository fraseRepository;

    @GetMapping
    public List<Frase> getFrases() {
        return fraseRepository.findAll();
    }
    @GetMapping("/{id}")
    public ResponseEntity<String> getFraseById(@PathVariable int id) {
        Optional<Frase> frase = fraseRepository.findById(id);
        if (frase.isPresent()) {
            return ResponseEntity.ok(frase.get().getFrase() + '-' + frase.get().getAutor());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Frase no encontrada");
        }
    }

    @PostMapping("/frases")
    public Frase addFrase(@RequestBody Frase nuevaFrase) {
        return  fraseRepository.save(nuevaFrase);
    }
}
