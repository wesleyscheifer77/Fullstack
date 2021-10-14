//reduce reduz um array em um unico elemento
const numeros = [1, 50, 3, 4, 5,];
const total = numeros.reduce (function(acumulador, valor, indice, array){
acumulador +=valor;
return acumulador;
}, 0);
console.log(total);