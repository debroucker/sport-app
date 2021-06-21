<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- css -->
    <!-- lib -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
  <!-- src -->
  <link href="css/home.css" rel="stylesheet" type="text/css">
  <!-- js -->
  <!-- lib -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
  <script src="js/core/jquery-3.6.0.min.js" type="text/javascript"></script>
  <script src="https://www.gstatic.com/charts/loader.js" type="text/javascript"></script>
  <!-- src -->
  <script src="js/exo/dataExo.js" type="text/javascript"></script>
  <script src="js/mensu/dataMensu.js" type="text/javascript"></script>
  <script src="js/global/global.js" type="text/javascript"></script>
  <script src="js/global/listGlobal.js" type="text/javascript"></script>
  <script src="js/global/dataGlobal.js" type="text/javascript"></script>
  <script src="js/exo/graphiqueExo.js" type="text/javascript"></script>

  <title>Home</title>
</head>
<body>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarExo" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Exos
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarExo">
              <li><a class="dropdown-item" href="#graph-exo">Graphique</a></li>
              <li><a class="dropdown-item" href="#data-exo">Données</a></li>
              <li><a class="dropdown-item" href="#list-exo">Liste</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarMensu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Mensu
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarMensu">
              <li><a class="dropdown-item" href="#graph-mensu">Graphique</a></li>
              <li><a class="dropdown-item" href="#data-mensu">Données</a></li>
              <li><a class="dropdown-item" href="#list-mensu">Liste</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>


  <div class="items">

    <!-- grpahique exo -->
    <div id="graph-exo">
      <h1><span class="badge badge-pill badge-dark bg-info">Graphique des exos</span></h1>
      <div class="add" style="display: block; margin-top: -70px"> 
        Nom de l'exo : <select required onclick="forceDrawChart('exo')" id="select-graph-exo" placeholder="Selectionnez le nom de l'exo"></select>
      </div>
      <h2 id='error-no-data-exo'> Pas de donnée enregistrée </h1>
      <br>
      <div id="draw-graph-exo"></div>
    </div>

    <!-- donnée exo -->
    <div id="data-exo">
      <h1><span class="badge badge-pill badge-dark bg-info">Données des exos</span></h1>
      <select class="add" required onclick="filterDonnee('exo')" id="select-filter-data-exo" placeholder="Selectionnez le nom de l'exo"></select>
      <button id="btn-show-add-data-exo" type="button" onclick="showAdd('data','exo')" class="btn btn-success btn-right">Ajouter une donnée</button>
      <div id="show-data-exo" style="display: block;"></div>
      <div id="show-add-data-exo">
        <div class="add" style="display: block;">
          <input required id="id-data-exo" style="display: none;">
          Nom de l'exo : 
          <select required onclick="loadInfoThisExo()" id="select-data-exo" placeholder="Selectionnez le nom de l'exo"></select>
          <br>
          Date de l'exo : 
          <input required type="date" id="date-data-exo" placeholder="Entrez la date de l'exo">
          <br>
          Nombre de rep et leur poids :
          <br>
          <input required type="number" min="1" id="rep1-data-exo" placeholder="Rep série 1"> @ <input required type="number" min="1" id="poids1-data-exo" placeholder="Poids série 1">
          <br>
          <input required type="number" min="1" id="rep2-data-exo" placeholder="Rep série 2"> @ <input required type="number" min="1" id="poids2-data-exo" placeholder="Poids série 2">
          <br>
          <input require type="number" min="1" id="rep3-data-exo" placeholder="Rep série 3"> @ <input required type="number" min="1" id="poids3-data-exo" placeholder="Poids série 3">
          <br>
          <input required type="number" min="1" id="rep4-data-exo" placeholder="Rep série 4"> @ <input required type="number" min="1" id="poids4-data-exo" placeholder="Poids série 4">
          <br>
          <button id="btn-add-data-exo" type="button" onclick="saveDataExo();hideAdd('data','exo');filterDonnee('exo')" class="btn btn-success">Ajouter la donnée</button>
          <button id="btn-stop-data-exo" type="button" onclick="hideAdd('data','exo')" class="btn btn-danger">Annuler</button>
        </div>
      </div>      
    </div>

    <!-- liste exo -->
    <div id="list-exo">
      <h1><span class="badge badge-pill badge-dark bg-info">Liste des exos</span></h1>
      <button id="btn-show-add-list-exo" type="button" onclick="showAdd('list','exo')" class="btn btn-success btn-right">Ajouter un exo</button>
      <div id="show-list-exo" style="display: block;"></div>
      <div id="show-add-list-exo">
        <div class="add" style="display: block;">
          <input required id="id-list-exo" style="display: none;">
          Nom de l'exo : <input required id="name-list-exo" placeholder="Entrez le nom de l'exo">
          <br>
          <button id="btn-add-list-exo" type="button" onclick="saveList('exo');hideAdd('list','exo');loadAll()" class="btn btn-success ">Ajouter l'exo</button>
          <button id="btn-stop-list-exo" type="button" onclick="hideAdd('list','exo')" class="btn btn-danger">Annuler</button>
        </div>
      </div>
    </div>


    <!-- grpahique mensu -->
    <div id="graph-mensu">
      <h1><span class="badge badge-pill badge-dark bg-info">Graphique des mensu</span></h1>
      <div class="add" style="display: block; margin-top: -70px"> 
        Nom de la mensu : <select required onclick="forceDrawChart('mensu')" id="select-graph-mensu" placeholder="Selectionnez le nom de la mensu"></select>
      </div>
      <h2 style="display: none;" id='error-no-data-mensu'> Pas de donnée enregistrée </h1>
      <br>
      <div id="draw-graph-mensu"></div>
    </div>

    <!-- donnee mensu -->
    <div id="data-mensu">
      <h1><span class="badge badge-pill badge-dark bg-info">Données des mensu</span></h1>
      <select class="add" required onclick="filterDonnee('mensu')" id="select-filter-data-mensu" placeholder="Selectionnez le nom de la mensu"></select>
      <button id="btn-show-add-data-mensu" type="button" onclick="showAdd('data','mensu')" class="btn btn-success btn-right">Ajouter une donnée</button>
      <div id="show-data-mensu" style="display: block;"></div>
      <div id="show-add-data-mensu">
        <div class="add" style="display: block;">
          <input required id="id-data-mensu" style="display: none;">
          Nom de la mensu : 
          <select required onclick="loadInfoThisMensu()" id="select-data-mensu" placeholder="Selectionnez le nom de la mensu"></select>
          <br>
          Date de la mensu : 
          <input required type="date" id="date-data-mensu" placeholder="Entrez la date de la mensu">
          <br>
          Taille de la mensu :
          <input required type="number" step="0.1" min="1" id="taille-data-mensu" placeholder="Mesure (cm, kg)">
          <br>
          <button id="btn-add-data-mensu" type="button" onclick="saveDataMensu();hideAdd('data','mensu');filterDonnee('mensu')" class="btn btn-success">Ajouter la donnée</button>
          <button id="btn-stop-data-mensu" type="button" onclick="hideAdd('data','mensu')" class="btn btn-danger">Annuler</button>
        </div>
      </div>
    </div>

    <!-- list mensu -->
    <div id="list-mensu">
      <h1><span class="badge badge-pill badge-dark bg-info">Liste des mensu</span></h1>
      <button id="btn-show-add-list-mensu" type="button" onclick="showAdd('list', 'mensu')" class="btn btn-success btn-right">Ajouter une mensu</button>
      <div id="show-list-mensu" style="display: block;"></div>
      <div id="show-add-list-mensu">
        <div class="add" style="display: block;">
          <input required id="id-list-mensu" style="display: none;">
          Nom de la mensu : <input required id="name-list-mensu" placeholder="Entrez le nom de la mensu">
          <br>
          <button id="btn-add-list-mensu" type="button" onclick="saveList('mensu');hideAdd('list','mensu');loadAll()" class="btn btn-success ">Ajouter la mensu</button>
          <button id="btn-stop-list-mensu" type="button" onclick="hideAdd('list','mensu')" class="btn btn-danger">Annuler</button>
        </div>
      </div>
  </div>

  
  
</body>
</html>