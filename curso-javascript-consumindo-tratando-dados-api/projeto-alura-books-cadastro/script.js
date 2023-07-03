// console.log("Oi pro amigo");

// function mandaMensagem(){
//     console.log("Tudo bem?");
//     console.log("Vou te mandar uma solicitação!");
//     console.log("solicitação recebida");
// }

// // mandaMensagem();
// setTimeout(mandaMensagem, 5000);

// console.log("Tchau tchau");

// ------------ 1ª forma para funcionar um código assincrono -------------
// var consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
// .then(resposta => resposta.json())
// .then(r => {
//     if(r.erro){
//         throw Error('Esse CEP não existe!')
//     } else 
//         console.log(r)
// })
// .catch(erro => console.log(erro))
// .finally(mensagem => console.log('Processamento concluído!'))

// console.log(consultaCEP)

// ------------ 2ª forma para funcionar um código assincrono -------------
async function buscaEndereco(cep){
    try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCEP.json();
        if(consultaCEPConvertida.erro){
            throw Error('CEP não existente!');
        }
        console.log(consultaCEPConvertida)
        return consultaCEPConvertida;
    } catch(erro){
        console.log(erro)
    }

}

