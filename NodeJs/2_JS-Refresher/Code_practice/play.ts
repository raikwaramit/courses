//~~~~~~~~~~~~~~~~~ var, function,~~~~~~~~~~~~~~~~~~

var userName: string = "Max"; // strings
var age = 29 // number
var hasHobbies = true;

console.log(userName);

function summarizeUser(user: string, userAge: number, userHasHobby: boolean) {

    return `Name is ${userName} age is ${age} and user has hobbies ${hasHobbies}`;
}


console.log(summarizeUser(userName, age, hasHobbies));

//~~~~~~~~~~~~~~~~~~~~~ let and const ~~~~~~~~~~~~~~

let userName1 = "Amit"
const email = "raikwar.amit.1603@gmail.com"

userName1 = "Mohit"
// email = "amit" // show compile time error if we re-assign the value to the constants variables.


//~~~~~~~~~~~~~~~~~~~~~ Arrow function ~~~~~~~~~~~~~~~

const sum = (a: number, b: number) => a + b; // sum arrow function.
console.log(sum(10, 5));

//~~~~~~~~~~~~~~~~~~~~~ this ~~~~~~~~~~~~~~~~~~~~~~~~
const person1 = {
    name: "Amit",
    age: 26,
    greet: () => {
        // console.log("Hi, I am " + this.name); 
        // Uncomment above line to see the compile time error and check the runtime error by running the program
    }
};

const person2 = {
    name: "Amit",
    age: 26,
    greet() {
        console.log("Hi, I am " + this.name);
    }
};

