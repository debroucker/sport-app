package com.tommy.sportapp.dao;

import java.util.ArrayList;

import com.tommy.sportapp.entite.DonneeExo;

public class DonneeExoDAO {

    public static String BDPATH = GlobalDAO.BDPATH + "/donnees_exos.csv";

    public static DonneeExo saveDonneeExo(DonneeExo donneeExo){
        String res = "";
        if (donneeExo.getId() != -1){
            String[] lines = GlobalDAO.readFile(BDPATH).split("\n");
            for (String line : lines){
                String[] cols = line.split(";");
                if (! cols[0].equals("id")){
                    int id = Integer.parseInt(cols[0]);
                    if (id == donneeExo.getId()){
                        res += donneeExo.toString() + "\n";
                    } else {
                        res += line + "\n";
                    }
                } else {
                    res += line + "\n";
                }
            }
            GlobalDAO.writeInFile(BDPATH, res.substring(0,res.length()-1));
        } else {
            donneeExo.setId(GlobalDAO.maxId(BDPATH));
            GlobalDAO.appendInFile(BDPATH, "\n"+donneeExo.toString());
        }
        return donneeExo;
    }

    public static void removeDonneeExo(int id){
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

    public static ArrayList<DonneeExo> getAllDonneeExo(){
        ArrayList<DonneeExo> donneeExo = new ArrayList<>();
        String[] lines = GlobalDAO.readFile(BDPATH).split("\n");
        for (String line : lines){
            String[] cols = line.split(";");
            if (! cols[0].equals("id")){
                donneeExo.add(new DonneeExo(Integer.parseInt(cols[0]), cols[1], (Integer.parseInt(cols[2])), (Integer.parseInt(cols[3])), 
                (Integer.parseInt(cols[4])), (Integer.parseInt(cols[5])), (Integer.parseInt(cols[6])), (Integer.parseInt(cols[7])),
                (Integer.parseInt(cols[8])), (Integer.parseInt(cols[9])), (Integer.parseInt(cols[10])), (Integer.parseInt(cols[11]))));
            }
        }
        return donneeExo;
    }
    
}
