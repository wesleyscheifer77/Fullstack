const pessosas = [
{id: 3, nome: 'luiz'},
{id: 2, nome: 'maria'},
{id: 1, nome: 'helena'},
];
const novaspessoas = new Map();
for (const pessosa of pessosas){
    const {id} = pessosa;
    novaspessoas.set(id, {...pessosa});
}
novaspessoas.delete(2);
console.log(novaspessoas.get(1));