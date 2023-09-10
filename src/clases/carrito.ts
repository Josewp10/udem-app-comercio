import { Item } from "./item";
import { ReglaPrecio } from "../interfaces/reglaPrecio";
import { Producto } from "./producto";

export class Carrito {
    private type: string;
    private items: Item[] = [];

    constructor(type: string) {
        this.type = type;
    }

    agregar_producto(producto: Producto, cantidad: number) {
        const item = new Item(cantidad, producto);
        this.items.push(item);
    }

    calcular_total(regla: ReglaPrecio, producto: Producto): number {
        let total = 0;
        for (const item of this.items) {
            const precioPorCantidad = producto.precio_unitario * item.cantidad;
            if (regla.es_aplicable(producto.sku)) {
                total += regla.calcular_total(item.cantidad, precioPorCantidad);
            } else {
                total += precioPorCantidad;
            }
        }
        return total;
    }
}
