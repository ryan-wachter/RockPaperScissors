let p = 0;
let c = 0;

function computerPlay(){
    const rps = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * rps.length);

    return rps[random];
}

function playerPlay(){
    let user = prompt("Rock, paper, or scissors?")

    return user.toLowerCase();
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            console.log('You lose! Paper beats Rock.');
            c++;
            return 'You lose! Paper beats Rock.';
        }
        if(computerSelection === 'rock'){
            console.log('Tie!');
            return 'Tie! Try again.';
        }
        if(computerSelection === 'scissors'){
            p++;
            return 'You win! Rock beats Scissors.';
        }
    }
    else if(playerSelection === 'paper'){
        if(computerSelection === 'scissors'){
            console.log('You lose! Scissors beats Paper.');
            c++;
            return 'You lose! Scissors beats Paper.';
        }
        if(computerSelection === 'paper'){
            console.log('Tie!');
            return 'Tie! Try again.';
        }
        if(computerSelection === 'rock'){
            console.log('You win! Paper beats Rock.');
            p++;
            return 'You win! Paper beats Rock.';
        }
    }
    else if(playerSelection === 'scissors'){
        if(computerSelection === 'rock'){
            console.log('You lose! Rock beats Paper.');
            c++;
            return 'You lose! Rock beats Paper.';
        }
        if(computerSelection === 'scissors'){
            console.log('Tie!');
            return 'Tie! Try again.';
        }
        if(computerSelection === 'paper'){
            console.log('You win! Scissors beats paper');
            p++;
            return 'You win! Scissors beats paper';
        }
    }
    else{
        console.log('Invalid move selected');
        return 'Invalid move selected';
    }
}

function game(){
    for(let i = 0; i <= 4; i++){
        playRound(playerPlay(), computerPlay());
    }
    if(p > c){
        console.log('You won ' + p + ' rounds and the computer won ' + c + ' rounds. You win!');
    }
    if(c > p){
        console.log('You won ' + p + ' rounds and the computer won ' + c + ' rounds. You lose!');
    }
    if(p === c){
        console.log('You won ' + p + ' rounds and the computer won ' + c + ' rounds. You tied!');
    }
}

game();



