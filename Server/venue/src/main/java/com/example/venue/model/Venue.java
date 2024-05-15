package com.example.venue.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.util.Objects;

@Entity
public class Venue {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    String address;
    String country;
    String city;
    String state;

    public Venue() {
    }

    public Venue(Long id, String address, String country, String city, String state) {
        this.id = id;
        this.address = address;
        this.country = country;
        this.city = city;
        this.state = state;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCountry() {
        return this.country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return this.city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return this.state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public Venue id(Long id) {
        setId(id);
        return this;
    }

    public Venue address(String address) {
        setAddress(address);
        return this;
    }

    public Venue country(String country) {
        setCountry(country);
        return this;
    }

    public Venue city(String city) {
        setCity(city);
        return this;
    }

    public Venue state(String state) {
        setState(state);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Venue)) {
            return false;
        }
        Venue venue = (Venue) o;
        return Objects.equals(id, venue.id) && Objects.equals(address, venue.address)
                && Objects.equals(country, venue.country) && Objects.equals(city, venue.city)
                && Objects.equals(state, venue.state);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, address, country, city, state);
    }

    @Override
    public String toString() {
        return "{" +
                " id='" + getId() + "'" +
                ", address='" + getAddress() + "'" +
                ", country='" + getCountry() + "'" +
                ", city='" + getCity() + "'" +
                ", state='" + getState() + "'" +
                "}";
    }

}
