package com.medicosphere.ServiceSpeaker.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.medicosphere.ServiceSpeaker.repository.SpeakerDetailsRepository;
import com.medicosphere.ServiceSpeaker.service.SpeakerService;
import com.medicosphere.ServiceSpeaker.service.SpeakerServiceImpl;

@Configuration
public class SpeakerConfiguration {

    @Bean
    public SpeakerService speakerService(SpeakerDetailsRepository speakerDetailsRepository) {
        return new SpeakerServiceImpl(speakerDetailsRepository);
    }
}

