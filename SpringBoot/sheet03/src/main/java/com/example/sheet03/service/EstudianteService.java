package com.example.sheet03.service;
import com.example.sheet03.repository.EstudianteRepository;
import com.example.sheet03.repository.CursoRepository;
import com.example.sheet03.model.Estudiante;
import com.example.sheet03.model.Direccion;
import com.example.sheet03.model.Curso;
import jakarta.persistence.*;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class EstudianteService {

    private final EstudianteRepository estudianteRepository;
    private final CursoRepository cursoRepository;

    public EstudianteService(EstudianteRepository estudianteRepository, CursoRepository cursoRepository) {
        this.estudianteRepository = estudianteRepository;
        this.cursoRepository = cursoRepository;
    }

    public Estudiante crearEstudianteConDireccion(Estudiante estudiante, Direccion direccion) {
        estudiante.setDireccion(direccion); // cascade.ALL en @OneToOne
        return estudianteRepository.save(estudiante);
    }

    public void matricularEstudiante(Long estudianteId, List<Long> cursoIds) {
        Estudiante estudiante = estudianteRepository.findById(estudianteId)
                .orElseThrow(() -> new EntityNotFoundException("Estudiante no encontrado"));

        List<Curso> cursos = cursoRepository.findAllById(cursoIds);
        for (Curso curso : cursos) {
            estudiante.getCursos().add(curso);
            curso.getEstudiantes().add(estudiante);
        }

        estudianteRepository.save(estudiante); // persistimos los cambios
    }

    public Estudiante actualizarDireccion(Long estudianteId, Direccion nuevaDireccion) {
        Estudiante estudiante = estudianteRepository.findById(estudianteId)
                .orElseThrow(() -> new EntityNotFoundException("Estudiante no encontrado"));

        estudiante.setDireccion(nuevaDireccion); // orphanRemoval elimina la anterior
        return estudianteRepository.save(estudiante);
    }
}

