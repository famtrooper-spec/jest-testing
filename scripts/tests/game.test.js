const { game } = require("../game.js");

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
})