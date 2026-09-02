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
      ace: aceCups,
      two: twoCups,
      three: threeCups,
      four: fourCups,
      five: fiveCups,
      six: sixCups,
      seven: sevenCups,
      jack: eightCups,
      horse: nineCups,
      king: tenCups,
    },
    swords: {
      ace: aceSwords,
      two: twoSwords,
      three: threeSwords,
      four: fourSwords,
      five: fiveSwords,
      six: sixSwords,
      seven: sevenSwords,
      jack: eightSwords,
      horse: nineSwords,
      king: tenSwords,
    },
    clubs: {
      ace: aceClubs,
      two: twoClubs,
      three: threeClubs,
      four: fourClubs,
      five: fiveClubs,
      six: sixClubs,
      seven: sevenClubs,
      jack: eightClubs,
      horse: nineClubs,
      king: tenClubs,
    },
  };
  return imageMap[suit][value];
};
