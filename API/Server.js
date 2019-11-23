const express = require('express');

class Server {
  constructor({ puerto }) {
    this.puerto = puerto;
    this.express = express();
  }

  servidor() {
    const puerto = this.puerto;
    const http = this.express.listen(8000, () => {
      console.log('application listen on port: ' + http.address().port);
    });
  }
}

module.exports = Server;
