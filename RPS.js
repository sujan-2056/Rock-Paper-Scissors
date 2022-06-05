'use strict';

const resultPara = document.querySelector('.resultPara');
const player1Img = document.querySelector('.imgPlayer1')
const player2Img = document.querySelector('.imgPlayer2')
const btn = document.getElementById('button');

let randomNum1, randomNum2; 

// Defining WinPlayer1
const winPlayer1 = function() {
    if(randomNum1 == 1 && randomNum2 == 2 || randomNum1 == 1 && randomNum2 == 3 || randomNum1 == 3 && randomNum2 == 2) 
        resultPara.innerHTML = `The Winner is Player 1🎆🎉`;
    
    
}

// Defining WinPlayer2
const winPlayer2 = function() {
     if(randomNum1 == 2 && randomNum2 == 1 || randomNum1 == 2 && randomNum2 == 3 || randomNum1 == 3 && randomNum2 == 1)

        resultPara.innerHTML = `The Winner is Player 2🎆🎉`;
    
}

// Defining PlayerEqual
const playerEqual = function() {
    if(randomNum1 == 1 && randomNum2 == 1 || randomNum1 == 2 && randomNum2 == 2 || randomNum1 == 3 && randomNum2 == 3)
        resultPara.innerHTML = `DRAW🙄`;

}

// Adding event listiner in button
btn.addEventListener('click', function() {
    randomNum1 = Math.trunc(Math.random() * 3) + 1;
    randomNum2 = Math.trunc(Math.random() * 3) + 1;
    // console.log(randomNum1, randomNum2);
    player1Img.src = `dice-${randomNum1}.png`;
    player2Img.src = `dice-${randomNum2}.png`;

    winPlayer1();
    winPlayer2();
    playerEqual();
});









