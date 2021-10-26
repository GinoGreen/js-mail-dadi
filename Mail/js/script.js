const listaMail = ['Anthony',
'AndreaB@gmail.com',
'Federico@gmail.com',
'Cristia@gmail.com',
'Davide@gmail.com',
'Alberto@gmail.com',
'Mauro@gmail.com',
'MatteoD@gmail.com',
'Michele@gmail.com',
'MatteoF@gmail.com',
'AndreaF@gmail.com',
'Simone@gmail.com',
'MattiaG@gmail.com',
'Larisa@gmail.com',
'Manuel@gmail.com',
'MatteoL@gmail.com',
'Francesco@gmail.com',
'Morena@gmail.com',
'MattiaM@gmail.com',
'Simone@gmail.com',
'Mariano@gmail.com',
'Vitali@gmail.com',
'Gianluca@gmail.com',
'Giuseppe@gmail.com',
'Salvatore@gmail.com',
'Giada@gmail.com',
'GiuliaSa@gmail.com',
'BenjaminS@gmail.com',
'GiuliaSo@gmail.com',
'LucaS@gmail.com',
'Davide@gmail.com',
'Luigi@gmail.com',
'LucaV@gmail.com'];

//input email
const richiedente = prompt('Inserisci la tua mail');
let risposta = false

//ciclo controllo mail esistente
for (let i = 0; i < listaMail.length; i++) {
   if (richiedente === listaMail[i]) {
      risposta = true;
   } 
}

//controllo risposta ammissione
if (risposta) {
   document.querySelector('h1').innerHTML = 
      `
         Sei nella lista, puoi entrare
      `;
} else {
   document.querySelector('h1').innerHTML = 
      `
         Non puoi entrare
      `;
}

console.log(richiedente);
console.log('risposta ammissione',risposta);