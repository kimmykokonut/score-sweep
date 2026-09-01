import { useState } from "react";
import { Link } from "react-router";
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

function Primiera() {
  const [currentScore, setCurrentScore] = useState<number | null>(null);
  const [numPlayers, setNumPlayers] = useState<number | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [playerScores, setPlayerScores] = useState<number[]>([]);
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

  type CardValue =
    | "seven"
    | "six"
    | "ace"
    | "five"
    | "four"
    | "three"
    | "two"
    | "face";

  const primieraValues: Record<CardValue, number> = {
    seven: 21,
    six: 18,
    ace: 16,
    five: 15,
    four: 14,
    three: 13,
    two: 12,
    face: 10,
  };

  const resetCaculator = (players: number | null = null) => {
    setNumPlayers(players);
    setPlayerScores([]);
    setCurrentPlayer(1);
    setCurrentScore(null);
  };

  const handleCalculate = (event: SubmitEvent) => {
    event.preventDefault();

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
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <h3>Coins (Denari)</h3>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <button
              onClick={() =>
                setCardSelections((prev) => ({ ...prev, coins: "seven" }))
              }
            >
              <img src={sevenCoins} alt="7 of coins" />
            </button>
            <button
              onClick={() =>
                setCardSelections((prev) => ({ ...prev, coins: "six" }))
              }
            >
              <img src={sixCoins} alt="6 of coins" />
            </button>
            <button
              onClick={() =>
                setCardSelections((prev) => ({ ...prev, coins: "ace" }))
              }
            >
              <img src={aceCoins} alt="Ace of coins" />
            </button>
            <button
              onClick={() =>
                setCardSelections((prev) => ({ ...prev, coins: "five" }))
              }
            >
              <img src={fiveCoins} alt="5 of coins" />
            </button>
            <button
              onClick={() =>
                setCardSelections((prev) => ({ ...prev, coins: "four" }))
              }
            >
              <img src={fourCoins} alt="4 of coins" />
            </button>
            <button
              onClick={() =>
                setCardSelections((prev) => ({ ...prev, coins: "three" }))
              }
            >
              <img src={threeCoins} alt="3 of coins" />
            </button>
            <button
              onClick={() =>
                setCardSelections((prev) => ({ ...prev, coins: "two" }))
              }
            >
              <img src={twoCoins} alt="2 of coins" />
            </button>
            <button
              onClick={() =>
                setCardSelections((prev) => ({ ...prev, coins: "face" }))
              }
            >
              <img src={tenCoins} alt="King of coins" />
            </button>
            <button
              onClick={() =>
                setCardSelections((prev) => ({ ...prev, coins: "face" }))
              }
            >
              <img src={nineCoins} alt="Horse of coins" />
            </button>
            <button
              onClick={() =>
                setCardSelections((prev) => ({ ...prev, coins: "face" }))
              }
            >
              <img src={eightCoins} alt="Jack of coins" />
            </button>
          </div>
        </div>

        <form onSubmit={handleCalculate}>
          <label htmlFor="coins">Coins (Denari)</label>
          <select name="coins" id="coins">
            <option value="seven">7</option>
            <option value="six">6</option>
            <option value="ace">A</option>
            <option value="five">5</option>
            <option value="four">4</option>
            <option value="three">3</option>
            <option value="two">2</option>
            <option value="face">King, Queen, Jack</option>
          </select>

          <label htmlFor="cups">Cups (Coppe)</label>
          <select name="cups" id="cups">
            <option value="seven">7</option>
            <option value="six">6</option>
            <option value="ace">A</option>
            <option value="five">5</option>
            <option value="four">4</option>
            <option value="three">3</option>
            <option value="two">2</option>
            <option value="face">King, Queen, Jack</option>
          </select>

          <label htmlFor="swords">Swords (Spade)</label>
          <select name="swords" id="swords">
            <option value="seven">7</option>
            <option value="six">6</option>
            <option value="ace">A</option>
            <option value="five">5</option>
            <option value="four">4</option>
            <option value="three">3</option>
            <option value="two">2</option>
            <option value="face">King, Queen, Jack</option>
          </select>

          <label htmlFor="clubs">Clubs (Bastoni)</label>
          <select name="clubs" id="clubs">
            <option value="seven">7</option>
            <option value="six">6</option>
            <option value="ace">A</option>
            <option value="five">5</option>
            <option value="four">4</option>
            <option value="three">3</option>
            <option value="two">2</option>
            <option value="face">King, Queen, Jack</option>
          </select>

          <input type="submit" value="Calculate" />
        </form>
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
