//globale var
var minNbr;
var maxNbr;
var maxTry;
var userTry = 0;
var mystereNbr;

//Options: valeurs par defaut
document.getElementById('min').value = 0;
document.getElementById('max').value = 10;
document.getElementById('trymax').value = 3;

//Bouton START
document.getElementById("start_game").onclick = function () {
    start();
};

function start() {
//verifie les options
        minNbr = document.getElementById("min");
        minNbr = parseInt(minNbr.value);
        maxNbr = document.getElementById("max");
        maxNbr = parseInt(maxNbr.value);
        maxTry = document.getElementById("trymax");
        maxTry = parseInt(maxTry.value);
    
//genere le nombre mystere, remet usertry a 0, remet msg par defaut
    var mystereNbr = getRandomInt(minNbr, maxNbr);
    var msg = "devine le nombre";
    userTry = 0;
    
//Game Loop
    while (userTry < maxTry) {

        var inputuser = prompt(msg);
        
        if (inputuser < mystereNbr) {
            console.log("Trop petit");
            msg = "Trop petit";
            userTry++;
        }
        if (inputuser > mystereNbr) {
            console.log("Trop grand");
            msg = "Trop grand";
            userTry++;
        }

        if (inputuser == mystereNbr) {
            console.log("Bingo!!");
            alert("Bingo!!");

            break;
        }
    }
//GAME OVER
    if (userTry == maxTry) {
        var retry = confirm("Perdu, GAME OVER!! nouvel essai ??");
        console.log(retry)
        if (retry == true) {
            document.mystereNbr = getRandomInt(minNbr, maxNbr);
            start();
        }
    }
}
//fonction qui genere les nombres aleatoires
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

