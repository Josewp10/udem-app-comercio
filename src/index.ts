import { Usuario } from './clases/usuario';
import { Tienda } from './clases/tienda';
import { Producto } from './clases/producto';
import * as fs from 'fs';

const usuario = new Usuario('cliente');
const tienda = new Tienda();

while (true) {
    console.log("\n•-•- Tienda de Comercio -•-•");
    console.log("1. Agregar producto al carrito");
    console.log("2. Calcular total de la compra");
    console.log("3. Comprar");
    console.log("4. Salir");
    const opcion = prompt("Seleccione una opción: ");

    if (opcion === "1") {
        const sku:string = String(prompt("Ingrese el SKU del producto a agregar: "))
        const cantidad = parseInt(String(prompt("Ingrese la cantidad a agregar: ")));
        tienda.agregar_producto_a_carrito(usuario, new Producto(sku, '', '', 10, 100), cantidad);
    } else if (opcion === "2") {
        console.log(`El total de la compra es: ${tienda.calcular_total_de_compra()}`);
    } else if (opcion === "3") {
        tienda.guardar_ventas_en_archivo('ventas.json');
        console.log("Venta realizada con éxito.");
    } else if (opcion === "4") {
        // Guardar datos antes de salir
        tienda.guardar_ventas_en_archivo('ventas.json');
        break;
    } else {
        console.log("Opción no válida. Intente de nuevo.");
    }
}
