var express = require("express");
var router = express.Router();

let lotes = [
  { id: 1, nombre: "Lote 1", denominacion: "CLP1K" },
  { id: 2, nombre: "Lote 2", denominacion: "CLP2K" },
  { id: 3, nombre: "Lote 3", denominacion: "CLP5K" },
  { id: 4, nombre: "Lote 4", denominacion: "CLP10K" },
  { id: 5, nombre: "Lote 5", denominacion: "CLP20K" },
  { id: 6, nombre: "Lote 6", denominacion: "CLP50K" },
  { id: 7, nombre: "Lote 7", denominacion: "CLP100K" },
  { id: 8, nombre: "Lote 8", denominacion: "CLP200K" },
  { id: 9, nombre: "Lote 9", denominacion: "CLP500K" },
  { id: 10, nombre: "Lote 10", denominacion: "CLP1M" },
];

router.get("/", function (req, res, next) {
  res.render("lotes", { title: "Lotes", lotes: lotes });
});

// GET lote by id
router.get("/:id", function (req, res, next) {
  let lote = lotes.find((lote) => lote.id == req.params.id);
  if (lote) {
    res.json(lote);
  } else {
    res.status(404).json({ message: "Lote not found" });
  }
});

module.exports = router;
