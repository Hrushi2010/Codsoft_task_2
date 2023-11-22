<script type="text/javascript" src="{% static 'js/calculator.js' %}"></script>

document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("expression");

    function appendToDisplay(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = "";
    }

    function calculate() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    }

    // Add event listeners to buttons
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const buttonText = this.textContent;
            if (buttonText === "=") {
                calculate();
            } else if (buttonText === "C") {
                clearDisplay();
            } else {
                appendToDisplay(buttonText);
            }
        });
    });
});

// Add event listeners to capture keypress events
document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (/[\d.+\-*/=]/.test(key)) {
        if (key === "Enter" || key === "=") {
            key = "=";
        }
        appendToDisplay(key);
    } else if (event.key === "Backspace") {
        // Handle the Backspace key for clearing
        clearDisplay();
    }
});
