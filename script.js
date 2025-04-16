var calculation = ""; // Initialize the calculation variable

// Update calculation variable and display when button clicked
function updateCalculation(value) {
  calculation += value;
  document.getElementById("calcdisplay").innerText = calculation;
  console.log(calculation);
}

// calculate result when equals pressed

function calculateResult() {
  try {
    calculation = eval(calculation);
    calculation = Math.round(calculation * 100) / 100; // Round to two decimal places
    document.getElementById("result-display").textContent = calculation;
    console.log(calculation);
  } catch (error) {
    document.getElementById("result-display").innerText = "Error";
    calculation = "";
    console.log(calculation);
  }
}

function clearDisplay() {
  calculation = "";
  document.getElementById("calculation-display").innerText = "";
  document.getElementById("result-display").textContent = "0";
  console.log(calculation);
}

function deleteLastCharacter() {
  calculation = calculation.toString().slice(0, -1); // Remove last character
  document.getElementById("result-display").innerText = "0";
  document.getElementById("calculation-display").innerText = calculation;
  console.log(calculation);
}
