package com.example.user_authentication.auth.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.user_authentication.auth.DTO.CustomUserDetails;
import com.example.user_authentication.auth.exception_handler.exception.InvalidCredentials;
import com.example.user_authentication.auth.exception_handler.exception.UserEmailAlreadyRegistered;
import com.example.user_authentication.auth.model.User;
import com.example.user_authentication.auth.repository.UserRepo;

@Service
public class UserService implements UserDetailsService {
    @Autowired
    UserRepo userRepo;
    PasswordEncoder encoder;

    public User authenticate(String email, String password) throws InvalidCredentials {
        User user = (User) userRepo.findByEmail(email);
        if (user != null && encoder.matches(password, user.getPassword()))
            return user;
        else
            throw new InvalidCredentials();
    }

    public User store(User user) throws UserEmailAlreadyRegistered {
        User exists = (User) userRepo.findByEmail(user.getEmail());
        if (exists != null)
            throw new UserEmailAlreadyRegistered();
        else {
            user.setPassword(encoder.encode(user.getPassword()));
            return userRepo.save(user);
        }
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepo.findByEmail(email);
        if(user == null)
        {
            throw new UsernameNotFoundException(new InvalidCredentials().getMessage());
        }
        else
        {
            return new CustomUserDetails(user);
        }
    }

    public PasswordEncoder getEncoder() {
        return this.encoder;
    }

    public void setEncoder(PasswordEncoder encoder) {
        this.encoder = encoder;
    }
    

}
