class StartUp {
  constructor({ Server }) {
    this.Server = Server;
  }

  async start() {
    await this.Server.start();
  }
}
