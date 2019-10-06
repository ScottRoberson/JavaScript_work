//var, let, const

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// //Init var
// var greeting;
// console.log(greeting);
// greeting = 'hello';
// console.log(greeting);

// //letters, numbers, _, $
// // Cannot start with a number
// // var 1name = 'John' not allowed

// // Multi word variables
// var firstName = 'John';//Camel Case
// var first_name = 'Sara';//Underscore
// var FirstName ='Tom';//Pascal Case

//Let
// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith1';
// console.log(name);

//Const
// const name ='John';
// console.log(name);
//Can not reassign
// name = 'Sara';
//Have assign a value
// const greeting;

const person = {
  name: 'John',
  age: 30
}

person.name = 'Sara';
person.age = 32;

// console.log(person);

const numbers = [1,2,3,4,5];
numbers.push(6);
//numbers =[1,2,3,4,5,6];
//Not Allowed as you are making new array.

console.log(numbers);

