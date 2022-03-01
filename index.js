let boxes = document.getElementsByClassName("box");
let buttons = document.getElementsByTagName("button");

let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

let initialVal = document.getElementById("initial");
let finalVal = document.getElementById("final");
let result = document.getElementById("answer");

let sum = document.getElementById("add");
let diffrence = document.getElementById("subtract");
let reset = document.getElementById("reset");

let form = document.getElementById("form");

let onSubmit = () => {
  let value1 = initialVal.value;
  let value2 = finalVal.value;
  alert(parseInt(value1) + parseInt(value2));
};

sum.addEventListener("click", () => {
  let value1 = initialVal.value;
  let value2 = finalVal.value;
  result.innerHTML = parseInt(value1) + parseInt(value2);
});

diffrence.addEventListener("click", () => {
  let value1 = initialVal.value;
  let value2 = finalVal.value;
  result.innerHTML = parseInt(value1) - parseInt(value2);
});

reset.addEventListener("click", () => {
  initialVal.value = "";
  finalVal.value = "";
  result.innerHTML = "";
});

// document.addEventListener("click", myFunction);

//MANIPULATION
// Element
// Event
// Function

btn1.addEventListener("click", () => {
  box1.classList.toggle("pink_box");
});

btn2.addEventListener("click", () => {
  box2.classList.add("green_box");
});

btn3.addEventListener("click", () => {
  box3.classList.add("white_box");
});

btn4.addEventListener("click", () => {
  box1.classList.remove("pink_box");
  box2.classList.remove("green_box");
  box3.classList.remove("white_box");
});

let hello = () => {
  console.log(box2.classList);
};

let addClass = () => {
  box2.classList.add("box-round");
};

let removeClass = () => {
  box2.classList.remove("box-round");
};
