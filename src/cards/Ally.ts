import { ITalkable, IDialog } from "../interfaces/ITalkable";
import { Card } from "../classes/Card";

export class Ally extends Card implements ITalkable {
  constructor(name: string) {
    super(name);
  }

  public talk(): Map<string, IDialog> {
    return null;
  }
}
