import type { Suits, CardValue } from "../types";
import { CARD_DATA } from "../utils/cardData";

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
        <div className="flex gap-4">
          {CARD_DATA[activeSuit].cards.map((card) => (
            <button
              key={card.value}
              onClick={() => onCardSelect(activeSuit, card.value)}
              className="flex flex-col items-center p-2 border-2 border-purple rounded-lg hover:border-blue-500 transition-all"
            >
              <img
                src={card.image}
                alt={`${card.displayName} of ${CARD_DATA[activeSuit].name}`}
              />
            </button>
          ))}
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default CardSelector;
