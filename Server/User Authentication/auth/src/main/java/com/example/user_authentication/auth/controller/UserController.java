package com.example.user_authentication.auth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.user_authentication.auth.DTO.UserLoginDTO;
import com.example.user_authentication.auth.DTO.UserToken;
import com.example.user_authentication.auth.exception_handler.exception.InvalidCredentials;
import com.example.user_authentication.auth.model.User;
import com.example.user_authentication.auth.service.UserService;
import com.example.user_authentication.auth.utils.JwtUtil;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;
    @Autowired
    JwtUtil jwtUtil;

    // delete this
    @GetMapping("/test")
    @Secured("ADMIN")
    public @ResponseBody String getMethodName() throws Exception {
        return "Returning secured resource";
    }

    @PostMapping("/login")
    public @ResponseBody UserToken login(@RequestBody UserLoginDTO user) throws InvalidCredentials {
        return new UserToken(userService.authenticate(user.getEmail(), user.getPassword()),
                jwtUtil.generateToken(user.getEmail()));
    }

    @PostMapping("/signup")
    public UserToken postMethodName(@RequestBody User user) throws Exception {
        User saved = userService.store(user);
        return new UserToken(saved, jwtUtil.generateToken(saved.getEmail()));
    }

}
