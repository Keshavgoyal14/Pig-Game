'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0')
const current1El = document.querySelector('#current--1')
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');

// let scores = [0,0];
// let currentscore =0;
// let activeplayer= 0;
// let playing = true;
let scores , currentscore ,activeplayer , playing;

const init = function() {
    scores = [0,0];
    currentscore =0;
    activeplayer= 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    diceEl.classList.add('hidden');
}
init();

const switchplayer = function(){
    //Switching to next player
    document.getElementById(`current--${activeplayer}`).textContent=0;
    activeplayer = activeplayer ===0 ? 1 : 0;
    currentscore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

}

btnRoll.addEventListener('click',function() {
    if(playing){
    const dice = Math.trunc(Math.random()*6+1);
    console.log(dice);

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if(dice!==1){
       currentscore+= dice;
       document.getElementById(`current--${activeplayer}`).textContent=currentscore;
       
     }
    else{
        switchplayer();
    }
}});


btnHold.addEventListener('click',function(){
    if(playing){
    scores[activeplayer]+= currentscore

    document.getElementById(`score--${activeplayer}`).textContent =scores[activeplayer];
    
    //Finishing the Game
    if(scores[activeplayer]>=20){
        playing = false;
        document.querySelector(`.player--${activeplayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activeplayer}`).classList.remove('player--active')
        diceEl.classList.add('hidden');
    }else{
    switchplayer();
}
}})


btnNew.addEventListener('click',init);