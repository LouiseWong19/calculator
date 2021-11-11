# Calculator
### Author - Louise Wong

## Introduction 
A simple calculator created with HTML and JavaScript that can do simple calculations with two inputs. Included addition, subtraction, multiplication and division features where users can calculate whole and decimal numbers.

### Technolgy Used:
- HTML
- SCSS
- JavaScript

### Design
The idea for the calculator body design came from Game Boy and BlackBerry phone. I have chosen the primary colour of the calculator to be rocket metallic (#857E7D). To bring out the contrast of the calculator buttons, I chose lavender blush (#FCEEED) and used eerie black (#141414) as the background colour to bring the user's focus on the calculator.

## Description 
### Calculator Body
Created multiple `<div>` for the body, display (including input and output) and buttons. Used DOM to bring dynamic data to the HTML.

### Input Arrays
Arrays (`firstValue` and `savedValue`) represent the first and second inputs so numbers can be stored in the arrays. `forEach()` was used to loop through the number and operator buttons during the click events. 

### Number Buttons
When a number button has been pressed, the number value `numberbtn.value` will be displayed on the input display panel. As the number values are stored in an array so `.join("")` is used to join all the number values in the array into one string.

### Operator Buttons
The same principle goes to the `operatorBtn`. `firstValue` will be stored as `savedValue` when an operator button has been pressed and `firstValue` will become empty.

### Calculating Result
`If` statements are used to determine the calculation. Conditions are set to read and identify the operator value. `parseFloat()` is used to convert `firstValue` (which is the second input) into a number.

### Delete Buttons
Two delete buttons, `acBtn` and `delBtn` have been added. `.pop()` is used to create the delete button as it removes the last item in an array. `acBtn` clears the `firstValue`, `savedValue` and `operator` once it has been pressed.

## Roadmap
### Failed to add in 
- Accepting more than 2 inputs

### Features to add
- Round up button 
- Square root button 
- Percentage button 

## Known Bug
- Second input does not display on the same line as the first input





