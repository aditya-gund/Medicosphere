package com.example.user_authentication.auth.exception_handler;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.example.user_authentication.auth.exception_handler.exception.InvalidCredentials;
import com.example.user_authentication.auth.exception_handler.exception.UserEmailAlreadyRegistered;

@RestControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {
    @ExceptionHandler(value = UserEmailAlreadyRegistered.class)
    @ResponseStatus(HttpStatus.CONFLICT)
    protected ErrorResponse handleConstraintError(Exception ex, WebRequest req) {
        return new ErrorResponse(ex.getMessage());
    }

    @ExceptionHandler(value = InvalidCredentials.class)
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    protected ErrorResponse handleAuthenticationError(Exception ex, WebRequest req) {
        return new ErrorResponse(ex.getMessage());
    }
}
