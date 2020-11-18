/*=============================================
=           CODICE JAVASCRIPT DADI           =
===============================================*/

// Raccogliamo in una variabile JS gli id del button
var btnGenera = document.getElementById("btn_genera");
var btnReset = document.getElementById("btn_reset");

// Creiamo variabili JS per collegarle agli input HTML 
var num1 = document.getElementById("numero_utente");
var num2 = document.getElementById("numero_computer");

//Creiamo altre due variabili per selezionare i value degli input
var numberUser = num1.value;
var numberPc = num2.value;

// console.log(numberUser, numberPc);

/* Creiamo una funzione di ascolto per l'evento click su btnGenera
che ora è anche una variabile JS */
btnGenera.addEventListener("click", function () {

   /* Assegniamo alle variabili dei numeri una formula per calcolare 
   due numeri random compresi tra 1 e 6 */
   numberUser = Number(Math.floor(Math.random() * 6) + 1);
   numberPc = Number(Math.floor(Math.random() * 6) + 1);


    // Inseriamo i valori delle variabili JS nell'HTML
    document.getElementById("numero_utente").innerHTML = numberUser;
    document.getElementById("numero_computer").innerHTML = numberPc;

});

// Creiamo messaggi di alert per mostrare i risultati all'utente
if (numberUser > numberPc) {
    alert("Congratulazioni! Hai vinto!");
} else if (numberUser == numberPc) {
    alert("Pareggio!");
} else {
    alert("Purtroppo hai perso. Ritenta ancora!");
}


/* Creiamo una funzione di ascolto per l'evento click su btnAnnulla
che ora è anche una variabile JS per svuotare le variabili */
    btnReset.addEventListener("click", function () {
        document.getElementById("numero_utente").value = "";
        document.getElementById("numero_computer").value = "";
    });