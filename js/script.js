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