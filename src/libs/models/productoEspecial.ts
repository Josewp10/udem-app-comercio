import {Producto} from './producto'
import { ReglaPrecio } from './reglaPrecio'

export class ProductoEspecial extends Producto implements ReglaPrecio{
    private static instancia: ProductoEspecial | null = null;

    private constructor(SKU:string, nombre:string, descripcion:string, cantidad_disponible:number, precio_unitario:number){
        super(SKU,nombre, descripcion,cantidad_disponible,precio_unitario);
    }
      
    public static getInstance(SKU:string, nombre:string, descripcion:string, cantidad_disponible:number, precio_unitario:number){
        if (ProductoEspecial.instancia === null) {
            ProductoEspecial.instancia = new ProductoEspecial(SKU,nombre, descripcion,cantidad_disponible,precio_unitario);
          }
          return ProductoEspecial.instancia;
    }

    calcular_precio(): number {
        return 0;
    }
}