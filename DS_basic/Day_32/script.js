// do while loop

var userInput;
do{
    console.log("namaste india");
    // userInput = prompt("app continue karna chate ho kya yes or no").toLowerCase()
} while (userInput === "yes");


      // Guess the number

// var com = Math.floor(Math.random() * 100 + 1);
// var userInput;
// console.log(com);

// do{
//  userInput = Number(prompt("Guess the number in between 1 to 100"));
//      if(isNaN(userInput) || userInput  < 0 || userInput > 100 || userInput == 0) {
//         console.log("please enter valid number");
//         continue;
//      }   

//      if(userInput > com) console.log("To high , Try again");
//      else if(userInput < com) console.log("to low , try again");
//      else {
//            console.log("congrulation 🎂 and number was " + com);
           
//      }
// }while (userInput !== 0)


    // sasta calculator
// var userInput;
// do {
//   var num1 = parseFloat(prompt("Enter first number:"));
//   var num2 = parseFloat(prompt("Enter second number:"));
//   var operator = prompt("Enter operator (+, -, *, /):");

//   switch (operator) {
//     case '+':
//       console.log("Result: " + (num1 + num2));
//       break;
//     case '-':
//       console.log("Result: " + (num1 - num2));
//       break;
//     case '*':
//       console.log("Result: " + (num1 * num2));
//       break;
//     case '/':
//       if (num2 !== 0) console.log("Result: " + (num1 / num2));
//       else console.log("Cannot divide by zero.");
//       break;
//     default:
//       console.log("Please enter a valid operator.");
//       break;
//   }

//   userInput = prompt("Do you want to continue? (yes/no)").toLowerCase();
// } while (userInput === "yes");


// project resturant 
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let total = 0;

const menu = {
  1: { name: "Pizza", price: 150 },
  2: { name: "Burger", price: 100 },
  3: { name: "Fries", price: 80 },
  4: { name: "Coke", price: 40 },
};

function showMenu() {
  console.log("\nWelcome to JavaScript Dhaba 🍽");
  console.log("Menu:");
  for (let key in menu) {
    console.log(`${key}. ${menu[key].name} - ₹${menu[key].price}`);
  }
}

function askOrder() {
  rl.question("\nEnter your choice (1-4): ", (choice) => {
    const item = menu[choice];
    if (item) {
      total += item.price;
      console.log(`${item.name} added ✔️ (₹${item.price})`);
    } else {
      console.log("Invalid choice ❌. Please try again.");
    }

    rl.question("Would you like to order something else? (yes/no): ", (answer) => {
      if (answer.toLowerCase() === "yes") {
        showMenu();
        askOrder();
      } else {
        console.log(`\nThank you for ordering! 🧾\nYour total bill is ₹${total}`);
        rl.close();
      }
    });
  });
}

showMenu();
askOrder();
