# JS Refresher basics

- This module is for refreshing JS if you already know the 

## Module introduction

### JS in a Nutshell

- Weakly typed language.
- Number, boolean, string [No type strictness]
- Switching the data type dyanamically

### Object oriented language
- Data can be organized in logical object

### Versatile language
- Browser webpage logics

## Refreshing the core Syntax
- Function, loops, if statement
- Var object

## let & const
- let variables value can be changes later.
- const variable value never changes once declared.

### this
- This provides a variable which have all the member of the scope
- Importants:
  - Function with `function` declaration in the object has the object scope.
  - Function with arrow function defintion in the object hold the global scope.

## Arrow function
 This allows us to create the function in a different way and this involves creating a function and assiging to a variable. Type of the function is something like this

 ```js
 const functionName  =  (arg1: arg1Type, arg2: arg2Type): ReturnType => {
    .
    .
    .
    return {something};
 }
 ```
 
## Objects

Objects allows us to group different types of the data together along with the function.
For example:
```js
const person = {
    name: "Amit",
    age: 26,
    greet: () => {
        console.log("Hi, I am " + this.name);
    }
};
```
This will return the global : undefined when we try to access the name


```js
const person = {
    name: "Amit",
    age: 26,
    greet() {
        console.log("Hi, I am " + this.name);
    }
};
```
This will return `Amit` as it has the object scope now.


## Array and array methods
Link to mdn docs: [MDN array link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### For (let a in array )

### map 
iterate all the element and return a new array using the existing element. We can modify the element.

### flatMap
Iterate all the element and return a new array using the existing element. If the elements are the array it destructure it by itself.

### Const array allows editing array 
- And it doesn't breaks the const don't allow edit rule.
- Its because const variable is actually a variable pointer pointing to the array.

### Slice
- We can copy and array just by calling the slice without any arguments
- We can also pass the range if we want a certain range of elements.

## Spread and rest operator
we can copy and object using the spread operator. 

```js
const data = [...oldArray];
console.log(data);
```

## Destructing

- Destructuring an array. Function, while using an object.
- Descructuring an objects. Function, while using an object.


## Async code

- SetTimeOut: Async code after some time.
- Promises: 
- Promise and promise resolution using then. This can be nested then.


## Template literals

- `` string wrapped in the backticks.
