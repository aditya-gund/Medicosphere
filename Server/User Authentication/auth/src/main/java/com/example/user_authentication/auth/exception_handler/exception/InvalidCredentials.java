package com.example.user_authentication.auth.exception_handler.exception;

public class InvalidCredentials extends Exception{
    public InvalidCredentials(){
        super("Incorrect email or password.");
    }
}
