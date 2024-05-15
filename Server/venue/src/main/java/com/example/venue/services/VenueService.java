package com.example.venue.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.venue.Exceptions.ExceptoinList.VenueNotFoundException;
import com.example.venue.model.Venue;
import com.example.venue.respositories.VenueRepository;

@Service
public class VenueService {

    @Autowired
    VenueRepository repo;

    public List<Venue> getAllVenues() {
        return repo.findAll();
    }

    public Venue createVenue(Venue venue) {
        return repo.save(venue);
    }

    public Venue updateVenue(Long id, Venue venue) throws Exception {
        Venue existing = getExisting(id);
        venue.setId(existing.getId());
        return repo.save(venue);
    }

    public Venue getVenue(Long id) throws Exception {
        return getExisting(id);
    }

    public void deleteVenue(Long id) throws Exception {
        if(getExisting(id) != null)
            repo.deleteById(id);
    }

    private Venue getExisting(Long id) throws Exception
    {
        Venue venue = repo.findById(id).orElse(null);
        if(venue == null)
            throw new VenueNotFoundException();
        else
            return venue;
    }
    
}
