const { model, Schema } = require("mongoose");

const ProductoSchema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    detalle: {
        type: String,
        required: true,
    },
    estado: {
        type: Boolean,
        default: true
    },
});

export const Producto = model("Producto", ProductoSchema)