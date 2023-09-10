export class Producto {
    constructor(
        public sku: string,
        public nombre: string,
        public descripcion: string,
        public unidades_disponibles: number,
        public precio_unitario: number
    ) {}

    hay_unidades(cantidad: number): boolean {
        return this.unidades_disponibles >= cantidad;
    }
}
