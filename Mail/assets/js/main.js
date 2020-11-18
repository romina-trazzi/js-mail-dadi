/*=============================================
=           CODICE JAVASCRIPT EMAIL         =
===============================================*/

/*Mail

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */


// Acquisiamo la mail dell'utente
var userMail = prompt("Inserisci la tua email");


// Creiamo l'array che contiene la lista HTML
var lista_email = ["alfa@gmail.com", "beta@gmail.com", "gamma@gmail.com", "delta@gmail.com", "eta@gmail.com"];

//console.log(lista_email);

// Creiamo i messaggi per l'utente
if (lista_email.includes("userMail")) {
    alert("Il controllo è andato a buon fine, sei nella lista!");
} else {
    alert("Il controllo dice che non sei nella lista!");
} 