// 'use strict';
 
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'correct number!' //manipulate
 
console.log(document.querySelector('.message').textContent); //after change


console.log(document.querySelector('.number').textContent);

document.querySelector('.number').textContent = 20;

console.log(document.querySelector('.guess').value); //to see

document.querySelector('.guess').value = 5;
  
console.log(document.querySelector('.guess').value);
*/

// document.querySelector('.score').textContent = 14;

let secretNumber = Math.round(Math.random()*20) + 1;

console.log(secretNumber);


let score = 20;

 
console.log(secretNumber); //show real

document.querySelector('.number').textContent = '?';


//inside the function, each event is new secret number
document.querySelector('.check').addEventListener('click',function () {
    const guess = (document.querySelector('.guess').value)

    console.log(guess, typeof guess);



   
    //error
    if(guess <= 0 || guess>=21) {document.querySelector('.message').textContent = '1 to 20';}

    //player wins
    else if (guess == secretNumber) {
        document.querySelector('.message').textContent = 'Spot on!';

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        document.querySelector('.number').textContent = secretNumber;

        if (score > highscore){
            document.querySelector('.highscore').textContent = score;
        }
    }

    //guess is wrong
    else if (guess > secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = 'lower';
            score-=1;}
    
            else {
            document.querySelector('.message').textContent ="you lose"
            }

    }
    //guess too low
    else if (guess < secretNumber){
        if (score > 1){
        document.querySelector('.message').textContent = 'higher';
        score -= 1;}
        else {
            document.querySelector('.message').textContent = 'you lose'
        }
    }

    document.querySelector('.score').textContent = score;
});










//Implement functionality reset

document.querySelector('.again').addEventListener('click', function () {
    let score = 20;

    secretNumber = Math.round(Math.random()*20) + 1;

    document.querySelector('.score').textContent = '20'


    document.querySelector('.guess').value = '';

    document.querySelector('.message').textContent = 'Start guessing..'

    document.querySelector('.number').textContent = '?';

    document.querySelector('body').style.backgroundColor ='#222'

    document.querySelector('.number').style.width = '15rem';

    console.log(secretNumber); 
    
})

//Implementing highscore

let highscore = 0;

