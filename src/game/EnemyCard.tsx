import * as React from "react";
import { Enemy } from "../cards/Enemy";

export interface EnemyCardProps {
  card: Enemy;
  onHit: Function;
}

export class EnemyView extends React.Component<EnemyCardProps> {
  render(): JSX.Element {
    const { card, onHit } = this.props;

    return (
      <div className="enemy">
        <div className="title">{card.name}</div>
        <div className="health">{card.hp}</div>
        <div className="actions">
          <button onClick={() => onHit()}>hit!</button>
        </div>
      </div>
    );
  }
}
