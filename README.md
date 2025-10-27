Calculator Web App
A simple calculator built using HTML, CSS, and JavaScript. This project demonstrates the frontend development of a basic calculator capable of performing addition, subtraction, multiplication, and division, and displaying both the input expression and the evaluated result in real time.

Features:
Responsive calculator interface for web browsers​

Real-time updates to the expression and result displays

Basic arithmetic operations: addition (+), subtraction (-), multiplication (*), and division (/)

Decimal point (.) support

C button clears all input and the result

Distinct result display, separate from the main input expression

Styled using CSS Grid for button layout

Demo:
The calculator UI is inspired by standard scientific calculators and features a clean, modern design with color cues for operator buttons. You can see a similar implementation in the browser-based live demos and tutorials.​

Usage:
Clone this repository or copy the code into your project directory.

Ensure all three files (project3.html, project3.css, project3.js) are in the same directory for correct linking.

Open project3.html in a web browser to use the calculator.

File Structure:
project3.html
Contains the HTML markup for the calculator layout and structure.

project3.css
Provides styles for the calculator UI, including grid layout and button styling.

project3.js
Includes JavaScript logic for:

Handling button clicks

Updating the display in real-time

Performing calculations using the entered expression

Clearing the display and result

How It Works:
All button presses are handled through event listeners in the JavaScript file.

Inputted values and operators are displayed as you click.

Press = to evaluate the expression and show the result.

Press C to clear everything.
Notes:
The calculator uses JavaScript's eval() for expression evaluation. In production, consider a safer parsing alternative.

The result is always displayed separately below the main display for clarity.
