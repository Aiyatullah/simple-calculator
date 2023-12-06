    // JavaScript code
    var selectedOperator = '';  // Variable to store the selected operator

    // Function to set the selected operator
    function selectOperator(operator) {
        selectedOperator = operator;
    }

    // Function to calculate the result
    function calculateResult() {
        // Retrieve values from input fields
        var num1 = parseFloat(document.getElementById("num1").value);
        var num2 = parseFloat(document.getElementById("num2").value);
        let text="Thanks For the visit";
        document.getElementById("text").innerHTML=text;
        // Check if the input is valid
        if (!isNaN(num1) && !isNaN(num2) && selectedOperator !== '') {
            // Perform the calculation based on the selected operator
            switch (selectedOperator) {
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
                    result = num1 / num2;
                    break;
                default:
                    result = "Invalid operator";
            }

            // Display the result in the HTML element with id "result"
            document.getElementById("result").innerHTML = "Result: " + result;
        } else {
            // Handle invalid input
            document.getElementById("result").innerHTML = "Please enter valid numbers and select an operator.";
            alert('Please enter two numbers and a valid operator'); 
        }

    }