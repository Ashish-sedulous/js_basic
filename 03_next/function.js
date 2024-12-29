// function saymyname(){
//     console.log("a");
//     console.log("s");
//     console.log("h");
//     console.log("i");
//     console.log("s");
//     console.log("h");    
// }

//saymyname()

// function addtwonum(num1,num2){
//     console.log(num1+num2);
// }
//addtwonum(3,5)

// function addtwonum(num1,num2){
//     const result=num1+num2
//     return result
// }

function addtwonum(num1,num2){
    return num1+num2
}

const result=addtwonum(3,5)
//console.log("Result: ",result);

// function loginuser(username){
//     if(username===undefined){
//         console.log("Pleaase enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// //console.log(loginuser("ashish"));
// console.log(loginuser());

function loginuser(username="ashu"){
    if(username===undefined){
        console.log("Pleaase enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginuser("ashish"));
//console.log(loginuser());

function calculateprice(...num1){
    return num1
}
function calculateprice1(val1,val2,...num1){
    return num1
}

//console.log(calculateprice(200,300,500,2000));

const user={
    username:"ashish",
    price:299
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleobject(user)
// handleobject({
//     username:"sam",
//     price:399,
// })

const arr=[200,300,400]

function returnsecondvalue(arr){
    return arr[1]
}

//console.log(returnsecondvalue(arr));
//console.log([200,400,500,600]);

function one(){
    const username="ashish"
    
    function two(){
        const website="youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}

//one()

if(true){
    const username="ashish"
    if(username=="ashish"){
        const website=" youtube"
        //console.log(username+website);
    }
    //console.log(website);
}

//console.log(username);

one(5)
function one(num){
    return num+1
}

const two=function(num){
    return num+2
}

two(5)//->it cannot be written above function declartion