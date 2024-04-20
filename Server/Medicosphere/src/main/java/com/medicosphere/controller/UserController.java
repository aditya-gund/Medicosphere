package com.medicosphere.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.medicosphere.model.User;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UserController {

    private List<User> users = new ArrayList<>();

    @PostMapping("/signup")
    public String signUp(@RequestBody User user) {
        // Simulate storing user in-memory (replace with database logic in production)
        users.add(user);
        return "User added successfully!";
    }
}

