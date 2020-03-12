import { Card } from "./Card";
import { Ally } from "../cards/Ally";
import { Enemy } from "../cards/Enemy";

export enum CardType {
  Ally,
  Enemy
  // Pet,
  // Treasure
}

export class CardFactory {
  public create(type: CardType): Card {
    switch (type) {
      case CardType.Ally:
        return this.createAlly();
      case CardType.Enemy:
        return this.createEnemy();
      // case CardType.Treasure:
      //   return null;
      // case CardType.Pet:
      //   return null;
    }
  }

  private enemies: { name: string; hp: number }[] = [
    { name: "zombie", hp: 10 },
    { name: "vampire", hp: 30 },
    { name: "dragon", hp: 200 }
  ];

  private allies = ["Sam", "John", "Jack", "Richard"];

  private createAlly(): Ally {
    const ally = new Ally(
      this.allies[Math.round(Math.random() * this.allies.length)]
    );
    return ally;
  }

  private createEnemy(): Enemy {
    const enemy = this.enemies[Math.floor(Math.random() * this.enemies.length)];
    return new Enemy(enemy.name, enemy.hp);
  }
}
