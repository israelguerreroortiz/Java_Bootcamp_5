package com.example.sheet03.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.sheet03.service.InstructorService;
import com.example.sheet03.model.Instructor;
import com.example.sheet03.model.Curso;

@RestController
@RequestMapping("/instructores")
public class InstructorController {

    private final InstructorService instructorService;

    public InstructorController(InstructorService instructorService) {
        this.instructorService = instructorService;
    }

    @PostMapping
    public ResponseEntity<Instructor> crearInstructor(@RequestBody Instructor instructor) {
        Instructor creado = instructorService.crearInstructorConCursos(instructor, instructor.getCursos());
        return ResponseEntity.status(HttpStatus.CREATED).body(creado);
    }

    @DeleteMapping("/cursos/{cursoId}")
    public ResponseEntity<Void> eliminarCurso(@PathVariable Long cursoId) {
        instructorService.eliminarCursoSinAfectarRelaciones(cursoId);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/cursos/{cursoId}/instructor/{nuevoInstructorId}")
    public ResponseEntity<Curso> cambiarInstructorCurso(
            @PathVariable Long cursoId,
            @PathVariable Long nuevoInstructorId
    ) {
        Curso actualizado = instructorService.cambiarInstructor(cursoId, nuevoInstructorId);
        return ResponseEntity.ok(actualizado);
    }
}
