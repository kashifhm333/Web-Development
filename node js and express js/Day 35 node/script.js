// async function car() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(7);
//         }, 2000);
//     });
// }

// (async function bmw(){
//     let c = await car();
//     console.log(c);

// })();




////// distructuring////////

// let [a,b] = [1,2];
// console.log(a,b);

                    //// for array
// let [a,b,c, ...rest] = [1,2,3,4,5];
// // console.log(a,b,c);
// console.log(rest);



                        //// for object//////

let obj = {
    name : "kashif",
    age : 22,
    city : "karachi"
}

// console.log(obj.name);


// let {name,age} = obj;
// console.log(name,age);




////////////////////////Array to sum/////////////

// let arr = [1,2,3,4,5];
// let sum = arr.reduce((a, b) => {
//     return a + b;
// }, 0);
// console.log(sum);


let arr =[1,2,3]

function sum(a, b, c) {
    return a + b + c;
}

// console.log(arr[0]+arr[1]+arr[2]);
// console.log(sum(arr[0],arr[1],arr[2]));
console.log(sum(...arr));



