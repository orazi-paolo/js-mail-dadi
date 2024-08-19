// Esercizio 1
/*
1. genera un numero random da 1 a 6 sia per il giocatore sia per il computer
2. stabilisci il vincitore in base al punteggio piu alto
3. stampa in pagina i due tiri e il risultato
*/


// creo il primo numero causale (giocatore)
const casualNumberOne = Math.floor(Math.random() * 6) + 1;
console.log('Al giocatore è uscito ', casualNumberOne);

// creo il secondo numero casuale (computer)
const casualNumberTwo = Math.floor(Math.random() * 6) +1;
console.log('Al computer è uscito ', casualNumberTwo);

// stabilisco il vincitore
let win;
if(casualNumberOne > casualNumberTwo){
    win = 'Il giocatore ha vinto';
} else if (casualNumberOne < casualNumberTwo){
    win = 'Il computer ha vinto';
}else{
    win = 'Pareggio';
}
console.log(win);

// stampo in pagina
const player = document.getElementById('player');
const computer = document.getElementById('computer');
const result = document.getElementById('result');
player.innerText = `Al giocatore è uscito ${casualNumberOne}`;
computer.innerText = `Al computer è uscito ${casualNumberTwo}`;
result.innerText = win;



// ESERCIZIO 2
/* 
1. inventa una lista di email autorizzate
2. chiedi all'utente la sua email tramite form
3. controlla che sia nella lista
4. stampa un messaggio sull'esito del controllo
*/

// creo una lista di email autorizzate 
const okEmail = ['paolo.orazi@boolean.com', 'pincopallino@boolean.com', 'pippopaperino@boolean.com'];

// prendo dal dom il bottone
const button = document.getElementById('button');

// quando clicco sul bottone prendo il valore inserito dal cliente (email), controllo se è presente nella lista
button.addEventListener('click', function() {
    const emailUser = document.getElementById('email').value;
    const checkResult = document.getElementById('checkResult');



    // se l'email corrisponde ad almeno una autorizzata stampa approved altrimenti non valida
    // if(emailUser === okEmail[0] || emailUser === okEmail[1] || emailUser === okEmail[2]){
    //     console.log(emailUser);
    //     checkResult.innerText = 'email approvata';

    // } else {
    //     checkResult.innerText = 'email non valida';
    // }



    
    // svolgo con il ciclo for
    // creo una variabile qual ora trovassi o meno l'email e gli do preimpostato un valore falso
    emailFound = false;

    // creo un ciclo che mi controlli in automatico le email
    for (let i = 0; i < okEmail.length; i++){
        if(okEmail[i] === emailUser){
            emailFound = true;
            break;
        }
    }

    // se è presente nell array stampo che è stata approvata altrimenti...
    if (emailFound){
        checkResult.innerText = 'email approvata';   
    } else{
        checkResult.innerText = 'email non valida';
    }

    // svuoto il valore di email
    document.getElementById('email').value = '';
})


