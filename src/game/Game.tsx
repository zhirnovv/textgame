import * as React from "react";
import { Card } from "../classes/Card";
import { CardFactory, CardType } from "../classes/CardFactory";
import { Enemy } from "../cards/Enemy";
import { EnemyView } from "./EnemyCard";
import { Ally } from "../cards/Ally";
import { AllyCard } from "./AllyCard";

interface GameState {
  cards: Card[];
}

export class Game extends React.Component<{}, GameState> {
  cardFactory: CardFactory;

  constructor(props: any) {
    super(props);

    this.cardFactory = new CardFactory();
    const cardType = Math.floor(
      Math.random() * (Object.entries(CardType).length / 2)
    );
    this.state = {
      cards: [this.cardFactory.create(cardType)]
    };
  }

  renderCard(card: Card): JSX.Element {
    if (card instanceof Ally) {
      return (
        <AllyCard
          card={card}
          onTalk={() => {
            console.log("talk");
            this.forceUpdate();
          }}
        />
      );
    }

    if (card instanceof Enemy) {
      return (
        <EnemyView
          card={card}
          onHit={() => {
            card.hit(10);
            this.forceUpdate();
          }}
        />
      );
    }
  }

  render(): JSX.Element {
    const { cards } = this.state;
    return (
      <div>
        <h1>Cool game</h1>
        {this.renderCard(cards[0])}
      </div>
    );
  }
}
