// document.addEventListener("DOMContentLoaded", function () {
//     const display = document.getElementById("display");
//     const buttons = document.querySelectorAll("button");
//     let currentInput = "";
//     let operator = "";
//     let previousInput = "";

//     buttons.forEach((button) => {
//         button.addEventListener("click", handleButtonClick);
//     });

//     function handleButtonClick(e) {
//         const buttonValue = e.target.textContent;

//         if (!isNaN(buttonValue) || buttonValue === ".") {
//             currentInput += buttonValue;
//         } else if (buttonValue === "C") {
//             clearCalculator();
//         } else if (buttonValue === "=") {
//             performCalculation();
//         } else {
//             handleOperator(buttonValue);
//         }

//         updateDisplay();
//     }

//     function handleOperator(op) {
//         if (operator && currentInput) {
//             performCalculation();
//             previousInput = currentInput;
//             currentInput = "";
//         } else {
//             previousInput = currentInput || "0";
//             currentInput = "";
//         }

//         operator = op;
//     }

//     function performCalculation() {
//         const num1 = parseFloat(previousInput);
//         const num2 = parseFloat(currentInput);

//         if (!isNaN(num1) && !isNaN(num2)) {
//             switch (operator) {
//                 case "+":
//                     currentInput = (num1 + num2).toString();
//                     break;
//                 case "-":
//                     currentInput = (num1 - num2).toString();
//                     break;
//                 case "*":
//                     currentInput = (num1 * num2).toString();
//                     break;
//                 case "/":
//                     currentInput = (num1 / num2).toString();
//                     break;
//                 default:
//                     break;
//             }
//         }

//         operator = "";
//     }

//     function clearCalculator() {
//         currentInput = "";
//         operator = "";
//         previousInput = "";
//         display.textContent = "0";
//     }

//     function updateDisplay() {
//         display.textContent = currentInput;
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    let expression = "";
    let result = "";

    // Dynamically add a result display area if not present
    let resultDisplay = document.createElement('div');
    resultDisplay.id = "result";
    resultDisplay.style.textAlign = "right";
    resultDisplay.style.fontSize = "1.2em";
    display.parentNode.appendChild(resultDisplay);

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", handleButtonClick);
    });

    function handleButtonClick(e) {
        const buttonValue = e.target.textContent;

        if (!isNaN(buttonValue) || buttonValue === ".") {
            expression += buttonValue;
        } else if (buttonValue === "C") {
            clearCalculator();
        } else if (buttonValue === "=") {
            calculateResult();
        } else { // operator
            if (expression !== "" && !"+-*/".includes(expression.slice(-1))) {
                expression += buttonValue;
            }
        }
        updateDisplay();
    }

    function calculateResult() {
        try {
            // Use eval cautiously; in production apps, use a proper math parser.
            result = eval(expression).toString();
        } catch (err) {
            result = "Error";
        }
        updateDisplay();
    }

    function clearCalculator() {
        expression = "";
        result = "";
        updateDisplay();
    }

    function updateDisplay() {
        display.textContent = expression || "0";
        resultDisplay.textContent = result ? "= " + result : "";
    }

    // Initialize display
    updateDisplay();
});
