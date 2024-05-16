package com.example.venue.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.venue.DTO.EventDTO;
import com.example.venue.model.Venue;
import com.example.venue.services.VenueService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;


@Controller
@RequestMapping("/venue")
public class VenueController {

    @Autowired
    VenueService service;

    @Autowired
    RestTemplate restTemplate;

    @GetMapping
    public @ResponseBody List<Venue> getAllVenues() {
        return service.getAllVenues();
    }

    @PostMapping
    public @ResponseBody Venue createNewVenue(@RequestBody Venue venue) {
        return service.createVenue(venue);
    }

    @PutMapping("{id}")
    public @ResponseBody Venue updateVenue(@PathVariable Long id, @RequestBody Venue venue) throws Exception {
        return service.updateVenue(id,venue);
    }

    @GetMapping("{id}")
    public @ResponseBody Venue getVenue(@PathVariable Long id) throws Exception {
        return service.getVenue(id);
    }

    @DeleteMapping("{id}")
    public @ResponseBody String deleteVenue(@PathVariable Long id) throws Exception
    {
        service.deleteVenue(id);
        return "Successfully deleted " + id;
    }

    @GetMapping("/bookings/{id}")
    public ResponseEntity<EventDTO> getMethodName(@PathVariable Long id) throws Exception {
        service.getExisting(id);//check if venue exists
        return restTemplate.getForEntity("http://localhost:8081/events/venue/"+id, EventDTO.class);
    }
    
    
}
