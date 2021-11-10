const displayInput = document.querySelector(".calculator__input");
const displayOutput = document.querySelector(".calculator__output");
const operBtn = document.querySelectorAll(".operator__btn");
const numBtn = document.querySelectorAll(".number__btn");
const equalBtn = document.querySelector(".equal__btn");
//const deciBtn = document.querySelector(".decimal__btn");
const delBtn = document.querySelector("#del__btn");
const acBtn = document.querySelector("#delAll__btn");

let firstValue = [];
let savedValue = [];
let operator;
let answer;


// Number Buttons //
numBtn.forEach((numberbtn) => {
  numberbtn.addEventListener("click", () =>{
    firstValue.push(numberbtn.value);
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
})

// Operator Buttons//
operBtn.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", () =>{
    savedValue = parseInt(firstValue.join(""));
     firstValue = [];
     operator = operatorBtn.value;
     displayInput.innerHTML += operatorBtn.innerText; //need to fix restricting only one oper
  })
})


// Equal Button // 

const result = () =>{
  if (operator === "*"){
    answer = parseFloat(firstValue.join("")) * savedValue;
    displayOutput.innerHTML = answer;
  }else if (operator === "/"){
    answer = parseFloat(firstValue.join("")) / savedValue;
    displayOutput.innerHTML = answer;
  }else if (operator === "+"){
    answer = parseFloat(firstValue.join("")) + savedValue;
    displayOutput.innerHTML = answer;
  }else if (operator === "-"){
    answer = parseFloat(firstValue.join("")) - savedValue;
    displayOutput.innerHTML = answer;
  }
}

equalBtn.addEventListener("click",result)

//fix the operators


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

