const arr=[1,2,3,4,5]

for (const i of arr) {
   // console.log(i);
}

const greetings="Hello World"

for (const greet of greetings) {
   // console.log(`Each char is ${greet}`);
}

//Maps

const map= new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR',"France")
map.set('IN',"India")

//console.log(map);

for (const key of map) {
   //console.log(key);  
}

for (const [key,value] of map) {
   //console.log(key, ':-', value);  
}

const myObject={
   game1 : 'NFS',
   game2 : 'spiderman',
}

// for (const [key,value] of myObject) {
//    console.log(key,':-',value);
// }
//objects are not itterable for forof loop