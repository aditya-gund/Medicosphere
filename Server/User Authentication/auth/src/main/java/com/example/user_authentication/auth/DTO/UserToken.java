package com.example.user_authentication.auth.DTO;

import com.example.user_authentication.auth.model.User;

public class UserToken {
    User user;
    String token;

    public UserToken() {
    }

    public UserToken(User user, String token) {
        this.user = user;
        this.token = token;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getToken() {
        return this.token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public UserToken user(User user) {
        setUser(user);
        return this;
    }

    public UserToken token(String token) {
        setToken(token);
        return this;
    }    
}
