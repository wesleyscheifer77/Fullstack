function Pessoa (nome, sobrenome){
this.nome = nome;
this.sobrenome = sobrenome;
this.metodo = function () {
console.log(this.nome + ' sou um metodo');
}
}
const p1 = new Pessoa ('luiz', 'romanoski');
const p2 = new Pessoa ('elvira', 'romanoski');
p2.metodo();