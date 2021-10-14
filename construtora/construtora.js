function pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
const p1 = new pessoa ('luiz', 'otavio');
const p2 = new pessoa ('celia', 'otavio');
console.log(p1, p2);