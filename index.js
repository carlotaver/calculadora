const container = document.querySelector(".calculator-container");

container.addEventListener("click", onClick);

function onClick(event) {
  if (event.target.tagName === "BUTTON") {
      const operators= event.target.innerText;
      const resultado= document.querySelector(".resultado");
      resultado.innerText=operators;
  }
}

