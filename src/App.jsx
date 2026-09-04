import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const players = {
    goalkeeper: [
      { name: "Verbruggen", club: "Brighton", icon: "🧤", badge: "🔵" }
    ],

    defenders: [
      { name: "White", club: "Arsenal", icon: "🛡️", badge: "🔴" },
      { name: "Hume", club: "Sunderland", icon: "🛡️", badge: "🔴" },
      { name: "Ruben", club: "Man City", icon: "🛡️", badge: "🔵" }
    ],

    midfielders: [
      { name: "Foden", club: "Man City", icon: "⚡", badge: "🔵" },
      { name: "Szoboszlai", club: "Liverpool", icon: "⚡", badge: "🔴", captain: true },
      { name: "Gross", club: "Brighton", icon: "⚡", badge: "🔵" },
      { name: "Bruno", club: "Man Utd", icon: "⚡", badge: "🔴" }
    ],

    forwards: [
      { name: "Haaland", club: "Man City", icon: "🎯", badge: "🔵", tripleCaptain: true },
      { name: "DCL", club: "Leeds United", icon: "🎯", badge: "🟡" },
      { name: "Joao Pedro", club: "Chelsea", icon: "🎯", badge: "🔵" }
    ]
  };

  const bench = [
    { name: "Woodsman", club: "Leeds United" },
    { name: "Konsa", club: "Aston Villa" },
    { name: "Tzolis", club: "Club" },
    { name: "Diop", club: "Fulham" }
  ];

  const Player = ({ player }) => (
    <div className={`player ${player.captain ? "captain" : ""}`}>
      <div className="player-icon">
        <span>{player.badge}</span>
        <span>{player.icon}</span>
      </div>

      <strong>
        {player.name}
        {player.captain && " 👑"}
      </strong>

      <small>{player.club}</small>

      {player.tripleCaptain && (
        <div className="triple-captain">TC</div>
      )}
    </div>
  );

  // HOME PAGE
  const Home = () => (
    <>
      <header className="header">
        <h1>Ions FPL Lineup</h1>
        <p>Gameweek 4</p>
      </header>

      <main className="pitch">

        <div className="row">
          {players.goalkeeper.map((player) => (
            <Player key={player.name} player={player} />
          ))}
        </div>

        <div className="row">
          {players.defenders.map((player) => (
            <Player key={player.name} player={player} />
          ))}
        </div>

        <div className="row">
          {players.midfielders.map((player) => (
            <Player key={player.name} player={player} />
          ))}
        </div>

        <div className="row">
          {players.forwards.map((player) => (
            <Player key={player.name} player={player} />
          ))}
        </div>

      </main>

      <section className="info">
        <h2>👑 Triple Captain: Haaland</h2>
        <p>Formation: 3-4-3</p>
      </section>

      <section className="bench">
        <h2>Bench</h2>

        <div className="bench-grid">
          {bench.map((player) => (
            <div className="bench-player" key={player.name}>
              <div className="bench-icon">👕</div>
              <strong>{player.name}</strong>
              <small>{player.club}</small>
            </div>
          ))}
        </div>
      </section>
    </>
  );

  // MY SQUAD PAGE
  const MySquad = () => (
    <section className="page">
      <h1>My Squad</h1>
      <p>My complete FPL squad for Gameweek 4.</p>

      <div className="squad-list">
        <h2>Goalkeeper</h2>
        {players.goalkeeper.map((player) => (
          <Player key={player.name} player={player} />
        ))}

        <h2>Defenders</h2>
        <div className="squad-row">
          {players.defenders.map((player) => (
            <Player key={player.name} player={player} />
          ))}
        </div>

        <h2>Midfielders</h2>
        <div className="squad-row">
          {players.midfielders.map((player) => (
            <Player key={player.name} player={player} />
          ))}
        </div>

        <h2>Forwards</h2>
        <div className="squad-row">
          {players.forwards.map((player) => (
            <Player key={player.name} player={player} />
          ))}
        </div>
      </div>
    </section>
  );

  // GAMEWEEKS PAGE
  const Gameweeks = () => (
    <section className="page">
      <h1>Gameweeks</h1>
      <p>Track my FPL team from week to week.</p>

      <div className="gameweeks">
        <div className="gameweek-card">
          <h2>Gameweek 1</h2>
          <p>Starting lineup and points.</p>
        </div>

        <div className="gameweek-card">
          <h2>Gameweek 2</h2>
          <p>Starting lineup and points.</p>
        </div>

        <div className="gameweek-card">
          <h2>Gameweek 3</h2>
          <p>Starting lineup and points.</p>
        </div>

        <div className="gameweek-card active">
          <h2>Gameweek 4</h2>
          <p>Current lineup — 3-4-3</p>
        </div>
      </div>
    </section>
  );

  // ABOUT PAGE
  const About = () => (
    <section className="page about">
      <h1>About My FPL</h1>

      <p>
        Welcome to my personal Fantasy Premier League website.
      </p>

      <p>
        This website is where I track my squad, starting lineup,
        captain choices, bench players and Gameweek performances.
      </p>

      <div className="about-card">
        <h2>⚽ What I Track</h2>
        <ul>
          <li>My starting XI</li>
          <li>Captain and Triple Captain</li>
          <li>Bench players</li>
          <li>Gameweek lineups</li>
          <li>Formation</li>
          <li>Future transfers</li>
        </ul>
      </div>
    </section>
  );

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2>⚽ My FPL</h2>

        <div className="nav-links">
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("squad")}>My Squad</button>
          <button onClick={() => setPage("gameweeks")}>Gameweeks</button>
          <button onClick={() => setPage("about")}>About</button>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      {page === "home" && <Home />}
      {page === "squad" && <MySquad />}
      {page === "gameweeks" && <Gameweeks />}
      {page === "about" && <About />}

    </div>
  );
}

export default App;

