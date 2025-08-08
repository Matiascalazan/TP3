//Clase Proveedor
class Proveedor {
    constructor(nombre, email, telefono) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
    }
}

//Clase Articulo
class Articulo {
    constructor(nombre, precio, proveedor) {
        this.nombre = nombre;
        this.precio = precio;
        this.proveedor = proveedor;
    }

    telefono() {
        return {
            nombre: this.proveedor.nombre,
            telefono: this.proveedor.telefono
        };
    }
}

//proveedor
let proveedor1 = new Proveedor("HardComponents", "contactohardcomponnets.com", "38145568890");

//artículo
let articulo1 = new Articulo("Procesador Ryzen 7 8700g", 395000, proveedor1);

//datos del proveedor
let contacto = articulo1.telefono();

document.getElementById("resultado").innerHTML = `
    <p><strong>Articulo:</strong> ${articulo1.nombre}</p>
    <p><strong>Precio:</strong> $${articulo1.precio}</p>
    <p><strong>Proveedor:</strong> ${articulo1.proveedor.nombre}</p>
    <p><strong>Email:</strong> ${articulo1.proveedor.email}</p>
    <p><strong>Teléfono:</strong> ${contacto.telefono}</p>`;
