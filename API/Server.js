const express = require('express');

class Server {
  constructor({ config, router }) {
    this.config = config;
    this.express = express();
    this.express.use(router);
  }

  start() {
    const http = this.express.listen(8000, () => {
      console.log('application listen on port: ' + http.address().port);
    });
  }
}

module.exports = Server;
