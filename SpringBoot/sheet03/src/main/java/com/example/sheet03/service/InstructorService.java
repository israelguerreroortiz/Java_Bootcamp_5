package com.example.sheet03.service;

import com.example.sheet03.model.Curso;
import com.example.sheet03.model.Estudiante;
import com.example.sheet03.model.Instructor;
import com.example.sheet03.repository.CursoRepository;
import com.example.sheet03.repository.EstudianteRepository;
import com.example.sheet03.repository.InstructorRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InstructorService {

    private final InstructorRepository instructorRepository;
    private final CursoRepository cursoRepository;
    private final EstudianteRepository estudianteRepository;

    public InstructorService(
            InstructorRepository instructorRepository,
            CursoRepository cursoRepository,
            EstudianteRepository estudianteRepository
    ) {
        this.instructorRepository = instructorRepository;
        this.cursoRepository = cursoRepository;
        this.estudianteRepository = estudianteRepository;
    }

    // 1. Crear instructor y asignarle varios cursos
    public Instructor crearInstructorConCursos(Instructor instructor, List<Curso> cursos) {
        for (Curso curso : cursos) {
            curso.setInstructor(instructor);
        }
        instructor.setCursos(cursos);
        return instructorRepository.save(instructor); // cascade.ALL en instructor.cursos
    }

    // 5. Eliminar un curso sin eliminar instructor ni estudiantes
    public void eliminarCursoSinAfectarRelaciones(Long cursoId) {
        Curso curso = cursoRepository.findById(cursoId)
                .orElseThrow(() -> new EntityNotFoundException("Curso no encontrado"));

        // Eliminar referencias cruzadas
        for (Estudiante estudiante : curso.getEstudiantes()) {
            estudiante.getCursos().remove(curso);
        }

        curso.setInstructor(null);
        curso.getEstudiantes().clear();
        cursoRepository.delete(curso);
    }


    public Curso cambiarInstructor(Long cursoId, Long nuevoInstructorId) {
        Curso curso = cursoRepository.findById(cursoId)
                .orElseThrow(() -> new EntityNotFoundException("Curso no encontrado"));
        Instructor nuevoInstructor = instructorRepository.findById(nuevoInstructorId)
                .orElseThrow(() -> new EntityNotFoundException("Instructor no encontrado"));

        curso.setInstructor(nuevoInstructor);
        return cursoRepository.save(curso);
    }
}

