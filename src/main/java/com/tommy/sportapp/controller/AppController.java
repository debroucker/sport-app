package com.tommy.sportapp.controller;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class AppController {
    @GetMapping("/")
    public ModelAndView home(Model model) {
        ModelAndView mav = new ModelAndView("home");
        return mav;
    }
}
