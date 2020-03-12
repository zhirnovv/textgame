export interface ICollectible {
  weight: number;

  collect(): void;

  getInfo(): string;
}
