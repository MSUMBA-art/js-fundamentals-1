// let js = 'amazing';

// console.log(40 + 48 + 23 - 16);

// console.log('Alexander');

// console.log(23);

// let firstName = 'Alexander';

// console.log(firstName.length);
// console.log(firstName);
// console.log(firstName);

// DATA TYPES

/*let javascriptIsFun = true;
console.log(typeof javascriptIsFun);
console.log(typeof true);
console.log(typeof 33);
console.log(typeof 'Alex');
console.log(typeof true);

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);*/

// LET, CONST & VAR
// let age = 40;
// age = 41;

// const birthYear = 1998;
// birthYear = 1999

// const myAge; // this is not allowed

// OPERATORS

// math operators
// const now = 2037;
// const ageAlex = now - 1991;
// ageSarah = now - 2018;
// console.log(ageAlex, ageSarah);

// console.log(ageAlex * 2, ageAlex / 10, 2 ** 3);


// const firstName = 'Alexander';
// const lastName = 'Msumba';
// console.log(firstName + ' ' + lastName);

// assignment operators
//let x = 10 + 5;
// x += 10 // x = x + 10 = 25
// x *= 4 // x = x * 4 = 100
// x ++;
// x--;
// x--;
// console.log(x);

// comparison operators
// console.log(ageAlex > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;
// console.log(isFullAge);
// console.log(now - 1991 >= now - 2018);

// console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// ===== STRINGS & TEMPLATE LITERALS
/*const firstName = 'Alexander';
const job = 'Web Developer';
const birthYear = 1983;
const year = 2024;

const alexander = "I'm " + firstName + " a " + (year - birthYear) +" "+ "year" + " " + job
console.log(alexander);

const alexNew = `I'm ${firstName} a ${year - birthYear} old ${job}`
console.log(alexNew);

let church = `Capricorn`;
console.log(church);

//  multiline string 
console.log('Alexander \n\ Msumba');
console.log(`Alexander 
    Msumba`);*/
    
// IF / ELSE STATEMENTS 
const age = 15;

if (age >= 18) {
     console.log('Alexander can drive 👮‍♂️');
} else {
    const yearsLeft = 18 - age;
    console.log(`Alexander is too young, wait another ${yearsLeft} years`);
 }
