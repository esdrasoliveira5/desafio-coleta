import express from 'express';
import Controller from './controllers/controller';

require('express-async-errors');

class App {
  public app: express.Application;

  public controller = new Controller();

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.post( '/form', this.controller.create)
  }

  public startServer(PORT: string | number = 3001): void {
    this.app.listen(
      PORT,
      () => console.log(`Server running here 👉 http://localhost:${PORT}`),
    );
  }

  public getApp() {
    return this.app;
  }
}

export default App;
