// script.js
// Part 1: JavaScript Basics - Variables and Conditionals
function checkAge() {
    // Get user input
    let age = parseInt(document.getElementById('ageInput').value);
    let message;
    
    // Validate input and check condition
    if (isNaN(age)) {
        message = "Please enter a valid age.";
    } else if (age >= 18) {
        message = "You are eligible to vote!";
    } else {
        message = "You are not eligible to vote yet.";
    }
    
    // Output the result
    document.getElementById('ageOutput').textContent = message;
}

// Part 2: JavaScript Functions
function calculateArea() {
    // Get user input
    let radius = parseFloat(document.getElementById('radiusInput').value);
    
    // Validate input
    if (isNaN(radius) || radius <= 0) {
        document.getElementById('areaOutput').textContent = "Please enter a valid radius.";
        return;
    }
    
    // Calculate area using the reusable function
    let area = calculateCircleArea(radius);
    document.getElementById('areaOutput').textContent = `Area of circle with radius ${radius} is ${area.toFixed(2)}`;
}

// Reusable function to calculate area of a circle
function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

function formatText() {
    // Get user input
    let text = document.getElementById('textInput').value;
    
    // Validate input
    if (!text) {
        document.getElementById('textOutput').textContent = "Please enter some text.";
        return;
    }
    
    // Format text using the reusable function
    let formattedText = capitalizeText(text);
    document.getElementById('textOutput').textContent = formattedText;
}

// Reusable function to capitalize text
function capitalizeText(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

// Part 3: JavaScript Loops
function runLoop() {
    // Get user input
    let n = parseInt(document.getElementById('loopInput').value);
    
    // Validate input
    if (isNaN(n) || n <= 0) {
        document.getElementById('loopOutput').textContent = "Please enter a valid number.";
        return;
    }
    
    // Use a for loop to generate numbers
    let output = "";
    for (let i = 1; i <= n; i++) {
        output += i + " ";
    }
    
    // Output the result
    document.getElementById('loopOutput').textContent = output;
}

function iterateArray() {
    // Create an array of fruits
    let fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"];
    let output = "Fruits array: ";
    
    // Use forEach to iterate through the array
    fruits.forEach((fruit, index) => {
        output += `${index + 1}. ${fruit} `;
    });
    
    // Output the result
    document.getElementById('arrayOutput').textContent = output;
}

// Additional demonstration of while loop (not directly in UI)
function countdownExample() {
    let count = 5;
    let output = "Countdown: ";
    
    // Use a while loop for countdown
    while (count > 0) {
        output += count + " ";
        count--;
    }
    
    output += "Liftoff!";
    console.log(output);
}

// Part 4: DOM Manipulation
function changeStyles() {
    // Toggle class for box1
    document.getElementById('box1').classList.toggle('highlight');
    
    // Change background color for box2
    document.getElementById('box2').style.backgroundColor = '#ff5722';
    
    // Apply transformation to box3
    document.getElementById('box3').style.transform = 'rotate(15deg)';
    document.getElementById('box3').style.backgroundColor = '#4caf50';
}

function resetStyles() {
    // Reset all boxes to original state
    document.getElementById('box1').classList.remove('highlight');
    document.getElementById('box2').style.backgroundColor = '#6a11cb';
    document.getElementById('box3').style.transform = 'none';
    document.getElementById('box3').style.backgroundColor = '#6a11cb';
}

function addNewItem() {
    // Create new DOM element
    let listOutput = document.getElementById('listOutput');
    let newItem = document.createElement('div');
    newItem.textContent = `Item ${listOutput.children.length + 1}`;
    
    // Append to existing content
    listOutput.appendChild(newItem);
}

function removeLastItem() {
    // Remove DOM element
    let listOutput = document.getElementById('listOutput');
    if (listOutput.children.length > 1) {
        listOutput.removeChild(listOutput.lastChild);
    }
}

// Event listener for color changer button
document.getElementById('colorChanger').addEventListener('click', function() {
    // Change button color on click
    const colors = ['#ff7675', '#74b9ff', '#55efc4', '#a29bfe', '#ffeaa7'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.style.backgroundColor = randomColor;
});

// Run the countdown example on page load
countdownExample();