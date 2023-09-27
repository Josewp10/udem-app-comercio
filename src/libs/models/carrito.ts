import { Tienda } from "./tienda";
import { Producto } from "./producto";
import { ProductoNormal } from './productoNormal';
import { ProductoEspecial } from './productoEspecial';
import { ProductoPeso } from './productoPeso';

export class CarritoDeCompras {

    private idUsuario:string  | undefined
    private totalCompra:number = 0 ;
    private readonly productos: {cantidad:number,descuento:number,producto:Producto}[] = [];
    private readonly tienda: Tienda = Tienda.getInstance();

    public constructor(idUsuario:string){
        this.idUsuario=idUsuario;
    }

    public pagarProductos(){
        if (this.productos.length==0) throw 'No se puede realizar el pago, carrito vacío'
                
        const listaProductos = this.tienda.listarProductos();
        this.productos.map((prod:any)=>{
            let producto:any = listaProductos.find((obj:Producto) => obj.getSKU() ===  prod.producto.getSKU());
            producto.modificar_cantidad(-prod.cantidad)
        })
        this.productos=[]
    }

    public listarCarrito(){
        return this.productos;
    }

    private agregarProducto(productoTienda:any, cantidad: number){
       
      let disponibles = productoTienda.getCantidad();

      if (disponibles>=cantidad) {
         let precio = productoTienda.calcular_precio(cantidad)
         this.totalCompra +=precio;
        let productoCarrito:any = this.productos.find((prod:any) => prod.producto === productoTienda);
                
        if (productoCarrito==undefined) {
            this.productos.push({
                cantidad:cantidad,
                descuento:precio,
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

    

    private eliminarProducto(productoTienda:any, cantidad: number) {  
        this.productos.map((prod:any)=>{
            if(prod.cantidad>0 && prod.producto==productoTienda) prod.cantidad-=cantidad
            else throw 'El carrito ya está vacío'
        })

        this.totalCompra = this.totalCompra - productoTienda.calcular_precio(cantidad)
    }

    public modificarCarrito(SKU: string, cantidad: number,agregar:boolean) {
        const listaProductos = this.tienda.listarProductos();
        let producto:any = listaProductos.find((producto:Producto) => producto.getSKU() === SKU);

        if (agregar) {
            this.agregarProducto(producto,cantidad)
        } else {
            this.eliminarProducto(producto,cantidad)
        }

      return {
        totalCompra:this.totalCompra,
        listaProductos:this.productos
      }
    }
  }
