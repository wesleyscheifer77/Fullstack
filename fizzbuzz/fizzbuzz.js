function fizzbuzz (numero) {
if (typeof numero !== 'number') return numero;
if (numero % 3 === 0 && numero % 5 === 0) return 'fizzbuzz';
if (numero % 3 === 0) return 'fizz';
if (numero % 5 === 0) return 'buzz';
return numero;
}
console.log ('a', fizzbuzz('a'));
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzbuzz(i))
}