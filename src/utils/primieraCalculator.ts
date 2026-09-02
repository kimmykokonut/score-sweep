import type { CardSelections, CardValue } from "../types";

export const primieraValues: Record<CardValue, number> = {
  seven: 21,
  six: 18,
  ace: 16,
  five: 15,
  four: 14,
  three: 13,
  two: 12,
  jack: 10,
  horse: 10,
  king: 10,
};

export const calculatePrimieraScore = (selections: CardSelections): number => {
  if (
    !selections.coins ||
    !selections.cups ||
    !selections.swords ||
    !selections.clubs
  )
    return 0;

  return (
    primieraValues[selections.coins] +
    primieraValues[selections.cups] +
    primieraValues[selections.swords] +
    primieraValues[selections.clubs]
  );
};

export const determinePrimieraWinner = (scores: number[]): number | null => {
  if (scores.length === 0) return null;
  const sortedScores = [...scores].sort((a, b) => b - a);
  // determine tie
  if (sortedScores[0] === sortedScores[1]) {
    return null;
  }
  const highScore = sortedScores[0];
  const winnerIndex = scores.indexOf(highScore);
  return winnerIndex + 1;
};
