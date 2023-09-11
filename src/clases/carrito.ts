import { Item } from "./item";
import { ReglaPrecio } from "../interfaces/reglaPrecio";
import { ManejadorReglas } from "./manejadorReglas";
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

    calcular_total(): number {
        let total = 0;
        for (const item of this.items) {
            total += item.calcular_total();
        }
        return total;
    }
}
