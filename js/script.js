//inserisceo 5 numeri random non ripetuti in un array 

var numRandom;
var numbers = [];

for (var i = 0; i < 5 ; i++){

    numRandom = getRndInteger(1, 100);

    if(!numbers.includes(numRandom)){
        numbers.push(numRandom); 
    } else {
        i--;
    }
}

console.log(numbers);
// Un alert() espone 5 numeri generati casualmente.
var numPerUtente = alert('Prova ricordare questi numeri in ordine:' + ' ' + numbers); 


// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().


var numUtente;
var arrayUtente = []; 
i = 0;



setTimeout(functionTimer, 30000);
function functionTimer (){

    alert('Sei pronto a giocare?');

    while (i < 5){

        numUtente = parseInt(prompt('inserisci i numeri'));

        if (numUtente == 0 || numUtente > 100 || numUtente == isNaN){
            alert('Puoi inserire solo numeri da 1 a 100');
        }
        if (numbers.includes(numUtente) && !arrayUtente.includes(numUtente)){
            arrayUtente.push(numUtente); 
            // console.log(numUtente);
            // console.log(arrayUtente);
        }
        i++;
    }
    // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
    alert('Hai indovinato' + ' ' + arrayUtente.length + ' ' + 'numeri!' + ' ' + 'Sono:' + ' ' + arrayUtente);
    
}













// ----------------------------------- funzioni --------------------------------------

// funzione random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


