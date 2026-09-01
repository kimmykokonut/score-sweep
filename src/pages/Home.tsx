import { Link } from "react-router";
import setteBello from "../assets/7-denari.jpg";
import assoDenari from "../assets/1-denari.jpg";

function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          padding: "40px",
        }}
      >
        <h1>Score Sweep</h1>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/primiera">
            <img
              src={setteBello}
              alt="Settebello card"
              style={{ width: "50%" }}
            />
            <div>Primiera Calculator</div>
          </Link>
          <Link to="/score">
            <img
              src={assoDenari}
              alt="Ace of coins card"
              style={{ width: "50%" }}
            />
            <div>Scopa Scorecard</div>
          </Link>
        </div>
      </div>
      <div id="social">
        <a href="https://github.com/kimmykokonut" target="_blank">
          <svg className="button-icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#github-icon"></use>
          </svg>
        </a>
        <p>kimmykokonut</p>
      </div>
    </>
  );
}

export default Home;
