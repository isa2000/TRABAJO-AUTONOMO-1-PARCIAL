const { model, Schema } = require("mongoose");

const ClienteSchema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    identificacion: {
        type: String,
        required: true,
        unique: true
    },
    estado: {
        type: Boolean,
        default: true,
    }
});

export const Cliente = model("Cliente", ClienteSchema)