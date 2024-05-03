package com.medicosphere.ServiceSpeaker.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.medicosphere.ServiceSpeaker.Entities.SpeakerDetails;

public interface SpeakerDetailsRepository extends JpaRepository<SpeakerDetails, Long> {
}
