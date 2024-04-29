package service;
import model.User;

public interface UserService {
    User findByEmail(String email);

    void saveUser(User user);
}
