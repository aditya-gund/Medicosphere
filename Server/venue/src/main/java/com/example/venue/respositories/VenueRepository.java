package com.example.venue.respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.venue.model.Venue;

@Repository
public interface VenueRepository extends JpaRepository<Venue, Long> {
    
}
