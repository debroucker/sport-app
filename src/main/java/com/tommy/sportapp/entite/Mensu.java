package com.tommy.sportapp.entite;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Mensu {

    private int id;

    private String name;

    public Mensu(int id, String name){
        this.id = id;
        this.name = name;
    }

    public String toString(){
        return id + ";" + name;
    }
    
}
