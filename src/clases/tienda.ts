import { Usuario } from "./usuario";
import { Carrito } from "./carrito";
import { Producto } from "./producto";

export class Tienda {
    private total_ventas: number = 0;

    agregar_producto_a_carrito(usuario: Usuario, producto: Producto, cantidad: number) {
        const carrito = new Carrito("Carrito de Tienda"); // Crear un nuevo carrito
        carrito.agregar_producto(producto, cantidad);
        this.total_ventas += producto.precio_unitario * cantidad;
    }
}