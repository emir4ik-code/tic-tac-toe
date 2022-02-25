import {winner, startOver, topRight, topLeft} from './table-data.js';
import Player from './table-data.js';
import {plr1rname, plr1wins, plr1los, plr1draw, plr1rate} from './table-data.js';
import {plr2rname, plr2wins, plr2los, plr2draw, plr2rate, clearScore} from './table-data.js';


let isPlaying = false;
// Function to start a game 
const player1 = new Player('player1', 'X');
const player2 = new Player('player2','O')

plr1rname.innerText = player1.name;

plr2rname.innerText = player2.name;


const startGame = () => {
  let name1 = document.getElementById("plr1input").value;
  let name2 = document.getElementById("plr2input").value;
  if(name1 !== '') {
  player1.setName(name1);
  plr1rname.innerText = player1.name;
  }
  // debugger;

  if(name2  !== '') {
    player2.name = name2;
    plr2rname.innerText = player2.name;
    }

  const regex = /[XO]/
  
  for(let i = 0; i < document.getElementsByClassName('table-element').length; i++) {
    if(document.getElementsByClassName('table-element').length > 0) {
    if(regex.test(document.getElementsByClassName('table-element')[i].innerText)) document.getElementsByClassName('table-element')[i].innerText = '';
     document.getElementsByClassName('table-element')[i].style.cssText = 'color: #00FFFF';
    }
  }
  isPlaying = true;
  // player1.setName(document.getElementById("plr1input").value)
  // player2.setName(document.getElementById("plr2input").value)
  console.log(player1, player2);

  startOver.innerText = 'Game started!';
  winner.innerText = '';
}

// Setting variable to switch turns between X and O
let turn = true;

// Function that sets X or O aon the grid
 const setNext = (element) => {
   if(isPlaying) {
    if (element.innerText === '') {
      if (turn) {
        element.innerText = 'X';
        turn = false;
      } else {
        element.innerText = 'O';
        turn = true;
      }
    }
  }
  };

  const addStatWinLos = (slot) => {
    if(slot.innerText === 'X') {
      player1.setWin();
      player2.setLose();
    }
    if(slot.innerText === 'O') {
      player2.setWin();
      player1.setLose()
    }
     console.log(player1.getWin());
    console.log(player2.getWin());
  }
  const addStatDraw = (slot) => {
    player1.setDraw();
    player2.setDraw();
  }
  

