const pessoa = {
    nome: 'wesley',
    sobrenome: 'scheifer',
    Idade: 22,
    endereco: {
    rua: 'roberto hoffman',
    numero: 320
    }
};
//nome, ...resto
const {nome, sobrenome} = pessoa;
console.log(nome, sobrenome);
