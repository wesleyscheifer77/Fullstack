function criamultiplicador (multiplicador){
return function (n){
    return n* multiplicador;
};
}
const duplica = criamultiplicador (2);
const triplica = criamultiplicador (3);
const quadruplica = criamultiplicador (4);

console.log(duplica(2));
console.log(triplica(3));
console.log(quadruplica(4));