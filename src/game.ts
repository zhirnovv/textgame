import { Engine } from "./engine";

export class Game {
  private _engine = new Engine();

  public start() {
    this._engine.start();
  }
}
