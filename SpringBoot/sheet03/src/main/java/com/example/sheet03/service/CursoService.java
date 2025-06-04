package com.example.sheet03.service;

import org.springframework.stereotype.Service;
import com.example.sheet03.model.Curso;
import com.example.sheet03.model.Estudiante;
import com.example.sheet03.repository.CursoRepository;

@Service
public class CursoService {

    private final CursoRepository cursoRepository;

    public CursoService(CursoRepository cursoRepository) {
        this.cursoRepository = cursoRepository;
    }
    public void eliminarCurso(Long id) {
        Curso curso = cursoRepository.findById(id).orElseThrow();
        for (Estudiante e : curso.getEstudiantes()) {
            e.getCursos().remove(curso);
        }
        curso.setInstructor(null);
        cursoRepository.delete(curso);
    }
}
