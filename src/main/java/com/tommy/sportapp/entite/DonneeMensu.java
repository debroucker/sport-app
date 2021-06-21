package com.tommy.sportapp.entite;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DonneeMensu {

    private int id;

    private String date;

    private int idMensu;

    private float taille;

    public DonneeMensu(int id, String date, int idMensu, float taille) {
        this.id = id;
        this.date = date;
        this.idMensu = idMensu;
        this.taille = taille;
    }

    public String toString(){
        return this.id + ";" + this.date + ";" + this.idMensu + ";" + this.taille;
    } 
    
}
