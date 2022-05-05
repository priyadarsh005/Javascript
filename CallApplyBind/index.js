
let name = {
    firstName: "Priyadarsh",
    lastName: "K"
}

let printMyName = function (homeTown, state) {
    console.log("First name is " + this.firstName + " and last name is " + this.lastName
    + " hometown is " + homeTown + " and State is " + state);
}

// call
printMyName.call(name, "Bangalore", "Karnataka");

// apply
printMyName.apply(name, ["Bangalore", "Karnataka"]);

// bind
let myName = printMyName.bind(name, "Bangalore", "Karnataka");
myName();
