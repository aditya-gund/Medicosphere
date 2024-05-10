package com.example.user_authentication.auth.DTO;

import com.example.user_authentication.auth.model.User;
import com.example.user_authentication.auth.utils.ERole;

public class ResponseUserDTO {

    String firstname, lastname, email;
    ERole role;

    public ResponseUserDTO() {
    }

    public ResponseUserDTO(User user) {
        this.firstname = user.getFirstname();
        this.lastname = user.getLastname();
        this.email = user.getEmail();
        this.role = user.getRole();
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

    public ERole getRole() {
        return this.role;
    }

    public void setRole(ERole role) {
        this.role = role;
    }

    public ResponseUserDTO firstname(String firstname) {
        setFirstname(firstname);
        return this;
    }

    public ResponseUserDTO lastname(String lastname) {
        setLastname(lastname);
        return this;
    }

    public ResponseUserDTO email(String email) {
        setEmail(email);
        return this;
    }

    public ResponseUserDTO role(ERole role) {
        setRole(role);
        return this;
    }

    @Override
    public String toString() {
        return "{" +
                " firstname='" + getFirstname() + "'" +
                ", lastname='" + getLastname() + "'" +
                ", email='" + getEmail() + "'" +
                ", role='" + getRole() + "'" +
                "}";
    }

}
