//object literals
Object.create
const mysym=Symbol("key1")
const user={
    name:"ashish",
    "fullname":"ashish chaudhary",
    [mysym]:"key1",
    age:20,
    location:"noida",
    course:"btech",
    email:"ashu.gmail.com",
    isloggedin:false,
    lgd:["monday","saturday"],
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user.fullname);
// console.log(user[mysym]);
// console.log(typeof user[mysym]);

// user.email="ashubaby.gmail.com"
// console.log(user.email);

//Object.freeze(user)

//console.log(user.email);
//console.log(user);

user.greeting=function(){
    console.log("hello world");
}
user.greetingtwo=function(){
    console.log(`hello world this is:${this.location}`);
}
console.log(user.greeting());
console.log(user.greetingtwo());

//const bhai=Object()//->singelton 

const bhai={}

bhai.id="abc123"
bhai.name="shivam"
bhai.isloggedin=true

//console.log(bhai);

const baby={
    email:"ashu",
    name:{
        fullname:{
            firstname:"ashu",
            lastname:"baby",
        }
    }
}
//console.log(baby.name.fullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}

//const obj4=Object.assign({},obj1,obj2,obj3)
//console.log(obj4);

const obj4={...obj1,...obj2,...obj3}
//console.log(obj4)

// console.log(Object.keys(bhai));
// console.log(Object.values(bhai));
// console.log(Object.entries(bhai));

const course={
    instructor:"sahil",
    price:"5555",
    name:"pathshala",
}

const {instructor}=course 

console.log(instructor);



