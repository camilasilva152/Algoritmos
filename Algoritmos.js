function quicksort() {
    if (array && array.length >= 1) {
        let pivot = array.shift();
        let left = [];
        let right = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i] < pivot) {
                left.push(array[i]);
            } else {
                right.push(array[i]);
            }
        }
        return quicksort(left).concat(pivot, quicksort(right));
    } else {
        return [];
    }
}

function fibonacci() {
    let n = Number(prompt("digite um numeroooooo"));
    let prox;
    let ant = 0;
    let atual = 1;
    let msg = "0 ";
    for (let i = 1; i < n; i++) {
        if (i == n) {
            console.log(ant);
        } else {
            prox = ant + atual;
            ant = atual;
            atual = prox;
            msg += ant + " ";
        }
    }
    console.log(msg.trim());
}

function sumArray() {
    let array = [1, 2, 3, 4, 5];
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
}

function isPrime() {
    let x = Number(prompt("digite um numero"));
    let c = 0;
    for (let j = 2; j < x; j++) {
        if (x % j === 0) c++;
    }
    if (c === 0) {
        console.log(x + " " + "eh primo");
    } else {
        console.log(x + " " + "nao eh primo");
    }
}

function gcd() {
    let a = Number(prompt("digite um numero"));
    let b = Number(prompt("digite um numero"));
    if (isNaN(a) && isNaN(b)) {
        console.log("numeros inválidos");
        return;
    }
    let d = Math.min(a, b);
    while (d > 1) {
        console.log(d);
        if (a % d === 0 && b % d === 0) {
            break;
        }
        d--;
    }
    console.log(d);
}

function countToN() {
    let n = Number(prompt("digite um numero"));
    for (let i = 0; i <= n; i++) {
        console.log(i);
    }
}
