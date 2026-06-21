require("console");
const fs = require("fs");

// console.log(fs);

console.log(`starting`);
fs.writeFile("hello.txt","Hello 1")
// fs.writeFileSync("hello.txt","Hello 1");

// console.log(`Ending`);

// fs.writeFile("hello.txt","Hello 1")

// fs.writeFile("hello2.txt","Hello 2", ()=>{
//     console.log(`File is written`);
// });


// fs.writeFile("hello2.txt", "Hello 2", () => {
//     console.log(`File is written`);
//     fs.readFile("hello2.txt", (error, data) => {
//         console.log(error, data.toString());
//     });
// });




//////////// append file
fs.appendFile("hello.txt","i appended hello", (e,d)=>{
    console.log(d);
    
});


console.log(`Ending`);






