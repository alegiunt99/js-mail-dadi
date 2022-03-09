console.log("JS OK")

// EMAIL
// Devo richiedere un'email all'utente
// devo controllare che sia all'interno della lista che può accedere
// devo far spuntare un messaggio in base all'esito del controllo

const emailContainer = document.querySelector('.container');

const emailInput = document.querySelector('#email-input');

const emailButton = document.querySelector('#email-button');








emailButton.addEventListener("click",
    function () {

        console.log('emailButton cliccato');

        const emailUser = emailInput.value;

        console.log('La mail dell utente è:' + emailUser);

        let emailListAccepted = ["Giorgio25@gmail.com", "luca28@gmail.com", "giovanni47@gmail.com", "luigi94@gmail.com"];

        console.log(emailListAccepted);

        for (let i = 0; i < 4; i++){
            if (emailUser === emailListAccepted[i]) {
                document.querySelector('#accepted').style.display = 'block';
                document.querySelector('#not-accepted').style.display = 'none';
            } else {
                document.querySelector('#not-accepted').style.display = 'block';
            }
        }
    })