import { ReglaPrecio } from "../interfaces/reglaPrecio";

export class ManejadorReglas {
    // Atributo type
    private field: string;
    //private regla: ReglaPrecio; // Atributo de tipo ReglaPrecio

    constructor(field: string) {
        this.field = field;
        //this.regla = regla;
    }

    // Método crear_regla
    crear_regla(sku: string) {
        // Puedes utilizar los métodos de la regla aquí
        //const esAplicable = this.regla.es_aplicable(sku);
        //// ...
    }
}