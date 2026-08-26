import { useState } from "react";
import sevenCoins from "../assets/07_Sette_di_denari.jpg";
import sevenCups from "../assets/17_Sette_di_coppe.jpg";
import sevenSpades from "../assets/27_Sette_di_spade.jpg";
import sevenClubs from "../assets/37_Sette_di_bastoni.jpg";

function Primiera() {
  const [score, setScore] = useState<number | null>(null);

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

  const handleCalculate = (e: React.SubmitEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    const coinsValue = primieraValues[data.coins as string];
    const cupsValue = primieraValues[data.cups as string];
    const swordsValue = primieraValues[data.swords as string];
    const clubsValue = primieraValues[data.clubs as string];

    const total = coinsValue + cupsValue + swordsValue + clubsValue;
    setScore(total);
  };
  return (
    <>
      <h1>Primiera Calculator</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <img
          src={sevenCoins}
          alt="Seven of coins card"
          style={{ width: "25%" }}
        />
        <img
          src={sevenCups}
          alt="Seven of cups card"
          style={{ width: "25%" }}
        />
        <img
          src={sevenSpades}
          alt="Seven of spades card"
          style={{ width: "25%" }}
        />
        <img
          src={sevenClubs}
          alt="Seven of clubs card"
          style={{ width: "25%" }}
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

      {score !== null && <div>Primiera Score: {score}</div>}
    </>
  );
}

export default Primiera;
