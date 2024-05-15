package com.example.venue.Exceptions;

import java.time.LocalDateTime;

public class ErrorResponse {
    String message;
    LocalDateTime date;

    public ErrorResponse() {

    }

    public ErrorResponse(String message) {
        this.message = message;
        date = LocalDateTime.now();
    }

    public String getMessage() {
        return this.message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public LocalDateTime getDate() {
        return this.date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

}
