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

// -----------/FUNCTIONS------------

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
var timer = 2; 
var arrayNumeriUtente = [];

var punteggio = 0;  

var countDown = setInterval(function() {
    document.getElementById("timer").innerHTML = "<p>Mancano " + timer + " secondi</p>";

    if (timer == -1) {
        for ( i = 0; i < 5; i++) {
            // Quando il timer arriva a 0 appare il prompt PER 5 VOLTE nel quale l'utente deve mettere il numero
            clearInterval(countDown); 
            var numeriUtente = parseInt(prompt("Inserisci un numero")); 

            // confronto numeri prompt e quelli casuali
            if (isInArray(numeriUtente, numeriAlert)) {

                arrayNumeriUtente.push(numeriUtente); 

                punteggio ++; 
                
            }
        
        }
        // alert( "I numeri casuali erano: " + numeriAlert + "\nI numeri che hai inserito sono: " + arrayNumeriUtente + "\nIl tuo punteggio è di: " + punteggio + " punti"); 

        document.getElementById("numeri_alert").innerHTML = "I numeri da ricordare erano: " + numeriAlert; 
        document.getElementById("numeri_utente").innerHTML = "I numeri che hai inserito sono: " + arrayNumeriUtente;
        document.getElementById("punteggio").innerHTML = "Il tuo punteggio finale è: " + punteggio;

    } 
    
    
    timer--; 
    

}, 1000); 


