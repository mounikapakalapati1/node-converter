const readline = require("readline");

// Fixed exchange rate
const INR_TO_USD_RATE = 0.012; // 1 INR = 0.012 USD
const USD_TO_INR_RATE = 1 / INR_TO_USD_RATE; // 1 USD = 83.33 INR

// Create an interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to convert INR to USD
function convertINRtoUSD(amount) {
  return (amount * INR_TO_USD_RATE).toFixed(2);
}

// Function to convert USD to INR
function convertUSDtoINR(amount) {
  return (amount * USD_TO_INR_RATE).toFixed(2);
}

// Function to handle user choices
function startConverter() {
  console.log("\nCurrency Converter");
  console.log("1. Convert INR to USD");
  console.log("2. Convert USD to INR");
  console.log("3. Exit");

  rl.question("Choose an option: ", (choice) => {
    if (choice === "1") {
      rl.question("Enter amount in INR: ", (amount) => {
        const result = convertINRtoUSD(parseFloat(amount));
        console.log(`${amount} INR is approximately ${result} USD.`);
        startConverter(); // Loop back to main menu
      });
    } else if (choice === "2") {
      rl.question("Enter amount in USD: ", (amount) => {
        const result = convertUSDtoINR(parseFloat(amount));
        console.log(`${amount} USD is approximately ${result} INR.`);
        startConverter(); // Loop back to main menu
      });
    } else if (choice === "3") {
      console.log("Exiting the converter. Goodbye!");
      rl.close(); // Exit the program
    } else {
      console.log("Invalid choice. Please try again.");
      startConverter(); // Loop back to main menu
    }
  });
}

// Start the converter
startConverter();
