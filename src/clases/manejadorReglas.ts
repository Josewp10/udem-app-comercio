import { ReglaPrecio } from "../interfaces/reglaPrecio";

export class ManejadorReglas {
    // Atributo type
    private type: string;
    private regla: ReglaPrecio; // Atributo de tipo ReglaPrecio

    constructor(type: string, regla: ReglaPrecio) {
        this.type = type;
        this.regla = regla;
    }

    // Método crear_regla
    crear_regla(sku: string) {
        // Puedes utilizar los métodos de la regla aquí
        const esAplicable = this.regla.es_aplicable(sku);
        // ...
    }
}