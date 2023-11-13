// script.js

let display = document.getElementById("Display");
let inputHistory = "";

function aggiungi(element) {
  let simbolo = element.getAttribute("data-simbolo");
  inputHistory += simbolo;
  display.value = inputHistory;
}

function cancella() {
  inputHistory = "";
  display.value = "";
}

function risultato() {
  try {
    let result = calcolaEspressione(inputHistory);
    display.value = result;
    inputHistory = result.toString();
  } catch (error) {
    display.value = "Errore";
    inputHistory = "";
  }
}

function calcolaEspressione(espressione) {
  let tokens = espressione.match(/[+\-*/]|\d+(\.\d+)?/g) || [];
  let risultato = parseFloat(tokens[0]);

  for (let i = 1; i < tokens.length; i += 2) {
    let operatore = tokens[i];
    let numero = parseFloat(tokens[i + 1]);

    switch (operatore) {
      case "+":
        risultato += numero;
        break;
      case "-":
        risultato -= numero;
        break;
      case "*":
        risultato *= numero;
        break;
      case "/":
        risultato /= numero;
        break;
      default:
        throw new Error("Operatore sconosciuto: " + operatore);
    }
  }

  return risultato;
}
