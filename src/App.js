import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import CharacterForm from "./components/CharacterForm";
import Info from "./components/Info";
import InfoRaces from "./components/InfoRaces";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<CharacterForm />} />
          <Route path="/Classes" element={<Info />} /> {/* Используем Info на /Classes */}
          <Route path="/Races" element={<InfoRaces />} />
        </Routes>
      </div>
    </Router>
  );
}

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navbar">
      {location.pathname === "/Classes" ? (
        <Link to="/" className="nav-button">
          Back
        </Link>
      ) : (
        <Link to="/Classes" className="nav-button">
          About Classes
        </Link>
      )}
      {location.pathname === "/Races" ? (
        <Link to="/" className="nav-button">
          Back
        </Link>
      ) : (
        <Link to="/Races" className="nav-button">
          About Races
        </Link>
      )}
    </nav>
  );
}
export default App;
