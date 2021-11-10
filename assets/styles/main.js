const displayInput = document.querySelector(".calculator__input");
const displayOutput = document.querySelector(".calculator__output");
const operBtn = document.querySelectorAll(".operator__btn");
const numBtn = document.querySelectorAll(".number__btn");
const equalBtn = document.querySelector(".equal__btn");
const deciBtn = document.querySelector(".decimal__btn");
const delBtn = document.querySelector("#del__btn");

let firstValue = [];
let savedValue = [];
let operator;
let answer;


// Number Buttons //
numBtn.forEach((numberbtn) => {
  numberbtn.addEventListener("click", (event) =>{
    firstValue.push(numberbtn.value);
    displayInput.innerHTML = firstValue.join("");
    console.log(firstValue);
  })
  });

// Delete Button //
delBtn.addEventListener("click",(event) =>{
  firstValue.pop()
  displayInput.innerHTML=firstValue.join("");
  console.log(firstValue);
})

// Operator Buttons//
operBtn.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", (event) =>{
    savedValue = parseInt(firstValue.join(""));
     firstValue = [];
     operator = operatorBtn.value;
     displayInput.innerHTML += operatorBtn.innerText; //need to fix restricting only one oper
  })
})


// Equal Button // 

const result = () =>{
  if (operator === "*"){
    answer = parseInt(firstValue.join("")) * savedValue;
    displayOutput.innerHTML = answer;
  }else if (operator === "/"){
    answer = parseInt(firstValue.join("")) / savedValue;
    displayOutput.innerHTML = answer;
  }else if (operator === "+"){
    answer = parseInt(firstValue.join("")) + savedValue;
    displayOutput.innerHTML = answer;
  }else if (operator === "-"){
    answer = parseInt(firstValue.join("")) - savedValue;
    displayOutput.innerHTML = answer;
  }
}

equalBtn.addEventListener("click",result)


// const equal = (firstValue, savedValue, answer, operatorBtn) =>{
//   currentValue = parseInt(firstValue.join(""));
//   switch (operatorBtn){
//     case "+":
//       answer = currentValue + savedValue;
//       break;
//     case "-":
//     answer = currentValue - savedValue;
//     break;
//     case "×":
//     answer = currentValue * savedValue;
//     break;
//     case "÷":
//     answer = currentValue % savedValue;
//     break;
//   }
// }

//  equalBtn.addEventListener("click", equal);

