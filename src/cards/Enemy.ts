import { IDamageable } from "../interfaces/IDamageable";
import { Card } from "../classes/Card";
import {
  EffectManager,
  IEffectApplicable,
  Effect,
  EffectType
} from "../classes/HpManager";

export class Enemy extends Card implements IDamageable, IEffectApplicable {
  private _hp: number;
  private effectManager: EffectManager;

  constructor(name: string, hp: number) {
    super(name);

    this.effectManager = new EffectManager(this); // dependency injection
    this._hp = hp;
  }

  public hit(damage: number): void {
    this._hp -= damage;

    if (this._hp <= 0) {
      this.destroy();
    }
  }

  public skip(): void {
    // user.gold -= 10;
  }

  public destroy(): void {
    console.log("destroy");
  }

  public applyEffect(effect: Effect): void {
    switch (effect.type) {
      case EffectType.HP:
        this.hit(1);
        break;
    }
  }

  public get hp(): number {
    return this._hp;
  }
}
