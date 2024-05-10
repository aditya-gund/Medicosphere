package com.medicosphere.eventManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.medicosphere.eventManagement.Entities.Event;

import java.time.LocalDate;
import java.util.List;

public interface EventRepository extends JpaRepository<Event, Long> {

    Event findByEventId(String eventId);

    List<Event> findByCity(String city);

    List<Event> findByState(String state);

    List<Event> findByCountry(String country);

    List<Event> findByDate(LocalDate date);

    List<Event> findBySpeaker(String speaker);

    List<Event> findByProduct(String product);

    List<Event> findByTopic(String topic);

}

