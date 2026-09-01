import { useState } from "react";
import { Link } from "react-router";
import CardSelector from "../components/CardSelector";
import coin from "../assets/coin.png";
import cup from "../assets/cup.png";
import club from "../assets/club.png";
import sword from "../assets/spade.png";
import { getCardImage } from "../utils/cardImages";

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

function Primiera() {
  const [currentScore, setCurrentScore] = useState<number | null>(null);
  const [numPlayers, setNumPlayers] = useState<number | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [playerScores, setPlayerScores] = useState<number[]>([]);
  const [activeSuit, setActiveSuit] = useState<Suits | null>(null);
  const [cardSelections, setCardSelections] = useState<{
    coins: CardValue | null;
    cups: CardValue | null;
    swords: CardValue | null;
    clubs: CardValue | null;
  }>({
    coins: null,
    cups: null,
    swords: null,
    clubs: null,
  });

  const primieraValues: Record<CardValue, number> = {
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

  const resetCaculator = (players: number | null = null) => {
    setNumPlayers(players);
    setPlayerScores([]);
    setCurrentPlayer(1);
    setCurrentScore(null);
  };

  const handleCalculate = () => {
    if (
      !cardSelections.coins ||
      !cardSelections.cups ||
      !cardSelections.swords ||
      !cardSelections.clubs
    )
      return;

    const total =
      primieraValues[cardSelections.coins] +
      primieraValues[cardSelections.cups] +
      primieraValues[cardSelections.swords] +
      primieraValues[cardSelections.clubs];
    setCurrentScore(total);
  };

  const handleContinue = () => {
    if (currentScore !== null) {
      setPlayerScores([...playerScores, currentScore]);
    }
    setCurrentPlayer(currentPlayer + 1);
    setCurrentScore(null);
  };

  const determinePrimieraWinner = () => {
    if (playerScores.length === 0) return null;
    const sortedScores = [...playerScores].sort((a, b) => b - a);
    // determine tie
    if (sortedScores[0] === sortedScores[1]) {
      return null;
    }
    const highScore = sortedScores[0];
    const winnerIndex = playerScores.indexOf(highScore);
    return winnerIndex + 1;
  };

  // prompt user choose # players. TODO extract to component. <PlayerSelection>
  if (!numPlayers) {
    return (
      <>
        <p>How many players?</p>
        <button onClick={() => resetCaculator(2)}>2</button>
        <button onClick={() => resetCaculator(3)}>3</button>
        <button onClick={() => resetCaculator(4)}>4</button>
      </>
    );
  }

  const allPlayersScored = playerScores.length === numPlayers;

  if (allPlayersScored) {
    const winner = determinePrimieraWinner();

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
        ;<h1>Final Results</h1>
        {winner ? (
          <p>
            {" "}
            <p>Winner: Player {winner}</p>
          </p>
        ) : (
          <p>Tie (no point scored)</p>
        )}
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

  // calculates one players score
  if (numPlayers && !allPlayersScored) {
    return (
      <>
        {/* put this h1 in header?  */}
        <h1>Primiera Calculator</h1>
        <h3>Player {currentPlayer}</h3>
        <div>
          <button onClick={() => setActiveSuit("coins")}>
            {cardSelections.coins ? (
              <img
                src={getCardImage("coins", cardSelections.coins)}
                alt="Selected coin card"
              />
            ) : (
              <img src={coin} alt="Coin suit" />
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
        </div>
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
