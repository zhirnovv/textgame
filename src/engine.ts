import { Manager } from "./manager";

export class Engine {
  private _isInitialized: boolean;
  private _manager: Manager;

  public start() {
    try {
      if (this._isInitialized) {
        throw new Error("Engine is already initialized.");
      }
      this._manager = new Manager();
      this._isInitialized = true;
      this._manager.spawnEntity();
      this.render();
    } catch (err) {
      console.error(err.message);
    }
  }

  private performAction(action: Function) {
    action();
    console.log("respawn");
  }

  public render() {
    try {
      if (!this._isInitialized) {
        throw new Error("Engine is not initialized!");
      }
      const { entity } = this._manager;
      const { name, actions } = entity;
      document
        .getElementById("getEntity")
        .addEventListener("click", () =>
          this.performAction(actions[0].callback)
        );
    } catch (err) {
      console.error(err.message);
    }
  }
}
