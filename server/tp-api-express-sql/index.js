const express = require("express");
const app = express();
const apiRoutes = require("./routes");
const db = require("./models");
const PORT = 3000;

/*app.use("/", (req, res) => {
    res.send("Hola mundo");
});
*/
app.use(express.json());
app.use("/api", apiRoutes);

db.sync()
        .then(() => {
            console.log("Servidor conectado a SQLite");
        }).catch(() => {
            console.log("Error al conectar a SQLite");
        });

app.listen(PORT, 'localhost', () => {
    console.log("Servidor andando en el puerto:" ,PORT);
});