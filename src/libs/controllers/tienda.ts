import { Tienda } from "../models/tienda";
const _tienda = new Tienda();

export const iniciarTienda=()=>{    
    _tienda.cargarProductos();
}