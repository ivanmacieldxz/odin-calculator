//display and number buttons
const display = document.getElementById("display");
const numberButtons = document.getElementsByClassName("number");

//operations buttons
const operationButtons = document.getElementsByClassName("operation");

//flag that represents last action, will be used to determine whether previous result should be used for next operation or not
let lastAction = ""

//----------------event-logic functions----------------

//function to make numbers appear on the display when pressed
function showNumber(number) {
    //first use or just hit equals
    if (lastAction === "" || lastAction === "calc") {
        display.innerText = number
    //when writing multi-digit number
    } else {
        display.innerText += number;
    }
    
    lastAction = "written";
}

//----------------adding events----------------

// add the event to each button
Array.from(numberButtons).forEach(numberButton => {
    numberButton.addEventListener("click", () => {
        showNumber(numberButton.id);
    });
});
