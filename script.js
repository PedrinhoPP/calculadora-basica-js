let display = document.getElementById("display");

function add(value) {
    display.value += value;
}

function limparDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}