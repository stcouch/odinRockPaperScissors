let playerScore = cmpScore = 0;
let trueAns;

function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    if(num == 0) 
        value = "rock";
    else if(num == 1)
        value = "paper";
    else if(num == 2)
        value = "scissors";
    return value
}

//-1 = tie; 0 = lose; 1 = win
function playRound(playerSelection) {
    console.log("cmpScore: " + cmpScore + " | playerScore: " + playerScore);

    userSel = playerSelection.toLowerCase();
    comSel = computerPlay();
    if(userSel == "rock"){
        if(comSel == "paper"){
            returnVal = 0;
        } else if(comSel == "scissors") {
            returnVal = 1;
        } else
            returnVal = -1;
    } else if(userSel == "paper"){
        if(comSel == "scissors"){
            returnVal = 0;
        } else if(comSel == "rock") {
            returnVal = 1;
        } else
            returnVal = -1;
    } else if(userSel == "scissors"){
        if(comSel == "rock"){
            returnVal = 0;
        } else if(comSel == "paper") {
            returnVal = 1;
        } else
            returnVal = -1;
    }

    if(returnVal == -1){
        userStr = "You Tied";
    } else if(returnVal == 0){
        userStr = "You Lose";
        cmpScore = cmpScore + 1;
        document.getElementById("cscore").innerHTML = cmpScore;
    } else if(returnVal == 1){
        userStr = "You Win";
        playerScore = playerScore + 1;
        document.getElementById("uscore").innerHTML = playerScore;
    }

    if(cmpScore == 5) {
        document.getElementById("answer").innerHTML = "YOU LOSE - better luck next time..."; 
        document.getElementById("rockButton").disabled = true;
        document.getElementById("paperButton").disabled = true;
        document.getElementById("sciButton").disabled = true;
        document.getElementById("restartButton").hidden = false;
    } else if(playerScore == 5) {
        document.getElementById("answer").innerHTML = "YOU WIN - Awesome! You must have amazing RNG!";
        document.getElementById("rockButton").disabled = true;
        document.getElementById("paperButton").disabled = true;
        document.getElementById("sciButton").disabled = true;
        document.getElementById("restartButton").hidden = false;
    } else {
    
    let trueAns = "You chose " + playerSelection + " and the computer chose " + comSel + ". " + userStr + "!";
    document.getElementById("answer").innerHTML = trueAns;
    }
}
    

