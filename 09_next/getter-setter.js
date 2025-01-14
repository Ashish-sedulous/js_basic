class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        return this._email=value
    }

    get password(){
        return `${this._password}ashish`
    }
    set password(value){
        this._password=value
    }
}

const ashish=new User("ashish@ai","abc")
console.log(ashish.email);
