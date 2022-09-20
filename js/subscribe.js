let drinkMethodRadio = document.querySelectorAll("input[name='drink-method']");
let coffeeTypeRadio = document.querySelectorAll("input[name='coffee-type']");
let amountRadio = document.querySelectorAll("input[name='amount']");
let grindRadio = document.querySelectorAll("input[name='grind']");
let frequencyRadio = document.querySelectorAll("input[name='frequency']");

const drinkMethodSpan = document.getElementById("drink-method-span");
const typeSpan = document.getElementById("type-span");
const amountSpan = document.getElementById("amount-span");
const groundSpan = document.getElementById("ground-span");
const frequencySpan = document.getElementById("frequency-span");
const modalDrinkMethod = document.getElementById("modal-drink-method");
const modalType = document.getElementById("modal-type");
const modalAmount = document.getElementById("modal-amount");
const modalGround = document.getElementById("modal-ground");
const modalFrequency = document.getElementById("modal-frequency");

let dmRadio = false;
let ctRadio = false;
let amRadio = false;
let grRadio = false;
let frRadio = false;
let disabled = true;

const createBtn = document.getElementById("create-btn");
const editBtn = document.getElementById("edit-btn");
const backdrop = document.querySelector(".backdrop");
const modalContainer = document.querySelector(".modal-container");
const totalSpan = document.getElementById("total-span");

let total = "0";

function findSelectedMethod() {
  let selected = document.querySelector("input[name='drink-method']:checked");
  drinkMethodSpan.textContent = selected.value;
  modalDrinkMethod.textContent = selected.value;
}

function findSelectedType() {
  let selected = document.querySelector("input[name='coffee-type']:checked");
  typeSpan.textContent = selected.value;
  modalType.textContent = selected.value;
}

function findSelectedAmount() {
  let selected = document.querySelector("input[name='amount']:checked");
  amountSpan.textContent = selected.value;
  modalAmount.textContent = selected.value;
}

function findSelectedGrind() {
  let selected = document.querySelector("input[name='grind']:checked");
  groundSpan.textContent = selected.value;
  modalGround.textContent = selected.value;
}

function findSelectedFrequency() {
  let selected = document.querySelector("input[name='frequency']:checked");
  frequencySpan.textContent = selected.value;
  modalFrequency.textContent = selected.value;
  if (selected.value === "every week") {
    total = "28.80";
  } else if (selected.value === "every 2 weeks") {
    total = "19.20";
  } else if (selected.value === "every month") {
    total = "12.00";
  }
}

function checkSelections() {
  for (const drinkMethodRadios of drinkMethodRadio) {
    if (drinkMethodRadios.checked) {
      dmRadio = true;
    }
  }
  for (const coffeeTypeRadios of coffeeTypeRadio) {
    if (coffeeTypeRadios.checked) {
      ctRadio = true;
    }
  }
  for (const amountRadios of amountRadio) {
    if (amountRadios.checked) {
      amRadio = true;
    }
  }
  for (const grindRadios of grindRadio) {
    if (grindRadios.checked) {
      grRadio = true;
    }
  }
  for (const frequencyRadios of frequencyRadio) {
    if (frequencyRadios.checked) {
      frRadio = true;
    }
  }
  if (dmRadio && ctRadio && amRadio && grRadio && frRadio) {
    disabled = false;
  }
}

function createPlan() {
  checkSelections();
  console.log(disabled);
  if (disabled) {
    alert("Please finish selecting your options for your order.");
  } else {
    totalSpan.textContent = total;
    backdrop.style.visibility = "visible";
    modalContainer.style.visibility = "visible";
  }
}

function closeModal() {
  backdrop.style.visibility = "hidden";
  modalContainer.style.visibility = "hidden";
}

drinkMethodRadio.forEach((radioBtn) => {
  radioBtn.addEventListener("change", findSelectedMethod);
});

coffeeTypeRadio.forEach((radioBtn) => {
  radioBtn.addEventListener("change", findSelectedType);
});

amountRadio.forEach((radioBtn) => {
  radioBtn.addEventListener("change", findSelectedAmount);
});

grindRadio.forEach((radioBtn) => {
  radioBtn.addEventListener("change", findSelectedGrind);
});

frequencyRadio.forEach((radioBtn) => {
  radioBtn.addEventListener("change", findSelectedFrequency);
});

createBtn.addEventListener("click", createPlan);
editBtn.addEventListener("click", closeModal);
