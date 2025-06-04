package com.example.sheet03.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.sheet03.service.EstudianteService;
import com.example.sheet03.model.Estudiante;
import com.example.sheet03.model.Direccion;

import java.util.List;

@RestController
@RequestMapping("/estudiantes")
public class EstudianteController {

    private final EstudianteService estudianteService;

    public EstudianteController(EstudianteService estudianteService) {
        this.estudianteService = estudianteService;
    }


    @PostMapping
    public ResponseEntity<Estudiante> crearEstudiante(@RequestBody Estudiante estudiante) {
        Estudiante creado = estudianteService.crearEstudianteConDireccion(estudiante, estudiante.getDireccion());
        return ResponseEntity.status(HttpStatus.CREATED).body(creado);
    }


    @PostMapping("/{id}/matricular")
    public ResponseEntity<Void> matricularEstudiante(
            @PathVariable Long id,
            @RequestBody List<Long> cursoIds
    ) {
        estudianteService.matricularEstudiante(id, cursoIds);
        return ResponseEntity.ok().build();
    }


    @PutMapping("/{id}/direccion")
    public ResponseEntity<Estudiante> actualizarDireccion(
            @PathVariable Long id,
            @RequestBody Direccion direccion
    ) {
        Estudiante actualizado = estudianteService.actualizarDireccion(id, direccion);
        return ResponseEntity.ok(actualizado);
    }
}

