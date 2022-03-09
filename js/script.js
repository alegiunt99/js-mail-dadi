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











// GIOCO DEI DADI

const diceButton = document.querySelector("#tira-dado");

diceButton.addEventListener("click",
    function () {

        const randomNumbersUser = Math.floor((Math.random() * 6) + 1);

        const randomUser = [randomNumbersUser];

        document.querySelector('#user-number').innerText = `YOU: ${randomNumbersUser}`;

        console.log(randomUser);

        const randomNumbersCPU = Math.floor((Math.random() * 6) + 1);

        const randomCPU = [randomNumbersCPU];

        document.querySelector('#pc-number').innerText =`CPU: ${randomNumbersCPU}`;

        console.log(randomCPU);

        for (i = 0; i < randomNumbersUser; i++) {

            if (randomUser > randomCPU) {

                console.log("Ha vinto l'user");

                document.querySelector('#you-win').style.display = 'block';

                document.querySelector('#pc-win').style.display = 'none';

                document.querySelector('#null').style.display = 'none';

            } else if (randomCPU > randomUser) {
                console.log("Ha vinto il computer");
                document.querySelector('#pc-win').style.display = 'block';
                
                document.querySelector('#you-win').style.display = 'none';

                document.querySelector('#null').style.display = 'none';

            } else {
                console.log("pareggio!");
                document.querySelector('#null').style.display = 'block';
                document.querySelector('#pc-win').style.display = 'none';
                document.querySelector('#you-win').style.display = 'none';
            }
    
        }

    })