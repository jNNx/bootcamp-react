const express = require("express");
const apiRoutes = require("./routes");
const mongoose = require("mongoose");
const app = express();

/*app.use("/", (req, res) => {
    res.send("Hola mundo")
})*/

app.use(express.json());

app.use("/api", apiRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/tp-apirest", (error) =>{
    if (error)
    {
        console.log("Hubo un error al conectar", error)
    }
    else
    {
        console.log("Conexion exitosa")
    }
})
app.listen(3000, () =>
{
    console.log("Server iniciado")
})