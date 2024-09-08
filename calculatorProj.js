let currentInput = "";
let operator = "";
let previousInput = "";


function appendNumber(value) {
    
    if (currentInput.length < 10) {
        if (value === "." && currentInput.includes(".")) {
            alert("Multiple decimal points are not allowed");
            return;
        }
        currentInput += value;
    } else {
        alert("Too many digits");
    }
    document.getElementById('display').value = currentInput;
}

function setOperator(op) {
    if (currentInput !== '') {
        operator = op;
        previousInput = currentInput;
        currentInput = '';
    }
    
    
}

function clearInput() {
    currentInput = "";
    operator = "";
    previousInput = "";
    document.getElementById("display").value = '0';

}

function calculate() {
    if (previousInput !== '' && currentInput !== '' && operator !== '') {
        let num1 = parseFloat(previousInput);
        let num2 = parseFloat(currentInput);
        let result = 0;

        if(isNaN(num1) || isNaN(num2)){
            document.getElementById('display').value = "Error"
            clearInput();
            return;
        }
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;

            case '-':
                result = num1 - num2;
                break;

            case '*':
                result = num1 * num2;
                break;

            case '/':
                if (num2 !== 0) {
                    result = num1 / num2
                }
                else {
                    document.getElementById('display').value = "Error";
                    clearInput();
                    return;
                }
                break;
        }

        document.getElementById("display").value = result;
        previousInput = '';
        currentInput = '';
        operator = '';
    }
}

