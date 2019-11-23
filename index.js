const Server = require('./API/Server');

const config = {
  puerto: 5000,
  database: {
    localhost: 'localhost'
  }
};

const servidor = new Server(config);
servidor.servidor();
