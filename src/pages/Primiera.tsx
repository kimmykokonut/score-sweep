import { useState } from "react";
import cup from "../assets/cup.png";
import coin from "../assets/coin.png";
import spade from "../assets/spade.png";
import club from "../assets/club.png";

function Primiera() {
  const [currentScore, setCurrentScore] = useState<number | null>(null);
  const [numPlayers, setNumPlayers] = useState<number | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [playerScores, setPlayerScores] = useState<number[]>([]);

  const primieraValues: Record<string, number> = {
    seven: 21,
    six: 18,
    ace: 16,
    five: 15,
    four: 14,
    three: 13,
    two: 12,
    face: 10,
  };

  const resetCalculator = () => {
    setNumPlayers(null);
    setPlayerScores([]);
    setCurrentPlayer(1);
    setCurrentScore(null);
  };

  const resetSamePlayers = () => {
    setPlayerScores([]);
    setCurrentPlayer(1);
    setCurrentScore(null);
  };

  const handleCalculate = (event: SubmitEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    const coinsValue = primieraValues[data.coins as string];
    const cupsValue = primieraValues[data.cups as string];
    const swordsValue = primieraValues[data.swords as string];
    const clubsValue = primieraValues[data.clubs as string];

    const total = coinsValue + cupsValue + swordsValue + clubsValue;
    setCurrentScore(total);
  };

  const handleContinue = () => {
    if (currentScore !== null) {
      setPlayerScores([...playerScores, currentScore]);
    }
    setCurrentPlayer(currentPlayer + 1);
    setCurrentScore(null);
  };

  const determineWinner = () => {
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
        {/* TODO: make helper function to pass #players, reset state,  */}
        <button onClick={() => setNumPlayers(2)}>2</button>
        <button onClick={() => setNumPlayers(3)}>3</button>
        <button onClick={() => setNumPlayers(4)}>4</button>
      </>
    );
  }

  const allPlayersScored = playerScores.length === numPlayers;

  if (allPlayersScored) {
    const winner = determineWinner();

    return (
      <>
        <h1>Final Results</h1>
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

        <button onClick={() => resetSamePlayers()}>
          Score Again (same number players)
        </button>
        <button onClick={() => resetCalculator()}>Start New Calculator</button>
      </>
    );
  }

  // calculates one players score
  if (numPlayers && !allPlayersScored) {
    return (
      <>
        <h1>Primiera Calculator</h1>
        <h3>Player {currentPlayer}</h3>
        <div style={{ display: "flex", gap: "20px" }}>
          <img
            src={coin}
            alt="coin suit"
            style={{ width: "25%", height: "25%" }}
          />
          <img
            src={cup}
            alt="cups suit"
            style={{ width: "25%", height: "25%" }}
          />
          <img
            src={spade}
            alt="spades suit"
            style={{ width: "25%", height: "25%" }}
          />
          <img
            src={club}
            alt="club suit"
            style={{ width: "25%", height: "25%" }}
          />
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
