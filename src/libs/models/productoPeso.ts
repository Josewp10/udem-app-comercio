import {Producto} from './producto'
import { ReglaPrecio } from './reglaPrecio'

export class ProductoPeso extends Producto implements ReglaPrecio{
    private static instancia: ProductoPeso | null = null;

    private constructor(SKU:string, nombre:string, descripcion:string, cantidad_disponible:number, precio_unitario:number){
        super(SKU,nombre, descripcion,cantidad_disponible,precio_unitario);
    }
      
    public static getInstance(SKU:string, nombre:string, descripcion:string, cantidad_disponible:number, precio_unitario:number){
        if (ProductoPeso.instancia === null) {
            ProductoPeso.instancia = new ProductoPeso(SKU,nombre, descripcion,cantidad_disponible,precio_unitario);
          }
          return ProductoPeso.instancia;
    }

    calcular_precio(cantidad:number): number {
        return this.precio_unitario * (cantidad*1000);
    }
}