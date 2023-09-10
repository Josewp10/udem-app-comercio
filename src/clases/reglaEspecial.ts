import {ReglaPrecio} from '../interfaces/reglaPrecio';

class ReglaEspecial implements ReglaPrecio {
    es_aplicable(sku: string): boolean {
       
        return true; 
    }

    calcular_total(cantidad: number, precio: number): number {
        return cantidad * precio;
    }
}