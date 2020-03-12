import { ICollectible } from "../interfaces/ICollectible";
import { ITalkable, IDialog } from "../interfaces/ITalkable";
import { IDamageable } from "../interfaces/IDamageable";

export class Pet implements ICollectible, ITalkable, IDamageable {
  public weight: number;
  public hp: number;

  public talk(): Map<string, IDialog> {
    return null;
  }

  public hit(damage: number): void {
    this.hp -= damage;

    if (this.hp <= 0) {
      this.destroy();
    }
  }

  public collect(): void {}

  public getInfo(): string {
    return "";
  }

  private destroy(): void {}
}
