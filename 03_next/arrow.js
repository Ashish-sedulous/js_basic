// const user={
//     username:"ashish",
//     price:999,

//     welcomemessage:function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
        
//     }
// }

// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()

//console.log(this);

// function chai(){
//     let username="ashish"
//     console.log(this.username); //->this.username kaam nhi karega output->undefined
// }

// chai()

// const chai=function(){
//     let username="ashish"
//     console.log(this.username);
// }

// chai()

// const chai=()=>{
//     let username="ashish"
//     console.log(this.username);
// }
// chai()

// const addtwo=(num1,num2)=>{
//     return num1+num2
// }

// const addtwo=(num1,num2)=> num1+num2

// const addtwo=(num1,num2)=> (num1+num2)

//const addtwo=(num1,num2)=> ({username:"ashish"})

//console.log(addtwo(3,4));

//++++++++++++++++++++++++++++++++++++++++
//immediately invoked Function Expression(IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();//;is used to stop the invoked function

( function code(){
    console.log(`DB COONECTED TWO`);
} )();

((name)=>{
        console.log(`DB CONNECTED THREE ${name}`); 
})('ashish')

//iide is used to protect from global scope or global variable or function i.e global pollution
