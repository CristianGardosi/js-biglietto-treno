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

// Prezzo base senza sconti
var prezzo = ( km * 0.21 );
    console.log('Prezzo base biglietto: ', km * 0.21 + ' $');
// Sconto over 65
if (età > 65){
    console.log('Prezzo biglietto over 65: ', prezzo * 0.60 + ' $');
}
// Sconto under 18
else if (età < 18 ){
    console.log('Prezzo biglietto under 18: ', prezzo * 0.80 + ' $');
}



document.getElementById('ticketprice').innerHTML = 'Il prezzo del biglietto per la tratta selezionata è di: ' + prezzo + '$';


