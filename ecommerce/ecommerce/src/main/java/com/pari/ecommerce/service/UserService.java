package com.pari.ecommerce.service;

import com.pari.ecommerce.model.User;
import com.pari.ecommerce.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Used in AuthController -> register()
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    // Used in AuthController -> login()
    public User getUserByUsername(String username) {
        Optional<User> user = userRepository.findByUsername(username);
        return user.orElse(null);  // return null if user not found
    }
}

