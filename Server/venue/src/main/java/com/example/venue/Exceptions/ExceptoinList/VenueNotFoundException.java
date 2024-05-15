package com.example.venue.Exceptions.ExceptoinList;

public class VenueNotFoundException extends Exception {
    public VenueNotFoundException()
    {
        super("Venue does not exist for given ID");
    }
}
