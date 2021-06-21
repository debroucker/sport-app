package com.tommy.sportapp.entite;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Exo {

    private int id;

    private String name;

    public Exo(int id, String name){
        this.id = id;
        this.name = name;
    }

    public String toString(){
        return id + ";" + name;
    }
    
}
