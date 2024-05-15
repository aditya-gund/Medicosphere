package com.medicosphere.eventManagement.Entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Sequence {
    @Id
    Long id;

    Long sequence;

    public Sequence() {
    }


    public Sequence(Long id) {
        this.id = id;
    }


    public Sequence(Long id, Long sequence) {
        this.id = id;
        this.sequence = sequence;
    }


    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getSequence() {
        return this.sequence;
    }

    public void setSequence(Long sequence) {
        this.sequence = sequence;
    }

}
