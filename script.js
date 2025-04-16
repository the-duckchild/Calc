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
    document.getElementById("resultdisplay").textContent = calculation;
    console.log(calculation);
  } catch (error) {
    document.getElementById("resultdisplay").innerText = "Error";
    calculation = "";
    console.log(calculation);
  }
}

function clearDisplay() {
  calculation = "";
  document.getElementById("calcdisplay").innerText = "0";
  document.getElementById("resultdisplay").textContent = "0";
  console.log(calculation);
}

function deleteLastCharacter() {
  calculation = calculation.toString().slice(0, -1); // Remove last character
  document.getElementById("resultdisplay").innerText = "0";
  document.getElementById("calcdisplay").innerText = calculation;
  console.log(calculation);
}
