// Math functions 
function addition (a,b) {
    return a + b;
}


function subtraction (a,b) {
    return a - b;
}


function multiplication (a,b) {
    return a * b;
}


function division (a,b) {
    if (b === 0) {
        return "Error"
    }

    return a / b;
}


function percentage (a) {
    return a / 100;
}

//Operator function
function operate (operator,a,b) {
    if (operator === "+") {
        return addition(a,b);

    } else if (operator === "-") {
        return subtraction(a,b);

    } else if (operator === "*") {
        return multiplication(a,b)

    } else if (operator === "%") {
        return percentage(a);

    } else if (operator === "/") {
        return division(a,b);
    }
}

//declaring variables and calculator state

let firstNum  = "";
let secondNum = "";
let operator  = "";

let currentInput = "0";
let currentExpression = "0"
let previousCalc = "";
let resultShown  =  false;


//getting screen elements and setting currentdisplay to current input.

const currentDisplay  = document.querySelector(".currentDisplay")
    updateDisplay();

const previousDisplay = document.querySelector(".previousDisplay")

//helper function for updating display

function updateDisplay () {
    currentDisplay.textContent = currentExpression
}

//adding buttons and event listeners

const operatorButtons = document.querySelectorAll("[data-operator]");

    operatorButtons.forEach((button)=> {
        button.addEventListener("click", function(){
            const operatorValue = button.textContent
            const lastChar = currentDisplay.textContent.slice(-1);

            if (currentExpression === "0" && operatorValue ==="-") {
                currentInput = "-"
                currentExpression ="-";
                updateDisplay()
                return;
                
            } else if (currentExpression === "0" && operatorValue !== "-") {
                firstNum = currentInput;
                operator = button.dataset.operator;
                currentExpression += operatorValue;
                currentInput = ""
                updateDisplay();
                return; 
            }
     } )}
   )


const numberButtons   = document.querySelectorAll("[data-number]");

    numberButtons.forEach((button)=> {
        button.addEventListener("click", function(){

            if (currentInput === "0"){
                currentInput = button.textContent;
                currentExpression = button.textContent
                updateDisplay();
                return;

            } else if (currentDisplay.textContent.length >= 12){
                return

            } else if (currentInput === "0" && button.textContent === "0"){
                return;

            } else {
                currentInput += button.textContent;
                currentExpression += button.textContent;
                updateDisplay();
                return;
            }
        })
    })

const ClearAllButton  = document.querySelector("[data-action='clear']")
    
    ClearAllButton.addEventListener("click", function (){
        console.log(ClearAllButton.textContent)
    })

const backSpaceButton = document.querySelector("[data-action='backspace']")

    backSpaceButton.addEventListener("click", function (){
        console.log(backSpaceButton.textContent)
    })

const equalsButton    = document.querySelector("[data-action='equals']")

    equalsButton.addEventListener("click", function () {
        console.log(equalsButton.textContent)
    })


