const { game, newGame, showScore, addTurn } = require("../game");

beforeAll(() => { 
let fs = require("fs");
let fileContents = fs.readFileSync("simon-game-index.html", "utf-8");
document.open();
document.write(fileContents);
document.close();
});

describe(" game object contains correct keys",() => {
    test ("Score key exists", () => {
        expect("score"in game).toBe (true);
});
test ("should be one move in the computer's game array", () => {
        expect(game.currentGame.length).toBe (1);
});
test ("playerMove key exists", () => {
        expect("playerMove"in game).toBe (true);
});
test ("choices key exists", () => {
        expect("choices"in game).toBe (true);
});
test ("choices contains correct ids", () => {
        expect(game.choices).toEqual (["button1", "button2", "button3", "button4"]);
});
})

describe(" newGame works correctly",() => {
  beforeAll(() => {
    game.score = 42;
    game.playerMove = ["button1", "button2"];
    game.curentGame = ["button1", "button2",];
    document.getElementById("score").innerText = "42";
    newGame();
  });
  test ("should set game score to zero", () => {
        expect(game.score).toEqual (0);
  });
  test ("should set playerMove to 0", () => {
        expect(game.playerMove).toEqual ([]);
  });
   test ("should set currentGame to 0", () => {
        expect(game.currentGame).toEqual ([]);
  });
  test ("should display 0 for the element with the id of score", () => {
        expect(document.getElementById("score").innerText).toEqual ("0");
  });
});