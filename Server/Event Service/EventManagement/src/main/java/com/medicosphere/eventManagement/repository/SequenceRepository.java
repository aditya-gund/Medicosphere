package com.medicosphere.eventManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.medicosphere.eventManagement.Entities.Sequence;

public interface SequenceRepository extends JpaRepository<Sequence, Long>{
    
}
