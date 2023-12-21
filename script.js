javascript
let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
    }
}
function backspace() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}
function appendToDisplay(value) {
    // Add logic to handle parentheses
    if (value === '(' || value === ')') {
        // Add the parentheses directly to the display
        currentInput += value;
    } else {
        // For other values, continue as before
        currentInput += value;
    }
    display.value = currentInput;
}
function appendToDisplay(value) {
    // Add logic to handle decimal point
    if (value === '.') {
        // Check if a decimal point already exists in the current input
        if (!currentInput.includes('.')) {
            currentInput += value;
        }
    } else {
        // For other values, continue as before
        currentInput += value;
    }
    display.value = currentInput;
}

function appendToDisplay(value) {
    // Add logic to handle exponentiation
    if (value === '**') {
        // Add the exponentiation operator directly to the display
        currentInput += '^';
    } else {
        // For other values, continue as before
        currentInput += value;
    }
    display.value = currentInput;
}

