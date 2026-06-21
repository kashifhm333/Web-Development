let cpuUsages = [45, 82, 30, 95, 60, 20];

console.log("--- Starting System Health Check ---");

for (let i = 0; i < cpuUsages.length; i++) {
    let currentUsage = cpuUsages[i];

    if (currentUsage > 80) {
        console.log(`Alert: High CPU usage detected at ${currentUsage}%!`);
    } else {
        // Optional: you can print "Normal" for the others
        console.log(`Usage at ${currentUsage}%: Normal`);
    }
}

console.log("--- Health Check Complete ---");
