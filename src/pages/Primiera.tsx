import { useState } from "react";
import { Link } from "react-router";
import CardSelector from "../components/CardSelector";
import {
  calculatePrimieraScore,
  determinePrimieraWinner,
  primieraValues,
} from "../utils/primieraCalculator";
import { getCardImage } from "../utils/cardImages";
import type { CardSelections, Suits } from "../types";
import coin from "../assets/denare.png";
import cup from "../assets/coppa.png";
import club from "../assets/bastone.png";
import sword from "../assets/spada.png";

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
    setCurrentPlayer(currentPlayer + 1);
    setCurrentScore(null);
  };

  // prompt user choose # players
  if (!numPlayers) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-700 to-emerald-800 flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold text-white mb-2 text-center">
          Primiera Calculator
        </h1>
        <p className="text-green-200 mb-8 text-center">Quanti giocatori?</p>

        <div className="flex flex-col gap-4 w-full max-w-xs">
          <button
            onClick={() => resetCaculator(2)}
            className="bg-white text-green-900 font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-stone-300 hover:scale-105 transition-all text-xl flex items-center justify-center gap-3"
          >
            <img src={coin} alt="card" className="w-8 h-8" />2 Players
          </button>
          <button
            onClick={() => resetCaculator(3)}
            className="bg-white text-green-900 font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-stone-300 hover:scale-105 transition-all text-xl flex items-center justify-center gap-3"
          >
            <img src={club} alt="card" className="w-8 h-8" />3 Players
          </button>
          <button
            onClick={() => resetCaculator(4)}
            className="bg-white text-green-900 font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-stone-300 hover:scale-105 transition-all text-xl flex items-center justify-center gap-3"
          >
            <img src={cup} alt="card" className="w-8 h-8" />4 Players
          </button>
        </div>
      </div>
    );
  }

  const allPlayersScored = playerScores.length === numPlayers;

  if (allPlayersScored) {
    const winner = determinePrimieraWinner(playerScores);

    return (
      <>
        {/* turn into Header component later */}
        <div
          style={{ position: "fixed", top: "10px", left: "10px", zIndex: 1000 }}
        >
          <Link to="/" style={{ fontSize: "24px", textDecoration: "none" }}>
            ← Back
          </Link>
        </div>
        <h1>Final Results</h1>
        {winner ? <p>Winner: Player {winner}</p> : <p>Tie (no point scored)</p>}
        <ul>
          {playerScores.map((score, player) => (
            <li key={player}>
              Player {player + 1} : Score {score}
            </li>
          ))}
        </ul>
        <button onClick={() => resetCaculator(numPlayers)}>
          Reset Calculator (same number of players)
        </button>
        <button onClick={() => resetCaculator(null)}>
          Reset and change player count
        </button>
      </>
    );
  }

  // 4 suit buttons, when selected, modal opens for user to choose card.
  if (numPlayers && !allPlayersScored) {
    return (
      <>
        {/* put this h1 in header?  */}
        <h1>Primiera Calculator</h1>
        <h3>Player {currentPlayer}</h3>
        {/* show suit icon or selected card and value  */}
        <button onClick={() => setActiveSuit("coins")}>
          {cardSelections.coins ? (
            <div className="flex flex-col items-center">
              <img
                src={getCardImage("coins", cardSelections.coins)}
                alt="Selected coin card"
                className="w-24 h-auto"
              />
              <span className="text-sm mt-1 capitalize">
                {primieraValues[cardSelections.coins]}
              </span>
            </div>
          ) : (
            <img src={coin} alt="Coin suit" className="w-12 h-auto" />
          )}
        </button>
        <button onClick={() => setActiveSuit("cups")}>
          <img src={cup} alt="Cup suit" />
        </button>
        <button onClick={() => setActiveSuit("swords")}>
          <img src={sword} alt="Spade/Sword suit" />
        </button>
        <button onClick={() => setActiveSuit("clubs")}>
          <img src={club} alt="Club suit" />
        </button>
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
        {/* Calculate button disabled until 4 cards chosen  */}
        <button
          onClick={handleCalculate}
          disabled={
            !cardSelections.coins ||
            !cardSelections.cups ||
            !cardSelections.swords ||
            !cardSelections.clubs
          }
        >
          Calculate score
        </button>
        {currentScore !== null && (
          <div>
            <p>
              Player {currentPlayer} score: {currentScore}
            </p>
          </div>
        )}
        {currentScore && (
          <button onClick={handleContinue}>Continue to Next Player</button>
        )}
        <ul>
          {playerScores.map((score, player) => (
            <li key={player}>
              Player {player + 1} : Score {score}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Primiera;
