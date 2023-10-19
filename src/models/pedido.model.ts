import mongoose from "mongoose";
const { model, Schema } = require("mongoose");

const PedidoSchema = Schema({
    fecha_pedido: {
        type: Date,
        required: true,
    },
    estado: {
        type: Boolean,
        default: true,
    },
    total: {
        type: Number,
        required: true
    },
    porcentaje_mantenimiento: {
        type: Number,
        required: true
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    producto: {
        type: Schema.Types.ObjectId,
        ref: 'Producto',
        required: true
    }
});

export const Pedido = model("Pedido", PedidoSchema)