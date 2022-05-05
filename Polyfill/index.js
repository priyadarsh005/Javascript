
let cities = [
    "New York",
    "Los Angeles",
    "San Francisco",
    "Chicago",
    "Kansas City"
]

// let citiesMap = cities.map(c => console.log(c));

Array.prototype.myMap = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }

    return result;
}

let citiesMap = cities.myMap(c => console.log(c));

// Filter

let ages = [ 34, 55, 65, 12, 6, 88, 36 ];

let agesFilter = ages.filter(age => age > 35);

console.log(agesFilter);

Array.prototype.myFilter = function(callback, context) {
    let result1 = [];

    for (let i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i. this)) {
            result1.push(this[i]);
        }
    }
}


let finalResult = ages.myFilter((x) => x > 35);

console.log(agesFilter);

// Polyfill for bind

let name = {
    firstName: "Priyadarsh",
    lastName: "K"
}

let printName = function() {
    console.log(this.firstName + " " + this.lastName);
}

let printMyName = printName.bind(name);
printMyName();

Function.prototype.mybind = function(...args) {
    let obj = this;
    return function() {
        obj.call(args[0]);
    }
}

let printMyName2= printName.mybind(name);
printMyName2();
