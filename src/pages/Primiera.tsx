import { useState } from "react";
import CardSelector from "../components/CardSelector";
import {
  calculatePrimieraScore,
  determinePrimieraWinner,
  primieraValues,
} from "../utils/primieraCalculator";
import type { CardSelections, Suits } from "../types";
import { CARD_DATA, getCardImage } from "../utils/cardData";
import PrimieraTitle from "../components/PrimieraTitle";

function Primiera() {
  const [currentScore, setCurrentScore] = useState<number | null>(null);
  const [numPlayers, setNumPlayers] = useState<number | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [playerScores, setPlayerScores] = useState<number[]>([]);
  const [activeSuit, setActiveSuit] = useState<Suits | null>(null);
  const [cardSelections, setCardSelections] = useState<CardSelections>({
    coins: null,
    cups: null,
    swords: null,
    clubs: null,
  });

  const primieraPageClasses =
    "mx-auto min-h-[calc(100svh-4rem)] w-full max-w-4xl flex flex-col items-center gap-6 px-4 py-4 bg-gradient-to-br from-emerald-700 to-emerald-800";
  const calculatorPageClasses =
    "mx-auto min-h-[calc(100svh-4rem)] w-full max-w-4xl flex flex-col items-center gap-2 px-4 py-2 bg-gradient-to-br from-emerald-700 to-emerald-800";
  const playerSelectBtnClasses =
    "bg-white text-green-800 font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-gray-200 hover:scale-105 transition-all text-xl flex items-center justify-center gap-3";

  const resetCaculator = (players: number | null = null) => {
    setNumPlayers(players);
    setPlayerScores([]);
    setCurrentPlayer(1);
    setCurrentScore(null);
  };

  const handleCalculate = () => {
    const total = calculatePrimieraScore(cardSelections);
    setCurrentScore(total);
  };

  const handleContinue = () => {
    if (currentScore !== null) {
      setPlayerScores([...playerScores, currentScore]);
    }
    setCurrentScore(null);
    resetCardSelections();
    // triggers win screen
    if (currentPlayer !== numPlayers) {
      setCurrentPlayer(currentPlayer + 1);
    }
  };

  const resetCardSelections = () => {
    setCardSelections({
      coins: null,
      cups: null,
      swords: null,
      clubs: null,
    });
  };

  // prompt user choose # players
  if (!numPlayers) {
    return (
      <div className={`${primieraPageClasses} justify-center`}>
        <PrimieraTitle />
        <div className="flex flex-col gap-4 w-full max-w-xs">
          <button
            onClick={() => resetCaculator(2)}
            className={playerSelectBtnClasses}
          >
            <img
              src={CARD_DATA["coins"].icon}
              alt="Coin suit"
              className="h-10"
            />
            2 Players
          </button>
          <button
            onClick={() => resetCaculator(3)}
            className={playerSelectBtnClasses}
          >
            <img
              src={CARD_DATA["swords"].icon}
              alt="Sword suit"
              className="h-10"
            />
            3 Players
          </button>
          <button
            onClick={() => resetCaculator(4)}
            className={playerSelectBtnClasses}
          >
            <img src={CARD_DATA["cups"].icon} alt="Cup Suit" className="h-10" />
            4 Players
          </button>
        </div>
      </div>
    );
  }

  // 4 suit buttons, when selected, modal opens for user to choose card.
  if (numPlayers) {
    const allPlayersScored = playerScores.length === numPlayers;
    const winner = determinePrimieraWinner(playerScores);

    return (
      <>
        {/* Player scoring by suit  */}
        <div className={calculatorPageClasses}>
          {!allPlayersScored && (
            <>
              <PrimieraTitle />
              <p className="-mt-2 text-center text-white">
                Player ({currentPlayer}/{numPlayers})
              </p>
              <div
                className={`grid grid-cols-2 md:grid-cols-4 ${
                  currentScore !== null
                    ? "w-5/6 max-w-md gap-2"
                    : "w-full max-w-2xl gap-4"
                }`}
              >
                {(Object.keys(CARD_DATA) as Suits[]).map((suit) => (
                  <button
                    key={suit}
                    onClick={() => setActiveSuit(suit)}
                    className="flex aspect-[2/3] flex-col items-center justify-center overflow-hidden rounded-md bg-white p-1 shadow-lg transition-colors hover:bg-gray-200"
                  >
                    {cardSelections[suit] ? (
                      <div className="flex h-full w-full flex-col items-center justify-center">
                        <img
                          src={getCardImage(suit, cardSelections[suit])}
                          alt={`Selected ${CARD_DATA[suit].name} card`}
                          className="min-h-0 w-full flex-1 object-contain"
                        />
                        <span className="shrink-0 text-sm font-semibold text-emerald-800">
                          {primieraValues[cardSelections[suit]]}
                        </span>
                      </div>
                    ) : (
                      <img
                        src={CARD_DATA[suit].icon}
                        alt={`${CARD_DATA[suit].name} suit`}
                        className="max-h-full max-w-full object-contain"
                      />
                    )}
                  </button>
                ))}
              </div>
            </>
          )}
          {activeSuit && (
            <CardSelector
              activeSuit={activeSuit}
              onClose={() => setActiveSuit(null)}
              onCardSelect={(suit, value) => {
                setCardSelections((prev) => ({ ...prev, [suit]: value }));
                setActiveSuit(null);
              }}
            />
          )}
          {/* Calculate button - hidden until 4 cards chosen  */}
          {cardSelections.coins &&
            cardSelections.cups &&
            cardSelections.swords &&
            cardSelections.clubs && (
              <button
                className="rounded-md bg-yellow-300 px-3 py-1 font-semibold text-emerald-800 transition-colors hover:bg-gray-400"
                onClick={handleCalculate}
              >
                Calculate score
              </button>
            )}
          {currentScore !== null && (
            <div className="w-full flex justify-between items-center rounded-md text-emerald-800 border border-emerald-100 bg-white px-3 py-2 shadow-sm">
              {/* unconfirmed calculated player score  */}
              <p className="font-semibold">Current Score: {currentScore}</p>
              {/* Advance button  */}
              {currentScore !== null && (
                <button
                  className="rounded-md text-white bg-blue-800 px-3 py-1 font-semibold transition-colors hover:bg-blue-600"
                  onClick={handleContinue}
                >
                  {currentPlayer === numPlayers
                    ? "Finalize Scores"
                    : "Next Player"}
                </button>
              )}
            </div>
          )}

          <ul className="w-full max-w-sm space-y-1 p-1 text-center rounded-md border border-emerald-100 bg-white">
            {playerScores.map((score, player) => (
              <li key={player} className="text-emerald-800 font-semibold">
                Player {player + 1}: {score}
              </li>
            ))}
          </ul>
        </div>
        {allPlayersScored && (
          <>
            <h1 className="text-3xl font-bold text-gray-900">Final Results</h1>
            {winner ? (
              <p className="text-lg text-gray-700">
                Winner: Player {winner}: {playerScores[winner - 1]} points
              </p>
            ) : (
              <p>Tie (no point scored)</p>
            )}
            <div className="flex w-full max-w-sm flex-col gap-3 sm:flex-row">
              <button
                className="border"
                onClick={() => resetCaculator(numPlayers)}
              >
                Reset Calculator (same number of players)
              </button>
              <button className="border" onClick={() => resetCaculator(null)}>
                Reset and change player count
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default Primiera;
