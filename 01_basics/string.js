//string interpolation (by using backtricks ``)

const name="ashish"
const age=20

// console.log(`Hello my name is ${name} and my age is ${age}`);

const gamename= new String('ashubaby')

// console.log(gamename[0]);
// console.log(gamename.__proto__);

// console.log(gamename.length);
// console.log(gamename.toLocaleUpperCase());
// console.log(gamename.charAt(3));
//console.log(gamename.indexOf('u'));

const newstr= gamename.substring(0,3)
console.log(newstr);
const anotherstr= gamename.slice(-8, 4)
console.log(anotherstr);
const newstr1="  ashu  "
console.log(newstr1);
console.log(newstr1.trim());//->remove spaces means trim its space

const url="https://ashish.com/ashish%20chaudhary"

console.log(url.replace('%20','-'));//->replace things

console.log(url.includes('sundar'));//->check whether it is included in it or not

console.log(gamename.split(' '));//->split the string on element given 