
function forceDrawChart(type) {
    google.charts.load('current', {'packages':['corechart']});
    let arr = createDataToDraw(type)
    if (arr && arr.length > 1){
        $('#error-no-data-'+type).hide()
        $('#draw-graph-'+type).show()
        google.charts.setOnLoadCallback(drawChart(type, arr));
    } else if(arr && arr.length == 1) {
        $('#error-no-data-'+type).show()
        $('#draw-graph-'+type).hide()
    }
}

function createDataToDraw(type) {
    // example = [['Temps', 'Poids Total'],['2006', 1000],['2007', 1170]]
    let res = []
    let id = $('#select-'+typeGraph+'-'+type).val()
    if (id && id != ""){
        let begin = (type == typeExo) ? ['Temps', 'Poids Total'] : ['Temps', 'kg ou cm']
        res.push(begin)
        let donnees = $.all(typeData, type).sort( (a,b) => a.date > b.date ? 1 : -1)
        donnees.forEach(donnee => {
            let idToCheck = (type == typeExo) ? donnee.idExo : donnee.idMensu
            if (idToCheck == id){
                let d = donnee.date
                let dates = d.split('-')
                let date = dates[2] + '-' + dates[1]
                let data = (type == typeExo) ? [date, donnee.totalPoids] : [date, donnee.taille]
                res.push(data)
            }
        });
    }
    return res
}

function drawChart(type, arr) {
    let data = google.visualization.arrayToDataTable(
        arr
    );
    let options = {
        title: (type == typeExo) ? 'Evolution du poids total en fonction du temps, par excercice' : 'Evolution de la taille en fonction du temps, par mensuration',
        curveType: 'function',
        legend: { position: 'bottom' }
    };
    let chart = new google.visualization.LineChart(document.getElementById('draw-'+typeGraph+'-'+type));
    chart.draw(data, options);
}