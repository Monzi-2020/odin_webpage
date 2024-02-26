"use strict"

function getComputerChoice() {
    const arr = ["rock", "paper", "scissors"];
    const choice = arr[Math.floor(Math.random() * arr.length)];
    return choice;
}

let computerSelection = getComputerChoice();
let playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase();
let scoreCom;
let scorePlayer;

function playRound(computerSelection, playerSelection) {
    
    if (computerSelection === "rock" && playerSelection === "scissors") {
        console.log("You lose! Rock beats scissors");
        scoreCom = 1;
        scorePlayer = 0;
    }

    else if (computerSelection === "paper" && playerSelection === "rock") {
        console.log("You lose! Paper beats rock");   
        scoreCom = 1;
        scorePlayer = 0; 
        }
    
    else if (computerSelection === "scissors" && playerSelection=== "paper") {
        console.log("You lose! scissors beats papaer");
        scoreCom = 1;
        scorePlayer = 0;
    }    
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You win! Rock beats scissors");
        scoreCom = 0;
        scorePlayer = 1;
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win! Paper beats rock");  
        scoreCom = 0;
        scorePlayer = 1;
    }
    else if (playerSelection === "scissors" && computerSelection=== "paper") {
        console.log("You win! scissors beats paper");
        scoreCom = 0;
        scorePlayer = 1;
    }
    else {
        console.log("Tied. Try again!")
        scoreCom = 0;
        scorePlayer = 0;
    }
}


