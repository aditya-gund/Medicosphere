package com.medicosphere.eventManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.medicosphere.eventManagement.Entities.Event;

import java.time.LocalDate;
import java.util.List;

public interface EventRepository extends JpaRepository<Event, Long> {

    Event findByEventId(String eventId);

    List<Event> findByVenueId(Long venueId);

    List<Event> findByDate(LocalDate date);

    List<Event> findByProduct(String product);

    List<Event> findByTopic(String topic);

}

