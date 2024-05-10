package com.example.user_authentication.auth.DTO;

import com.example.user_authentication.auth.utils.ERole;

public class UserSignupDTO {
    String firstname,lastname,email,password;
    ERole role;


    public UserSignupDTO() {
    }

    public UserSignupDTO(String firstname, String lastname, String email, String password, ERole role) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    public String getFirstname() {
        return this.firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return this.lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public ERole getRole() {
        return this.role;
    }

    public void setRole(ERole role) {
        this.role = role;
    }

    public UserSignupDTO firstname(String firstname) {
        setFirstname(firstname);
        return this;
    }

    public UserSignupDTO lastname(String lastname) {
        setLastname(lastname);
        return this;
    }

    public UserSignupDTO email(String email) {
        setEmail(email);
        return this;
    }

    public UserSignupDTO password(String password) {
        setPassword(password);
        return this;
    }

    public UserSignupDTO role(ERole role) {
        setRole(role);
        return this;
    }

    @Override
    public String toString() {
        return "{" +
            " firstname='" + getFirstname() + "'" +
            ", lastname='" + getLastname() + "'" +
            ", email='" + getEmail() + "'" +
            ", password='" + getPassword() + "'" +
            ", role='" + getRole() + "'" +
            "}";
    }
    

}
