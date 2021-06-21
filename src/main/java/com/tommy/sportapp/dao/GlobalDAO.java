package com.tommy.sportapp.dao;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class GlobalDAO {

    public static String BDPATH = "C:/Users/debro/OneDrive/Bureau/PERSO/sport-app/bd";

    public static void writeInFile(String file, String res){
        try {
            // create a writer
            BufferedWriter bw = new BufferedWriter(new FileWriter(file));
            // write text to file
            bw.write(res);
            // close the writer
            bw.close();
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }

    public static String readFile(String file){
        Path path = Paths.get(file);
        try {
            // Java 11
            String s = Files.readString(path, StandardCharsets.UTF_8);
            return s;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static void appendInFile(String file, String res) {
        String str = readFile(file) + res;
        writeInFile(file, str);
    }

    public static int maxId(String file) {
        String[] lines = readFile(file).split("\n");
        int max = -1;
        for (String line : lines){
            String[] cols = line.split(";");
            if (! cols[0].equals("id")){
                int id = Integer.parseInt(cols[0]);
                if (max < id ){
                    max = id;
                }
            }
        }
        return max+1;

    }
    
}
