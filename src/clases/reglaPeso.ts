import {ReglaPrecio} from '../interfaces/reglaPrecio';

export class ReglaPeso implements ReglaPrecio {
    es_aplicable(sku: string): boolean {
        return sku.startsWith("WE"); // Aplicable si el SKU comienza con "WE"
    }

    calcular_total(cantidad: number, precio: number): number {
        // Se asume que el precio es en gramos y se convierte a kilogramos
        const pesoEnKg = precio / 1000;
        return cantidad * pesoEnKg;
    }
}