const express = require("express");
const dir = require("../public/uploads/dir");
class Server {
  constructor({ config, router }) {
    const directorioImagenes = __dirname + "/../../public/uploads";
    this.config = config;
    this.express = express();
    this.express.use(router);
    this.express.use("/api/imagenes", express.static(dir));
  }

  start() {
    const http = this.express.listen(8000, () => {
      console.log("application listen on port: " + http.address().port);
    });
  }
}

module.exports = Server;
