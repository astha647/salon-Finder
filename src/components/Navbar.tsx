import { Link, NavLink } from "react-router-dom";

interface NavbarProps {
  favoritesCount: number;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

function Navbar({ favoritesCount, isDarkMode, onToggleDarkMode }: NavbarProps) {
  return (
    <header className="navbar">
      <Link to="/" className="brand">
        Salon Finder
      </Link>
      <nav className="nav-links">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <span className="favorite-pill">Favorites: {favoritesCount}</span>
        <button onClick={onToggleDarkMode} className="theme-toggle" type="button">
          {isDarkMode ? "Light" : "Dark"}
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
