/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.*/



// scelgo pari o dispari
const sceltaUtente = prompt("Pari o Dispari?");
console.log(`La tua scelta è: ${sceltaUtente}`);

// scelgo un numero tra 1 e 5
const numeroUtente = parseInt(prompt("Scegli un numero tra 1 e 5"));
console.log(`Il numero che hai scelto è: ${numeroUtente}`);



// genero un numero random per il computer tra 1 e 5
function generaNumeroRandom(){
    const numeroComputer = Math.floor(Math.random() * 5) + 1;
    return numeroComputer;
}
const numeroComputer = generaNumeroRandom();
console.log(`Il numero generato dal computer è: ${numeroComputer}`);

// sommo i due numeri
const sommaNumeri = numeroUtente + numeroComputer;
console.log(`La somma dei due numeri è ${sommaNumeri}`);


// se somma numeri è uguale a scelta utente ho vinto
function sommaNumeriPariDispari(){
    // Stabilisco se la somma dei numeri è pari o dispari
    if(sommaNumeri % 2 === 0 ){
        let numeroPari = sommaNumeri;
    }
    else{
        let numeroDispari = sommaNumeri;
    }

    if(numeroPari && sceltaUtente === 'pari'){
        return vittoriaPartita;
    }
    // else if(numeroPari && sceltaUtente === 'dispari'){
    //     return sconfittaPartita;
    // }
    // else if(numeroDispari && sceltaUtente === 'pari'){
    //     return sconfittaPartita;
    // }
    else if(numeroDispari && sceltaUtente === 'dispari'){
        return vittoriaPartita;
    }
}

if(vittoriaPartita){
    console.log('Complimenti hai vinto!');
}
else{
    console.log('Peccato, hai perso!');
}
