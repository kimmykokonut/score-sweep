export type Suits = "coins" | "cups" | "swords" | "clubs";

export type CardValue =
  | "seven"
  | "six"
  | "ace"
  | "five"
  | "four"
  | "three"
  | "two"
  | "jack"
  | "horse"
  | "king";

export interface CardSelections {
  coins: CardValue | null;
  cups: CardValue | null;
  swords: CardValue | null;
  clubs: CardValue | null;
}
