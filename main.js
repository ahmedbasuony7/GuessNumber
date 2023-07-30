'use strict';


const  secretnum = Math.trunc(Math.random() * 20) + 1;
console.log(secretnum);
document.querySelector('.number').textContent;

let score = 20;


document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof  guess);

    if(!guess){
        console.log(document.querySelector('.message').textContent = 'No Noumber');
    }else if(guess === secretnum){    
    document.querySelector('.message').textContent='correct Number';
    document.querySelector('.highscore').textContent = score;
    document.body.style.backgroundColor='green';
    document.querySelector('.number').textContent= secretnum;

    }
    else if(guess > secretnum){
        if(score > 0){
        document.querySelector('.message').textContent = 'Too high ';
        score = score- 1;
        document.querySelector('.score').textContent = score;
        
    } else{
        document.querySelector('.message').textContent = 'You Lost the Game';
    }

    }
    else if(guess < secretnum){
        if(score > 1){
            document.querySelector('.message').textContent = 'Too low ';
            score = score- 1;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You Lost the Game';
        }
    }
});

document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.score').textContent = 20;
    document.querySelector('.message').textContent='  Start guessing... ';
    document.querySelector('.highscore').textContent = 0;
    document.body.style.backgroundColor='black';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

});
