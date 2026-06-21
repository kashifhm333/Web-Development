import fs from "fs/promises";

let a = await fs.readFile("hello.txt");
console.log(a.toString());

let b = await fs.writeFile("hello.txt", "Hello siiiiiiiiiii k");
console.log(b);
