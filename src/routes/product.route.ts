const { Router } = require('express')
import { deleteProducts, getProducts, patchProducts, postProducts } from "../controllers/producto.controller";

const router = Router();

/**
 * @swagger
 * /Producto:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [Producto]
 *     responses:
 *       200:
 *         description: Lista de productos
*/

/**
* @swagger
* /Producto:
*   post:
*     summary: Crear un nuevo producto
*     tags: [Producto]
*     requestBody:
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               nombre: 
*                 type: string
*               detalle:
*                 type: string
*           example:
*              nombre: "Camion"
*              detalle: "Azul"
*     responses:  
*       200:
*         description: Producto creado
*       500:
*         description: Error creando producto
*/

/**  
* @swagger
* /Producto/{id}:
*   patch:
*     summary: Actualizar un producto
*     tags: [Producto]
*     parameters:
*       - in: path 
*         name: id
*         required: true
*         description: ID del producto
*         schema:
*           type: string
*     requestBody:
*       content:
*         application/json:
*           schema:  
*             type: object
*             properties:
*               nombre:
*                 type: string
*               detalle: 
*                 type: string
*           example:
*              nombre: "Camion"
*              detalle: "Azul"
*     responses:
*       200:
*         description: Producto actualizado
*       400:
*         description: Error actualizando producto        
*/

/**
* @swagger
* /Producto/{id}:
*   delete:  
*     summary: Eliminar un producto
*     tags: [Producto]
*     parameters:
*       - in: path
*         name: id
*         required: true
*         description: ID del producto
*         schema:
*           type: string
*     responses:
*       200:
*         description: Producto eliminado
*       400:
*         description: Error eliminando producto
*/

router.get('/', getProducts)
router.post('/', postProducts)
router.delete('/:id', deleteProducts)
router.patch('/:id', patchProducts)

module.exports = router