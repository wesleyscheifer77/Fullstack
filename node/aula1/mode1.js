const nome = 'wesley';
const sobrenome = 'scheifer';
const falanome = () => nome + ' ' + sobrenome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falanome = falanome;
this.qualquercoisa = 'o que eu quiser exportar';
console.log(exports);