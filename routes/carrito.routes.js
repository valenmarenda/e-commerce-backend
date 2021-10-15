const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


let carrito = [];

class Carrito{
    constructor(id_producto, timestamp, nombre, codigo, foto, precio, stock ) {
      this.id = productos.length + 1;
      this.timestamp = Date.now();
      producto:{
        this.id_producto = id_producto;
        this.timestamp = timestamp;
        this.nombre = nombre;
        this.codigo = codigo;
        this.foto = foto;
        this.precio = precio;
        this.stock = stock;
      }
    }
  }
  



// Routes

//listar
router.get('/', (req, res)=>{
    res.send(carrito)
})

//Listar por id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  try {
    if (id <= carrito.length) {
      res.status(200).json(carrito[id - 1]);
    } else {
      res.status(404).json("Carrito no encontrado");
    }
  } catch (err) {
    res.status(404).json(err);
  }
});

//Agregar productos ????
router.post("/id_producto", (req, res) => {
  const { id_producto, timestamp, nombre, codigo, foto, precio, stock } = req.body;
  try {
    carrito.push(new Carrito(id_producto, timestamp, nombre, codigo, foto, precio, stock ));
    return res.status(200).json(carrito[carrito.length - 1]);
  } catch (err) {
    res.status(404).json(err);
  }
});

// Actualizar producto por su id
router.put("/actualizar/:id", (req, res) => {
  try {
    const id = req.params.id;
    const changed = carrito[id - 1];
    if (changed) {
      const { id_producto, timestamp, nombre, codigo, foto, precio, stock } = req.body;
      carrito[id].push(new Carrito(id_producto, timestamp, nombre, codigo, foto, precio, stock));
      return res.status(200).json(carrito[id]);
    } else {
      res.status(404).json({ msg: "error" });
    }
  } catch (err) {
    res.status(404).json(err);
  }
});

//Borrar un producto por su id
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = carrito[id - 1];
    if (deleted) {
      carrito = carrito.filter((prod) => prod.id != id);
      res.status(200).json(deleted);
    } else {
      res.status(404).json({ msg: "error" });
    }
  } catch (err) {
    res.status(404).json(err);
  }
});
module.exports = router;