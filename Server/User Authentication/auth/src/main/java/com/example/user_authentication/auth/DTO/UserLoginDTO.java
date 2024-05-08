package com.example.user_authentication.auth.DTO;
import java.util.Objects;

public class UserLoginDTO {
    String email;
    String password;



    public UserLoginDTO() {
    }

    public UserLoginDTO(String email, String password) {
        this.email = email;
        this.password = password;
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

    public UserLoginDTO email(String email) {
        setEmail(email);
        return this;
    }

    public UserLoginDTO password(String password) {
        setPassword(password);
        return this;
    }

    @Override
    public boolean equals(Object o) {
        if (o == this)
            return true;
        if (!(o instanceof UserLoginDTO)) {
            return false;
        }
        UserLoginDTO userLoginDTO = (UserLoginDTO) o;
        return Objects.equals(email, userLoginDTO.email) && Objects.equals(password, userLoginDTO.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(email, password);
    }

    @Override
    public String toString() {
        return "{" +
            " email='" + getEmail() + "'" +
            ", password='" + getPassword() + "'" +
            "}";
    }
    
}
