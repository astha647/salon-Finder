import { useMemo, useState } from "react";
import SalonCard from "../components/SalonCard";
import type { PriceTier, Salon } from "../types";

interface HomePageProps {
  salons: Salon[];
  favorites: number[];
  favoriteSalons: Salon[];
  onToggleFavorite: (id: number) => void;
}

function HomePage({
  salons,
  favorites,
  favoriteSalons,
  onToggleFavorite
}: HomePageProps) {
  const [query, setQuery] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [priceFilter, setPriceFilter] = useState<PriceTier | "All">("All");
  const [locationFilter, setLocationFilter] = useState("All");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  const locations = useMemo(
    () => ["All", ...new Set(salons.map((salon) => salon.location))],
    [salons]
  );

  const filteredSalons = useMemo(() => {
    const baseList = showFavoritesOnly ? favoriteSalons : salons;

    return baseList.filter((salon) => {
      const searchValue = query.toLowerCase().trim();
      const isSearchMatch =
        salon.name.toLowerCase().includes(searchValue) ||
        salon.services.some((service) =>
          service.toLowerCase().includes(searchValue)
        );
      const isRatingMatch = salon.rating >= ratingFilter;
      const isPriceMatch = priceFilter === "All" || salon.priceTier === priceFilter;
      const isLocationMatch =
        locationFilter === "All" || salon.location === locationFilter;

      return isSearchMatch && isRatingMatch && isPriceMatch && isLocationMatch;
    });
  }, [
    favoriteSalons,
    locationFilter,
    priceFilter,
    query,
    ratingFilter,
    salons,
    showFavoritesOnly
  ]);

  return (
    <main className="container">
      <section className="hero-section">
        <h1>Find Your Perfect Beauty Salon</h1>
        <p>
          Discover top-rated salons, compare services, and save your favorites in
          one elegant place.
        </p>
      </section>

      <section className="filters-panel">
        <input
          className="search-input"
          type="text"
          placeholder="Search by salon name or service..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <div className="filter-grid">
          <label>
            Min Rating
            <select
              value={ratingFilter}
              onChange={(event) => setRatingFilter(Number(event.target.value))}
            >
              <option value={0}>All</option>
              <option value={4}>4.0+</option>
              <option value={4.5}>4.5+</option>
            </select>
          </label>
          <label>
            Price
            <select
              value={priceFilter}
              onChange={(event) =>
                setPriceFilter(event.target.value as PriceTier | "All")
              }
            >
              <option value="All">All</option>
              <option value="Budget">Budget</option>
              <option value="Mid-range">Mid-range</option>
              <option value="Premium">Premium</option>
            </select>
          </label>
          <label>
            Location
            <select
              value={locationFilter}
              onChange={(event) => setLocationFilter(event.target.value)}
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </label>
          <button
            type="button"
            className={`favorite-toggle ${showFavoritesOnly ? "active" : ""}`}
            onClick={() => setShowFavoritesOnly((prev) => !prev)}
          >
            {showFavoritesOnly ? "Showing Favorites" : "Show Favorites Only"}
          </button>
        </div>
      </section>

      <section className="results-head">
        <h2>Salons</h2>
        <p>
          {filteredSalons.length} result(s) • {favorites.length} favorite(s)
        </p>
      </section>

      <section className="salon-grid">
        {filteredSalons.length > 0 ? (
          filteredSalons.map((salon) => (
            <SalonCard
              key={salon.id}
              salon={salon}
              isFavorite={favorites.includes(salon.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))
        ) : (
          <div className="empty-state">
            No salons match your current search and filters.
          </div>
        )}
      </section>
    </main>
  );
}

export default HomePage;
