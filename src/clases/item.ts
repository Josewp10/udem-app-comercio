import { ReglaPrecio } from "../interfaces/reglaPrecio";
import { Producto } from "./producto";
import { ManejadorReglas } from "./manejadorReglas";

export class Item {
    constructor(
        public cantidad: number,
        private producto: Producto
    ) {}

    calcular_total(): number {
        const manejadorReglas = new ManejadorReglas(''); // Crear una instancia de ManejadorReglas
        const precioPorCantidad = this.producto.precio_unitario * this.cantidad;

        const regla: any = manejadorReglas.crear_regla(this.producto.sku);

        if (regla && regla.es_aplicable(this.producto.sku)) {
            return regla.calcular_total(this.cantidad, precioPorCantidad);
        } else {
            return precioPorCantidad;
        }
    }
}