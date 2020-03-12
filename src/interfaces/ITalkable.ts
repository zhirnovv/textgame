export interface IDialog {
  statements: IStatement[];
}

export interface IStatement {
  statement: string;
  response: IResponse;
}

export interface IResponse {
  response: string;
  statements: IStatement[];
}

export interface ITalkable {
  talk(): void;
}
