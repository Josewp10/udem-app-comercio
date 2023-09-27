import express from 'express'
const router = express.Router()

import { modificarCarrito } from '../controllers/carrito';

router.post('/tienda/carrito/agregar', (req,res)=>{
    try {
        let idUsuario = String(req.query.idUsuario);
        let SKU = String(req.query.SKU);
        let cantidad = Number(req.query.cantidad);
        const _carrito = modificarCarrito(idUsuario,SKU,cantidad)
        res.send({ok:true,data:_carrito})
    } catch (error) {
        res.send({ok:false,error:error})
    }
})

router.post('/tienda/carrito/eliminar', (req,res)=>{
    try {
        let idUsuario = String(req.query.idUsuario);
        let SKU = String(req.query.SKU);
        let cantidad = Number(req.query.cantidad);
        //const _carrito = modificarCarrito(idUsuario,SKU,cantidad)
        res.send({ok:true,data:'_carrito'})
    } catch (error) {
        res.send({ok:false,error:error})
    }
})

export default router;
