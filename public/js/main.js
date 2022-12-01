"use strict";

const btnAlert = document.querySelector("#click");
const btnColor = document.querySelector("#changeColor");
const btnColorReset = document.querySelector("#resetColor");

btnAlert.addEventListener("click", () => {
  alert("Hi there");
});
btnColor.addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "tomato";
});
btnColorReset.addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "white";
});
