import {CarritoDeCompras} from '../models/carrito'

const carritos: {[nombre: string]: CarritoDeCompras} = {};

const modificarCarrito=(idUsuario:string, SKU:string,cantidad:number,agregar:boolean)=>{       
    if (carritos[idUsuario]==undefined) {
        carritos[idUsuario]=new CarritoDeCompras(idUsuario);
    }

    return carritos[idUsuario].modificarCarrito(SKU,cantidad,agregar)
}

const pagarProductos=(idUsuario:string)=>{
    if (carritos[idUsuario]==undefined) throw 'No se puede realizar el pago, carrito vacío'
    return carritos[idUsuario].pagarProductos();
}

export {modificarCarrito, pagarProductos}