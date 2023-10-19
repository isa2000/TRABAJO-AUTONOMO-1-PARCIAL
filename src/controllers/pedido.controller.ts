import { Pedido } from "../models/pedido.model";
import { Request, Response } from 'express';

export const getPedido = async (req: Request, res: Response) => {
    const pedido = await Pedido.find({ estado: true }).populate('cliente').populate('producto').exec()
    res.status(200).json(pedido)
}

export const postPedido = async (req: Request, res: Response) => {
    const body = req.body;
    const pedido = new Pedido(body)
    const nuevoPedido = await pedido.save()
    res.status(200).json(nuevoPedido);
}

export const deletePedido = async (req: Request, res: Response) => {
    const id = req.params.id;
    const PedidoEliminar = await Pedido.findByIdAndUpdate(
        id,
        { estado: false },
        { new: true }
    )
    res.status(200).json(PedidoEliminar)
}

export const patchPedido = async (req: Request, res: Response) => {
    const id = req.params.id;
    const body = req.body;
    const PedidoEditar = await Pedido.findByIdAndUpdate(
        id, body
    )
    res.status(200).json(PedidoEditar)
}