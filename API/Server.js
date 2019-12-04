const express = require("express");
const path = require("path");

class Server {
  constructor({ config, router }) {
    this.config = config;
    this.express = express();
    this.express.use(router);
    this.express.use(
      express.static(path.join(__dirname, "../../public/uploads"))
    );
  }

  start() {
    const http = this.express.listen(8000, () => {
      console.log("application listen on port: " + http.address().port);
    });
  }
}

module.exports = Server;
