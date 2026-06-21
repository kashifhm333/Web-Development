
// async function getUserData() {
//   // 1. Start the request and wait for the response
//   const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  
//   // 2. Turn the response into a readable JSON object
//   const data = await response.json();
  
//   // 3. Use the data!
//   console.log(data.name, data.phone);
// }

// getUserData();


async function fetchWeather() {
  try {
    const response = await fetch('https://api.example.com/weather');

    // Important: Fetch only throws an error if there is a network failure. 
    // We must manually check if the HTTP status is "OK" (200-299).
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Weather Data:", data);

  } catch (error) {
    // This runs if the fetch fails or if we 'throw' an error above
    console.error("Could not fetch data:", error.message);
  }
}