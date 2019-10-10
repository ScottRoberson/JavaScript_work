const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web development,web design, blogging';

let val;

val = firstName + lastName;

//Concatenation
val = firstName + ' ' + lastName;

//Append
val = 'Brad ';
val += 'Smith';

val ='Hello, my name is ' + firstName + ' and I am ' + age;

//Escaping 
val = "That's awesome, I can't wait";
val = 'That\'s awesome, I  can\'t wait';

//Property & Methods of Strings
//Length
val = firstName.length;

//concat()
val = firstName.concat(' ', lastName);

//Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

//index)Of()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

//charAt()
val = firstName.charAt('2');
// Get last char
val = firstName.charAt(firstName.length - 1);

//subString()
val = firstName.substring(0,4);

//slice()
val = firstName.slice(0,4);
//Goes from the end of string
val = firstName.slice(-3);

//split()
val = str.split(' ');
val = tags.split(',');

//replace()
val = str.replace('Brad','Jack');

//includes()
val = str.includes('Hello');


console.log(val);