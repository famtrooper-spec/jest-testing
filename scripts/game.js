let game ={
    score : 0,
    currentGame : [],
    playerMove:[],
    choices :["button1", "button2", "button3", "button4"],
};

function newGame() {
    game.score = 0;
    game.playerMove = [];
    game.currentGame = [];
    showScore();
}
function addTurn() {
    game.playerMove =[];
    game.currentGame.push(game.choices[Math.floor(Math.random() * 4)]);
    //showTurns();

}

function showScore() {
    document.getElementById("score").innerText = game.score;
}


module.exports ={game,newGame,showScore, addTurn};