package com.example.user_authentication.auth.DTO;

import com.example.user_authentication.auth.model.User;
import com.example.user_authentication.auth.utils.ERole;

public class UserDTO {

    String firstname, lastname, email;
    ERole role;

    public UserDTO() {
    }

    public UserDTO(User user) {
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

    public UserDTO firstname(String firstname) {
        setFirstname(firstname);
        return this;
    }

    public UserDTO lastname(String lastname) {
        setLastname(lastname);
        return this;
    }

    public UserDTO email(String email) {
        setEmail(email);
        return this;
    }

    public UserDTO role(ERole role) {
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
