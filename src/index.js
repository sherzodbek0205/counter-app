const time = document.querySelector(".time");
const step = document.querySelector(".step");
const counter = document.querySelector(".counter");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
let a = 1;
let b = 1;
plus.onclick = () => {
	setTimeout(() => {
  counter.innerText = eval(`${counter.innerText}+${step.value}`);
	}, `${time.value}000`);
};
minus.onclick = () => {
	setTimeout(() => {
  counter.innerText = eval(`${counter.innerText}-${step.value}`);
	}, `${time.value}000`);
};
