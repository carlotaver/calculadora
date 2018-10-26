const container = document.querySelector(".calculator-container");

container.addEventListener("click", onClick);

let primerNumero = "";
let operador = "";
let segundoNumero = "";

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

        if (operador === "") {
          primerNumero = primerNumero + pulsado;
          resultado.innerText = primerNumero;
        } else {
          segundoNumero = segundoNumero + pulsado;
          resultado.innerText = segundoNumero;
        }
        break;
      case "+":
      case "−":
      case "×":
      case "÷":
        console.log("Esto es un operador: " + pulsado + ".");
        operador = pulsado;
        break;
      default:
        console.log("Esto no es un numero: " + pulsado + ".");
      case "C":
        if (operador === "") {
          primerNumero = "";
          resultado.innerText = "0";
        } else {
          segundoNumero = "";
          resultado.innerText = "0";
        }
        console.log("Esto es: " + pulsado + ".");
        break;
      case "←":
        console.log("Esto es: " + pulsado + ".");
        if (operador === "") {
          primerNumero = primerNumero.slice(0, primerNumero.length - 1);
          resultado.innerText = primerNumero;
        } else {
          segundoNumero = segundoNumero.slice(0, segundoNumero.length - 1);
          resultado.innerText = segundoNumero;
        }

        break;
      case "=":
        console.log("Esto es: " + pulsado + ".");
        switch (operador) {
          case "+":
            const sumado = parseInt(primerNumero) + parseInt(segundoNumero);
            resultado.innerText = String(sumado);
            break;
          case "−":
            const restado = parseInt(primerNumero) - parseInt(segundoNumero);
            resultado.innerText = String(restado);
            break;
          case "×":
            const multiplicado =
              parseInt(primerNumero) * parseInt(segundoNumero);
            resultado.innerText = String(multiplicado);
            break;
          case "÷":
            const dividido = parseInt(primerNumero) / parseInt(segundoNumero);
            resultado.innerText = String(dividido);
            break;
        }
        break;
    }
  }
}
