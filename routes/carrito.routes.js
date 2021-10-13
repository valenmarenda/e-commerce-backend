const express = require("express");
const router = express.Router();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


let carrito = [];

class Carrito{
    constructor(timestamp) {
      this.id = productos.length + 1;
      this.timestamp = Date.now();
      producto:{
         

      }
    }
  }
  



// Routes
router.get('/listar', (req, res)=>{
    res.send(carrito)
})
module.exports = router;