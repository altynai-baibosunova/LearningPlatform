package com.learning.platform.service.api;


import com.learning.platform.dto.UserLoginDto;
import com.learning.platform.dto.UserRegistrationDto;
import com.learning.platform.model.User;

import java.util.Optional;
import java.util.UUID;

public interface UserService {

    User registerUser(UserRegistrationDto userData);

    Optional<User> findByEmail(String email);

    Optional<User> findByUsername(String username);

    boolean checkPassword(String rawPassword, String encodedPassword);

    boolean loginUser(UserLoginDto dto);

    User loadUserByUsername(String username);

    UUID getUserIdByUsername(String username);
}