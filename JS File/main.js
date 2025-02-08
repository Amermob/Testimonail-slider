let count = 1;
let num = 0;

let text = [
  "i Like this Product, its works greats with me.",
  "just as described in the title, love it",
  "Arrived Fast and the Condition of the product it good,i recommend",
  "its alright, wasnnt as good as i expected",
  "love it, will buy again, 10/10",
];
let names = ["Ahmed", "Khalid", "Osama", "Amer", "Ali"];
let counter = setInterval(() => {
  document.querySelector(".text").textContent = text[num];
  document.querySelector(".name").textContent = names[num];
  document.querySelector("img").src = `./img/${count}.jpg`;
  count++;
  num++;
  if (num === text.length) {
    num = 0;
  }
  if (count === 6) {
    count = 1;
  }
}, 3000);

counter;
