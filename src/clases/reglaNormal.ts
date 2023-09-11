import {ReglaPrecio} from '../interfaces/reglaPrecio';

export class ReglaNormal implements ReglaPrecio {
    es_aplicable(sku: string): boolean {
        return sku.startsWith("EA"); // Aplicable si el SKU comienza con "EA"
    }

    calcular_total(cantidad: number, precio: number): number {
        return cantidad * precio;
    }
}
