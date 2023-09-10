import { ReglaPrecio } from "../interfaces/reglaPrecio";
import { Producto } from "./producto";
import { ManejadorReglas } from "./manejadorReglas";

export class Item {
    constructor(
        public cantidad: number,
        private manejadorReglas: ManejadorReglas
    ) {}

    calcular_total(regla: ReglaPrecio, producto: Producto): number {
        const precioPorCantidad = producto.precio_unitario * this.cantidad;
        
        if (regla.es_aplicable(producto.sku)) {
            return regla.calcular_total(this.cantidad, precioPorCantidad);
        } else {
            return precioPorCantidad;
        }
    }
}