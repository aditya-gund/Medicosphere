package com.example.venue.DTO;


import java.time.LocalDate;
import java.util.Objects;

public class EventDTO {
    private Long id;
    private String eventId;
    private String product;
    private String topic;
    private String host;
    private LocalDate date;
    private String time;
    private Long venueId;


    public EventDTO() {
    }

    public EventDTO(Long id, String eventId, String product, String topic, String host, LocalDate date, String time, Long venueId) {
        this.id = id;
        this.eventId = eventId;
        this.product = product;
        this.topic = topic;
        this.host = host;
        this.date = date;
        this.time = time;
        this.venueId = venueId;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEventId() {
        return this.eventId;
    }

    public void setEventId(String eventId) {
        this.eventId = eventId;
    }

    public String getProduct() {
        return this.product;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public String getTopic() {
        return this.topic;
    }

    public void setTopic(String topic) {
        this.topic = topic;
    }

    public String getHost() {
        return this.host;
    }

    public void setHost(String host) {
        this.host = host;
    }

    public LocalDate getDate() {
        return this.date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getTime() {
        return this.time;
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

    public EventDTO id(Long id) {
        setId(id);
        return this;
    }

    public EventDTO eventId(String eventId) {
        setEventId(eventId);
        return this;
    }

    public EventDTO product(String product) {
        setProduct(product);
        return this;
    }

    public EventDTO topic(String topic) {
        setTopic(topic);
        return this;
    }

    public EventDTO host(String host) {
        setHost(host);
        return this;
    }

    public EventDTO date(LocalDate date) {
        setDate(date);
        return this;
    }

    public EventDTO time(String time) {
        setTime(time);
        return this;
    }

    public EventDTO venueId(Long venueId) {
        setVenueId(venueId);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof EventDTO)) {
            return false;
        }
        EventDTO eventDTO = (EventDTO) o;
        return Objects.equals(id, eventDTO.id) && Objects.equals(eventId, eventDTO.eventId) && Objects.equals(product, eventDTO.product) && Objects.equals(topic, eventDTO.topic) && Objects.equals(host, eventDTO.host) && Objects.equals(date, eventDTO.date) && Objects.equals(time, eventDTO.time) && Objects.equals(venueId, eventDTO.venueId);
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
