const express = require("express");
const app = express()
const port = 8080;
const productos = require("./routes/productos.routes");
const carrito = require("./routes/carrito.routes");

///Routes 
app.use("/productos", productos);
//app.use("/carrito", carrito);


app.use(express.static(__dirname + "/public"));
// Servidor 
const server = app.listen(port, ()=>{
    console.log(`servidor http escuchando en el puerto ${port} `)
})
server.on("error", error => console.log(`Error en el servidor ${error}`))