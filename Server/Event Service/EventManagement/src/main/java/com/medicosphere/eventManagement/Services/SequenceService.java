package com.medicosphere.eventManagement.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medicosphere.eventManagement.Entities.Sequence;
import com.medicosphere.eventManagement.repository.SequenceRepository;

@Service
public class SequenceService {
    private static final String prefix = "Event";
    @Autowired
    SequenceRepository sequenceRepository;

    public synchronized String getNext() {
        Sequence seq = sequenceRepository.findById(1L).orElse(null);
        if (seq == null) {
            seq = new Sequence();
            seq.setId(1L);
            seq.setSequence(1L);
        } else {
            seq.setSequence(seq.getSequence() + 1);
        }
        sequenceRepository.save(seq);
        return prefix + seq.getSequence();
    }
}
