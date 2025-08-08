let precio = 300;
let iva = 21;

let total = precio + (precio * iva / 100);

console.log("Precio del producto: $" + precio);
console.log("IVA (" + iva + "%): $" + (precio * iva / 100).toFixed(2));
console.log("Precio total a pagar: $" + total.toFixed(2));

document.getElementById("resultado").textContent =
    "Total a pagar: $" + total.toFixed(2);