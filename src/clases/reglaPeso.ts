import {ReglaPrecio} from '../interfaces/reglaPrecio';

export class ReglaPeso implements ReglaPrecio {
    es_aplicable(): boolean {
        return true; // Siempre es aplicable para productos de peso
    }

    calcular_total(cantidad: number, precio: number): number {
        // Se asume que el precio es en gramos y se convierte a kilogramos
        const pesoEnKg = precio / 1000;
        return cantidad * pesoEnKg;
    }
}