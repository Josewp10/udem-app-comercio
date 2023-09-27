import * as fs from 'fs'
import { Producto } from "./producto";
import {CarritoDeCompras} from './carrito'

import { ProductoNormal } from './productoNormal';
import { ProductoEspecial } from './productoEspecial';
import { ProductoPeso } from './productoPeso';

export class Tienda {
    private static instance: Tienda | undefined = undefined;
    private readonly carrito: CarritoDeCompras = new CarritoDeCompras();

    private productos: Producto[] = [];
    public constructor() {}

    public static getInstance(): Tienda {
        if (!Tienda.instance) {
            Tienda.instance = new Tienda();
        }
        return Tienda.instance;
    }

    cargarProductos(){
        const productosJson = fs.readFileSync('src/libs/assets/products.json', 'utf-8');
        const data = JSON.parse(productosJson);
        
        data.productos.map((obj:any)=>{
            if(obj.SKU.startsWith('EA')){
                this.productos.push(ProductoNormal.getInstance(obj.SKU,obj.Nombre,obj.Descripcion,obj.Cantidad,obj.PrecioUnitario))
            }else if(obj.SKU.startsWith('WA')){
                this.productos.push(ProductoPeso.getInstance(obj.SKU,obj.Nombre,obj.Descripcion,obj.Cantidad,obj.PrecioUnitario))
            }else if(obj.SKU.startsWith('SP')){
                this.productos.push(ProductoEspecial.getInstance(obj.SKU,obj.Nombre,obj.Descripcion,obj.Cantidad,obj.PrecioUnitario))
            }
        })            
    }

    agregarProducto(producto: Producto) {
        this.productos.push(producto);
    }

    listarProducto() {
        this.productos.forEach(producto => {
            //console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}`);
        });
    }
}