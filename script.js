function checkInput() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (num1 > 20 || num2 > 20) {
        alert('Input numbers should not be greater than 20.');
    }
}

function addNumbers() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    
    if (num1 > 20 || num2 > 20) {
        alert('Input numbers should not be greater than 20.');
        return;
    }
    
    var sum = num1 + num2;
    document.getElementById('result').innerText = 'Result: ' + sum;
}
function subNumbers() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    
    if (num1 > 20 || num2 > 20) {
        alert('Input numbers should not be greater than 20.');
        return;
    }
    var sub = num1 - num2;
    document.getElementById('result').innerText = 'Result: ' + sub;
}
function multiNumbers() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    
    if (num1 > 20 || num2 > 20) {
        alert('Input numbers should not be greater than 20.');
        return;
    }
    var multi = num1 * num2;
    document.getElementById('result').innerText = 'Result: ' + multi;
}
function divNumbers() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    
    if (num1 > 20 || num2 > 20) {
        alert('Input numbers should not be greater than 20.');
        return;
    }
    var div = num1 / num2;
    document.getElementById('result').innerText = 'Result: ' + div;
}