import fs from 'fs/promises';

try {
    await fs.writeFile("ronaldo_promises.txt", "Cristiano Ronaldo is the best football player in the world.");
    console.log("File created successfully.");
    await fs.appendFile("ronaldo_promises.txt", "\nI know kjjnhbbhg is the best player.");
    console.log("File updated successfully.");
    const data = await fs.readFile("ronaldo_promises.txt", "utf-8");
    console.log("File content:", data);

} catch (err) {
    console.error("An error occurred:", err);
}

console.log("Ending program (Non-blocking)");