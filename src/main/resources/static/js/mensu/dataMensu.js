$(document).ready(function() {
    start(typeData, typeMensu)
})

function loadInfoDataMensu(donneeMensu) {
    let mensus = $.all(typeList, typeMensu)
    if (!donneeMensu){
        donneeMensu = $.all(typeData, typeMensu).sort( (a,b) => a.date < b.date ? 1 : -1)
    }
    let res = "<table class=\"table table-striped\">"
    res += "<thead><tr>"
    res += "<th scope=\"col\">Date de la mensu</th>" 
    res += "<th scope=\"col\">Nom de la mensu</th>" 
    res += "<th scope=\"col\">Taille de la mensu</th>" 
    res += "<th scope=\"col\">Modifier</th>" 
    res += "<th scope=\"col\">Supprimer</th>"
    res += "</tr></thead><tbody><tr>"
    donneeMensu.forEach(donneeMensu => {
        res += "<th scope=\"row\">" + donneeMensu.date + "</th>"
        let name = getExoOrMensuByIdWithList(mensus, donneeMensu.idMensu)
        res += "<th scope=\"row\">" + name + "</th>"
        res += "<th scope=\"row\">" + donneeMensu.taille
        res += ((name == "POIDS") ? " kg" : " cm") + "</th>"
        res += "<th scope=\"col\"><button onclick=\"showAdd('"+typeData+"','"+typeMensu+"');"
        res += "setDonneeMensu("+donneeMensu.id+", '"+ donneeMensu.date +"'," + donneeMensu.taille+","+donneeMensu.idMensu+")\" type=\"button\" class=\"btn btn-warning\">Modifier</button></th>"
        res += "<th scope=\"col\"><button onclick=\"remove('"+typeData+"','"+typeMensu+"', " + donneeMensu.id + ");filterDonnee('"+typeMensu+"');\" type=\"button\" class=\"btn btn-danger\">Supprimer</button></th>"
        res += "</tr>"
    });
    res += "</tbody></table>"
    $('#show-'+typeData+'-'+typeMensu).html(res)
}

function saveDataMensu() {
    let id = $('#id-'+typeData+'-'+typeMensu).val()
    let date = $('#date-'+typeData+'-'+typeMensu).val()
    let taille = $('#taille-'+typeData+'-'+typeMensu).val()
    let idExo = $('#select-'+typeData+'-'+typeMensu).val()
    if (!id || id.trim() == ""){
        id = -1
    }
    arr = [date, taille, idExo]
    let vide = false
    arr.forEach(elt => {
        if (elt.trim() == "" && !vide){
            vide = true
        }
    });
    if (!vide) {
        $.ajax({
            type: "POST",
            url: "/api/"+typeMensu+"/"+typeData+"/add/",
            data: {
                id: id,
                date: date,
                idMensu: idExo,
                taille: taille
            },
            async: false,
            success: function(retour) {
                alert("Donnée mensu ajoutée")
                $('#id-'+typeData+'-'+typeMensu).val("")
                $('#date-'+typeData+'-'+typeMensu).val("")
                $('#taille-'+typeData+'-'+typeMensu).val("")
                $('#select-'+typeData+'-'+typeMensu).val("")
            },
            error: function(err) {
                alert("Erreur, donnée mensu non ajoutée")
                console.log(err)
            }
        })
    } else {
        alert("Champs vides")
    }
}

function setDonneeMensu(id, date, taille, idMensu){
    $('#id-'+typeData+'-'+typeMensu).val(id)
    $('#date-'+typeData+'-'+typeMensu).val(date)
    $('#taille-'+typeData+'-'+typeMensu).val(taille)
    $('#select-'+typeData+'-'+typeMensu).val(idMensu)   
}

function loadInfoThisMensu() {
    let idMensu = $('#select-'+typeData+'-'+typeMensu).val()
    let donneeMensus = $.getDonneeExoOrMensuByExoId(idMensu, typeMensu).sort((a,b) => a.date < b.date ? 1 : -1)
    if (donneeMensus && donneeMensus.length != 0){
        let donneeMensu = donneeMensus[0]
        setDonneeMensu(null, null, donneeMensu.taille, idMensu)
    } else {
        setDonneeMensu(null, null, null, idMensu)
    }
}