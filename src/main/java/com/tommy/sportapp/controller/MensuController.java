package com.tommy.sportapp.controller;

import java.util.ArrayList;

import com.tommy.sportapp.dao.MensuDAO;
import com.tommy.sportapp.entite.Mensu;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/mensu/list")
public class MensuController {

    @PostMapping("/all")
    public ArrayList<Mensu> all() {
        return MensuDAO.getAllMensu();
    }

    @PostMapping("/add")
    public Mensu saveExo(@RequestParam("id") int id, @RequestParam("name") String name){
        return MensuDAO.saveMensu(new Mensu(id, name));
    }

    @PostMapping("/remove/{id}")
    public void removeExo(@PathVariable("id") int id){
        MensuDAO.removeMensu(id);
    }
    
}
