import * as React from "react";
import { Ally } from "../cards/Ally";

interface AllyCardProps {
  card: Ally;
  onTalk: Function;
}

export class AllyCard extends React.Component<AllyCardProps> {
  render(): JSX.Element {
    const { card, onTalk } = this.props;

    return (
      <div className="ally">
        <div className="title">{card.name}</div>
        <div className="actions">
          <button onClick={() => onTalk()}>talk</button>
        </div>
      </div>
    );
  }
}
