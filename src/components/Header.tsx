import { useState } from "react";
import { Link } from "react-router";
import logo from "../assets/logo-192x192.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-white">
      <div className="flex h-16 items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2 rounded-sm p-1 hover:bg-gray-100"
        >
          <img src={logo} alt="Logo" className="size-8" />
          <span className="font-bold text-lg">Sweeper</span>
        </Link>
        <div className="flex flex-1 items-center justify-end">
          <nav
            id="primary-navigation"
            aria-label="Global"
            className={`${isMenuOpen ? "block" : "hidden"} absolute left-0 top-full z-10 w-full border-t border-gray-200 bg-white px-4 py-4 shadow-md md:static md:block md:w-auto md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          >
            <ul className="flex flex-col gap-4 text-sm md:flex-row md:items-center md:gap-6">
              <li>
                <Link
                  to="/score"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-500 transition-colors hover:text-gray-500/75"
                >
                  Scopa Scorecard
                </Link>
              </li>
              <li>
                <Link
                  to="/primiera"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-500 transition-colors hover:text-gray-500/75"
                >
                  Primiera Calculator
                </Link>
              </li>
              <li>
                <a
                  className="text-gray-500 transition-colors hover:text-gray-500/75"
                  href="#"
                >
                  Stats
                </a>
              </li>
              <li className="text-center rounded-md bg-emerald-600 px-3 py-2 font-medium text-white transition-colors hover:bg-emerald-800">
                Game Code
              </li>
            </ul>
          </nav>
          <button
            type="button"
            aria-controls="primary-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="rounded-sm bg-gray-100 p-2.5 text-gray-600 transition-colors hover:text-gray-600/75 md:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
