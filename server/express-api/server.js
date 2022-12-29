const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const log = require("./middlewares/log");
const authentication = require("./middlewares/authentication");

//middleware a nivel app
app.use(log);

app.use(express.json());
//middleware a nivel ruta
app.get("/", log, (req, res) =>
{
    res.send("Hola mundo desde express")
});


app.use("/user", authentication, userRoute);

mongoose.connect("mongodb://127.0.0.1:27017/clase10", (error)=>
{
    if(error)
    {
        console.log("Error en la conexion a MongoDB: ", error);
    } 
    else
    {
        console.log("Conexion exitosa con MongoDB");
    }
});
app.listen(3000);