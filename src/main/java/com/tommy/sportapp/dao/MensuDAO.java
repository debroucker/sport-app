package com.tommy.sportapp.dao;

import java.util.ArrayList;

import com.tommy.sportapp.entite.Mensu;


public class MensuDAO {

    public static String BDPATH = GlobalDAO.BDPATH + "/mensu.csv";

    public static Mensu saveMensu(Mensu mensu){
        String res = "";
        if (mensu.getId() != -1){
            String[] lines = GlobalDAO.readFile(BDPATH).split("\n");
            for (String line : lines){
                String[] cols = line.split(";");
                if (! cols[0].equals("id")){
                    int id = Integer.parseInt(cols[0]);
                    if (id == mensu.getId()){
                        res += mensu.toString() + "\n";
                    } else {
                        res += line + "\n";
                    }
                } else {
                    res += line + "\n";
                }
            }
            GlobalDAO.writeInFile(BDPATH, res.substring(0,res.length()-1));
        } else {
            mensu.setId(GlobalDAO.maxId(BDPATH));
            GlobalDAO.appendInFile(BDPATH, "\n"+mensu.toString());
        }
        return mensu;
    }

    public static void removeMensu(int id){
        String res = "";
        String[] lines = GlobalDAO.readFile(BDPATH).split("\n");
        for (String line : lines){
            String[] cols = line.split(";");
            if (! cols[0].equals("id")){
                int idMensu = Integer.parseInt(cols[0]);
                if (idMensu != id){
                    res += line + "\n";
                } 
            } else {
                res += line + "\n";
            }
        }
        GlobalDAO.writeInFile(BDPATH, res.substring(0,res.length()-1));
    }

    public static ArrayList<Mensu> getAllMensu(){
        ArrayList<Mensu> mensus = new ArrayList<>();
        String[] lines = GlobalDAO.readFile(BDPATH).split("\n");
        for (String line : lines){
            String[] cols = line.split(";");
            if (! cols[0].equals("id")){
                mensus.add(new Mensu(Integer.parseInt(cols[0]), cols[1]));
            }
        }
        return mensus;
    }
    
}
