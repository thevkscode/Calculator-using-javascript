var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display")
var operand1 = 0;
var operand2 = null;
var operator = null;
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        var value = this.getAttribute('data-value');
        console.log(value);
        if (value == '+') {
            operator = '+'
            operand1 = parseFloat(display.textContent);
            display.innerText = "";
            // operand2 = "";
        }
        else if (value == '-') {
            operator = '-'
            operand1 = parseFloat(display.textContent);
            display.innerText = "";

        }
        else if (value == '*') {
            operator = '*'
            operand1 = parseFloat(display.textContent);
            display.innerText = "";

        }
        else if (value == '*') {
            operator = '*'
            operand1 = parseFloat(display.textContent);
            display.innerText = "";

        }
        else if (value == '/') {
            operator = '/'
            operand1 = parseFloat(display.textContent);
            display.innerText = "";

        }
        else if (value == "AC") {
            display.innerText = "";
            operand1 = 0;
            operand2 = null;
            operator = null;
        }
        else if (value == "+/-") {
            operand1 = parseFloat(display.textContent);
            operand1 = -operand1;
            display.innerText = "" + operand1;

        }
        else if (value == "%") {
            operator = '%'
            operand1 = parseFloat(display.textContent);
            display.innerText = "";

        }
        else if (value == "=") {
            console.log(operand1 + operator + operand2);
            operand2 = parseFloat(display.textContent);

            if (operand2 != null) {
                // operand2 = parseFloat(display.textContent);
                if (operator == '/' && operand2 == 0) {
                    display.innerText = "ERROR";
                    operand2 = null;
                    operand1 = 0;
                    operator = null
                }
                else if (operator == '%' && operand2 == 0) {
                    display.innerText = "ERROR";
                    operand2 = null;
                    operand1 = 0;
                    operator = null;
                }
                else {
                    if (operator == '%') {
                        var ans = (operand1 * 100) / operand2;
                        display.innerText = "" + ans;
                        operand2 = null;
                        operand1 = 0;
                        operator = null;

                    }
                    else {
                        var ans = eval(operand1 + operator + operand2);
                        display.innerText = "" + ans;
                        operand2 = null;
                        operand1 = 0;
                        operator = null;
                    }
                }
            }
        }
        else {
            display.innerText += value;
            // console.log(value);
        }

    });
}