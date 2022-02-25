// Getting start button element
const startButton = document.getElementById('start')

// Getting clear score element 
const clearScore = document.getElementById("clearScore")

// Getting Game Start/Game Over message element
const startOver = document.getElementById('startOver')

// Getting winner message element
const winner = document.getElementById('winner');


// Getting elements of the game table

// Top
const topLeft = document.getElementById('topLeft');
const topMid = document.getElementById('topMid');
const topRight = document.getElementById('topRight');

// Middle
const midLeft = document.getElementById('midLeft');
const midMid = document.getElementById('midMid');
const midRight = document.getElementById('midRight');

// Bottom
const botLeft = document.getElementById('botLeft');
const botMid = document.getElementById('botMid');
const botRight = document.getElementById('botRight');


// Getting elements of the scoreboard

// Player1 
const plr1rname = document.getElementById("plr1name");
const plr1wins = document.getElementById("plr1wins");
const plr1los = document.getElementById("plr1los");
const plr1draw = document.getElementById("plr1draw");
const plr1rate = document.getElementById("plr1rate");
// const plr1score = document.getElementById("plr1score");

// Player2
const plr2rname = document.getElementById("plr2name");
const plr2wins = document.getElementById("plr2wins");
const plr2los = document.getElementById("plr2los");
const plr2draw = document.getElementById("plr2draw");
const plr2rate = document.getElementById("plr2rate");
// const plr2score = document.getElementById("plr2score");


// Player class

export default class Player {
    constructor(name, sign) {
        this.sign = sign;
        this.name = name; 
        this.win = 0;
        this.los = 0;
        this.draw = 0;
        this.score = 0;
    }
    setName(newName) {
        this.name = newName;
    }
    setWin() {
        this.win += 1;
    }
    setLose(){
        this.los +=1;
    }
    setDraw() {
        this.draw +=1;
    }
    getWin() {
        return this.win;
    }
    getLose() {
        return this.los;
    }
    getDraw() {
        return this.draw;
    }
    getWinStat() {
        const wins = this.win + (this.draw / 2); 
        const totalGames = this.win + this.los + this.draw;
        if((wins !==0 && totalGames !==0) * 100 > 0 ) {
            return ((wins / totalGames) * 100).toFixed(2)
        };
        return '';
    }
    addScore(score) {
        this.score += score;
    }
}



export{startButton, topLeft, topMid, topRight, midLeft, midMid, midRight,
    botLeft, botMid, botRight, winner, startOver, clearScore}

export{plr1rname, plr1wins, plr1los, plr1draw, plr1rate}
export{plr2rname, plr2wins, plr2los, plr2draw, plr2rate}