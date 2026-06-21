// This function represents a process that takes time (like cooking)
async function preparePizza() {
    return new Promise((resolve) => {
        console.log("👨‍🍳 Chef: Starting to cook the pizza...");

        setTimeout(() => {
            resolve("🍕 Hot Pepperoni Pizza"); // The "result" after 2 seconds
        }, 2000);
    });
}

// This function "waits" for the result
async function orderFood() {
    console.log("🛒 Customer: I just placed my order.");

    // 'await' stops the code here until the pizza is ready
    let meal = await preparePizza(); 

    console.log(`😋 Customer: Finally! I am eating my ${meal}`);
    
    console.log(`rifasdf asjnfjkdf`);
    console.log(`kioiiiiiiiiiiiiiiiii asjnfjkdf`);
    console.log(`rifasdf asjnfjkdfqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq`);
    
}


// Run the process
// orderFood().catch((err) => console.log("Error:", err));








            ///////////// WITHOUT 'async' AND 'await' KEYWORDS /////////////

// This function still returns a Promise
function preparePizza() {
    return new Promise((resolve, reject) => {
        console.log("👨‍🍳 Chef: Cooking started...");
        
        setTimeout(() => {
            resolve("🍕 Hot Pizza");
        }, 2000);
    });
}

// NO 'async' keyword needed here because we aren't using 'await'
function orderFood() {
    console.log("🛒 Customer: I placed my order and I'm going to watch TV while I wait.");

    // We call the function and use .then() to handle the result later
    preparePizza()
        .then((meal) => {
            // This code ONLY runs once the pizza is ready
            console.log(`😋 Customer: The pizza is here! I am eating my ${meal}`);
        })
        .catch((err) => {
            // This code ONLY runs if something goes wrong
            console.log("❌ Oh no, the oven broke:", err);
        });

    console.log("📺 Customer: (Still watching TV while the pizza cooks...)");
}

// orderFood();








///////////////// USING CALLBACKS INSTEAD OF PROMISES /////////////


// 1. The function that does the work takes a 'callback' as a parameter
function preparePizza(callback) {
    console.log("👨‍🍳 Chef: Cooking started...");
    
    setTimeout(() => {
        let meal = "🍕 Hot Pizza";
        // 2. Instead of 'resolving', we just call the function we were given
        callback(meal);
    }, 2000);
}

// 3. We define what to do when the food is ready
function eat(food) {
    console.log(`😋 Customer: Eating my ${food}`);
}

// 4. Run it by passing 'eat' into 'preparePizza'
console.log("🛒 Customer: I placed my order.");
preparePizza(eat);
console.log("🚶 Customer: I'm going to walk the dog while I wait...");