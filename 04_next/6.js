const mynumbers=[1,2,3,4,5,6,7,8,9,10]

// const newnums=mynumbers.map( (num)=>num+10)
// console.log(newnums);

// mynumbers.forEach( (nums,index,array)=>{array[index]=nums+10});
// console.log(mynumbers);

const newnums=mynumbers
               .map((num)=>num*10)
               .map((num)=>num+4)
               .filter((num)=>num>=40)

console.log(newnums);
