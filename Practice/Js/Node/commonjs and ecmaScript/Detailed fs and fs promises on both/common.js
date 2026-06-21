            //this is commonjs approach in async way to read and write file
// const fs = require('fs');

// fs.writeFile("ronaldo.txt", "Cristiano Ronaldo is the best football player in the world.", ()=>{
//     console.log("File created successfully.");
//     fs.readFile("ronaldo.txt",(err,data)=>{
//         if(err){
//             console.log("Error reading file: ", err);
//         }        else{
//             console.log("File content: ", data.toString());
//         }
//     })
// })


// fs.appendFile("ronaldo.txt","ok i know ronaldo is the best player",(err,data)=>{
//     console.log("File updated successfully.");
//     console.log(data);
    
// })



       // this is the commonjs approach in sync way to read and write file
const fs = require('fs');

fs.writeFileSync("ronaldo2.txt", "Cristiano Ronaldo is the best football player in the world.");
console.log("File created successfully.");
//    console.log(fs.readFileSync("ronaldo.txt").toString());
   

const data = fs.readFileSync("ronaldo2.txt");
console.log("File content: ", data.toString());

const append = fs.appendFileSync("ronaldo2.txt", "i am from async commonjs" )



