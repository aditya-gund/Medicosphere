package com.medicosphere.eventManagement.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.medicosphere.eventManagement.Entities.Event;
import com.medicosphere.eventManagement.repository.EventRepository;

import jakarta.persistence.EntityNotFoundException;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

@Service
@Transactional
public class EventService {

    private final EventRepository eventRepository;
    private static final AtomicInteger eventCounter = new AtomicInteger(1);

    
    public EventService(@Autowired EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public Event getEventById(String eventId) {
        return eventRepository.findByEventId(eventId);
    }

    public Event createEvent(Event event) {
        String eventId = generateEventId();
        event.setEventId(eventId);
        return eventRepository.save(event);
    }

    public Event updateEvent(String eventId, Event event) {
        Event existingEvent = getExistingEvent(eventId);
        mapEventData(existingEvent, event);
        return eventRepository.save(existingEvent);
    }

    public boolean deleteEvent(String eventId) {
        Event existingEvent = getExistingEvent(eventId);
        eventRepository.delete(existingEvent);
        return true; // Deletion successful
    }

    private Event getExistingEvent(String eventId) {
        Event existingEvent = eventRepository.findByEventId(eventId);
        if (existingEvent == null) {
            throw new EntityNotFoundException("Event not found with ID: " + eventId);
        }
        return existingEvent;
    }

    private String generateEventId() {
        return "Event" + String.format("%05d", eventCounter.getAndIncrement());
    }

    private void mapEventData(Event existingEvent, Event newEvent) {
        existingEvent.setProduct(newEvent.getProduct());
        existingEvent.setTopic(newEvent.getTopic());
        existingEvent.setSpeaker(newEvent.getSpeaker());
        existingEvent.setDate(newEvent.getDate());
        existingEvent.setTime(newEvent.getTime());
        existingEvent.setCity(newEvent.getCity());
        existingEvent.setState(newEvent.getState());
        existingEvent.setCountry(newEvent.getCountry());
    }
}
