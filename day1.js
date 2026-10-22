var abd = 10;
console.log(abd);
// const today = new Date();

//! console.log(today);

const today = new Date();

console.log(today.getDay());


// let maxNum = Math.min(...xyz);

// console.log(maxNum);

// console.log(xyz.includes("hello"));

// var newarr = xyz.slice(0,1);
// console.log(newarr);
// newarr.map((item)=>{
//     console.log( item);
// })

// console.log(xyz.filter(product=>product<40));




let xyz = [10,23,45,67,89];

// console.log(xyz[3]);
let abhi =xyz.splice(1,1);

// console.log(abhi);
// console.log(xyz);
// abhi.map((item)=>{
//     console.log(item);
// })
let kal = xyz.splice(1,0,35);
console.log(xyz);

let missingNumber = (num) =>{
for (let i=1; i<num.length+1;i++){
    if(!num.includes(i)){
        return i;
    }
}
}
console.log(missingNumber([0,1,2,3,5,6,7,8,9,4,10]));

// missingNumber([0,1,2,3,4,5,6,7,8,9,10]);
