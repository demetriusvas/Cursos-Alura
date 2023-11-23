// parametros de função

function soma(numero1, numero2){
    return numero1 + numero2;
}

// console.log(soma(2,2));
// console.log(soma(100,200));
// console.log(soma(-50,90));

// ******* parametros x argumentos ******

// ordem dos parametros

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

// console.log(nomeIdade(35, "Demetrius"));

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5)));