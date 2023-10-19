const { Router } = require('express')
import { deletePedido, patchPedido, getPedido, postPedido, } from "../controllers/pedido.controller";

const router = Router();


/**
* @swagger
* /Pedido:
*   get:
*     summary: Obtener todos los pedidos
*     tags: [Pedido]
*     responses:  
*       200:
*         description: Lista de pedidos
*/

/**  
* @swagger
* /Pedido:
*   post:
*     summary: Crear un nuevo pedido
*     tags: [Pedido]
*     requestBody:
*       content:
*         application/json:
*           schema:
*             type: object 
*             properties:
*               fecha:
*                 type: string
*                 format: date
*               cliente:
*                 type: string
*               producto:
*                 type: string
*               porcentaje:
*                 type: number
*               total:
*                 type: number
*           example:
*             fecha: "2023-12-12"
*             cliente: "Isabel"
*             producto: "Camion"
*             porcentaje: 20
*             total: 120
*     responses:
*       200:
*         description: Pedido creado
*       400:
*         description: Error creando pedido 
*/

/**
* @swagger
* /Pedido/{id}:
*   patch: 
*     summary: Actualizar un pedido
*     tags: [Pedido]
*     parameters:  
*       - in: path
*         name: id
*         schema:
*           type: string
*         required: true
*     requestBody:
*       content:
*         application/json:
*           schema: 
*             type: object
*             properties:
*               total:
*                 type: number
*           example:
*             fecha: "2023-12-12"
*             cliente: "Isabel"
*             producto: "Camion"
*             porcentaje: 20
*             total: 120
*     responses:
*       200:
*         description: Pedido actualizado
*       400:
*         description: Error actualizando pedido
*/

/**
* @swagger
* /Pedido/{id}:
*   delete:
*     summary: Eliminar un pedido
*     tags: [Pedido]
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: string  
*         required: true
*     responses:
*       200: 
*         description: Pedido eliminado
*       400:
*         description: Error eliminando pedido
*/

router.get('/', getPedido)
router.post('/', postPedido)
router.delete('/:id', deletePedido)
router.patch('/:id', patchPedido)

module.exports = router