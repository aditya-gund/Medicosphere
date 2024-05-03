package com.medicosphere.ServiceSpeaker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.medicosphere.ServiceSpeaker.Entities.SpeakerDetails;
import com.medicosphere.ServiceSpeaker.service.SpeakerService;

@RestController
public class SpeakerController {

    private final SpeakerService speakerService;

    @Autowired
    public SpeakerController(@Qualifier("speakerServiceImpl") SpeakerService speakerService) {
        this.speakerService = speakerService;
    }

    @PostMapping("/submit-speaker")
    public ResponseEntity<String> submitSpeaker(@RequestBody SpeakerDetails speakerDetails) {
        speakerService.saveSpeakerDetails(speakerDetails);
        return new ResponseEntity<>("Speaker details submitted successfully!", HttpStatus.CREATED);
    }
}
