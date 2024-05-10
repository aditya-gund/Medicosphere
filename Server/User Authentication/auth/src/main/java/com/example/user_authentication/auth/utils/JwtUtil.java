package com.example.user_authentication.auth.utils;

import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.function.Function;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {
    private final String SECRET;
    private final long EXPIRATION_TIME;

    public JwtUtil(@Value("${jwt.secret}") String secret, @Value("${jwt.expiration}") long expiry) {
        this.SECRET = secret;
        this.EXPIRATION_TIME = expiry;
    }

    public String generateToken(String email) {
        SecretKey key = Keys.hmacShaKeyFor(SECRET.getBytes(StandardCharsets.UTF_8));
        Date expiry = new Date(new Date().getTime() + EXPIRATION_TIME);
        String token = Jwts.builder()
        .subject(email)
        .expiration(expiry)
        .signWith(key)
        .compact();
        return token;
    }

    public String extractUserEmail(String token) {
        SecretKey key = Keys.hmacShaKeyFor(SECRET.getBytes(StandardCharsets.UTF_8));
        return Jwts.parser()
                .verifyWith(key)
                .build()
                .parseSignedClaims(token)
                .getPayload()
                .getSubject();
    }

    public boolean tokenIsValid(String token, UserDetails user) {
        String username = extractUsername(token);
        return username.equals(user.getUsername()) && !isTokenExpired(token);
    }

    private String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts
                .parser()
                .verifyWith(Keys.hmacShaKeyFor(SECRET.getBytes(StandardCharsets.UTF_8)))
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

}
