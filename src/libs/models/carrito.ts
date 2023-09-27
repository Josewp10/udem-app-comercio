import { Producto } from "./producto";

export class CarritoDeCompras{
    private readonly productos: Producto[] = [];
  
    public agregarProducto(producto: Producto) {
      this.productos.push(producto);
    }
  
    public eliminarProducto(producto: Producto) {
      this.productos.splice(this.productos.indexOf(producto), 1);
    }
  
    public modificarProducto(producto: Producto) {
      this.productos[this.productos.indexOf(producto)] = producto;
    }

 }