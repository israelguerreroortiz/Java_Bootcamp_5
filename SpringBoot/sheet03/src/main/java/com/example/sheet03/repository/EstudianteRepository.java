package com.example.sheet03.repository;
import com.example.sheet03.model.Estudiante;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EstudianteRepository extends JpaRepository<Estudiante, Long> {

    // Buscar estudiantes por ciudad de su dirección
    List<Estudiante> findByDireccionCiudad(String ciudad);

    // Buscar estudiantes inscritos en un curso
    List<Estudiante> findByCursosId(Long cursoId);
}

