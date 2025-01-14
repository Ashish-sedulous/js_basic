//ES6

class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password
    }

    encryptpassword(){
        return `${this.password}abc`
    }

    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai=new User("chai","chi@gmail.com","123")

console.log(chai.encryptpassword());
console.log(chai.changeusername());

//behind the scene

function user(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password
}

user.prototype.encryptpassword=function(){
    return `${this.password}abc`
}

user.prototype.changeusername=function(){
    return `${this.username.toUpperCase()}`
}

const tea=new User("chai","chi@gmail.com","123")

console.log(tea.encryptpassword());
console.log(tea.changeusername());

class user1{
    constructor(username){
        this.username=username
    }

    logme(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends user1{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addcourse(){
        console.log(`A new course was added by${this.username}`);
    }
}

const chai1=new Teacher("chai","chai@example.com","123")

chai1.addcourse()