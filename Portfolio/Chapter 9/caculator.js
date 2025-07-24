// When the button is clicked, call the calculateIt function
document.getElementById("submit").addEventListener("click", calculateIt);

function calculateIt() {
    // Create variables to store the selected operator and result
    var myOperator;
    var returnValue;

    // Get the values entered by the user
    var operand1 = document.getElementById("operand1").value;
    var operand2 = document.getElementById("operand2").value;

    // Get the selected data types for each operand (number or string)
    var select1 = document.getElementById("operand1-type");
    var select2 = document.getElementById("operand2-type");

    var operand1type = select1.value;
    var operand2type = select2.value;

    // Get all the radio buttons (operators)
    var radios = document.getElementsByName('operator');

    // Convert operand1 to the selected type
    switch (operand1type) {
        case "string":
            operand1 = String(operand1);  // Convert to string
            break;
        case "number":
            operand1 = Number(operand1);  // Convert to number
            break;
    }

    // Convert operand2 to the selected type
    switch (operand2type) {
        case "string":
            operand2 = String(operand2);  // Convert to string
            break;
        case "number":
            operand2 = Number(operand2);  // Convert to number
            break;
    }

    // Loop through operator radio buttons to find which one is selected
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            myOperator = radios[i].value; // Store selected operator

            // Perform the operation based on selected operator
            switch (radios[i].value) {
                case "+":
                    returnValue = operand1 + operand2;
                    break;
                case "-":
                    returnValue = operand1 - operand2;
                    break;
                case "*":
                    returnValue = operand1 * operand2;
                    break;
                case "/":
                    returnValue = operand1 / operand2; // 💡 Fix: used to be multiplication by mistake
                    break;
                case "%":
                    returnValue = operand1 % operand2;
                    break;
                case "concat": // Special case for string concatenation
                    returnValue = operand1 + operand2;
                    myOperator = "+"; // Display as "+" in the operation preview
                    break;
                case "==":
                    returnValue = operand1 == operand2;
                    break;
                case "===":
                    returnValue = operand1 === operand2;
                    break;
                case "!=":
                    returnValue = operand1 != operand2;
                    break;
                case "!==":
                    returnValue = operand1 !== operand2;
                    break;
                case ">":
                    returnValue = operand1 > operand2;
                    break;
                case ">=":
                    returnValue = operand1 >= operand2;
                    break;
                case "<":
                    returnValue = operand1 < operand2;
                    break;
                case "<=":
                    returnValue = operand1 <= operand2;
                    break;
            }

            break; // Exit loop after finding the checked operator
        }
    }

    // If operand is a string, add quotes for clarity in the output
    if (typeof(operand1) === "string") {
        operand1 = '"' + operand1 + '"';
    }
    if (typeof(operand2) === "string") {
        operand2 = '"' + operand2 + '"';
    }

    // Display the operation expression (e.g., "4 + 5" or '"hello" + "world"')
    document.getElementById("final-operation").innerHTML = operand1 + " " + myOperator + " " + operand2;

    // Display the result of the operation
    document.getElementById("result").innerHTML = returnValue;
};
