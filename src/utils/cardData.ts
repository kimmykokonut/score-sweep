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
import aceCups from "../assets/1-coppe.jpg";
import twoCups from "../assets/2-coppe.jpg";
import threeCups from "../assets/3-coppe.jpg";
import fourCups from "../assets/4-coppe.jpg";
import fiveCups from "../assets/5-coppe.jpg";
import sixCups from "../assets/6-coppe.jpg";
import sevenCups from "../assets/7-coppe.jpg";
import eightCups from "../assets/8-coppe.jpg";
import nineCups from "../assets/9-coppe.jpg";
import tenCups from "../assets/10-coppe.jpg";
import aceClubs from "../assets/1-bastoni.jpg";
import twoClubs from "../assets/2-bastoni.jpg";
import threeClubs from "../assets/3-bastoni.jpg";
import fourClubs from "../assets/4-bastoni.jpg";
import fiveClubs from "../assets/5-bastoni.jpg";
import sixClubs from "../assets/6-bastoni.jpg";
import sevenClubs from "../assets/7-bastoni.jpg";
import eightClubs from "../assets/8-bastoni.jpg";
import nineClubs from "../assets/9-bastoni.jpg";
import tenClubs from "../assets/10-bastoni.jpg";
import aceSwords from "../assets/1-spade.jpg";
import twoSwords from "../assets/2-spade.jpg";
import threeSwords from "../assets/3-spade.jpg";
import fourSwords from "../assets/4-spade.jpg";
import fiveSwords from "../assets/5-spade.jpg";
import sixSwords from "../assets/6-spade.jpg";
import sevenSwords from "../assets/7-spade.jpg";
import eightSwords from "../assets/8-spade.jpg";
import nineSwords from "../assets/9-spade.jpg";
import tenSwords from "../assets/10-spade.jpg";
import coin from "../assets/denare.png";
import cup from "../assets/coppa.png";
import club from "../assets/bastone.png";
import sword from "../assets/spada.png";

export const CARD_DATA: Record<
  Suits,
  {
    name: string;
    displayName: string;
    icon: string;
    cards: Array<{
      value: CardValue;
      image: string;
      displayName: string;
      points: number;
    }>;
  }
> = {
  coins: {
    name: "Coins",
    displayName: "Denari",
    icon: coin,
    cards: [
      { value: "seven", image: sevenCoins, displayName: "7", points: 21 },
      { value: "six", image: sixCoins, displayName: "6", points: 18 },
      { value: "ace", image: aceCoins, displayName: "A", points: 16 },
      { value: "five", image: fiveCoins, displayName: "5", points: 15 },
      { value: "four", image: fourCoins, displayName: "4", points: 14 },
      { value: "three", image: threeCoins, displayName: "3", points: 13 },
      { value: "two", image: twoCoins, displayName: "2", points: 12 },
      { value: "jack", image: eightCoins, displayName: "Jack", points: 10 },
      { value: "horse", image: nineCoins, displayName: "Horse", points: 10 },
      { value: "king", image: tenCoins, displayName: "King", points: 10 },
    ],
  },
  cups: {
    name: "Cups",
    displayName: "Coppe",
    icon: cup,
    cards: [
      { value: "seven", image: sevenCups, displayName: "7", points: 21 },
      { value: "six", image: sixCups, displayName: "6", points: 18 },
      { value: "ace", image: aceCups, displayName: "A", points: 16 },
      { value: "five", image: fiveCups, displayName: "5", points: 15 },
      { value: "four", image: fourCups, displayName: "4", points: 14 },
      { value: "three", image: threeCups, displayName: "3", points: 13 },
      { value: "two", image: twoCups, displayName: "2", points: 12 },
      { value: "jack", image: eightCups, displayName: "Jack", points: 10 },
      { value: "horse", image: nineCups, displayName: "Horse", points: 10 },
      { value: "king", image: tenCups, displayName: "King", points: 10 },
    ],
  },
  clubs: {
    name: "Clubs",
    displayName: "Bastoni",
    icon: club,
    cards: [
      { value: "seven", image: sevenClubs, displayName: "7", points: 21 },
      { value: "six", image: sixClubs, displayName: "6", points: 18 },
      { value: "ace", image: aceClubs, displayName: "A", points: 16 },
      { value: "five", image: fiveClubs, displayName: "5", points: 15 },
      { value: "four", image: fourClubs, displayName: "4", points: 14 },
      { value: "three", image: threeClubs, displayName: "3", points: 13 },
      { value: "two", image: twoClubs, displayName: "2", points: 12 },
      { value: "jack", image: eightClubs, displayName: "Jack", points: 10 },
      { value: "horse", image: nineClubs, displayName: "Horse", points: 10 },
      { value: "king", image: tenClubs, displayName: "King", points: 10 },
    ],
  },
  swords: {
    name: "Swords",
    displayName: "Spade",
    icon: sword,
    cards: [
      { value: "seven", image: sevenSwords, displayName: "7", points: 21 },
      { value: "six", image: sixSwords, displayName: "6", points: 18 },
      { value: "ace", image: aceSwords, displayName: "A", points: 16 },
      { value: "five", image: fiveSwords, displayName: "5", points: 15 },
      { value: "four", image: fourSwords, displayName: "4", points: 14 },
      { value: "three", image: threeSwords, displayName: "3", points: 13 },
      { value: "two", image: twoSwords, displayName: "2", points: 12 },
      { value: "jack", image: eightSwords, displayName: "Jack", points: 10 },
      { value: "horse", image: nineSwords, displayName: "Horse", points: 10 },
      { value: "king", image: tenSwords, displayName: "King", points: 10 },
    ],
  },
};

export const getCardImage = (suit: Suits, value: CardValue) => {
  return CARD_DATA[suit].cards.find((card) => card.value === value)?.image;
};
