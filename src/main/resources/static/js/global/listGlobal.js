$(document).ready(function() {
    start(typeList, typeExo)
    start(typeList, typeMensu)
})

function loadInfoList(type) {
    let items = $.all(typeList, type).sort( (a,b) => a.name > b.name ? 1 : -1)
    let res = "<table class=\"table table-striped\">"
    res += "<thead><tr>"
    let label = (type==typeExo ? "l'exo" : "la mensu")
    res += "<th scope=\"col\">Nom de "+label+"</th>" 
    res += "<th scope=\"col\">Modifier</th>" 
    res += "<th scope=\"col\">Supprimer</th>"
    res += "</tr></thead><tbody><tr>"
    items.forEach(item => {
        res += "<th scope=\"row\">" + item.name + "</th>"
        res += "<th scope=\"col\"><button onclick=\"showAdd('"+typeList+"', '"+type+"');setList("+item.id+", '"+ item.name.replace("'", "") +"', '"+type+"')\" type=\"button\" class=\"btn btn-warning\">Modifier</button></th>"
        res += "<th scope=\"col\"><button onclick=\"remove('"+typeList+"', '"+type+"', " + item.id + ");loadInfoList('"+type+"');\" type=\"button\" class=\"btn btn-danger\">Supprimer</button></th>"
        res += "</tr>"
    });
    res += "</tbody></table>"
    $('#show-'+typeList+'-'+type).html(res)
}

function saveList(type) {
    let name = $('#name-'+typeList+'-'+type).val()
    let id = $('#id-'+typeList+'-'+type).val()
    if (!id || id.trim() == ""){
        id = -1
    }
    if (name && name.trim() != "") {
        $.ajax({
            type: "POST",
            url: "/api/"+type+"/"+typeList+"/add/",
            data: {
                id: id,
                name: name.trim().toUpperCase(),
            },
            async: false,
            success: function(retour) {
               (type==typeExo) ? alert("Exo ajouté") : alert("Mensu ajoutée")
                $('#name-'+typeList+'-'+type).val("")
                $('#id-'+typeList+'-'+type).val("")
            },
            error: function(err) {
                alert("Erreur, exo non ajoutée")
                console.log(err)
            }
        })
    } else {
        alert("nom vide")
    }
}

function setList(id, name, type){
    $('#id-'+typeList+'-'+type).val(id)
    $('#name-'+typeList+'-'+type).val(name)
}

function getExoOrMensuByIdWithList(list, id){
    let name = ""
    list.forEach(elt=> {
        if (elt.id == id) {
            name = elt.name
        }
    })
    return name
}