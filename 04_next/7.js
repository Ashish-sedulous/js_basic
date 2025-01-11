const mynums=[1,2,3]

// const mytotoal=mynums.reduce(function (acc,curval) {
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc+curval
// },0)

// console.log(mytotoal);

const mytotal=mynums.reduce((acc,cur)=>acc+cur,0)
//console.log(mytotal);

const shopp=[
    {
        itemname: "py course",
        price: 2999,
    },
    {
        itemname: "java course",
        price: 3999,
    },
    {
        itemname: "mobile course",
        price: 5999,
    },
    {
        itemname: "ds course",
        price: 8999,
    }
]

const sum=shopp.reduce((acc,item)=>acc+item.price,0)
console.log(sum);
