// Using bind

function multiply (x, y) {
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2);

multiplyByTwo(3);

let multiplyByThree = multiply.bind(this, 3);

multiplyByThree(3);

// Using Closures

let mul = function(x) {
    return function(y) {
        console.log(x * y);
    }
}

let mulByTwo = mul(2);

mulByTwo(5);
