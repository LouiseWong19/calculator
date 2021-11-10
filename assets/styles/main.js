const displayInput = document.querySelector(".calculator__input");
const displayOutput = document.querySelector(".calculator__output");
const operBtn = document.querySelectorAll(".operator__btn");
const numBtn = document.querySelectorAll(".number__btn");
const equalBtn = document.querySelector(".equal__btn");
const deciBtn = document.querySelector(".decimal__btn");
const delBtn = document.querySelector("#del__btn");

let firstValue = [];
let secondValue = [];



numBtn.forEach((numberbtn) => {
  numberbtn.addEventListener("click", () =>{
    firstValue.push(numberbtn.value);
    displayInput.innerHTML = firstValue.join("");
    console.log("number");
  })
  });

delBtn.addEventListener("click",() =>{
  firstValue.pop()
  displayInput.innerHTML=firstValue.join("");
  console.log("delete");
})

// const multiply = (firstValue,secondValue)

// operBtn.forEach((operatorBtn) => {
//   operatorBtn.addEventListener("click", () =>{
//     if 
//   })
// })

  // operBtn.forEach((operatorbtn) => {
  //   operatorbtn.addEventListener("click",() =>{
  //     if 
  //   })
  // });
