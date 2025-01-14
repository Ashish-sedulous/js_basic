// const user={
//     username: "ashish",
//     logincount: 8,
//     signedin: true,

//     getuserdetails: function(){
//         //console.log("Got user details from user database");
//         // console.log(`username:${this.username}`);
//         // console.log(this);
//     }
// }

// console.log(user.username);
// console.log(user.getuserdetails());
// console.log(this);

function user(username,logincount,isloggedin){
    this.username=username;
    this.logincount=logincount;
    this.isloggedin=isloggedin;

    return this
}

const userone=new user("ashish",12,true)
const usertwo=new user("chai aur code",12,true)
console.log(userone);
console.log(usertwo);

