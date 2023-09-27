import {Producto} from './producto'
import { ReglaPrecio } from './reglaPrecio'

export class ProductoNormal extends Producto implements ReglaPrecio{
    private static instancia: ProductoNormal | null = null;

    private constructor(SKU:string, nombre:string, descripcion:string, cantidad_disponible:number, precio_unitario:number){
        super(SKU,nombre, descripcion,cantidad_disponible,precio_unitario);
    }
      
    public static getInstance(SKU:string, nombre:string, descripcion:string, cantidad_disponible:number, precio_unitario:number){
        if (ProductoNormal.instancia === null) {
            ProductoNormal.instancia = new ProductoNormal(SKU,nombre, descripcion,cantidad_disponible,precio_unitario);
          }
          return ProductoNormal.instancia;
    }

    calcular_precio(): number {
        return 0;
    }
}