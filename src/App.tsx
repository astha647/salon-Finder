import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { salons } from "./data/salons";
import type { Salon } from "./types";
import HomePage from "./pages/HomePage";
import SalonDetailsPage from "./pages/SalonDetailsPage";
import Navbar from "./components/Navbar";

const FAVORITES_KEY = "salon-favorites";

function App() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedFavorites = localStorage.getItem(FAVORITES_KEY);
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites) as number[]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const favoriteSalons = useMemo(
    () => salons.filter((salon) => favorites.includes(salon.id)),
    [favorites]
  );

  const toggleFavorite = (salonId: number) => {
    setFavorites((prev) =>
      prev.includes(salonId)
        ? prev.filter((id) => id !== salonId)
        : [...prev, salonId]
    );
  };

  const getSalonById = (id: number): Salon | undefined =>
    salons.find((salon) => salon.id === id);

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : ""}`}>
      <Navbar
        favoritesCount={favorites.length}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode((prev) => !prev)}
      />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              salons={salons}
              favorites={favorites}
              favoriteSalons={favoriteSalons}
              onToggleFavorite={toggleFavorite}
            />
          }
        />
        <Route
          path="/salon/:id"
          element={
            <SalonDetailsPage
              getSalonById={getSalonById}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
