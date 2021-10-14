(function(idade, peso, altura){
const sobrenome = 'alvary';
function cria(nome) {
    return nome + ' ' + sobrenome;
}
function falanome () {
    console.log(cria ('wesley'));
}
falanome();
console.log(idade, peso, altura);
})(22, 58, 1.70);