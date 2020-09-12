function computerPlay(){
    const rps = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * rps.length);

    return rps[random];
}
function playRound(playerSelect){
    computerSelection = computerPlay();
    playerSelection = playerSelect.toLowerCase();

    if(playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            results.textContent = 'You lose! Paper beats Rock.';
            c++;
        }
        if(computerSelection === 'rock'){
            results.textContent = 'Tie! Both picked Rock.';
            t++;
        }
        if(computerSelection === 'scissors'){
            results.textContent = 'You win! Rock beats Scissors.';
            p++;
        }
    }
    else if(playerSelection === 'paper'){
        if(computerSelection === 'scissors'){
            results.textContent = 'You lose! Scissors beats Paper.';
            c++;
        }
        if(computerSelection === 'paper'){
            results.textContent = 'Tie! Both picked Paper.';
            t++;
        }
        if(computerSelection === 'rock'){
            results.textContent = 'You win! Paper beats Rock.';
            p++;
        }
    }
    else if(playerSelection === 'scissors'){
        if(computerSelection === 'rock'){
            results.textContent = 'You lose! Rock beats Paper.';
            c++;
        }
        if(computerSelection === 'scissors'){
            results.textContent = 'Tie! Both picked Scissors.';
            t++;
        }
        if(computerSelection === 'paper'){
            results.textContent = 'You win! Scissors beats Paper.';
            p++;
        }
    }

    score.textContent = 'Your score is: ' + p + '. The computer\'s score is: ' + c + '. You tied ' + t + ' times so far.';

    if(p === 5){
        alert('You Win!');
        p = 0;
        c = 0;
        t = 0;
    }
    else if(c === 5){
        alert('You Lose!');
        p = 0;
        c = 0;
        t = 0;
    }


}

let p = 0;
let c = 0;
let t = 0;
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const results = document.getElementById('results');
const score = document.getElementById('score');

rock.addEventListener('click', function(e) {
    playRound(e.target.textContent);
});

paper.addEventListener('click', function(e) {
    playRound(e.target.textContent);
});

scissors.addEventListener('click', function(e) {
    playRound(e.target.textContent);
});

