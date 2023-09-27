import { Producto } from "./producto";
import {CarritoDeCompras} from './carrito'

export class Tienda {
    private static instance: Tienda | undefined = undefined;
    private readonly carrito: CarritoDeCompras = new CarritoDeCompras();

    private productos: Producto[] = [];
    private constructor() {}

    public static getInstance(): Tienda {
        if (!Tienda.instance) {
            Tienda.instance = new Tienda();
        }
        return Tienda.instance;
    }

    cargarProductos(){

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