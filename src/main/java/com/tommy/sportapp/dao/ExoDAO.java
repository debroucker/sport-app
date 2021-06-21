package com.tommy.sportapp.dao;

import java.util.ArrayList;

import com.tommy.sportapp.entite.Exo;

public class ExoDAO {

    public static String BDPATH = GlobalDAO.BDPATH + "/exos.csv";

    public static Exo saveExo(Exo exo){
        String res = "";
        if (exo.getId() != -1){
            String[] lines = GlobalDAO.readFile(BDPATH).split("\n");
            for (String line : lines){
                String[] cols = line.split(";");
                if (! cols[0].equals("id")){
                    int id = Integer.parseInt(cols[0]);
                    if (id == exo.getId()){
                        res += exo.toString() + "\n";
                    } else {
                        res += line + "\n";
                    }
                } else {
                    res += line + "\n";
                }
            }
            GlobalDAO.writeInFile(BDPATH, res.substring(0,res.length()-1));
        } else {
            exo.setId(GlobalDAO.maxId(BDPATH));
            GlobalDAO.appendInFile(BDPATH, "\n"+exo.toString());
        }
        return exo;
    }

    public static void removeExo(int id){
        String res = "";
        String[] lines = GlobalDAO.readFile(BDPATH).split("\n");
        for (String line : lines){
            String[] cols = line.split(";");
            if (! cols[0].equals("id")){
                int idExo = Integer.parseInt(cols[0]);
                if (idExo != id){
                    res += line + "\n";
                } 
            } else {
                res += line + "\n";
            }
        }
        GlobalDAO.writeInFile(BDPATH, res.substring(0,res.length()-1));
    }

    public static ArrayList<Exo> getAllExo(){
        ArrayList<Exo> exos = new ArrayList<>();
        String[] lines = GlobalDAO.readFile(BDPATH).split("\n");
        for (String line : lines){
            String[] cols = line.split(";");
            if (! cols[0].equals("id")){
                exos.add(new Exo(Integer.parseInt(cols[0]), cols[1]));
            }
        }
        return exos;
    }
    
}
