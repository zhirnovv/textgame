import { Entity } from "./entity";

export class Friendly extends Entity {
  constructor() {
    super("friendly", [{ action: "talk", callback: () => this.talk() }]);
  }

  public talk() {
    console.log("talking!");
  }
}
