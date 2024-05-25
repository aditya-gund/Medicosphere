package com.medicosphere.eventManagement.Services;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.medicosphere.eventManagement.Entities.Event;
import com.medicosphere.eventManagement.repository.EventRepository;

import java.util.Arrays;
import java.util.List;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class EventServiceTest {

    @Mock
    private EventRepository eventRepository;

    @InjectMocks
    private EventService eventService;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testGetAllEvents() {
        Event event1 = new Event();
        event1.setId(1L);
        Event event2 = new Event();
        event2.setId(2L);
        List<Event> events = Arrays.asList(event1, event2);

        when(eventRepository.findAll()).thenReturn(events);

        List<Event> result = eventService.getAllEvents();

        assertEquals(events.size(), result.size());
        verify(eventRepository, times(1)).findAll();
    }

    @Test
    public void testGetEventById() {
        Event event = new Event();
        event.setId(1L);
        String eventId = "Event1";

        when(eventRepository.findByEventId(eventId)).thenReturn(event);

        Event result = eventService.getEventById(eventId);

        assertEquals(event.getId(), result.getId());
        verify(eventRepository, times(1)).findByEventId(eventId);
    }

    @Test
    public void testCreateEvent() {
        Event event = new Event();
        event.setId(1L);

        when(eventRepository.save(event)).thenReturn(event);

        Event result = eventService.createEvent(event);

        assertEquals(event.getId(), result.getId());
        verify(eventRepository, times(1)).save(event);
    }

    @Test
    public void testUpdateEvent() {
        Event existingEvent = new Event();
        existingEvent.setId(1L);
        Event updatedEvent = new Event();
        updatedEvent.setId(1L);

        when(eventRepository.findByEventId("Event1")).thenReturn(existingEvent);
        when(eventRepository.save(existingEvent)).thenReturn(updatedEvent);

        Event result = eventService.updateEvent("Event1", updatedEvent);

        assertEquals(updatedEvent.getId(), result.getId());
        verify(eventRepository, times(1)).findByEventId("Event1");
        verify(eventRepository, times(1)).save(existingEvent);
    }

    @Test
    public void testDeleteEvent() {
        Event event = new Event();
        event.setId(1L);

        when(eventRepository.findByEventId("Event1")).thenReturn(event);

        eventService.deleteEvent("Event1");

        verify(eventRepository, times(1)).findByEventId("Event1");
        verify(eventRepository, times(1)).delete(event);
    }

    @Test
    public void testGetEventsByCity() {
        // Test implementation for filtering events by city
    }

    // Add more test methods for other service layer methods...

}

