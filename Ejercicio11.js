function creaDiv() {const nuevoDiv = document.createElement("div");

  nuevoDiv.textContent = "Javascript permite crear paginas dinamicas";
  nuevoDiv.style.backgroundColor = "red";
  nuevoDiv.style.color = "white";
  nuevoDiv.style.textAlign = "center";
  nuevoDiv.style.padding = "10px";
  nuevoDiv.style.marginTop = "10px";

  document.getElementById("contenedor").appendChild(nuevoDiv);}
