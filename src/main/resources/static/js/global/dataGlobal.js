jQuery.extend({
    getDonneeExoOrMensuByExoId: function(id, type){
        let res = null;
        $.ajax({
            type: "POST",
            url: "/api/"+type+"/data/get-by-"+type+"/"+id,
            async: false,
            success: function(retour) {
                res = retour
            }
        });
        return res;
    }
});

function filterDonnee(type) {
    let id = $('#select-filter-'+typeData+'-'+type).val()
    if (id) {
        let donnees = $.getDonneeExoOrMensuByExoId(id,type).sort((a,b) => a.date < b.date ? 1 : -1)
        if (type == typeExo){
            loadInfoDataExo(donnees)
        } else {
            loadInfoDataMensu(donnees)
        }
    } else {
        if (type == typeExo){
            loadInfoDataExo()
        } else {
            loadInfoDataMensu()
        }
    }
    
}