// Function that checks if win has occured 
const checkWinner = (slot1, slot2) => {
  if(isPlaying) {
  //Horizontal checks
  if(slot1 === 'top') {
    if (topLeft.innerText === topMid.innerText && topLeft.innerText === topRight.innerText) {
        // startOver.innerText = 'Game Over!'
        if(player1.sign === topLeft.innerText) {
          startOver.innerText = `${player1.name} won!`
          }
        if(player2.sign === topLeft.innerText) {
          startOver.innerText = `${player2.name} won!`
        }
        addStatWinLos(topLeft);
        updateScore();
        isPlaying = false;
        topLeft.style.cssText = 'color: #FF0000';
        topMid.style.cssText = 'color: #FF0000';
        topRight.style.cssText = 'color:#FF0000';
    }
  }
  if(slot1 === 'mid') {
    if (midMid.innerText === midLeft.innerText && midMid.innerText === midRight.innerText) {
      // startOver.innerText = 'Game Over!'
      if(player1.sign === midMid.innerText) {
        startOver.innerText = `${player1.name} won!`
          }
        if(player2.sign === midMid.innerText) {
          startOver.innerText = `${player2.name} won!`
        }
      addStatWinLos(midMid);
      updateScore();
      isPlaying = false;
      midMid.style.cssText = 'color:#FF0000';
      midLeft.style.cssText = 'color:#FF0000';
      midRight.style.cssText = 'color:#FF0000';
    }
  }
  if(slot1 === 'bot') {
    if (botMid.innerText === botLeft.innerText && botMid.innerText === botRight.innerText) {
      // startOver.innerText = 'Game Over!'
      if(player1.sign === botMid.innerText) {
        startOver.innerText = `${player1.name} won!`
          }
        if(player2.sign === botMid.innerText) {
          startOver.innerText = `${player2.name} won!`
        }
      addStatWinLos(botMid);
      updateScore();
      isPlaying = false;
      botMid.style.cssText = 'color:#FF0000';
      botLeft.style.cssText = 'color:#FF0000';
      botRight.style.cssText = 'color:#FF0000';
  }
  }
  //Vertical checks
  if(slot2 ==='left') {
    if (topLeft.innerText === midLeft.innerText && topLeft.innerText === botLeft.innerText) {
      // startOver.innerText = 'Game Over!'
      if(player1.sign === topLeft.innerText) {
        startOver.innerText = `${player1.name} won!`
          }
        if(player2.sign === topLeft.innerText) {
          startOver.innerText = `${player2.name} won!`
        }
      addStatWinLos(midLeft);
      updateScore();
      isPlaying = false;
      topLeft.style.cssText = 'color:#FF0000';
      midLeft.style.cssText = 'color:#FF0000';
      botLeft.style.cssText = 'color:#FF0000';
    }
  }
  if(slot2 ==='mid') {
    if (botMid.innerText === midMid.innerText && botMid.innerText === topMid.innerText) {
      // startOver.innerText = 'Game Over!'
      if(player1.sign === botMid.innerText) {
        startOver.innerText = `${player1.name} won!`
          }
        if(player2.sign === botMid.innerText) {
          startOver.innerText = `${player2.name} won!`
        }
      addStatWinLos(botMid);
      updateScore();
      isPlaying = false;
      botMid.style.cssText = 'color:#FF0000';
      midMid.style.cssText = 'color:#FF0000';
      topMid.style.cssText = 'color:#FF0000';
    }
  }
  if(slot2 === 'right') {
    if(botRight.innerText === midRight.innerText && botRight.innerText === topRight.innerText) {
      // startOver.innerText = 'Game Over!'
      if(player1.sign === botRight.innerText) {
        startOver.innerText = `${player1.name} won!`
          }
        if(player2.sign === botRight.innerText) {
          startOver.innerText = `${player2.name} won!`
        }
      addStatWinLos(botRight);
      updateScore();
      isPlaying = false;
      botRight.style.cssText = 'color:#FF0000';
      midRight.style.cssText = 'color:#FF0000';
      topRight.style.cssText = 'color:#FF0000';
    }
  
  }
  //Diagonal checks
  if (topRight.innerText !== '' && topRight.innerText === midMid.innerText && topRight.innerText === botLeft.innerText) {
    if(player1.sign === topRight.innerText) {
      startOver.innerText = `${player1.name} won!`
        }
      if(player2.sign === topRight.innerText) {
        startOver.innerText = `${player2.name} won!`
      }
    addStatWinLos(topRight);
    updateScore();
    isPlaying = false;
    topRight.style.cssText = 'color:#FF3300';
    midMid.style.cssText = 'color:#FF3300';
    botLeft.style.cssText = 'color:#FF3300';
  }
  if (topLeft.innerText !== '' && topLeft.innerText === midMid.innerText && topLeft.innerText === botRight.innerText) {
    // startOver.innerText = 'Game Over!'
    if(player1.sign === topLeft.innerText) {
      startOver.innerText = `${player1.name} won!`
        }
      if(player2.sign === topLeft.innerText) {
        startOver.innerText = `${player2.name} won!`
      }
    addStatWinLos(topLeft);
    updateScore();
    isPlaying = false;
    topLeft.style.cssText = 'color:#FF3300';
    midMid.style.cssText = 'color:#FF3300';
    botRight.style.cssText = 'color:#FF3300';
  }
}

}

//Function to check draw 

const checkDraw = () => {
  if(isPlaying) {
  const row1 = topRight.innerText.length + topMid.innerText.length + topLeft.innerText.length;
  const row2 = midRight.innerText.length + midMid.innerText.length + midLeft.innerText.length;
  const row3 = botRight.innerText.length + botMid.innerText.length + botLeft.innerText.length;
  const length = row1 + row2 + row3; 
  if(length === 9) {
    startOver.innerText = 'Draw!'
    isPlaying = false;
    addStatDraw();
    updateScore();
    }
    
  }
  }

  // Function to update score 

  const updateScore = () => {   
    //Player1
    plr1wins.innerText = player1.getWin();
    plr1los.innerText = player1.getLose();
    plr1draw.innerText = player1.getDraw();
    plr1rate.innerText = player1.getWinStat()
    // plr1score.innerText = player1.score;

    //Player2
    plr2wins.innerText = player2.getWin();
    plr2los.innerText = player2.getLose();
    plr2draw.innerText = player2.getDraw();
    plr2rate.innerText = player2.getWinStat()
    // plr2score.innerText = player2.score;

  } 

  // Function to clear score 

  const clear = () => {
    const score = document.getElementsByClassName("nums");
    for(let i = 0; i < score.length; i++) {
      score[i].innerText = '0';
    }
    player1.win = 0;
    player1.los = 0;
    player1.draw = 0;
    player2.win = 0;
    player2.los = 0;
    player2.draw = 0;
  }

  
 
  export{setNext, checkWinner, checkDraw, startGame, clear}