function criapessoa (nome, sobrenome, idade){
return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade

};


}
const pessoa1 = criapessoa ('luiz', 'miranda', 25);
const pessoa2 = criapessoa ('luizinho', 'novakowski', 2);
const pessoa3 = criapessoa ('elvira', 'novakowski', 19);
const pessoa4 = criapessoa ('marcelo', 'romanoski', 65);
const pessoa5 = criapessoa ('carmem', 'novakowski', 15);
console.log(pessoa1.nome, pessoa2.nome);
