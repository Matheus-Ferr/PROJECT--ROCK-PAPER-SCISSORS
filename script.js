let possibles = ["Rock", "Paper", "Scissors"]

function computerPlay(){
    let i = Math.floor(Math.random() * (2 - 0 + 1) ) + 0;
    return possibles[i]
}

function playRound(playerSelection, computerSelection) {

    let result

    

    if(playerSelection === "Rock" && computerSelection === "Rock"){
        result = "Draw"
    }

    if(playerSelection === "Rock" && computerSelection === "Paper"){
        result = "Computer Wins!"
    }

    if(playerSelection === "Rock" && computerSelection === "Scissors"){
        result = "Player Wins!"
    }

    if(playerSelection === "Paper" && computerSelection === "Paper"){
        result = "Draw"
    }

    if(playerSelection === "Paper" && computerSelection === "Rock"){
        result = "Player Wins!"
    }

    if(playerSelection === "Paper" && computerSelection === "Scissors"){
        result = "Computer Wins!"
    }

    if(playerSelection === "Scissors" && computerSelection === "Scissors"){
        result = "Draw"
    }

    if(playerSelection === "Scissors" && computerSelection === "Rock"){
        result = "Computer Wins!"
    }

    if(playerSelection === "Scissors" && computerSelection === "Paper"){
        result = "Player Wins!"
    }
    
    document.getElementById("player").innerHTML  = `<img src="./images/${playerSelection}.png">`
    document.getElementById("computer").innerHTML  = `<img src="./images/${computerSelection}.png">`



    document.getElementById("result").innerHTML = result;
}   

let playerSelection = "Rock";








/* 

let scorePlayer = 0;
let scoreComputer = 0;

function game(rounds) {
    for(let i = 1; i <= rounds;i++) {
        playerSelection = prompt();
        computerSelection = computerPlay();
        let tempResult = playRound(playerSelection, computerSelection);
        if (tempResult === "Player Wins!") {
            scorePlayer++
        } else if (tempResult === "Computer Wins!") {
            scoreComputer++
        }

        //console.log(`Player: ${playerSelection}`)
        //console.log(`Computer: ${computerSelection}`)
    }

    return console.log(`Player score: ${scorePlayer}`, `Computer score: ${scoreComputer}`)
    
}



game(5);

*/