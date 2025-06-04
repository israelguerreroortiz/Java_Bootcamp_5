package com.example.sheet03.model;

import jakarta.persistence.*;

@Entity
public class Direccion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String calle;

    private String ciudad;

    private String codigoPostal;

    @OneToOne(mappedBy = "direccion")
    private Estudiante estudiante;

    // Getters, setters, constructor vacío y con campos
}

