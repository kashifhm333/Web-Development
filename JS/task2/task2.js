function calculateMonthlyBill(hourlyRate,hoursUsed)
{
    let totalBill = hourlyRate * hoursUsed;
    return totalBill;

}
let myBill = calculateMonthlyBill(0.05, 720);

console.log("Estimated Monthly Cost: $" + myBill);