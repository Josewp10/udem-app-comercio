import {Producto} from './producto'
import { ReglaPrecio } from './reglaPrecio'

export class ProductoNormal extends Producto implements ReglaPrecio{

    public constructor(SKU:string, nombre:string, descripcion:string, cantidad_disponible:number, precio_unitario:number){
        super(SKU,nombre, descripcion,cantidad_disponible,precio_unitario);
    }

    calcular_precio(cantidad:number): number {
        return this.precio_unitario * cantidad;
    }
}