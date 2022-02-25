import{startButton, topLeft, topMid, topRight, midLeft, midMid, midRight,
  botLeft, botMid, botRight} from './table-data.js';

import {setNext, checkWinner, checkDraw, startGame, clear} from './engine.js';


//Listen for input to start game 
startButton.addEventListener('click', () => {
  startGame(); 
})

// Listen for input to clear score

clearScore.addEventListener('click', () => {
  clear();
})
// Listen to input, set the value in the grid and check for win.
// Top Row

topLeft.addEventListener('click', () => {
  setNext(topLeft);
  checkWinner('top', 'left')
  checkDraw();
});

topMid.addEventListener('click', () => {
  setNext(topMid);
  checkWinner('top', 'mid')
  checkDraw();
});

topRight.addEventListener('click', () => {
  setNext(topRight);
  checkWinner('top', 'right')
  checkDraw();
});

// Middle Row

midLeft.addEventListener('click', () => {
  setNext(midLeft);
  checkWinner('mid', 'left')
  checkDraw();
});

midMid.addEventListener('click', () => {
  setNext(midMid);
  checkWinner('mid', 'mid')
  checkDraw();
});

midRight.addEventListener('click', () => {
  setNext(midRight);
  checkWinner('mid', 'right')
  checkDraw();
});

// Bottom Row

botLeft.addEventListener('click', () => {
  setNext(botLeft);
  checkWinner('bot', 'left')
  checkDraw();

});

botMid.addEventListener('click', () => {
  setNext(botMid);
  checkWinner('bot', 'mid')
  checkDraw();
});

botRight.addEventListener('click', () => {
  setNext(botRight);
  checkWinner('bot', 'right')
  checkDraw();
})
