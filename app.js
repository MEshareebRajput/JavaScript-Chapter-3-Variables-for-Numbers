// Q1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age = 17;
alert("Your age is: " + age);

// Q2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page ?
let num = 0;

// Increment visit count on mouse enter
document.body.addEventListener("mouseenter", () => {
    num++;
    alert(`You have visited this site ${num} times.`);
    document.getElementById("visitCount").innerText = `You have visited this site ${num} times.`;
});
// Q3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser ?
const birthYear = 2007; 
const message = `You were born in the year ${birthYear}.`;
document.getElementById("birthYearMessage").innerText = message;

// Q4. Store visitor's information and display order message ?
const visitorName = "Ali"; 
const productTitle = "T-shirt"; 
const quantity = 5; 

const orderMessage = `${visitorName} ordered ${quantity} ${productTitle}(s) on MER Clothing store.`;
document.getElementById("orderMessage").innerText = orderMessage;