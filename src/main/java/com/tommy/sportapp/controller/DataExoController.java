package com.tommy.sportapp.controller;

import java.util.ArrayList;

import com.tommy.sportapp.dao.DonneeExoDAO;
import com.tommy.sportapp.entite.DonneeExo;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/exo/data")
public class DataExoController {

    @PostMapping("/all")
    public ArrayList<DonneeExo> all() {
        return DonneeExoDAO.getAllDonneeExo();
    }

    @PostMapping("/add")
    public DonneeExo saveDonneeExo(
        @RequestParam("id") int id,
        @RequestParam("date") String date,
        @RequestParam("idExo") int idExo,
        @RequestParam("nbRep1") int nbRep1,
        @RequestParam("nbRep2") int nbRep2,
        @RequestParam("nbRep3") int nbRep3,
        @RequestParam("nbRep4") int nbRep4,
        @RequestParam("poids1") int poids1,
        @RequestParam("poids2") int poids2,
        @RequestParam("poids3") int poids3,
        @RequestParam("poids4") int poids4
    ){
        int total = nbRep1*poids1 + nbRep2*poids2 + nbRep3*poids3 + nbRep4*poids4;
        return DonneeExoDAO.saveDonneeExo(new DonneeExo(id, date, idExo, nbRep1, nbRep2, nbRep3, nbRep4, poids1, poids2, poids3, poids4, total));
    }

    @PostMapping("/remove/{id}")
    public void removeDonneeExo(@PathVariable("id") int id){
        DonneeExoDAO.removeDonneeExo(id);
    }

    @PostMapping("/get-by-exo/{id}")
    public ArrayList<DonneeExo> getByExo(@PathVariable("id") int id){
        ArrayList<DonneeExo> res = new ArrayList<>();
        ArrayList<DonneeExo> all = DonneeExoDAO.getAllDonneeExo();
        for (DonneeExo donneeExo : all){
            if (donneeExo.getIdExo() == id){
                res.add(donneeExo);
            }
        }
        return res;
    }
    
}
