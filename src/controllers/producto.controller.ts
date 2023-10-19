import { Producto } from "../models/producto.model";
import { Request, Response } from 'express';


export const getProducts = async (req: Request, res: Response) => {
    const producto = await Producto.find({ estado: true })
    res.status(200).json(producto)
}

export const postProducts = async (req: Request, res: Response) => {
    const body = req.body;
    const producto = new Producto(body)
    const nuevoProducto = await producto.save()
    res.status(200).json(nuevoProducto);
}

export const deleteProducts = async (req: Request, res: Response) => {
    const id = req.params.id;
    const ProductoEliminar = await Producto.findByIdAndUpdate(
        id,
        { estado: false },
        { new: true }
    )
    res.status(200).json(ProductoEliminar)
}

export const patchProducts = async (req: Request, res: Response) => {
    const id = req.params.id;
    const body = req.body;
    const ProductoEditar = await Producto.findByIdAndUpdate(
        id, body
    )
    res.status(200).json(ProductoEditar)
}