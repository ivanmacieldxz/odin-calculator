//buttons
const display = document.getElementById("display");
const numberButtons = document.getElementsByClassName("number");
const operationButtons = document.getElementsByClassName("operation");
const equalsButton = document.getElementById("operate");
const clearButton = document.getElementById("clear");

//control variable to hold the actual step
let step = 0;

//----------------event-logic functions----------------

//function to make numbers appear on the display when pressed
function showNumber(number) {
    //if it's the first use, user just defined the operator, or just hit equals (show result)
    if (step == 0 || step == 2 || step == 4) {
        //replace the number on display
        display.innerText = number;
        //go to next step
        step++;
    //if writing the first or second operand, continue writing
    } else if (step == 1 || step == 3) {
        display.innerText += number;
        //stay on the same step, in case user wants to write a bigger number
    //if result has already been shown and user presses again, then it's because first operand should be rewritten
    } else if (step == 5) {
        display.innerText = number
        //go back to writing first operand
        step = 1;
    }

    console.log(step)
}

function operateUseCase() {
    //if just finished writing second operand operate, do nothing otherwise
    if (step == 3) {
        //set second operand
        y = parseInt(display.innerText);
            
        //operate and show result
        operate();

        //update step to just executed and show result
        step++;
        showNumber(x);
    }
}

function clear() {
    display.innerText = 0;
    //doesn't reset operands because will be overriten, as step takes its initial value
    step = 0;
}

//----------------adding events----------------

//Add displaying event to each number button
Array.from(numberButtons).forEach(numberButton => {
    numberButton.addEventListener("click", () => {
        showNumber(numberButton.id);
    });
});

//Add operator event to each operation button
Array.from(operationButtons).forEach(operationButton => {
    operationButton.addEventListener("click", () => {
        //do nothing if it's the first use or just hit equals but didn't show result yet (unreachable)
        //this if allows to include normal and alternative flows 2 and 3 with the same logic
        if (step != 0 && step != 4) {
            //special logic for alternative flow 1
            if (step == 3) {
                //if it's step 3 then it's the special case when hit operator after defining second operand, so:
                operateUseCase();
            }

            //in any case, change operator, set first operand to what's on display and update step accordingly

            //change it 
            operation = operationButton.id;

            //set first operand
            x = parseInt(display.innerText);

            //change step to 2, meaning operator has already been defined
            step = 2;
        }
    });
});

equalsButton.addEventListener("click", operateUseCase);

clearButton.addEventListener("click", clear);