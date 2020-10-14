// Variabile km percorsi
var km = parseInt( prompt('Indicare quanto è lunga la tratta digitando il numero di km') );

console.log('Km tratta inserita: ', km);
// 
if ( isNaN(km) ){
    window.alert('Inserire un dato numerico valido');
    console.log('Operazione non eseguibile');
}


// Variabile età passeggero
var età = parseInt( prompt('Indicare età passeggero') );

console.log('Età inserita: ', età);

if ( isNaN(età) ){
    window.alert('Inserire un dato numerico valido');
    console.log('Operazione non eseguibile');
}


