import { Link } from "react-router";
import setteBello from "../assets/07_Sette_di_denari.jpg";

function Home() {
  return (
    <>
      <section id="center">
        <div className="hero">
          <h1>Score Sweep</h1>
        </div>
        <div>
          <Link to="/primiera">Primiera Calculator</Link>
          <img
            src={setteBello}
            alt="Settebello card"
            style={{ width: "35%" }}
          />
        </div>
        <div>
          <img
            src={setteBello}
            alt="Settebello card"
            style={{ width: "35%" }}
          />
          <button type="button" className="counter">
            Scopa Scorecard
          </button>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="social">
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Home;
