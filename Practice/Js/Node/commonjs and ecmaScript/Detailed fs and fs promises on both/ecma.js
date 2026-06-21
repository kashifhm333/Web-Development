import fs from 'fs';
//   this is the ES6 approach in async way to read and write file
// fs.writeFile("ronaldo_ed6_async.txt","Ronaldo is the best in async way",()=>{
//     console.log("File created successfully.");
//     fs.readFile("ronaldo_ed6_async.txt",(err,data)=>{
//         if(err){
//             console.log("Error reading file: ", err);
//         }
//         else{
//             console.log("File content: ", data.toString());
//         }
//     })
// })

// fs.appendFile("ronaldo_ed6_async.txt","ok i know ronaldo is the best player",(err,data)=>{
//     console.log("File updated successfully.");
//     console.log(data);

// })
// now let's see the sync approach

fs.writeFileSync("ronaldo_ed6_sync.txt","Ronaldo is the best in sync way");
console.log("File created successfully.");
console.log(fs.readFileSync("ronaldo_ed6_sync.txt").toString());
fs.appendFileSync("ronaldo_ed6_sync.txt","ok i know ronaldo is the best player in sync way" )