let litros = parseFloat(prompt("Ingresa los litros de nafta consumidos:"));
let kilometros = parseFloat(prompt("Ingresa los kilómetros recorridos:"));

let consumoPorKm = litros / kilometros;

alert("El consumo por kilómetro es: " + consumoPorKm.toFixed(2) + " Litros por kilómetro");
