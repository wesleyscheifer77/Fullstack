function rand(min = 0, max = 3){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
function esperaAi(msg, tempo){
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(typeof msg !== 'string'){
            reject ('cai no erro');
            return;
        }
        resolve(msg.toUpperCase() + 'passei na promise');
        return;
    }, tempo);
});
}

//esperaAi('fase 1 ', rand(0, 3))
 //   .then(valor => {
 //       console.log(valor);
  //      return esperaAi ('fase 2 ', rand());
  //  })
  //  .then (fase => {
  //      console.log(fase);
  //      return('fase 3', rand());
  //  })
   // .then(fase => {
  //      console.log(fase);
   //     return false;
   // })
   // .catch(e => console.log(e));

   async function executa () {
       try {
           const fase1 = await esperaAi ('fase 1 ', rand());
           console.log(fase1);

           const fase2 = await esperaAi ('fase 2 ', rand());
           console.log(fase2);

           const fase3 = await esperaAi ('fase 3 ', rand());
           console.log(fase3);
       } catch(e){
           console.log(e);
       }
    }
    executa ();