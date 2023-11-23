// tipo de dado
// booleanos

//conversão implicita
const numero = 456;
const numeroString = "456";

console.log(numero === numeroString); //retorna false ---- compara o valor e o tipo
console.log(numero == numeroString); //retorna true ------ compara só o valor

// conversao explicita
console.log(numero + Number(numeroString));