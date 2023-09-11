import { Usuario } from "./usuario";
import { Carrito } from "./carrito";
import { Producto } from "./producto";
import fs from 'fs';

export class Tienda {
    private total_ventas: number = 0;
    private productos: Producto[] = [];
    private carrito: Carrito; 

    constructor() {
        this.cargarProductosDesdeArchivo('productos.json'); // Llama al método para cargar productos desde un archivo
        this.carrito = new Carrito("Carrito de Tienda"); // Crear un nuevo carrito
    }

    private cargarProductosDesdeArchivo(ruta: string) {
        try {
            const data = fs.readFileSync(ruta, 'utf8');
            this.productos = JSON.parse(data) as Producto[];
            console.log("Productos cargados correctamente:", this.productos);
        } catch (error) {
            console.error("Error al cargar los productos:", error);
        }
    }

    public guardar_ventas_en_archivo(ruta: string) {
        try {
            const data = JSON.stringify({
                total_ventas: this.total_ventas,
                productos: this.productos,
            });
            fs.writeFileSync(ruta, data);
            console.log("Ventas guardadas en el archivo correctamente.");
        } catch (error) {
            console.error("Error al guardar las ventas:", error);
        }
    }

    public calcular_total_de_compra(): number {
        return this.carrito.calcular_total();
    }

    agregar_producto_a_carrito(usuario: Usuario, producto: Producto, cantidad: number) {
        this.carrito.agregar_producto(producto, cantidad);
        this.total_ventas += producto.precio_unitario * cantidad;
    }
}