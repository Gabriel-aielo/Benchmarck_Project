function getDadosBenchmark(IDinsert) {
    let valorID = document.getElementById(IDinsert).value;


    console.log(valorID)

    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', 'http://localhost/Projeto%20benchmark/dados.json')

    xmlHttp.onreadystatechange = () => {
        if(xmlHttp.readyState == 4) {
            if(xmlHttp.status == 200) {
                let JSONID = xmlHttp.responseText;
                let objJSONID = JSON.parse(JSONID);

                // Percorra os objetos do JSON
                for(let i in objJSONID){
                    let valorRecuperado = objJSONID[i];

                    console.log(valorRecuperado)

                    // Compare o valor inserido com o ID presente no objeto atual
                    if(valorRecuperado.ID === valorID) {
                        console.log('ID encontrado:', valorRecuperado);
                        // Faça o que for necessário com o objeto encontrado
                        return; // Interrompe o loop assim que encontrar uma correspondência
                    }
                }
                // Se o ID não for encontrado
                console.log('ID não encontrado');
            } else if(xmlHttp.status == 404) {
                console.error('Erro 404: O arquivo não foi encontrado.');
            } else {
                console.error('Erro inesperado: ' + xmlHttp.statusText);
            }
        }
    }

    xmlHttp.send();
}
