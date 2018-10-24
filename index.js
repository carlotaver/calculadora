const container = document.querySelector(".calculator-container");

container.addEventListener("click", onClick);

let primerNumero = "";

function onClick(event) {
  if (event.target.tagName === "BUTTON") {
    const pulsado = event.target.innerText;
    const resultado = document.querySelector(".resultado");

    switch (pulsado) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        console.log("Esto es un numero: " + pulsado + ".");
        primerNumero = primerNumero + pulsado;
        resultado.innerText = primerNumero;
        break;
      case "+":
      case "−":
      case "×":
      case "÷":
        console.log("Esto es un operador: " + pulsado + ".");
        break;
      default:
        console.log("Esto no es un numero: " + pulsado + ".");
      case "C":
        console.log("Esto es: " + pulsado + ".");
        break;
      case "←":
        console.log("Esto es: " + pulsado + ".");
        break;
      case "=":
        console.log("Esto es: " + pulsado + ".");
        break;
    }
  }
}
