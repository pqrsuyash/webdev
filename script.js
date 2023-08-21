let displayValue = "";

function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue);
    } catch (error) {
        displayValue = "Error";
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").value = displayValue;
}
