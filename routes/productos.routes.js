const express = require("express");
const router = express.Router();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let productos = [];
//let admin = true   

class Producto {
    constructor(nombre, descripcion, codigo, foto, precio, stock ) {
      this.id = productos.length + 1;
      this.nombre = nombre;
      this.timestamp = Date.now();
      this.descripcion = descripcion;
      this.codigo = codigo;
      this.precio = precio;
      this.foto = foto;
      this.stock = stock;
    }
  }

  productos.push(new Producto("producto1", "producto1", "b1", 120, "foto1.jpg", 8));
  productos.push(new Producto("producto2", "producto2", "b2", 1500, "foto2.jpg", 8));
  
//Routes

//Listar todos los productos
router.get('/', (req, res)=>{
    res.send(productos)
})

//Listar por id
router.get("/:id", (req, res) => {
    const id = req.params.id;
    try {
      if (id <= productos.length) {
        res.status(200).json(productos[id - 1]);
      } else {
        res.status(404).json("Producto no encontrado");
      }
    } catch (err) {
      res.status(404).json(err);
    }
  });

//Agregar producto
router.post("/", (req, res) => {
    const { nombre, timestamp, descripcion, codigo, foto, precio, stock } = req.body;
    try {
      productos.push(new Producto(nombre, timestamp, descripcion, codigo, foto, precio, stock  ));
      return res.status(200).json(productos[productos.length - 1]);
    } catch (err) {
      res.status(404).json(err);
    }
  });


// Actualizar producto por su id
router.put("/actualizar/:id", (req, res) => {
    try {
      const id = req.params.id;
      const changed = productos[id - 1];
      if (changed) {
        const { nombre, timestamp, descripcion, codigo, foto, precio, stock   } = req.body;
        productos[id].push(new Producto(nombre, timestamp, descripcion, codigo, foto, precio, stock ));
        return res.status(200).json(productos[id]);
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
      const deleted = productos[id - 1];
      if (deleted) {
        productos = productos.filter((prod) => prod.id != id);
        res.status(200).json(deleted);
      } else {
        res.status(404).json({ msg: "error" });
      }
    } catch (err) {
      res.status(404).json(err);
    }
  });

module.exports = router;