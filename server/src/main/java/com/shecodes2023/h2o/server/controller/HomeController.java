package com.shecodes2023.h2o.server.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api")
public class HomeController {

    @GetMapping(value = "/home")
    public String home() {

        return "She Codes 2023 - H2O - tienhuynh-tn";
    }
}
