// dichiaro constanti numeri estratto random
const numeroPlayer = Math.floor(Math.random() * 6 + 1);
const numeroCPU = Math.floor(Math.random() * 6 + 1);

console.log('numbero giocatore',numeroPlayer);
console.log('numbero CPU', numeroCPU);

// variabili per stampare
const printNumCPU = document.getElementById('CPU');
const printNumPlayer = document.getElementById('player');
const printEsito = document.getElementById('printEsito');
let esito = 'CPU Vincitore, Giocatore Perde';

//stampo numberi in html
printNumCPU.append(numeroCPU);
printNumPlayer.append(numeroPlayer);

//verficia vincitore
if (numeroPlayer === numeroCPU) {
   esito = 'Preggio';
}else if (numeroPlayer > numeroCPU) {
   esito = 'Giocatore Vince, CPU Perde'
}

//stampo l'esito
printEsito.append(esito);
