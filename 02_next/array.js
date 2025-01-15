//const arr1=[1,2,3,4,5,6]

//console.log(arr1);
//arr1.push(7,8)
//console.log(arr1);
//console.log(arr1[0]);

// arr1.unshift(9)
// console.log(arr1);
// arr1.shift()

// console.log(arr1.includes(9));
// console.log(arr1.indexOf(3));

//newarr=arr1.join()

// console.log(newarr);
// console.log(typeof(newarr));

// console.log("A ",arr1);

// const myn1=arr1.slice(1,3)

// console.log(myn1);
// console.log("B ",arr1);

// const myn2=arr1.splice(1,3)
// console.log("C ",arr1);
// console.log(myn2);

const marvel_heroes=["thor","stark","rogers","quil"]
const dc_heroes=["batman","superman","flash"]

//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes);
//console.log(marvel_heroes[4]);

const newarr=marvel_heroes.concat(dc_heroes)
//console.log(newarr);

const arr1=[...marvel_heroes,...dc_heroes]
//console.log(arr1);

const arr2=[1,2,3,[4,5,6],7,[8,9,10,11,[12,13,14]],15]

const arr3=arr2.flat(Infinity)
//console.log(arr3);

console.log(Array.isArray("ashish"));//->false
console.log(Array.from("ashish"));
console.log(Array.from({name:"ashish"}));//intresting

const a=100
const b=200
const c=300

console.log(Array.of(a,b,c));



