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
var numPerUtente = alert('Prova ricordare questi numeri:' + ' ' + numbers); 


// Da li parte un timer di 30 secondi.
// test con 5 secondi per velocizzare i tempi !!!!!!!!!DA MODIFICARE!!!!!!!!!!!!

var numUtente;
var arrayUtente; 

setTimeout(functionTimer, 5000);
function functionTimer (){

    alert('Sei pronto a giocare?');

    for (var i = 0; i < 5; i++){

        numUtente = parseInt(prompt('inserisci i numeri'));
        arrayUtente = [];
        
        
        
    }
    
}


// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati





// ----------------------------------- funzioni --------------------------------------

// funzione random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


