import express from 'express'
const router = express.Router()

import { modificarCarrito, pagarProductos, listarCarrito } from '../controllers/carrito';

router.post('/tienda/carrito/listar', (req,res)=>{
    try {
        const _carrito = listarCarrito()
        res.send({ok:true,data:_carrito})
    } catch (error) {
        res.send({ok:false,error:error})
    }
})

router.post('/tienda/carrito/agregar', (req,res)=>{
    try {
        let idUsuario = String(req.query.idUsuario);
        let SKU = String(req.query.SKU);
        let cantidad = Number(req.query.cantidad);
        const _carrito = modificarCarrito(idUsuario,SKU,cantidad,true)
        res.send({ok:true,data:_carrito})
    } catch (error) {
        res.send({ok:false,error:error})
    }
})

router.post('/tienda/carrito/pagar', (req,res)=>{
    try {
        let idUsuario = String(req.query.idUsuario);
        const _carrito = pagarProductos(idUsuario)
        res.send({ok:true,message:'Pago exitoso'})
    } catch (error) {
        res.send({ok:false,error:error})
    }
})

router.delete('/tienda/carrito/eliminar', (req,res)=>{
    try {
        let idUsuario = String(req.query.idUsuario);
        let SKU = String(req.query.SKU);
        let cantidad = Number(req.query.cantidad);
        const _carrito = modificarCarrito(idUsuario,SKU,cantidad,false)
        res.send({ok:true,data:_carrito})
    } catch (error) {
        res.send({ok:false,error:error})
    }
})

export default router;
