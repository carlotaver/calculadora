const container = document.querySelector(".calculator-container");

container.addEventListener("click", onClick);

function onClick(event) {
  if (event.target.tagName === "BUTTON") {
      const pulsado = event.target.innerText;
      const resultado = document.querySelector(".resultado");
      resultado.innerText = pulsado;

      switch (pulsado) {
        case '1':
          console.log('El 1');
          break;
        case '2':
        case '3':
          console.log('El 2 y el 3');
          break;
        default:
          console.log('Otro numero: ' + pulsado + '.');
      }
  }
}

