package com.example.user_authentication.auth.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.user_authentication.auth.DTO.ResponseUserDTO;
import com.example.user_authentication.auth.DTO.UserLoginDTO;
import com.example.user_authentication.auth.DTO.UserSignupDTO;
import com.example.user_authentication.auth.exception_handler.exception.InvalidCredentials;
import com.example.user_authentication.auth.model.User;
import com.example.user_authentication.auth.service.UserService;
import com.example.user_authentication.auth.utils.JwtUtil;

import jakarta.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
@CrossOrigin
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
    public ResponseEntity<ResponseUserDTO> login(@RequestBody UserLoginDTO user, HttpServletResponse res)
            throws InvalidCredentials {
        String token = jwtUtil.generateToken(user.getEmail());
        ResponseUserDTO response = new ResponseUserDTO(
                userService.authenticate(user.getEmail(),
                        user.getPassword()));
        ResponseCookie cookie = ResponseCookie
                .from("accessToken", token)
                .secure(false)
                .httpOnly(true)
                .maxAge(120000)
                .build();
        res.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/signup")
    public ResponseEntity<ResponseUserDTO> postMethodName(@RequestBody UserSignupDTO user, HttpServletResponse res)
            throws Exception {
        User saved = userService.store(
                user.getFirstname(),
                user.getLastname(),
                user.getEmail(),
                user.getPassword(),
                user.getRole());
        String token = jwtUtil.generateToken(user.getEmail());
        ResponseUserDTO response = new ResponseUserDTO(saved);
        ResponseCookie cookie = ResponseCookie
                .from("accessToken", token)
                .secure(false)
                .httpOnly(true)
                .maxAge(120000)
                .build();
        res.addHeader(HttpHeaders.SET_COOKIE, cookie.toString());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

}
