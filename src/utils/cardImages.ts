import type { CardValue, Suits } from "../types";
import tenCoins from "../assets/10-denari.jpg";
import nineCoins from "../assets/9-denari.jpg";
import eightCoins from "../assets/8-denari.jpg";
import sevenCoins from "../assets/7-denari.jpg";
import sixCoins from "../assets/6-denari.jpg";
import fiveCoins from "../assets/5-denari.jpg";
import fourCoins from "../assets/4-denari.jpg";
import threeCoins from "../assets/3-denari.jpg";
import twoCoins from "../assets/2-denari.jpg";
import aceCoins from "../assets/1-denari.jpg";

export const getCardImage = (suit: Suits, value: CardValue) => {
  const imageMap: Record<Suits, Record<CardValue, string>> = {
    coins: {
      ace: aceCoins,
      two: twoCoins,
      three: threeCoins,
      four: fourCoins,
      five: fiveCoins,
      six: sixCoins,
      seven: sevenCoins,
      jack: eightCoins,
      horse: nineCoins,
      king: tenCoins,
    },
    cups: {
      // TODO: import and use img
      ace: aceCoins,
      two: twoCoins,
      three: threeCoins,
      four: fourCoins,
      five: fiveCoins,
      six: sixCoins,
      seven: sevenCoins,
      jack: eightCoins,
      horse: nineCoins,
      king: tenCoins,
    },
    swords: {
      // TODO
      ace: aceCoins,
      two: twoCoins,
      three: threeCoins,
      four: fourCoins,
      five: fiveCoins,
      six: sixCoins,
      seven: sevenCoins,
      jack: eightCoins,
      horse: nineCoins,
      king: tenCoins,
    },
    clubs: {
      // TODO
      ace: aceCoins,
      two: twoCoins,
      three: threeCoins,
      four: fourCoins,
      five: fiveCoins,
      six: sixCoins,
      seven: sevenCoins,
      jack: eightCoins,
      horse: nineCoins,
      king: tenCoins,
    },
  };
  return imageMap[suit][value];
};
