package com.example.user_authentication.auth.configuration;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.security.web.context.RequestAttributeSecurityContextRepository;
import org.springframework.security.web.context.SecurityContextRepository;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import com.example.user_authentication.auth.service.UserService;
import com.example.user_authentication.auth.utils.JwtUtil;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class AuthTokenFilter extends OncePerRequestFilter {

    @Autowired
    UserService userService;
    @Autowired
    JwtUtil jwtUtil;

    SecurityContextRepository securityContextRepository = new RequestAttributeSecurityContextRepository();

    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain)
            throws ServletException,
            IOException {
        // cookie based authentication filter

        String uri = request.getRequestURL().toString();
        if (!(uri.endsWith("/user/login") || uri.endsWith("/user/signup"))) {
            String token = null;
            if (request.getCookies() != null) {
                for (Cookie cookie : request.getCookies()) {
                    if (cookie.getName().equals("accessToken")) {
                        token = cookie.getValue();
                    }
                }
            }
            if (token != null) {
                String email = jwtUtil.extractUserEmail(token);
                if (email != null) {
                    UserDetails user = userService.loadUserByUsername(email);
                    if (jwtUtil.tokenIsValid(token, user)) {
                        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(user,
                                null,
                                user.getAuthorities());
                        authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                        SecurityContextHolder.getContext().setAuthentication(authToken);
                    }
                }
            }
        }
        filterChain.doFilter(request, response);

        /*
         * //previous bearer based authentication filter
         * String header = request.getHeader("Authorization");
         * if (header == null || !header.startsWith("Bearer "))
         * {
         * filterChain.doFilter(request, response);
         * }
         * else
         * {
         * String jwt = header.substring(7);
         * String email = jwtUtil.extractUserEmail(jwt);
         * if (email != null)
         * {
         * UserDetails user = userService.loadUserByUsername(email);
         * if (jwtUtil.tokenIsValid(jwt, user))
         * {
         * UsernamePasswordAuthenticationToken authToken = new
         * UsernamePasswordAuthenticationToken(user,
         * null,
         * user.getAuthorities());
         * authToken.setDetails(new
         * WebAuthenticationDetailsSource().buildDetails(request));
         * SecurityContextHolder.getContext().setAuthentication(authToken);
         * }
         * 
         * }
         * filterChain.doFilter(request, response);
         * }
         */

    }

}
