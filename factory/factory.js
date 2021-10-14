function criapessoa (nome, sobrenome){
    return{
        nome,
        sobrenome,
        nomecompleto (){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}
const p1 = criapessoa ('luiz', 'otavio');
console.log(p1.nomecompleto());