// Global variable
let age = 20;

// Function in global context
function displayAge() {
  console.log("Current Age:", age);
}

// Function that updates the global variable//function execution context
function changeAge() {
  age = 25;  // updating global age
  console.log("Age updated inside function:", age);
}

// Calling the functions
displayAge();   // Output: Current Age: 20
changeAge();    // Output: Age updated inside function: 25
displayAge();   // Output: Current Age: 25 (updated)
