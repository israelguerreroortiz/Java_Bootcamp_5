package com.example.sheet03.repository;

import com.example.sheet03.model.Curso;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CursoRepository extends JpaRepository<Curso, Long> {

    // Buscar cursos cuyo nombre contenga una palabra
    List<Curso> findByNombreContaining(String nombre);

    // Buscar cursos por un instructor
    List<Curso> findByInstructorId(Long instructorId);
}