//operand variables, x also works as the number in the display
let x = 0;
let y = 0;
let operation = '';

function add() {
    x = x + y;
}

function substract() {
    x = x - y;
}

function multiply() {
    x = x * y;
}

function divide() {
    x = x / y;
}

function operate() {
    if (operation === "add") {
        add();
    } else if (operation === "substract") {
        substract();
    } else if (operation === "multiply") {
        multiply();
    } else {
        divide();
    }
}
