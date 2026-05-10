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

const previousPreviousDisplay = document.querySelector(".previousPreviousDisplay")

//helper function for updating display

function updateDisplay () {
    currentDisplay.textContent = currentExpression
}

//helper function for updating result: 
function showResult(result) {
    currentExpression = String(result);
    currentInput = String(result);

    updateDisplay();

    firstNum = "";
    secondNum = "";
    operator = "";
    resultShown = true;
}

//adding buttons and event listeners
/*the operator function clears the currentinput once an operator is set, and runs the operate function if a second operator 
is chosen while first number is populated, and sets the current input to secondnumber. This way we prevent overcomplicating the function*/

const operatorButtons = document.querySelectorAll("[data-operator]");

    operatorButtons.forEach((button)=> {
        button.addEventListener("click", function(){
            const operatorValue = button.textContent
            const lastChar = currentDisplay.textContent.slice(-1);
            const operators = ["×", "÷","-","%","+"]

            if (currentExpression === "0" && operatorValue ==="-") {
                currentInput = "-"
                currentExpression ="-";
                updateDisplay()
                return;
                
            } else if ((currentExpression === "0" ) && (operatorValue !== "-" ) && (firstNum.length = 0)) {
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
                firstNum = currentInput
                operator = button.dataset.operator 
               

                previousPreviousDisplay.textContent = previousDisplay.textContent
                previousDisplay.textContent         = currentExpression;
                
                const result      = operate(operator, Number(firstNum))
                showResult(result)
            }
            
            else {
                firstNum = currentInput;
                currentInput = ""
                operator = button.dataset.operator;
                currentExpression += operatorValue;
                updateDisplay()
                resultShown = false;
                return;

            }
     } )}
   )


const numberButtons   = document.querySelectorAll("[data-number]");

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
            if (
                currentInput === "0" &&
                digit !== "0" &&
                !currentInput.includes(".")
            ) {

                currentInput = digit;

                currentExpression =
                    currentExpression.slice(0, -1) + digit;

                updateDisplay();
                return;
            }

            // normal append
            currentInput += digit;
            currentExpression += digit;

            updateDisplay();
        });
    });
const ClearAllButton  = document.querySelector("[data-action='clear']")
    
    ClearAllButton.addEventListener("click", function (){
        console.log(ClearAllButton.textContent)
    })

const backSpaceButton = document.querySelector("[data-action='backspace']")

    backSpaceButton.addEventListener("click", function (){
        console.log(backSpaceButton.textContent)
    })

    //we handle all updating and clearing of input/expression/display here to keep the operate function clean. 
const equalsButton    = document.querySelector("[data-action='equals']")

    equalsButton.addEventListener("click", function(){
        if (!secondNum && !operator){
            previousPreviousDisplay.textContent = previousDisplay.textContent
            previousDisplay.textContent         = currentExpression;
            firstNum = currentExpression
            const result = firstNum
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