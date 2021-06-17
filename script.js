const transactionPanel = document.querySelector(".transactions");
const titleInput = document.querySelector(".titleInput");
const dateInput = document.querySelector(".dateInput");
const typeInput = document.querySelector(".typeInput");
const amountInput = document.querySelector(".amountInput");
const balanceText = document.querySelector(".balance p");
const labels = document.querySelectorAll("label");
const inputs = document.querySelectorAll("input");
const select = document.querySelector("select");

const titleDiv = document.querySelector(".title");
const balanceArea = document.querySelector(".balance");

const main = document.querySelector("main");
const aside = document.querySelector("aside");
const section = document.querySelector("section");

const changeOnWhiteColor = document.querySelector(".white");
const changeOnBlackColor = document.querySelector(".black");
const acceptButton = document.querySelector(".accept");
const deleteAllButton = document.querySelector(".delete");
console.log(acceptButton);

console.log(titleInput);

let balance = 0;

let root = document.documentElement;

balanceText.textContent = balance;

const clearValues = () => {
  titleInput.value = "";
  typeInput.value = "";
  dateInput.value = "";
  amountInput.value = "";
  inputs.forEach((input) => input.classList.remove("err"));
  select.classList.remove("err");
};

const createTransaction = () => {
  if (
    typeInput.value === "income" &&
    dateInput.value !== "" &&
    titleInput.value !== "" &&
    amountInput.value !== ""
  ) {
    const trans = document.createElement("div");
    trans.classList.add("singleOperation");
    trans.innerHTML = `<div class="operationDate">${dateInput.value}</div>
  <div class="operationTitle">${titleInput.value}</div>
  <div class="operationAmount">+${amountInput.value} PLN</div>`;
    balance = Number(balance) + Number(amountInput.value);
    balanceText.textContent = balance;
    transactionPanel.appendChild(trans);
    clearValues();
  } else if (
    typeInput.value === "expense" &&
    dateInput.value !== "" &&
    titleInput.value !== "" &&
    amountInput.value !== ""
  ) {
    const trans = document.createElement("div");
    trans.classList.add("singleOperation", "exp");
    trans.innerHTML = `<div class="operationDate">${dateInput.value}</div>
  <div class="operationTitle">${titleInput.value}</div>
  <div class="operationAmount">-${amountInput.value} PLN</div>`;
    balance = Number(balance) - Number(amountInput.value);
    balanceText.textContent = balance;
    transactionPanel.appendChild(trans);
    clearValues();
  } else {
    select.value !== ""
      ? select.classList.remove("err")
      : select.classList.add("err");
    inputs.forEach((input) => {
      if (input.value !== "") {
        return;
      } else {
        input.classList.add("err");
      }
    });
  }
};

const check = () => {
  inputs.forEach((input) => input);
};

const deleteAllData = () => {
  balance = 0;
  balanceText.textContent = balance;
  clearValues();
  transactionPanel.innerHTML = "";
};

const blackColor = () => {
  labels.forEach((label) => (label.style.color = "white"));
  balanceArea.style.color = "white";
  titleDiv.style.color = "white";
  main.style.backgroundColor = "rgb(20, 30, 35)";
  section.style.backgroundColor = "rgb(20, 30, 35)";
  aside.style.backgroundColor = "rgb(20, 30, 35)";
};

const whiteColor = () => {
  labels.forEach((label) => (label.style.color = "black"));
  balanceArea.style.color = "black";
  titleDiv.style.color = "black";
  main.style.backgroundColor = "rgb(255, 255, 255)";
  section.style.backgroundColor = "rgb(255, 255, 255)";
  aside.style.backgroundColor = "rgb(255, 255, 255)";
};

changeOnWhiteColor.addEventListener("click", whiteColor);
changeOnBlackColor.addEventListener("click", blackColor);
deleteAllButton.addEventListener("click", deleteAllData);
acceptButton.addEventListener("click", createTransaction);
