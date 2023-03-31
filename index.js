//consumo de api via cep
let cep = 53540120

let url = `https://viacep.com.br/ws/${cep}/json/`

fetch(url).then(function(response){
    response.json().then(function(data){
        console.log(data.logradouro, data.bairro)
    })
})