package com.tommy.sportapp.entite;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DonneeExo {

    private int id;

    private String date;

    private int idExo;

    private int nbRep1;

    private int nbRep2;

    private int nbRep3;

    private int nbRep4;

    private int poids1;

    private int poids2;

    private int poids3;

    private int poids4;

    private int totalPoids;

    public DonneeExo(int id, String date, int idExo, int nbRep1, int nbRep2, int nbRep3, int nbRep4, int poids1, int poids2, int poids3, int poids4, int totalPoids) {
        this.id = id;
        this.date = date;
        this.idExo = idExo;
        this.nbRep1 = nbRep1;
        this.nbRep2 = nbRep2;
        this.nbRep3 = nbRep3;
        this.nbRep4 = nbRep4;
        this.poids1 = poids1;
        this.poids2 = poids2;
        this.poids3 = poids3;
        this.poids4 = poids4;
        this.totalPoids = totalPoids;
    }
    
    public String toString(){
        return id + ";" + date + ";" + idExo + ";" + nbRep1 + ";" + nbRep2 + ";" + nbRep3 + ";" + nbRep4 + ";" + poids1 + ";" + poids2 + ";" + poids3 + ";" + poids4 + ";" + totalPoids;
    }
    
}
