export abstract class Producto {
    protected SKU:string | undefined
    protected nombre:string | undefined
    protected descripcion: string | undefined
    protected cantidad_disponible:number | 0
    protected precio_unitario:number | 0

    constructor(SKU:string, nombre:string, descripcion:string, cantidad_disponible:number, precio_unitario:number){
        this.SKU = SKU
        this.nombre = nombre
        this.descripcion = descripcion
        this.cantidad_disponible = cantidad_disponible
        this.precio_unitario = precio_unitario
    }
}