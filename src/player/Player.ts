import { ICollectible } from "../interfaces/ICollectible";

export class Player {
  public gold: number;
  public hp: number;
  public inventory: ICollectible[];
}
