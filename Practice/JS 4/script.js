// let a = prompt("Enter a number:");
// let b = prompt("Enter another number:");

// let sum = parseInt(a) + parseInt(b);

// if (isNaN(sum)) {
    
//     throw SyntaxError("Invalid input: Please enter valid numbers.");

//     .catch (error) {
//         console.error(error.message);
//     }

// } else {
//     console.log(`${a} + ${b} = ${sum}`);
// }




try {
    const a = prompt("Enter a number:");
    const b = prompt("Enter another number:");

    const numA = Number(a);
    const numB = Number(b);

    if (Number.isNaN(numA) || Number.isNaN(numB)) {
        throw new Error("Invalid input: Please enter valid numbers.");
    }

    const sum = numA + numB;
    console.log(`${numA} + ${numB} = ${sum}`);
} catch (error) {
    console.error(error.message);
    alert(error.message);
}



