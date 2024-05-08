package com.example.user_authentication.auth.exception_handler.exception;

public class UserEmailAlreadyRegistered extends Exception {

    public UserEmailAlreadyRegistered() {
        super("User already exists with provided email.");
    }

}
