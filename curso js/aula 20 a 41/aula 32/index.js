function mostrarhora () {
let data = new Date ();
return data.toLocaleTimeString ('pt-BR',{
    hour12: false
});
}
function funçaodointerval () {
    console.log(mostrarhora());
}
setInterval(funçaodointerval, 1000);