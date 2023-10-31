import { characters } from "./data.js";

const inputEl = document.querySelector(".input--length");
const generateBtn = document.querySelector("#generate-btn");
generateBtn.addEventListener("click", () => generatePasswords());

const generatePasswords = () => {
  document.querySelector("#password--one").textContent = generatePassword();
  document.querySelector("#password--two").textContent = generatePassword();
};

const passwordOne = document.querySelector("#password--one");
passwordOne.addEventListener("click", () => copyToClip("password--one"));

const passwordTwo = document.querySelector("#password--two");
passwordTwo.addEventListener("click", () => copyToClip("password--two"));

const generatePassword = () => {
  let password = "";
  for (let index = 0; index < inputEl.value; index++) {
    password += returnRdmItem(characters);
  }
  return password;
};

const returnRdmItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const copyToClip = (elementId) => {
  navigator.clipboard.writeText(
    document.querySelector(`#${elementId}`).textContent
  );
};
