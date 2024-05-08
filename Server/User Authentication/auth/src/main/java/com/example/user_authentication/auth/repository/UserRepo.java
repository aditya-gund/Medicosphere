package com.example.user_authentication.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.user_authentication.auth.model.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {
    @Query(nativeQuery = true, value = """
            SELECT *
            FROM user
            WHERE email = ?1
            """)
    User findByEmail(String email);
}