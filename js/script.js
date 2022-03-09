console.log("JS OK")

// EMAIL
// Devo richiedere un'email all'utente
// devo controllare che sia all'interno della lista che può accedere
// devo far spuntare un messaggio in base all'esito del controllo

const emailContainer = document.querySelector('.container');

const emailInput = document.querySelector('#email-input');

const emailButton = document.querySelector('#email-button');

let emailListAccepted = ["Giorgio25@gmail.com", "luca28@gmail.com", "giovanni47@gmail.com", "luigi94@gmail.com"];

console.log(emailListAccepted);




emailButton.addEventListener("click",
    function () {

        console.log('emailButton cliccato');


        const emailUser = emailInput.value;

        console.log('La mail dell utente è:' + emailUser);
    })