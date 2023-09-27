import {CarritoDeCompras} from '../models/carrito'

const carritos: {[nombre: string]: CarritoDeCompras} = {};

const modificarCarrito=(idUsuario:string, SKU:string,cantidad:number,agregar:boolean)=>{       
    if (carritos[idUsuario]==undefined) {
        carritos[idUsuario]=new CarritoDeCompras(idUsuario);
    }

    return carritos[idUsuario].modificarCarrito(SKU,cantidad,agregar)
    
}

export {modificarCarrito}