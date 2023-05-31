function pow(num, degree) {
    let result = degree ? num : 1;
    degree--;

    if (degree >= 1) result *= pow(num, degree);

    return result;
}

function askNumber() {
    let number = parseFloat(prompt('Please enter a number'));

    if (!isNaN(number)) {
        return number;
    } else {
        return askNumber();
    }
}

function askDegree() {
    let degree = parseFloat(prompt('Please enter a degree'));

    if (!isNaN(degree)) {
        return degree;
    } else {
        return askDegree();
    }
}

let number = askNumber();
let degree = askDegree();
let result = pow(number, degree);

alert(`The result of exponentiation is : ${result}`);