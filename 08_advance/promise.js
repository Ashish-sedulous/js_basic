const promiseone=new Promise(function(resolve,reject){
    //Do an asyn task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Asyn task is completed');
        resolve()
    },1000)
})

promiseone.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Asyn 2 resolved");
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"ashish",password:"123"})
        }else{
            reject('ERROR:Something went wrong')
        }
    })
})

promisefour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("The promise is either resolved or rejected")
)

const promisefive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"javascript",password:"123"})
        }else{
            reject('ERROR:JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try{
        const response=await promisefive
    console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumePromiseFive()

// async function getALlUsers(){
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')

//         const data=await response.json()
//         console.log(data);
//     }catch(error){
//         console.log("E:",error);
//     }
// }

// getALlUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))