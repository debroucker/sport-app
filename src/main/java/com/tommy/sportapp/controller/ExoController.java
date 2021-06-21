package com.tommy.sportapp.controller;

import java.util.ArrayList;

import com.tommy.sportapp.dao.ExoDAO;
import com.tommy.sportapp.entite.Exo;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/exo/list")
public class ExoController {

    @PostMapping("/all")
    public ArrayList<Exo> all() {
        return ExoDAO.getAllExo();
    }

    @PostMapping("/add")
    public Exo saveExo(@RequestParam("id") int id, @RequestParam("name") String name){
        return ExoDAO.saveExo(new Exo(id, name));
    }

    @PostMapping("/remove/{id}")
    public void removeExo(@PathVariable("id") int id){
        ExoDAO.removeExo(id);
    }
    
}
