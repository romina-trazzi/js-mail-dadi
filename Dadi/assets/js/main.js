/*=============================================
=           CODICE JAVASCRIPT DADI           =
===============================================*/

// Raccogliamo in una variabile JS gli id del button
var btnGenera = document.getElementById("btn_genera");
var btnReset = document.getElementById("btn_reset");

// Creiamo variabili JS per collegarle agli input HTML
var num1 = document.getElementById("numero_utente");
var num2 = document.getElementById("numero_computer");

//console.log(num1, num2);

/* Creiamo una funzione di ascolto per l'evento click su btnGenera
che ora è anche una variabile JS */
btnGenera.addEventListener("click", function () {

   /* Assegniamo a delle variabili JS una formula per calcolare 
   due numeri random compresi tra 1 e 6 */
   var numberUser = Number(Math.floor(Math.random() * 6) + 1);
   var numberPc = Number(Math.floor(Math.random() * 6) + 1);

   //console.log(numberUser, numberPc);
      
   // Inseriamo i risultati delle variabili JS di calcolo al posto dei valori degli input HTML
   num1.value = numberUser;
   num2.value = numberPc;
   
   // Creiamo messaggi di alert per mostrare i risultati all'utente
   if (numberUser > numberPc) {
       alert("Congratulazioni! Hai vinto!");
    } else if (numberUser < numberPc) {
        alert("Purtroppo hai perso. Ritenta ancora!");
    } else {
        alert("Pareggio!");
    } 

});

/* Creiamo una funzione di ascolto per l'evento click su btnAnnulla
che ora è anche una variabile JS per svuotare le variabili */
    btnReset.addEventListener("click", function () {
        num1.value = "";  // alias: document.getElementById("numero_utente").value = "";
        num2.value = "";  // alias: document.getElementById("numero_computer").value = "";
    });