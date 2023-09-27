import * as fs from 'fs'
import { Producto } from "./producto";
import {CarritoDeCompras} from './carrito'

import { ProductoNormal } from './productoNormal';
import { ProductoEspecial } from './productoEspecial';
import { ProductoPeso } from './productoPeso';
import { log } from 'console';

export class Tienda {
    private static instance: Tienda | null = null;
    private readonly carrito: CarritoDeCompras = new CarritoDeCompras();

    private productos: Producto[] = [];
    public constructor() {
        this.cargarProductos()        
    }

    public static getInstance(): Tienda {
        if (Tienda.instance==null) {
            Tienda.instance = new Tienda();
        }       
        return Tienda.instance;
    }

    cargarProductos(){
        const productosJson = fs.readFileSync('src/libs/assets/products.json', 'utf-8');
        const data = JSON.parse(productosJson);
                
        data.productos.map((obj:any)=>{
            if(obj.SKU.startsWith('EA')){                
                this.productos.push(new ProductoNormal(obj.SKU,obj.Nombre,obj.Descripcion,obj.Cantidad,obj.PrecioUnitario))
            }else if(obj.SKU.startsWith('WE')){
                this.productos.push(new ProductoPeso(obj.SKU,obj.Nombre,obj.Descripcion,obj.Cantidad,obj.PrecioUnitario))
            }else if(obj.SKU.startsWith('SP')){
                this.productos.push(new ProductoEspecial(obj.SKU,obj.Nombre,obj.Descripcion,obj.Cantidad,obj.PrecioUnitario))
            }
        })                
    }

    listarProductos(){                
        return this.productos
    }
}