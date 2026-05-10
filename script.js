//Operator function with an operations object to simplify the if else statement block i had here. 
const operations = {
    "+" : addition,
    "-" : subtraction,
    "/" : division,
    "%" : percentage,
    "*" : multiplication
}

//declaring variables and calculator state
let firstNum  = "";
let secondNum = "";
let operator  = "";

let currentInput = "0";
let currentExpression = "0"
let previousCalc = "";
let resultShown  =  false;

//getting all DOM elements
const currentDisplay  = document.querySelector(".currentDisplay")
const previousDisplay = document.querySelector(".previousDisplay")
const previousPreviousDisplay = document.querySelector(".previousPreviousDisplay")
const operatorButtons = document.querySelectorAll("[data-operator]");
const numberButtons   = document.querySelectorAll("[data-number]");
const ClearAllButton  = document.querySelector("[data-action='clear']");
const backSpaceButton = document.querySelector("[data-action='backspace']");
const equalsButton = document.querySelector("[data-action='equals']");

//initializing display 0
updateDisplay();

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





//helper function for updating display

function updateDisplay () {
    currentDisplay.textContent = currentExpression
}

//helper function for updating result: 
function showResult(result) {
    fixedResult = result.toFixed(6)
    currentExpression = String(fixedResult);
    currentInput = String(fixedResult);

    updateDisplay();
    resetState();
    return;
}

//reset state
function resetState () {
    firstNum = "";
    secondNum = "";
    operator = "";
    resultShown = true;
    return;
}

//stateToZero 

function stateToZero () {
    resetState()
    resultShown = false;
    currentInput = "0";
    currentExpression = "0";
    previousCalc = "";
    previousDisplay.textContent="";
    previousPreviousDisplay.textContent ="";
    updateDisplay();
    return;
}

//function that calls math functions


function operate (operator,a,b){
    return operations[operator](a,b);
}


//eventlisteners with enclosed functions
operatorButtons.forEach((button)=> {
    button.addEventListener("click", function(){
        const operatorValue = button.textContent
        const lastChar = currentExpression.slice(-1);
        const operators = ["×", "÷","-","%","+"]

        if (currentExpression === "0" && operatorValue ==="-") {
            currentInput = "-"
            currentExpression ="-";
            updateDisplay()
            return;
            
        } else if ((currentExpression === "0" ) && (operatorValue !== "-" ) && (firstNum.length === 0)) {
            firstNum = currentInput;
            operator = button.dataset.operator;
            currentExpression += operatorValue;
            currentInput = ""
            updateDisplay();
            return; 

        } else if (lastChar !== operatorValue && operators.includes(lastChar) && operatorValue !== "-") {
            currentExpression = currentExpression.slice(0, -1) + operatorValue;
            operator = button.dataset.operator;
            updateDisplay();
            return;

            
        } else if (operators.includes(lastChar) && operatorValue === "-") {
            const secondLastChar =
            currentExpression.slice(-2, -1);
            if (lastChar === "-"  && operators.includes(secondLastChar)) {
                return;
            }

            currentInput = "-";
            currentExpression += operatorValue
            updateDisplay()
            return;

        
        } else if (firstNum.length > 0 && operator.length > 0 && currentInput.length > 0) {
            secondNum = currentInput;
            
            previousPreviousDisplay.textContent = previousDisplay.textContent;
            previousDisplay.textContent         = currentExpression;
            
            const result      = operate(operator, Number(firstNum), Number(secondNum));
            showResult(result);

        } else if (operatorValue === lastChar) {
            return;

        } else if ( operatorValue === "%") {
            firstNum = currentInput;
            operator = button.dataset.operator;
            

            previousPreviousDisplay.textContent = previousDisplay.textContent;
            previousDisplay.textContent         = currentExpression;
            
            const result      = operate(operator, Number(firstNum))
            showResult(result)
            return;
        }
        
        else {
            firstNum = currentInput;
            currentInput = ""
            operator = button.dataset.operator;
            currentExpression += operatorValue;
            updateDisplay();
            resultShown = false;
            return;

        }
    } )}
)




numberButtons.forEach((button) => {
    button.addEventListener("click", function () {

        const digit = button.textContent;

        if (resultShown) {
            currentInput = digit;
            currentExpression = digit;
            resultShown = false;
            updateDisplay();
            return;
        }

        // replace leading zero
        if (currentInput === "0" && digit !== "0" && !currentInput.includes(".")){
            currentInput = digit;
            currentExpression = currentExpression.slice(0, -1) + digit;

            updateDisplay();
            return;
        }

        // normal append
        currentInput += digit;
        currentExpression += digit;

        updateDisplay();
    });
});


ClearAllButton.addEventListener("click", function (){
    stateToZero()
    return;  
})


backSpaceButton.addEventListener("click", function (){
    if (currentInput.length === 1){
        currentInput = "0";
        currentExpression = "0";
        updateDisplay();
        return;

    } else {
        currentInput = currentInput.slice(0,-1);
        currentExpression = currentExpression.slice(0,-1);
        updateDisplay();
        return;
        
    }
})

//we handle all updating and clearing of input/expression/display here to keep the operate function clean. 

equalsButton.addEventListener("click", function(){
    if (!secondNum && !operator){
        previousPreviousDisplay.textContent = previousDisplay.textContent
        previousDisplay.textContent         = currentExpression;
        firstNum = currentExpression;
        const result = firstNum;
        showResult(result)
        return

    } else {
    secondNum                           = currentInput
    previousPreviousDisplay.textContent = previousDisplay.textContent
    previousDisplay.textContent         = currentExpression;
    
    const result      = operate(operator, Number(firstNum), Number(secondNum))
    showResult(result)

    return;
    }
})