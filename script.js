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
/*const age = 15;

if (age >= 18) {
     console.log('Alexander can drive 👮‍♂️');
} else {
    const yearsLeft = 18 - age;
    console.log(`Alexander is too young, wait another ${yearsLeft} years`);
 }

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21
}

console.log(century);*/

// ==== TYPE CONVERSION AND COERCION ====
//  type conversion
/*const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Alex')); // NAN

const numberToString = 1991;
console.log(String(numberToString));
console.log(typeof String(numberToString));

// type coercion 
console.log('I am ' + 23 + ' years old');

// ==== TRUTHY AND FALSY VALUES
// 0, "", undefined, null, NaN, false 
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean("Alexander")); //truthy
console.log(Boolean(null));
console.log(Boolean(9)); //   
console.log(Boolean(false));

const money = 160;
if (money) {
    console.log("please don't use it all");
} else {
    console.log("you should get a job");
}

let height = 0;
if (height) {
    console.log("Hey, height is great");
} else {
    console.log('height is UNDEFINED');
}*/

// ====== EQUALITY OPERATORS == vs ===
/*const age = 18;
if (age === 18) console.log("He is old (strict)"); // use ===

if (age == 18) console.log('He is old (loose)'); // avoid ==

const fav = Number(prompt("What is your name"));
console.log(fav);
console.log(typeof fav);

if (fav === 40) {
    console.log("That is my age");
} else if (fav === 7) {
    console.log("That is not my age");
} else {
    console.log("non of the above");
}*/

// ===== LOGICAL OPERATORS =======
/*const hasDriversLicense = true // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);

console.log(hasDriversLicense || hasGoodVision);

console.log(!hasDriversLicense && hasGoodVision);

const isTired = false; // C
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive');  
} else {
    console.log('Someone must drive'); 
}*/

// ======== THE SWITCH STATEMENT ========
/*const day = "tuesday";

switch (day) {
    case 'monday':
        console.log("plan my week");
        console.log("coding school");
        break;
    case "tuesday":
        console.log("Going to gym");
        break;
    case "wednesday":
        console.log("Midweek service");
        break;
    case "thursday":
    case "friday":
        console.log("I go to work");
        break;
    case "saturday":
    case "sunday":
        console.log("Church");
        break;
    default:
        console.log("not valid");      
}
        */

// STATEMENTS AND EXPRESSIONS
// if (100 > 20) {
//     const str = '100 is greater'
// }

// const me = 'Alexander'
// console.log(`I'm ${2024 - 1983} year old ${me}`);

// THE CONDITIONAL (Ternary) OPERATOR 
 const age = 23;
// age >= 18 ? console.log("I like to drink wine") : console.log('I drink water');

const drink = age >= 18 ? "I drink wine" : "I drink water";
console.log(drink);

let me = 'Alex';
if (age >= 23) {
    me = "Alexander is old"
} else {
    me = "he is young"
}

console.log(me);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);








