/*
let arquivoSelecionado;

function handleFile(files) {
    const file = files[0];
    if (!file) {
        return;
    }

    console.log("Nome do arquivo:", file.name);
    console.log("Tamanho do arquivo:", file.size, "bytes");
    console.log("Tipo de arquivo:", file.type);
    console.log("Última modificação:", file.lastModifiedDate);

    // Atribuindo o arquivo à variável global
    arquivoSelecionado = file;
    console.log("Arquivo selecionado:", arquivoSelecionado);
}


function getDadosBenchmark(ID){

    let url = arquivoSelecionado;

    console.log(arquivoSelecionado)


      //console.log(url);

      let xmlHttp = new XMLHttpRequest(); //requisição

      xmlHttp.open('GET', url); 
  
}*/


/*Dispara a função quando input perde o focus*/
function getDadosBenchmark(ID){

    //console.log("Função disparada")
    }

    function carregarJSON(callback) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', 'dados.json', true); // Substitua 'dados.json' pelo caminho do seu arquivo JSON
        console.log("Arquivo recuperado")

        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
                callback(JSON.parse(xobj.responseText));
                return xobj;
            } else {
                console.log("Arquivo não recuperado")
            }
        }
    };
        xobj.send(null);
