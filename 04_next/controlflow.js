// const temp=51
// if(temp<50){
//     console.log("less than 50");
// }
// else{
//     console.log("greater than 50"); 
// }

// const score=200

// if(score>100){
//     let power="fly"
//     console.log(`User power: ${power}`);
// }

//console.log(`user power: ${power}`);
//variable or value cannot be accesed outside scope

// const balance=1200
// if(balance>500) console.log("test"),console.log("test2");

// const userloggedin=true
// const debitcard=true
// const loggedinfromgoogle=false
// const loggedinfromemail=true

// if(userloggedin && debitcard && 2==2){
//     console.log("Allow to buy course");
// }

// if(loggedinfromemail || loggedinfromgoogle || 2==3){
//     console.log("allow to buy courses");
// }

//+++++++++++++++++++++++++++++++++++++++++++++

//switch function use

// const month=3

// switch (month) {
//     case 1:
//          console.log("hello 1");
//          break;
//     case 2:
//          console.log("hello 2");
//          break;
//     case 3:
//          console.log("hello 3");
//         break;
//     case 4:
//         console.log("hello 4");
//         break;
//     case 5:
//         console.log("hello 5");
//         break;  

//     default:
//         console.log("dafault hello");
        
//         break;
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++

//truthy aned falsy value

// const user="ashu"

// if(user){
//     console.log("Got user name");
//     //asume true value if user have some value
// }
// else{
//     console.log("Dont have user name");
//     //assume false when user is empty
// }

//falsy values

//false,0,-0, BigInt On, "", null, undefined, NaN 

//truthy vlaues

//true,"0",'false'," ", [],{}, function(){}

// const userEmail=[]

// if(userEmail.length===0){
//     console.log("aray is empty");
// }

// const emptyObj={}

// if(Object.keys(emptyObj).length===0){
//     console.log("Object is empty");
// }

//Nullish Coalescing operator (??):Null undefined

//used to handle errors or assign some values in case of errror

// let val1;
//val1=5 ?? 10 //output->5
// val1 = null ?? 10 //otput->10
// val1= undefined ?? 15 //output->15
// val1=null ?? 10 ?? 5 //output->10
// console.log(val1);

//Terniary operator

//condition ? true : false

const price=100
price <=80 ? console.log("less than 80") :console.log("more than 80");

