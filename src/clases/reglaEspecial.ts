import {ReglaPrecio} from '../interfaces/reglaPrecio';

export class ReglaEspecial implements ReglaPrecio {
    es_aplicable(sku: string): boolean {
        return sku.startsWith("SP"); // Aplicable si el SKU comienza con "SP"
    }

    calcular_total(cantidad: number, precio: number): number {
        const descuentoMaximo = 0.5; // 50%
        const unidadesConDescuento = Math.floor(cantidad / 3);
        const unidadesSinDescuento = cantidad % 3;
        const totalConDescuento = unidadesConDescuento * (precio * 0.8); // 20% de descuento
        const totalSinDescuento = unidadesSinDescuento * precio;
        return totalConDescuento + totalSinDescuento > precio * descuentoMaximo
            ? precio * descuentoMaximo
            : totalConDescuento + totalSinDescuento;
    }
}