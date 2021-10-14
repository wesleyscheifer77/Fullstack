const numeros = [1, 50, 3, 4, 5,];
const numeropares = numeros.filter(function(valor){
return valor % 2 === 0;
}).map (function(valor){
    return valor * 2;
}).reduce(function(ac, valor){
    return ac + valor;
});
console.log(numeropares);