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

    calcular_precio(cantidad:number): number {
        let unidadesParaDescuento = Math.floor(cantidad / 3);
        let descuentoPorcentaje = Math.min(unidadesParaDescuento * 20, 50); // Máximo 50% de descuento
        
        let precioFinal = this.precio_unitario * cantidad;
        let descuento = (precioFinal * descuentoPorcentaje) / 100;
        precioFinal -= descuento;
        return precioFinal;
    }
}