//~~~~~~~~~~~~~~~~~~~ Object ~~~~~~~~~~~~~~~~~~~~~~~~

const person = {
    name: "Max",
    age: 59,
    getName: () => {
        return "Amit"
    }
}

console.log(person);

const person3 = {
    name: "Max",
    age: 59,
    getName() {
        return this.name;
    }
}

console.log(person3);


//~~~~~~~~~~~~~~~~~ Array & array methods ~~~~~~~~~~

const hobbies = ['string', 'cookies', 1, true, { name: "Name" }];

for (let hobby in hobbies) {
    console.log(hobby);
}

// Map function

console.log(hobbies.map((hobby) => { return "Hobby" + hobby }));

console.log(hobbies);

// Slice function 

const data = hobbies.slice()

// Spread operator

const data1 = [...hobbies];

//~~~~~~~~~~~~~~~~ Rest operator ~~~~~~~~~~~~~~~~~~~~~~~~~

const toArray = (...args) => {
    return args;
}

const data3 = toArray(hobbies);

//~~~~~~~~~~~~~~~~ Destructuring | Object ~~~~~~~~~~~~~~~~~

const printName = (personData) => {
    console.log(personData.name);
}

printName(person);

// with destruturing the object
const printName2 = ({ name }) => {
    console.log(name);
}

printName2(person);

//~~~~~~~~~~~~~~~ Destucturing an array ~~~~~~~~~~~~~~~

const [a, b, c] = hobbies

//~~~~~~~~~~~~~~~~~~~ SetTimeOut ~~~~~~~~~~~~~~~~~~~~~

console.log("print1");

setTimeout(() => {
    console.log("print2");
}, 0)

console.log("print3");


//~~~~~~~~~~~~~~~~~~~~~ Promises ~~~~~~~~~~~~~~~~~~~~~~~

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("done!")
        }, 1000);
    });

    return promise;
}

// Using infinite nested promise resolution using then.

