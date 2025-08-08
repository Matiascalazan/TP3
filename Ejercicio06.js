class Ficha {
    constructor(nombre) {
        this.nombre = nombre;
        this.sesiones = [];
        this.numsesiones = 0;
    }

    anotar(km) {
        this.sesiones.push(km);
        this.numsesiones++;
    }

    media() {
        if (this.numsesiones === 0) return 0;
        let total = this.sesiones.reduce((acum, valor) => acum + valor, 0);
        return total / this.numsesiones;
    }
}

let nombre = prompt("Ingrese su nombre:");
let ficha1 = new Ficha(nombre);


let cantidad = parseInt(prompt("¿Cuántas sesiones va a registrar?"));

for (let i = 1; i <= cantidad; i++) {
    let km = parseFloat(prompt(`Ingrese el numero de kilómetros recorridos en cada sesión ${i}:`));
    ficha1.anotar(km);
}

let promedio = ficha1.media().toFixed(2);

alert(`El promedio de kilometros recorridos por ${ficha1.nombre} es: ${promedio} km.`);

document.getElementById("resultado").innerHTML =
`<p><u>Ficha de Ejercicio de:</u></p>
    <p><strong>Nombre:</strong> ${ficha1.nombre}</p>
    <p><strong>Sesiones registradas:</strong> ${ficha1.numsesiones}</p>
    <p><strong>Sesiones (km):</strong> ${ficha1.sesiones.join(", ")}</p>
    <p><strong>Promedio de km recorridos:</strong> ${promedio} km</p>`;
