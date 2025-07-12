package com.pari.ecommerce.controller;

import com.pari.ecommerce.model.User;
import com.pari.ecommerce.service.UserService;
import com.pari.ecommerce.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

   
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        return ResponseEntity.ok(userService.saveUser(user));
    }

    
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        User existingUser = userService.getUserByUsername(user.getUsername());
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            String token = jwtUtil.generateToken(user.getUsername());
            return ResponseEntity.ok().body("{\"token\":\"" + token + "\"}");
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }
}


