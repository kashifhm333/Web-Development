const fs =require('fs');


// fs.writeFile("commonjs.txt","CommonJS is a old module system used in Node.js",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("File is created");
//     }
// })


// fs.readFile("commonjs.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })
// fs.appendFile("commonjs.txt","I am appending data to the file",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Data is appended to the file");
//     }
// })





// ??commonjs in sync way?? //


fs.writeFileSync("commonjsSYS.txt", "I am form commonjs in a sync way");


