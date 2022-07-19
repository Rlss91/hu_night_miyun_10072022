function handleCalcClick() {
  let emailInput = document.getElementById("emailInput").value;
  let passwordInput = document.getElementById("passwordInput").value;
  let nameInput = document.getElementById("nameInput").value;
  let lastNameInput = document.getElementById("lastNameInput").value;
  let ageInput = document.getElementById("ageInput").value;
  let areasInput = document.getElementById("areasInput").value;
  const BASECOURSEPRICE = 20000;
  const MAAAM = 1.17;
  let finalPrice = BASECOURSEPRICE;
  if (ageInput < 18) {
    alert("you too young, you cant join");
    return; // stop the function here
  } else if (ageInput >= 18 && ageInput <= 40) {
    finalPrice *= 1.3;
  } else if (ageInput >= 41 && ageInput <= 60) {
    finalPrice *= 1.2;
  }
  //   console.log("areasInput", areasInput);
  if (areasInput == "Center") {
    finalPrice *= 1.5;
  } else if (areasInput == "North") {
    finalPrice *= 1.2;
  } else if (areasInput == "Lowland") {
    finalPrice *= 1.3;
  }
  finalPrice *= MAAAM;
  console.log("finalPrice", finalPrice);
  let priceMsg = `
    your name is ${nameInput} ${lastNameInput}\n
    your email is ${emailInput}\n
    your age is ${ageInput}\n
    your area is ${areasInput}\n
    your price is ${finalPrice}₪\n
  `;
  alert(priceMsg);
}
