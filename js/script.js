/* Descrizione:
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

// -----------FUNCTIONS------------

// Funzione per generare numeri casuali
function randomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

// verifica numeri nell'array
function isInArray (element, array) {
    for (var i = 0; i < array.length; i++) {
        if (element == array[i]) {
            return true; 
        }
    }

    return false; 
}

// Generare numeri random 
var numeriAlert = []; 

var i = 0; 
while (numeriAlert.length < 5) {
    var numeri = randomNumbers(1, 100)

    if(!isInArray(numeri, numeriAlert)) {
        numeriAlert.push(numeri); 
    }
}
console.log(numeriAlert);
// alert che fa uscire 5 numeri casuali 
alert("Ecco i numeri da ricordare!\n" + numeriAlert + "\nATTENZIONE!\nHai solo 30 secondi per memorizzarli!"); 

// timer 30 secondi

// prompt nel quale l'utente iserisce i 5 numeri

// confronto numeri pronpt e quelli casuali