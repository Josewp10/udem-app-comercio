import express from 'express'
const router = express.Router()

import { listarProductos } from '../controllers/tienda';

router.get('/tienda/productos', (req,res)=>{
    let SKU = String(req.query.SKU)
    let productos = listarProductos(SKU)
    res.send({ok:true,data:productos})
})

export default router;
