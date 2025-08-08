//Clase Cliente
class Cliente {
    constructor(nombre, email, telefono) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }
}

//Clase Factura
class Factura {
    constructor(idCliente, total) {
        this.idCliente = idCliente;
        this.total = total;
        this.estado = "pendiente";
    }

    cobrar() {
        this.estado = "pagada";
    }

    imprimir(clientes) {
        let cliente = clientes[this.idCliente];
        return `
            <p><strong>Cliente:</strong> ${cliente.nombre}</p>
            <p><strong>Email:</strong> ${cliente.email}</p>
            <p><strong>Teléfono:</strong> ${cliente.telefono}</p>
            <p><strong>Total:</strong> $${this.total}</p>
            <p><strong>Estado:</strong> ${this.estado}</p>
            <hr>
        `;
    }
}

let clientes = [
    new Cliente("Calazan Matias", "matiascalazan@gmail.com", "3874870660"),
    new Cliente("Lucia López", "lucia@email.com", "3819876543"),
    new Cliente("Carlos Gomez", "carlos@email.com", "3815554433")
];

//factura
let factura1 = new Factura(0, 8500);

//Cobrar la factura
factura1.cobrar();

//Mostrar en HTML
document.getElementById("resultado").innerHTML = factura1.imprimir(clientes);
