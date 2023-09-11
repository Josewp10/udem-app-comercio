import { ReglaPrecio } from "../interfaces/reglaPrecio";
import { ReglaNormal } from "./reglaNormal";
import { ReglaEspecial } from "./reglaEspecial";
import { ReglaPeso } from "./reglaPeso";


export class ManejadorReglas {
    private field: string; // Atributo field

    constructor(field: string) {
        this.field = field;
    }

    crear_regla(sku: string): ReglaPrecio {
        // Utilizando la lógica proporcionada en el enunciado para determinar el tipo de producto
        if (sku.startsWith("EA")) {
            return new ReglaNormal();
        } else if (sku.startsWith("WE")) {
            return new ReglaPeso();
        } else if (sku.startsWith("SP")) {
            return new ReglaEspecial();
        } else {
            throw new Error("Tipo de producto no reconocido.");
        }
    }
}