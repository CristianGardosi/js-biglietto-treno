// Variabile km percorsi
var km = parseInt( prompt('Indicare quanto è lunga la tratta digitando il numero di km') );
console.log('Km tratta inserita: ', km);

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
var prezzo =  km * 0.21;
    console.log('Prezzo base biglietto: ', + prezzo.toFixed(2) + ' $');

// Messaggio che compare su schermo nelle varie situazioni
var onScreenMessage;

// Sconto over 65
if (età > 65){
    prezzo = prezzo * 0.60
    onScreenMessage = 'Hai diritto al 40% di sconto, il prezzo per la tratta selezionata è di: ' + prezzo.toFixed(2) + ' $';
    console.log('Il prezzo scontato per la tratta selezionata è di: ' + prezzo.toFixed(2) + ' $')
}

// Sconto under 18
else if ( età < 18 ){
    prezzo = prezzo * 0.80
    onScreenMessage = 'Hai diritto al 20% di sconto, il prezzo per la tratta selezionata è di: ' + prezzo.toFixed(2) + ' $';
    console.log('Il prezzo scontato è di: ' + prezzo.toFixed(2) + ' $')
}

// Prezzo intero
else{
    onScreenMessage = 'Il prezzo intero per la tratta selezionata è di: ' + prezzo.toFixed(2) + ' $';
}

// Collegamento HTML per comparsa messaggio su schermo
document.getElementById('ticketprice').innerHTML = onScreenMessage;








