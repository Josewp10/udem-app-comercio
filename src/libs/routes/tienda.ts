import express from 'express'
const router = express.Router()

import { Tienda } from '../models/tienda';

router.get('/tienda/productos', (req,res)=>{
    const _tienda = Tienda.getInstance();
    let productos = _tienda.listarProductos();
    res.send(productos)
})

export default router;
