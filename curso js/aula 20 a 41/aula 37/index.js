function retornafuncao (nome){
    return function () {
        return nome;
    }
}
const funcao = retornafuncao ('luiz');
const funcao2 = retornafuncao ('joao');
console.dir(funcao);
console.dir(funcao2);
console.log(funcao(), funcao2());