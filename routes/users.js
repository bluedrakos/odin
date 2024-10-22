var express = require("express");
var router = express.Router();

let usuarios = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "María" },
  { id: 3, nombre: "Pedro" },
  { id: 4, nombre: "Luis" },
  { id: 5, nombre: "Ana" },
];
/* GET users listing. */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtiene la lista de todos los Usuarios
 *     responses:
 *       200:
 *         description: Éxito
 */
// GET all lotes
router.get("/", function (req, res, next) {
  res.json(usuarios);
});

router.get("/:id", function (req, res, next) {
  let usuario = usuarios.find((usuario) => usuario.id == req.params.id);
  res.json(usuario);
});

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Agrega un nuevo Usuario
 *     responses:
 *       200:
 *         description: Éxito
 */
router.post("/", function (req, res, next) {
  usuarios.push(req.body);
  res.json(req.body);
});

module.exports = router;
