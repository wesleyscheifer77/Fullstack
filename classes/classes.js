class Pessoa {
    constructor (nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar () {
        console.log(`${this.nome} esta falando.`);
    }
    comendo () {
        console.log(`${this.nome} esta comendo.`);
    }
    bebendo () {
        console.log(`${this.nome} esta bebendo.`);
    }
};
const p1 = new Pessoa('wesley', 'alvary');
console.log(p1);
