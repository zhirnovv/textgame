import { IDamageable } from "../interfaces/IDamageable";

export enum EffectType {
  HP
}

export interface IEffectApplicable {
  applyEffect(effect: any): void;
}

export class Effect {
  constructor(
    public type: EffectType,
    public duration: number,
    public canDecline: boolean,
    public canResist: boolean
  ) {}
}

export class EffectManager {
  constructor(private master: IEffectApplicable) {}

  public addEffect(effect: Effect) {
    // set timeouts

    this.master.applyEffect(effect);
  }
}
