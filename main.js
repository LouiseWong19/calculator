const displayInput = document.querySelector(".calculator__input");
const displayOutput = document.querySelector(".calculator__output");
const operBtn = document.querySelectorAll(".calculator__operator");
const numBtn = document.querySelectorAll(".calculator__number");
const equalBtn = document.querySelector(".calculator__equal");
//const deciBtn = document.querySelector(".decimal__btn");
const delBtn = document.querySelector(".calculator__del");
const acBtn = document.querySelector(".calculator__del-all");

let firstValue = [];
let savedValue = [];
let operator;
let answer;


// Number Buttons //
numBtn.forEach((numberBtn) => {
  numberBtn.addEventListener("click", () =>{
    firstValue.push(numberBtn.value);
    displayInput.innerHTML = firstValue.join("");
    console.log(firstValue);
  })
  });

// Delete Button //
delBtn.addEventListener("click",() =>{
  firstValue.pop()
  displayInput.innerHTML=firstValue.join("");
  console.log(firstValue);
})

acBtn.addEventListener("click",() =>{
  firstValue = [];
  savedValue = [];
  operator = "";
  displayOutput.innerHTML=firstValue;
  displayInput.innerHTML=savedValue;
  console.clear()
})

// Operator Buttons //
operBtn.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", () =>{
    savedValue = parseFloat(firstValue.join(""));
     firstValue = [];
     operator = operatorBtn.value;
     displayInput.innerHTML += operatorBtn.innerText;
     
  })
})


// Equal Button // 
const result = () => {
  displayInput.innerHTML=firstValue.join("");
  if (operator === "*") {
    answer = parseFloat(firstValue.join("")).toFixed(5) * savedValue.toFixed(5);
  } else if (operator === "/") {
    answer = savedValue.toFixed(5) / parseFloat(firstValue.join("")).toFixed(5);
  } else if (operator === "+") {
    answer = (parseFloat(firstValue.join("")) + savedValue).toFixed(3);
  } else if (operator === "-") {
    answer = (savedValue - parseFloat(firstValue.join(""))).toFixed(3);
  }
  displayOutput.innerHTML = answer;

};

equalBtn.addEventListener("click",result)


