const express = require('express');
const cors = require('cors')
import { dbConnection } from "./db/database";
export const app = express();
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

export class Server {
    port;
    paths;

    constructor() {
        this.port = 3000;
        this.paths = {
            cliente: '/cliente',
            pedido: '/pedido',
            producto: '/producto'
        };
        this.middelwares();
        this.conectarDB();
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }

    middelwares() {
        app.use(cors());
        app.use(express.json());
        app.use('/api', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
    }

    routes() {
        app.use(this.paths.producto, require('./routes/product.route'));
        app.use(this.paths.cliente, require('./routes/cliente.route'));
        app.use(this.paths.pedido, require('./routes/pedido.route'));
    }

    listen() {
        app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}

