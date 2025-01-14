class user{
    constructor(username){
        this.username=username
    }

    logme(){
        console.log(`Username: ${this.username}`);
    }

    static createid(){
        return `123`
    }
}

const ashish=new user("ashish")
//console.log(ashish.createid()); ->because of static its not a function

class teacher extends user{
    constructor(username,email) {        
       super(username)
       this.email=email
    }
}

const iphone=new teacher("iphone","i@phone.com")
iphone.logme()
