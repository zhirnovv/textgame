import { Entity } from "./entities/entity";
import { Friendly } from "./entities/friendly";

export class Manager {
  private _currentMob: Entity;

  constructor() {
    console.log("mounted game manager.");
  }

  get entity(): Entity {
    return this._currentMob;
  }

  spawnEntity() {
    this._currentMob = new Friendly();
  }
}
