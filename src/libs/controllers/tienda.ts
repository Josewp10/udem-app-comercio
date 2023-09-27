import {Tienda} from '../models/tienda'

const listarProductos=(SKU:string)=>{       
    const _tienda = Tienda.getInstance();

    if (SKU=='undefined') {
       return _tienda.listarProductos();
    }else{
        return _tienda.listarProducto(SKU)
    }
}

export {listarProductos}