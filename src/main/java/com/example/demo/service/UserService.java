package com.example.demo.service;

import com.example.demo.dto.UserLoginDto;
import com.example.demo.dto.UserRegistrationDto;
import com.example.demo.model.User;

import java.util.Optional;

public interface UserService {
    User registerUser(UserRegistrationDto dto);
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
    boolean loginUser(UserLoginDto dto);
}
