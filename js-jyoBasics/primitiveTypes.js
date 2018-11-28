let stringPrimitiveType = 'stringValues'; // String Literal 
console.log(stringPrimitiveType);
let age = 30; // Number Literal
let isApprove = true; // Boolean Literal
let firstName = undefined;
let  nullName = null;


let person = {
    name: 'Jyo',
    age: 27
};


console.log(person);

// if you want to ge only name property , 

// two ways we can do 
// 1 . DOT NOTATION
console.log('dotNoation      - -> ' + person.name);
// 2,. Bracket Notation 
console.log('bracketNotation --> ' +person['name']);