package com.medicosphere.eventManagement.Entities;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.Objects;

@Entity
@Table(name = "events")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String eventId;

    @Column(nullable = false)
    private String product;

    @Column(nullable = false)
    private String topic;

    @Column(nullable = false)
    private String host;

    @Column(nullable = false)
    private LocalDate date;

    @Column(nullable = false)
    private String time;

    @Column(nullable =  false)
    private Long venueId;

    // Constructors
    public Event() {
        // Default constructor
    }

    public Event(Long id, String eventId, String product, String topic, String host, LocalDate date, String time, Long venueId) {
        this.id = id;
        this.eventId = eventId;
        this.product = product;
        this.topic = topic;
        this.host = host;
        this.date = date;
        this.time = time;
        this.venueId = venueId;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEventId() {
        return eventId;
    }

    public void setEventId(String eventId) {
        this.eventId = eventId;
    }

    public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public String getTopic() {
        return topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getHost() {
        return host;
    }

    public void setHost(String host) {
        this.host = host;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Long getVenueId() {
        return this.venueId;
    }

    public void setVenueId(Long venueId) {
        this.venueId = venueId;
    }

    public Event id(Long id) {
        setId(id);
        return this;
    }

    public Event eventId(String eventId) {
        setEventId(eventId);
        return this;
    }

    public Event product(String product) {
        setProduct(product);
        return this;
    }

    public Event topic(String topic) {
        setTopic(topic);
        return this;
    }

    public Event host(String host) {
        setHost(host);
        return this;
    }

    public Event date(LocalDate date) {
        setDate(date);
        return this;
    }

    public Event time(String time) {
        setTime(time);
        return this;
    }

    public Event venueId(Long venueId) {
        setVenueId(venueId);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof Event)) {
            return false;
        }
        Event event = (Event) o;
        return Objects.equals(id, event.id) && Objects.equals(eventId, event.eventId) && Objects.equals(product, event.product) && Objects.equals(topic, event.topic) && Objects.equals(host, event.host) && Objects.equals(date, event.date) && Objects.equals(time, event.time) && Objects.equals(venueId, event.venueId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, eventId, product, topic, host, date, time, venueId);
    }

    @Override
    public String toString() {
        return "{" +
            " id='" + getId() + "'" +
            ", eventId='" + getEventId() + "'" +
            ", product='" + getProduct() + "'" +
            ", topic='" + getTopic() + "'" +
            ", host='" + getHost() + "'" +
            ", date='" + getDate() + "'" +
            ", time='" + getTime() + "'" +
            ", venueId='" + getVenueId() + "'" +
            "}";
    }
    
}
