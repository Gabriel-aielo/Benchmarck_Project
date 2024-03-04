function getDadosBenchmark(IDinsert) {

    let valorID = document.getElementById('IDinsert').value;

    //console.log(valorID);

    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', 'http://localhost/Projeto%20benchmark/dados.json')

    xmlHttp.onreadystatechange = () => {

       
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            let JSONID = xmlHttp.responseText

           //console.log(JSONID)
            
            let objJSONID = JSON.parse(JSONID) //transformando os elementos do Json em objetos (função parse)

            //console.log(objJSONID[2]);
            for(let i in objJSONID){

                let valorRecuperado = objJSONID[i];

                //console.log(objJSONID[0]);
                
            }


        }

        if(xmlHttp.readyState == 4 && xmlHttp.status == 404) {
            //..
        }
    }

    xmlHttp.send()
}