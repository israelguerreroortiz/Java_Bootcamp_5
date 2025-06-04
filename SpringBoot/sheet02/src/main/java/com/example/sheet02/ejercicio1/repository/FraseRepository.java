package com.example.sheet02.ejercicio1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.sheet02.ejercicio1.model.Frase;

public interface FraseRepository extends JpaRepository<Frase, Integer> {

}
