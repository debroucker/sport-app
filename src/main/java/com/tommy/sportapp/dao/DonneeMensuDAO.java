package com.tommy.sportapp.dao;

import java.util.ArrayList;

import com.tommy.sportapp.entite.DonneeMensu;

public class DonneeMensuDAO {

    public static String BDPATH = GlobalDAO.BDPATH + "/donnees_mensu.csv";

    public static DonneeMensu saveDonneeMensu(DonneeMensu donneeMensu){
        String res = "";
        if (donneeMensu.getId() != -1){
            String[] lines = GlobalDAO.readFile(BDPATH).split("\n");
            for (String line : lines){
                String[] cols = line.split(";");
                if (! cols[0].equals("id")){
                    int id = Integer.parseInt(cols[0]);
                    if (id == donneeMensu.getId()){
                        res += donneeMensu.toString() + "\n";
                    } else {
                        res += line + "\n";
                    }
                } else {
                    res += line + "\n";
                }
            }
            GlobalDAO.writeInFile(BDPATH, res.substring(0,res.length()-1));
        } else {
            donneeMensu.setId(GlobalDAO.maxId(BDPATH));
            GlobalDAO.appendInFile(BDPATH, "\n"+donneeMensu.toString());
        }
        return donneeMensu;
    }

    public static void removeDonneeMensu(int id){
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

    public static ArrayList<DonneeMensu> getAllDonneeMensu(){
        ArrayList<DonneeMensu> donneeMensu = new ArrayList<>();
        String[] lines = GlobalDAO.readFile(BDPATH).split("\n");
        for (String line : lines){
            String[] cols = line.split(";");
            if (! cols[0].equals("id")){
                donneeMensu.add(new DonneeMensu(Integer.parseInt(cols[0]), cols[1], (Integer.parseInt(cols[2])), (Float.parseFloat(cols[3]))));
            }
        }
        return donneeMensu;
    }
    
}
