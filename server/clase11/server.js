const express = require("express");
const apiRoutes = require("./routes");
const db = require("./models");

const app = express();

app.use(express.json());

app.use("/api", apiRoutes)

db.sync().then(() => {
    console.log('connected to database')
}).catch(() => {
    console.log("error al conectar")
});

app.listen(3000, 'localhost', () => {
    console.log("Server funcionando");
});