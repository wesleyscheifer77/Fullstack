function Produto (nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperties(this,{
        nome: {
            Enumerable: true, //mostra a chave
            value: nome, // valor
            writable: true, // pode alterar
            configurable: true // configuravel
        },
        preco: {
            Enumerable: true, //mostra a chave
            value: preco, // valor
            writable: true, // pode alterar
            configurable: true // configuravel
        },
    });
    }
    const p1 = new Produto ('camiseta', 20, 3);
    console.log(p1);

    for (let chave in p1){
        console.log(chave);
}