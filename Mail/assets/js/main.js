/*=============================================
=           CODICE JAVASCRIPT EMAIL         =
===============================================*/

/*Mail

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */


// Acquisiamo la mail dell'utente
var userEmail = prompt("Inserisci la tua email");


// Creiamo l'array che contiene la lista HTML
var listaEmails = ["alfa@gmail.com", "beta@gmail.com", "gamma@gmail.com", "delta@gmail.com", "eta@gmail.com"];

// console.log(listaEmails);


/* Creiamo una variabile per verificare se la mail inserita fa parte di quelle dell'array.
La risposta può essere true o false */
var boolean = listaEmails.includes(userEmail);

// console.log(boolean);

// Creiamo i messaggi per l'utente
if (boolean == true) {
    alert("Il controllo è andato a buon fine, sei nella lista!");
} else {
    alert("Il controllo dice che non sei nella lista!");
}; 

/* Metodo con ciclo for e condizioni if per verificare se la mail inserita fa parte 
di quelle dell'array. */

/* mailPresente = false

for (var i = 0; i < listaEmails.length; i++) {
    var email = listaEmails[i]; // salva in una variabile l'elemento mail letto dal ciclo

    if (userEmail === email) {
        mailPresente = true;
    }
};


if (mailPresente) {  // è già = a true, quindi non si specifica il valore booleano
    alert("Il controllo è andato a buon fine, sei nella lista!");  
} else {
    alert("Il controllo dice che non sei nella lista!");
}; */


// Raccogliamo in una variabile JS l'id del button 
var btnAgain = document.getElementById("btn_again");

/*Creiamo una funzione di ascolto per l'evento click su btnAgain
che ora è anche una variabile JS per far riavviare il prompt */
btnAgain.addEventListener("click", function () {
    userEmail = prompt("Inserisci la tua email");
    listaEmails = ["alfa@gmail.com", "beta@gmail.com", "gamma@gmail.com", "delta@gmail.com", "eta@gmail.com"];
    boolean = listaEmails.includes(userEmail);
    
    // Creiamo i messaggi per l'utente
    if (boolean == true) {
        alert("Il controllo è andato a buon fine, sei nella lista!");
    } else {
        alert("Il controllo dice che non sei nella lista!");
    }; 
    
}); 
