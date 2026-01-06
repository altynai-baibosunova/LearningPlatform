package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// Either remove this controller
@RestController
public class Controller {
    @GetMapping("/hello")
    public String hello() {
        return "Hello from Controller!";
    }
}
