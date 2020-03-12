import { ICollectible } from "../interfaces/ICollectible";

export class Treasure implements ICollectible {
  public weight: number;

  public collect(): void {}

  public getInfo(): string {
    return "";
  }
}
