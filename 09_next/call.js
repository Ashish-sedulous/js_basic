function setusername(username){
    //complex db calls
    this.username=username
    console.log("CALLED");
}

function createuser(username,email,password){
    setusername.call(this,username)
    this.email=email
    this.password=password
}

const chai=new createuser("chai","chai@fb.com","123")
console.log(chai);
