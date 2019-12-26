interface EntityAction {
  action: string;
  callback: Function;
}

export abstract class Entity {
  constructor(private _name: string, private _actions: EntityAction[]) {}

  get name(): string {
    return this._name;
  }

  get actions(): EntityAction[] {
    return this._actions;
  }
}
