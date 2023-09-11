import { Usuario } from "./usuario";
import { Carrito } from "./carrito";
import { Producto } from "./producto";
import fs from 'fs';

export class Tienda {
    private total_ventas: number = 0;
    private productos: Producto[] = [];

    constructor() {
        this.cargarProductosDesdeArchivo('productos.json'); // Llama al método para cargar productos desde un archivo
    }

    private cargarProductosDesdeArchivo(ruta: string) {
        try {
            const data = fs.readFileSync(ruta, 'utf8');
            this.productos = JSON.parse(data) as Producto[];
            console.log("Productos cargados correctamente:", this.productos);
        } catch (error) {
            console.error("Error al cargar los productos:", error);
        }
    }


    agregar_producto_a_carrito(usuario: Usuario, producto: Producto, cantidad: number) {
        const carrito = new Carrito("Carrito de Tienda"); // Crear un nuevo carrito
        carrito.agregar_producto(producto, cantidad);
        this.total_ventas += producto.precio_unitario * cantidad;
    }
}