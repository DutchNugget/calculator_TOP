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

    } else if (operator === "÷") {
        return division(a,b);
    }
}
