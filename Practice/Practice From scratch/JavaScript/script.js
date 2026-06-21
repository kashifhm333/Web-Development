// console.log('Ronaldo is the best player in the world');

// let a = {
//     salary: 1000,
//     bonus: 500,
   
// }
// console.log(a);

// a.salary = 2000;
// a.bonus = 1000;
// console.log(a);

// console.log('can you drive');

// let age = 18;

// if (age >= 18) {
//     console.log('you can drive');
// }
// else {
//     console.log('Yes, you cannot drive');
// }



// a = 6;
// b = 8;
// let c = a > b ? (a - b) : (b - a);
// console.log(c);



// let obj = {
//     name: 'Kashif',
//     age: 22,
//     city: 'Karachi',
//     country: 'Pakistan'
// }

// for (let key in obj) {
//     console.log(key + ': ' + obj[key]);
// }


function greet(name){
    console.log(`${name} is the best`);
    console.log(`${name} is the fuoisfuis`);
    console.log(`${name} is the kjiujkj`);
    
}
// greet('Kashif');

let namee = (name)=> {
      console.log(`${name} is the best`);
    console.log(`${name} is the fuoisfuis`);
    console.log(`${name} is the kjiujkj`);
    
}
// namee('Kashif');

let pp =(obj) => {
    for (let key in obj) {
        console.log(key + ': ' + obj[key]);
    }
}
// pp(obj);
// let a = "Harry";
// let b = "ShivamSh"
// console.log(b.replace("Sh", "77"))
// console.log(b.concat(a," ","Aishwariya", "Rahul", "Priya"))

// console.log(b.toUpperCase());


// let random = Math.random()
// console.log(random)
// let a = prompt("Enter first number")
// let c = prompt("Enter operation")
// let b = prompt("Enter second number")

// let obj = {
//     "+": "-",
//     "*": "+",
//     "-": "/",
//     "/": "**",
// }



// if (random > 0.5) {
//     // Perform correct calculation
//     console.log(`The result is ${a} ${c} ${b}`)
//     alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
// }

// else {
//     // Perform wrong calculation
//     c = obj[c]
//     alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 

// }


let arr=[1,2,3,4,5,6,7,8,9,10]

// console.log(arr.toString());
// console.log(arr.join(" and "));


// arr.forEach((element) => {
//     console.log(element);
// });

arr.forEach((value, index, arr) => {
    console.log(value, index, arr);
});

// for(const key in arr){
//     console.log(arr[key],key,arr);
// }
