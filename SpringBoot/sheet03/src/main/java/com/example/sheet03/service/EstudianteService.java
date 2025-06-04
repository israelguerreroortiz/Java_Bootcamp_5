package com.example.sheet03.service;

import org.springframework.stereotype.Service;

@Service
public class EstudianteService {

    private final EstudianteRepository estudianteRepository;
    private final CursoRepository cursoRepository;

    public EstudianteService(EstudianteRepository estudianteRepository, CursoRepository cursoRepository) {
        this.estudianteRepository = estudianteRepository;
        this.cursoRepository = cursoRepository;
    }

    // Crear estudiante con su dirección
    public Estudiante crearEstudianteConDireccion(Estudiante estudiante, Direccion direccion) {
        estudiante.setDireccion(direccion); // cascade.ALL en @OneToOne
        return estudianteRepository.save(estudiante);
    }

    // Matricular estudiante en uno o varios cursos
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

    // Actualizar dirección del estudiante
    public Estudiante actualizarDireccion(Long estudianteId, Direccion nuevaDireccion) {
        Estudiante estudiante = estudianteRepository.findById(estudianteId)
                .orElseThrow(() -> new EntityNotFoundException("Estudiante no encontrado"));

        estudiante.setDireccion(nuevaDireccion); // orphanRemoval elimina la anterior
        return estudianteRepository.save(estudiante);
    }
}

