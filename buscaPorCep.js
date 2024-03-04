function getDadosEnderecoPorCep(cep){
    let url = 'https://viacep.com.br/ws/'+cep+'/json/';

    //console.log(url);

    let xmlHttp = new XMLHttpRequest(); //requisição

    xmlHttp.open('GET', url); 

    xmlHttp.onreadystatechange = () => {

        console.log(xmlHttp)

        document.getElementById('erro').innerHTML = ''; //apaga qualquer informação visivel na página antes
        
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
            let jsonText = xmlHttp.responseText;
            let jsonObj = JSON.parse(jsonText);

            console.log(jsonObj);

            document.getElementById('endereco').value = jsonObj.logradouro;
            document.getElementById('bairro').value = jsonObj.bairro;
            document.getElementById('cidade').value = jsonObj.localidade;
            document.getElementById('uf').value = jsonObj.uf;

            let span = document.createElement('p'); // criando elemento HTML
            span.innerHTML = '<strong class="col-md-12 border col text-light rounded bg-success">CEP válido</strong>';
            document.getElementById('erro').appendChild(span);
            
            if(jsonObj.erro == true){
                console.log('erro detectado: CEP inválido');
                document.getElementById('endereco').value = 'Endereço'
                document.getElementById('bairro').value = 'Bairro'
                document.getElementById('cidade').value = 'cidade'
                document.getElementById('uf').value = 'UF';

                
                span.innerHTML = '<strong class="col-md-12 border col text-light rounded bg-danger">CEP inválido</strong>';

                document.getElementById('erro').appendChild(span); //inclui span na TAG de ID = erro.

            }

        }

    }
        xmlHttp.send();
}

    