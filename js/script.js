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

        console.log('La mail dell utente è:' + ' ' + emailUser);

        let emailListAccepted = ["giorgio25@gmail.com", "luca28@gmail.com", "giovanni47@gmail.com", "luigi94@gmail.com"];

        console.log(emailListAccepted);

        for (let i = 0; i < 4; i++) {
            if (emailUser === emailListAccepted[0]) {
                document.querySelector('#accepted').style.display = 'block';
                document.querySelector('#not-accepted').style.display = 'none';
            } else if (emailUser === emailListAccepted[1]) {
                document.querySelector('#accepted').style.display = 'block';
                document.querySelector('#not-accepted').style.display = 'none';
            } else if (emailUser === emailListAccepted[2]) {
                document.querySelector('#accepted').style.display = 'block';
                document.querySelector('#not-accepted').style.display = 'none';
            } else if (emailUser === emailListAccepted[3]){
                document.querySelector('#accepted').style.display = 'block';
                document.querySelector('#not-accepted').style.display = 'none';
            } else {
                document.querySelector('#accepted').style.display = 'none';
                document.querySelector('#not-accepted').style.display = 'block';
            }
        }
    })