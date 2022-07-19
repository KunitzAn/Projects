var inputArea = document.getElementById("input");
var operator;

function set0() {
    inputArea.innerHTML += 0;
}
function set1() {
    inputArea.innerHTML += 1;
}

function deleteAll() {
    inputArea.innerHTML = "";
}

var re = /[^0-1]/;

function setSum() {
    if(! re.test(inputArea.innerHTML)) {
        inputArea.innerHTML += "+";
        operator = "+";
    }
}
function setSub() {
    if(! re.test(inputArea.innerHTML)) {
        inputArea.innerHTML += "-";
        operator = "-";
    }
}
function setMul() {
    if(! re.test(inputArea.innerHTML)) {
        inputArea.innerHTML += "*";
        operator = "*";
    }
}
function setDiv() {
    if(! re.test(inputArea.innerHTML)) {
        inputArea.innerHTML += "/";
        operator = "/";
    }
}

function equal() {
    var arr = inputArea.innerHTML.split(re);
    var operand1 = parseInt(arr[0], 2);
    var operand2 = parseInt(arr[1], 2);
    var resultIn10;

    switch(operator){
        case "+" : 
            resultIn10 = operand1 + operand2;
            break;

        case "-" :
            resultIn10 = operand1 - operand2;
            break;

        case "*" :
            resultIn10 = operand1 * operand2;
            break;

        case "/" :
            resultIn10 = operand1 / operand2;
            break;
    }

    var result = parseInt(resultIn10).toString(2); 
    inputArea.innerHTML = result;
}