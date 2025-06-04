package com.example.sheet03.repository;

import com.example.sheet03.model.Instructor;
import org.springframework.data.jpa.repository.JpaRepository;


public interface InstructorRepository extends JpaRepository<Instructor, Long> {

}

