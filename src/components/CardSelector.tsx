import type { Suits, CardValue } from "../pages/Primiera";
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

interface CardSelectorProps {
  activeSuit: Suits | null;
  onClose: () => void;
  onCardSelect: (suit: Suits, value: CardValue) => void;
}

function CardSelector({
  activeSuit,
  onClose,
  onCardSelect,
}: CardSelectorProps) {
  if (!activeSuit) return null;

  return (
    <div onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Select {activeSuit}</h3>
        {/* TODO make grid  */}
        <div>
          <div className="modal">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <h3>Coins (Denari)</h3>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <button onClick={() => onCardSelect(activeSuit, "seven")}>
                  <img src={sevenCoins} alt="7 of coins" />
                </button>
                <button onClick={() => onCardSelect(activeSuit, "six")}>
                  <img src={sixCoins} alt="6 of coins" />
                </button>
                <button onClick={() => onCardSelect(activeSuit, "ace")}>
                  <img src={aceCoins} alt="Ace of coins" />
                </button>
                <button onClick={() => onCardSelect(activeSuit, "five")}>
                  <img src={fiveCoins} alt="5 of coins" />
                </button>
                <button onClick={() => onCardSelect(activeSuit, "four")}>
                  <img src={fourCoins} alt="4 of coins" />
                </button>
                <button onClick={() => onCardSelect(activeSuit, "three")}>
                  <img src={threeCoins} alt="3 of coins" />
                </button>
                <button onClick={() => onCardSelect(activeSuit, "two")}>
                  <img src={twoCoins} alt="2 of coins" />
                </button>
                <button onClick={() => onCardSelect(activeSuit, "face")}>
                  <img src={tenCoins} alt="King of coins" />
                </button>
                <button onClick={() => onCardSelect(activeSuit, "face")}>
                  <img src={nineCoins} alt="Horse of coins" />
                </button>
                <button onClick={() => onCardSelect(activeSuit, "face")}>
                  <img src={eightCoins} alt="Jack of coins" />
                </button>
                <button onClick={onClose}>Cancel</button>
              </div>
            </div>
            {/* TODO: add clubs  */}
            {/* TODO: add swords  */}
            {/* TODO: add cups  */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSelector;
