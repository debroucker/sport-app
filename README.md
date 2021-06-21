# sport-app
## Suivit sportif pour la musculation (perf & mensu)
#

# Config
 * Avoir java 11 minimum
 * Changer les chemins des fichiers dans les DAO (`dao\GlobalDAO.java`, `dao\MensuDAO.java`, `dao\ExoDAO.java`, `dao\DataExoDAO.java`, `dao\DataMensuDAO.java`)
 * créer des fichiers csv avec comme 1ère ligne :
    -  donnees_exos.csv : `id;date;idExo;nbRep1;nbRep2;nbRep3;nbRep4;poids1;poids2poids3;poids4;totalPoids`
    - donnees_mensu : `id;date;idMensi;taille`
    - exos.csv, mensu.csv : `id;name`

# Lancement
 * Générer le jar : `mvn package` à la racine du projet
 * Dans target : `java -jar nom_du_jar` OU double cliquer sur le jar sous W10 
 * dans un navigateur, aller sur : `http://localhost:8080`