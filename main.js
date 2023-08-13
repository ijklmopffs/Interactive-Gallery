// Learn more about this here: https://www.stefanjudis.com/snippets/how-to-import-json-files-in-es-modules/
import data from "./static/gallery-items.json" assert { type: "json" };
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const h1 = document.querySelector("h1");
const grid = document.querySelector(".grid");
const returnBack = document.querySelector(".return");
const clicked = document.querySelector(".clicked");
const author = document.querySelector(".author");
const year = document.querySelector(".year");
const description = document.querySelector(".description");
const image = document.querySelector(".image");
const body = document.querySelector("body");

function handleElementClick(index) {
  author.textContent = data[index].author;
  year.textContent = data[index].year;
  description.textContent = data[index].description;
  image.src = data[index].image;
  body.style.backgroundColor = "rgb(41, 40, 40)";
  h1.classList.add("none");
  grid.classList.add("none");
  clicked.classList.remove("none");
}

one.addEventListener("click", () => {
  handleElementClick(2);
});
two.addEventListener("click", () => {
  handleElementClick(0);
});
three.addEventListener("click", () => {
  handleElementClick(4);
});
four.addEventListener("click", () => {
  handleElementClick(1);
});
five.addEventListener("click", () => {
  handleElementClick(5);
});
six.addEventListener("click", () => {
  handleElementClick(3);
});

returnBack.addEventListener("click", () => {
  h1.classList.remove("none");
  grid.classList.remove("none");
  clicked.classList.add("none");
  body.style.backgroundColor = "";
});
