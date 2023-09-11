import {ReglaPrecio} from '../interfaces/reglaPrecio';

export class ReglaNormal implements ReglaPrecio {
    es_aplicable(): boolean {
        return true; // Siempre es aplicable para productos normales
    }

    calcular_total(cantidad: number, precio: number): number {
        return cantidad * precio;
    }
}
