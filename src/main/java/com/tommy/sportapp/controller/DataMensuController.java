package com.tommy.sportapp.controller;

import java.util.ArrayList;

import com.tommy.sportapp.dao.DonneeMensuDAO;
import com.tommy.sportapp.entite.DonneeMensu;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/mensu/data")
public class DataMensuController {

    @PostMapping("/all")
    public ArrayList<DonneeMensu> all() {
        return DonneeMensuDAO.getAllDonneeMensu();
    }

    @PostMapping("/add")
    public DonneeMensu saveDonneeExo(
        @RequestParam("id") int id,
        @RequestParam("date") String date,
        @RequestParam("idMensu") int idMensu,
        @RequestParam("taille") float taille
    ){
        return DonneeMensuDAO.saveDonneeMensu(new DonneeMensu(id, date, idMensu, taille));
    }

    @PostMapping("/remove/{id}")
    public void removeDonneeExo(@PathVariable("id") int id){
        DonneeMensuDAO.removeDonneeMensu(id);
    }

    @PostMapping("/get-by-mensu/{id}")
    public ArrayList<DonneeMensu> getByExo(@PathVariable("id") int id){
        ArrayList<DonneeMensu> res = new ArrayList<>();
        ArrayList<DonneeMensu> all = DonneeMensuDAO.getAllDonneeMensu();
        for (DonneeMensu donneeMensu : all){
            if (donneeMensu.getIdMensu() == id){
            res.add(donneeMensu);
            }
        }
        return res;
    }
    
}
