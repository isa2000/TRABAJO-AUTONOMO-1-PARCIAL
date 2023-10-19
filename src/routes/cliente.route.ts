import { deleteClientes, patchClientes, getClientes, postClientes } from "../controllers/cliente.controller";
const { Router } = require('express');
const router = Router();
/**
* @swagger
* /Cliente:
*   get:
*     summary: Obtener todos los clientes
*     tags: [Cliente]
*     responses:
*       200:
*         description: Lista de clientes
*       400:
*         description: Error obteniendo clientes
*/

/**
* @swagger
* /Cliente:
*   post:
*     summary: Crear un nuevo cliente
*     tags: [Cliente]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               nombre:
*                 type: string
*               identificacion:  
*                 type: string
*           example:
*              nombre: "Isabel"
*              identificacion: "123456789"
*     responses:
*       200:
*         description: Cliente creado
*       400:
*         description: Error creando cliente
*/

/**
* @swagger
* /Cliente/{id}:
*   patch:  
*     summary: Actualizar un cliente
*     tags: [Cliente]
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: ID del cliente
*         schema:
*           type: string
*     requestBody:
*       required: true  
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               nombre:
*                 type: string
*               identificacion:
*                 type: string
*           example:
*              nombre: "Isabel"
*              identificacion: "123456789"                   
*     responses:
*       200:
*         description: Cliente actualizado
*       400:
*         description: Error actualizando cliente
*/

/**  
* @swagger
* /Cliente/{id}:
*   delete:
*     summary: Eliminar un cliente
*     tags: [Cliente]
*     parameters:
*       - in: path
*         name: id 
*         required: true
*         description: ID del cliente
*         schema:
*           type: string
*     responses:
*       200:
*         description: Cliente eliminado
*       400:
*         description: Error eliminando cliente
*/


router.get('/', getClientes);
router.post('/', postClientes);
router.patch('/:id', patchClientes);
router.delete('/:id', deleteClientes);

module.exports = router;