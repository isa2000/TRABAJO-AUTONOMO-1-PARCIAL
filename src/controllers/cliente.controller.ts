import { Cliente } from "../models/cliente.model";
import { Request, Response } from 'express';

export const getClientes = async (req: Request, res: Response) => {
    try {
        const cliente = await Cliente.find({ estado: true })
        res.status(200).json(cliente)
    } catch (error) {
        res.status(400).json({ message: "Error al obtener los clientes" })
    }
}

export const postClientes = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const cliente = new Cliente(body)
        const nuevoCliente = await cliente.save()
        res.status(200).json(nuevoCliente);
    } catch (error) {
        res.status(400).json({ message: "Error al crear el cliente" })
    }
}

export const patchClientes = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const ClienteEditar = await Cliente.findByIdAndUpdate(
            id, body
        )
        res.status(200).json(ClienteEditar)
    } catch (error) {
        res.status(400).json({ message: "Error al modificar el cliente" })
    }
}

export const deleteClientes = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const ClienteEliminar = await Cliente.findByIdAndUpdate(
            id,
            { estado: false },
            { new: true }
        )
        res.status(200).json(ClienteEliminar)
    } catch (error) {
        res.status(400).json({ message: "Error al eliminar el cliente" })
    }
}

