$(document).ready(function() {
    start(typeData, typeExo)
})

function loadInfoDataExo(donneeExos) {
    let exos = $.all(typeList, typeExo)
    if (!donneeExos){
        donneeExos = $.all(typeData, typeExo).sort( (a,b) => a.date < b.date ? 1 : -1)
    }
    let res = "<table class=\"table table-striped\">"
    res += "<thead><tr>"
    res += "<th scope=\"col\">Date de l'exo</th>" 
    res += "<th scope=\"col\">Nom de l'exo</th>" 
    res += "<th scope=\"col\">Nb Rep * poids (1) </th>" 
    res += "<th scope=\"col\">Nb Rep * poids (2) </th>" 
    res += "<th scope=\"col\">Nb Rep * poids (3) </th>" 
    res += "<th scope=\"col\">Nb Rep * poids (4) </th>" 
    res += "<th scope=\"col\">Total poids </th>" 
    res += "<th scope=\"col\">Modifier</th>" 
    res += "<th scope=\"col\">Supprimer</th>"
    res += "</tr></thead><tbody><tr>"
    donneeExos.forEach(donneeExo => {
        res += "<th scope=\"row\">" + donneeExo.date + "</th>"
        res += "<th scope=\"row\">" + getExoOrMensuByIdWithList(exos, donneeExo.idExo) + "</th>"
        res += "<th scope=\"row\">" + donneeExo.nbRep1 + " * " + donneeExo.poids1 + "kg </th>"
        res += "<th scope=\"row\">" + donneeExo.nbRep2 + " * " + donneeExo.poids2 + "kg </th>"
        res += "<th scope=\"row\">" + donneeExo.nbRep3 + " * " + donneeExo.poids3 + "kg </th>"
        res += "<th scope=\"row\">" + donneeExo.nbRep4 + " * " + donneeExo.poids4 + "kg </th>"
        res += "<th scope=\"row\">" + donneeExo.totalPoids + "kg </th>"
        res += "<th scope=\"col\"><button onclick=\"showAdd('"+typeData+"','"+typeExo+"');"
        res += "setDonneeExo("+donneeExo.id+", '"+ donneeExo.date +"'," + donneeExo.nbRep1 + "," + donneeExo.nbRep2 +  "," + donneeExo.nbRep3 +  "," + donneeExo.nbRep4
        res +=  "," + donneeExo.poids1 +  "," + donneeExo.poids2 +  "," + donneeExo.poids3 +  "," + donneeExo.poids4 + "," + donneeExo.idExo + ")\""
        res += "type=\"button\" class=\"btn btn-warning\">Modifier</button></th>"
        res += "<th scope=\"col\"><button onclick=\"remove('"+typeData+"','"+typeExo+"', " + donneeExo.id + ");filterDonnee('"+typeExo+"');\" type=\"button\" class=\"btn btn-danger\">Supprimer</button></th>"
        res += "</tr>"
    });
    res += "</tbody></table>"
    $('#show-'+typeData+'-'+typeExo).html(res)
    $('#rep1-'+typeData+'-'+typeExo).val("12")
    $('#rep2-'+typeData+'-'+typeExo).val("12")
    $('#rep3-'+typeData+'-'+typeExo).val("12")
    $('#rep4-'+typeData+'-'+typeExo).val("12")
}

function saveDataExo() {
    let id = $('#id-'+typeData+'-'+typeExo).val()
    let date = $('#date-'+typeData+'-'+typeExo).val()
    let rep1 = $('#rep1-'+typeData+'-'+typeExo).val()
    let rep2 = $('#rep2-'+typeData+'-'+typeExo).val()
    let rep3 = $('#rep3-'+typeData+'-'+typeExo).val()
    let rep4 = $('#rep4-'+typeData+'-'+typeExo).val()
    let poids1 = $('#poids1-'+typeData+'-'+typeExo).val()
    let poids2 = $('#poids2-'+typeData+'-'+typeExo).val()
    let poids3 = $('#poids3-'+typeData+'-'+typeExo).val()
    let poids4 = $('#poids4-'+typeData+'-'+typeExo).val()
    let idExo = $('#select-'+typeData+'-'+typeExo).val()
    if (!id || id.trim() == ""){
        id = -1
    }
    arr = [date, rep1, rep2, rep3, rep4, poids1, poids2, poids3, poids4, idExo]
    let vide = false
    arr.forEach(elt => {
        if (elt.trim() == "" && !vide){
            vide = true
        }
    });
    if (!vide) {
        $.ajax({
            type: "POST",
            url: "/api/"+typeExo+"/"+typeData+"/add/",
            data: {
                id: id,
                date: date,
                idExo: idExo,
                nbRep1: rep1,
                nbRep2: rep2,
                nbRep3: rep3,
                nbRep4: rep4,
                poids1: poids1,
                poids2: poids2,
                poids3: poids3,
                poids4: poids4
            },
            async: false,
            success: function(retour) {
                alert("Donnée exo ajoutée")
                $('#id-'+typeData+'-'+typeExo).val("")
                $('#date-'+typeData+'-'+typeExo).val("")
                $('#rep1-'+typeData+'-'+typeExo).val("12")
                $('#rep2-'+typeData+'-'+typeExo).val("12")
                $('#rep3-'+typeData+'-'+typeExo).val("12")
                $('#rep4-'+typeData+'-'+typeExo).val("12")
                $('#poids1-'+typeData+'-'+typeExo).val("")
                $('#poids2-'+typeData+'-'+typeExo).val("")
                $('#poids3-'+typeData+'-'+typeExo).val("")
                $('#poids4-'+typeData+'-'+typeExo).val("")
                $('#select-'+typeData+'-'+typeExo).val("")
            },
            error: function(err) {
                alert("Erreur, donnée exo non ajoutée")
                console.log(err)
            }
        })
    } else {
        alert("Champs vides")
    }
}

function setDonneeExo(id, date, rep1, rep2, rep3, rep4, poids1, poids2, poids3, poids4, idExo){
    $('#id-'+typeData+'-'+typeExo).val(id)
    $('#date-'+typeData+'-'+typeExo).val(date)
    $('#rep1-'+typeData+'-'+typeExo).val(rep1)
    $('#rep2-'+typeData+'-'+typeExo).val(rep2)
    $('#rep3-'+typeData+'-'+typeExo).val(rep3)
    $('#rep4-'+typeData+'-'+typeExo).val(rep4)
    $('#poids1-'+typeData+'-'+typeExo).val(poids1)
    $('#poids2-'+typeData+'-'+typeExo).val(poids2)
    $('#poids3-'+typeData+'-'+typeExo).val(poids3)
    $('#poids4-'+typeData+'-'+typeExo).val(poids4)
    $('#select-'+typeData+'-'+typeExo).val(idExo)   
}

function loadInfoThisExo() {
    let idExo = $('#select-'+typeData+'-'+typeExo).val()
    let donneeExos = $.getDonneeExoOrMensuByExoId(idExo, typeExo).sort((a,b) => a.date < b.date ? 1 : -1)
    if (donneeExos && donneeExos.length != 0){
        let donneeExo = donneeExos[0]
        setDonneeExo(null, null, donneeExo.nbRep1, donneeExo.nbRep2, donneeExo.nbRep3, donneeExo.nbRep4, donneeExo.poids1, donneeExo.poids2, donneeExo.poids3, donneeExo.poids4, idExo)
    } else {
        setDonneeExo(null, null, 12, 12, 12, 12, null, null, null, null, idExo)
    }
}

