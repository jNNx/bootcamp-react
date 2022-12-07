const http = require("http");
const fs = require("fs");


const server = http.createServer((request, response) => {
  response.writeHead(200, "Exito", { "Content-Type": "application/pdf" });

  fs.readFile('./index.pdf', (error, data) => {
    if (error)
    {
        console.log("Error al leer el archivo", error)
    }
    response.end(data);
  })
})

server.listen(3000, "127.0.0.1", (error) => {
  if (error) {
    console.log("Hubo un error", error);
  }

  console.log("Servidor andando!");
})