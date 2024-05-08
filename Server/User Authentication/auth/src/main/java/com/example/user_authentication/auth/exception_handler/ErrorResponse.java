package com.example.user_authentication.auth.exception_handler;

import java.util.Date;

public class ErrorResponse {
    Date date;
    String message;

    public ErrorResponse() {
        date = new Date();
    }

    public ErrorResponse(String message) {
        this.date = new Date();
        this.message = message;
    }

    public Date getDate() {
        return this.date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getMessage() {
        return this.message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public ErrorResponse date(Date date) {
        setDate(date);
        return this;
    }

    public ErrorResponse message(String message) {
        setMessage(message);
        return this;
    }

}
