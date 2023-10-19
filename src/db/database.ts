const mongoose = require('mongoose');


export const dbConnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://nat2:nat2@cluster0.q1mva7h.mongodb.net/ventas");
        console.log('Base de datos escuchando')
    }
    catch (error) {
        console.log(error);
    }
}