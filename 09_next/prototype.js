let myheroes=["thor","spiderman"]

let heropower={
    thor:"hammer",
    spiderman:"sling",
    getspiderpower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyashish=function(){
    console.log(`ashish says hello`);
}

// heropower.hitesh()
// myheroes.hitesh()
// myheroes.heyashish()
// heropower.heyashish() ->error because object is not applid on array

//inheritance

const user={
    name:"chai",
    email:"chai@google.com",
}

const teacher={
    makevideo:true
}

const Teachingsupport={
    isavailable:false
}

const TAsupport={
    makeAssignment:'JS asignment',
    fulltime:true,
    __proto__:Teachingsupport,
}

teacher.__proto__=user

//mordern syntax

Object.setPrototypeOf(Teachingsupport,teacher)

let anotherusername="chaiaurcode   "

String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
}

anotherusername.truelength()
"ashish".truelength()
"icecrean".truelength()
