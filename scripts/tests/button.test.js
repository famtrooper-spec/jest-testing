

const buttonClick () = require ("../button");

beforeEach(() => {
    document.body.innerHTMLhtml= " <p id='par'></p>";
});
describe ("DOM tests", () => {
    test ("p content to change", () => 
        buttonClick();
    expect (document.getElementById("par").innerHTML).toEqual("You clicked!");
});


});