const data = new Date ('2021-08-10 00:00:00');  
let diadesemana = data.getDay();
//diadesemana = 2;
let diasemanatexto;

switch (diadesemana) {
    case 0:
        diasemanatexto = 'domingo';
        //break;
        case 1:
        diasemanatexto = 'segunda';
        break;
        case 2:
        diasemanatexto = 'terça';
        break;
        case 3:
        diasemanatexto = 'quarta';
        break;
        case 4:
        diasemanatexto = 'quinta';
        break;
        case 5:
        diasemanatexto = 'sexta';
        break;
        case 6:
        diasemanatexto = 'sabado';
        break;
} 
console.log(diadesemana, diasemanatexto);