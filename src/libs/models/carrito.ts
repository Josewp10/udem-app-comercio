import { Tienda } from "./tienda";
import { Producto } from "./producto";
import { ProductoNormal } from './productoNormal';
import { ProductoEspecial } from './productoEspecial';
import { ProductoPeso } from './productoPeso';

export class CarritoDeCompras {

    private idUsuario:string  | undefined
    private totalCompra:number = 0 ;
    private readonly productos: {cantidad:number,producto:Producto}[] = [];
    private readonly tienda: Tienda = Tienda.getInstance();

    public constructor(idUsuario:string){
        this.idUsuario=idUsuario;
    }

    private obtenerProductos(){
        
    }
    private agregarCarrito(productoTienda:any, cantidad: number){
       
      let disponibles = productoTienda.getCantidad();

      if (disponibles>=cantidad) {
        this.totalCompra += productoTienda.calcular_precio(cantidad)
        productoTienda.modificar_cantidad(-cantidad)

        let productoCarrito:any = this.productos.find((prod:any) => prod.producto === productoTienda);
                
        if (productoCarrito==undefined) {
            this.productos.push({
                cantidad:cantidad,
                producto:productoTienda
            })
        }else{
            this.productos.map((prod:any)=>{
                if(prod.producto==productoTienda) prod.cantidad+=cantidad
            })
        }
      }else{
        throw `No se pueden agregar unidades, disponibles ${disponibles}`
      }
    }

    private eliminarCarrito(productoTienda:any, cantidad: number) {       
        this.totalCompra = this.totalCompra - productoTienda.calcular_precio(cantidad)
        productoTienda.modificar_cantidad(cantidad)

        this.productos.map((prod:any)=>{
            if(prod.producto==productoTienda) prod.cantidad-=cantidad
        })
    }

    public modificarCarrito(SKU: string, cantidad: number,agregar:boolean) {
        const listaProductos = this.tienda.listarProductos();
        let producto:any = listaProductos.find((producto:Producto) => producto.getSKU() === SKU);

        if (agregar) {
            this.agregarCarrito(producto,cantidad)
        } else {
            this.eliminarCarrito(producto,cantidad)
        }

      return {
        totalCompra:this.totalCompra,
        listaProductos:this.productos
      }
    }
  }