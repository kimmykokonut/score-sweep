import type { Suits, CardValue } from "../pages/Primiera";
import { getCardImage } from "../utils/cardImages";

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
                  <img src={getCardImage("coins", "seven")} alt="7 of coins" />
                </button>
                <button onClick={() => onCardSelect(activeSuit, "six")}>
                  <img src={getCardImage("coins", "six")} alt="6 of coins" />
                </button>
                <button onClick={() => onCardSelect(activeSuit, "ace")}>
                  <img src={getCardImage("coins", "ace")} alt="Ace of coins" />
                </button>
                <button onClick={() => onCardSelect(activeSuit, "five")}>
                  <img src={getCardImage("coins", "five")} alt="5 of coins" />
                </button>
                <button onClick={() => onCardSelect(activeSuit, "four")}>
                  <img src={getCardImage("coins", "four")} alt="4 of coins" />
                </button>
                <button onClick={() => onCardSelect(activeSuit, "three")}>
                  <img src={getCardImage("coins", "three")} alt="3 of coins" />
                </button>
                <button onClick={() => onCardSelect(activeSuit, "two")}>
                  <img src={getCardImage("coins", "two")} alt="2 of coins" />
                </button>
                <button onClick={() => onCardSelect(activeSuit, "king")}>
                  <img
                    src={getCardImage("coins", "king")}
                    alt="King of coins"
                  />
                </button>
                <button onClick={() => onCardSelect(activeSuit, "horse")}>
                  <img
                    src={getCardImage("coins", "horse")}
                    alt="Horse of coins"
                  />
                </button>
                <button onClick={() => onCardSelect(activeSuit, "jack")}>
                  <img
                    src={getCardImage("coins", "jack")}
                    alt="Jack of coins"
                  />
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
