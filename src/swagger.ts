import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API de ventas',
        version: '1.0.0',
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Rest de ventas'
        }
    ]
};

const options = {
    swaggerDefinition,
    apis: ['./src/routes/*.ts'],
};

module.exports = swaggerJSDoc(options);