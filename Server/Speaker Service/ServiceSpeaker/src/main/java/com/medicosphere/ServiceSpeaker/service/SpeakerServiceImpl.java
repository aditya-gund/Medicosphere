package com.medicosphere.ServiceSpeaker.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medicosphere.ServiceSpeaker.Entities.SpeakerDetails;
import com.medicosphere.ServiceSpeaker.repository.SpeakerDetailsRepository;

@Service
public class SpeakerServiceImpl implements SpeakerService {

    private final SpeakerDetailsRepository speakerDetailsRepository;

    @Autowired
    public SpeakerServiceImpl(SpeakerDetailsRepository speakerDetailsRepository) {
        this.speakerDetailsRepository = speakerDetailsRepository;
    }

    @Override
    public void saveSpeakerDetails(SpeakerDetails speakerDetails) {
        speakerDetailsRepository.save(speakerDetails);
    }
}

