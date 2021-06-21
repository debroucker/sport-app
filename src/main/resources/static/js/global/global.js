const typeData = 'data'
const typeList = 'list'
const typeGraph = 'graph'

const typeExo = 'exo'
const typeMensu = 'mensu'

$(document).ready(function() {
    loadAll()
})

function start(type1,type2){
    $('#show-add-'+type1+'-'+type2).hide()
}

function hideAdd(type1,type2){
    $('#btn-show-add-'+type1+'-'+type2).show()
    $('#show-'+type1+'-'+type2).show()
    $('#show-add-'+type1+'-'+type2).hide()
    if (type1 == typeData){
        $('#select-filter-data-'+type2).hide()
    }
}

function showAdd(type1, type2){
    $('#btn-show-add-'+type1+'-'+type2).hide()
    $('#show-'+type1+'-'+type2).hide()
    $('#show-add-'+type1+'-'+type2).show()
    if (type1 == typeData){
        $('#select-filter-data-'+type2).hide()
    }
}

function setAllSelectExo(){
    let exos = $.all(typeList, typeExo).sort( (a,b) => a.name > b.name ? 1 : -1)
    let selectRes = "<option value=''></option>"
    exos.forEach(exo => {
        selectRes += "<option value=\""+exo.id+"\">"+exo.name+"</option>"
    })
    $('#select-'+typeData+'-'+typeExo).html(selectRes)
    $('#select-'+typeGraph+'-'+typeExo).html(selectRes)
    $('#select-filter-'+typeData+'-'+typeExo).html(selectRes)
}

function setAllSelectMensu(){
    let mensus = $.all(typeList, typeMensu).sort( (a,b) => a.name > b.name ? 1 : -1)
    let selectRes = "<option value=''></option>"
    mensus.forEach(mensu => {
        selectRes += "<option value=\""+mensu.id+"\">"+mensu.name+"</option>"
    })
    $('#select-'+typeData+'-'+typeMensu).html(selectRes)
    $('#select-'+typeGraph+'-'+typeMensu).html(selectRes)
    $('#select-filter-'+typeData+'-'+typeMensu).html(selectRes)
}

function loadAll(){
    loadInfoDataExo()
    loadInfoDataMensu()
    loadInfoList(typeExo)
    loadInfoList(typeMensu)
    setAllSelectExo()
    setAllSelectMensu()
}

function remove(type1,type2, id) {
    $.ajax({
        type: "POST",
        url: "/api/"+type2+"/"+type1+"/remove/" + id,
        async: false,
        success: function(retour) {
            
        },
        error: function(err) {
            console.log(err)
        }
    })
}

jQuery.extend({
    all: function(type1,type2){
        let res = null;
        $.ajax({
            type: "POST",
            url: "/api/"+type2+"/"+type1+"/all",
            async: false,
            success: function(retour) {
                res = retour
            }
        });
        return res;
    }
});
