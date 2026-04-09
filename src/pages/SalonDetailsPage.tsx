import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import type { Salon } from "../types";

interface SalonDetailsPageProps {
  getSalonById: (id: number) => Salon | undefined;
  favorites: number[];
  onToggleFavorite: (id: number) => void;
}

function SalonDetailsPage({
  getSalonById,
  favorites,
  onToggleFavorite
}: SalonDetailsPageProps) {
  const { id } = useParams();
  const [selectedService, setSelectedService] = useState("");
  const salon = getSalonById(Number(id));

  if (!salon) {
    return (
      <main className="container">
        <div className="empty-state">
          Salon not found. <Link to="/">Go back to home</Link>
        </div>
      </main>
    );
  }

  const isFavorite = favorites.includes(salon.id);

  return (
    <main className="container details-page">
      <Link to="/" className="back-link">
        ← Back to salons
      </Link>

      <section className="details-header">
        <div>
          <h1>{salon.name}</h1>
          <p>{salon.description}</p>
          <p>
            <strong>Location:</strong> {salon.location} | <strong>Rating:</strong>{" "}
            {salon.rating.toFixed(1)} | <strong>Price:</strong> {salon.priceTier}
          </p>
        </div>
        <button
          type="button"
          className={`favorite-btn ${isFavorite ? "active" : ""}`}
          onClick={() => onToggleFavorite(salon.id)}
        >
          {isFavorite ? "♥ Remove Favorite" : "♡ Add Favorite"}
        </button>
      </section>

      <section className="image-grid">
        {salon.images.map((image) => (
          <img key={image} src={image} alt={salon.name} />
        ))}
      </section>

      <section className="details-columns">
        <div className="panel">
          <h2>Full Service List</h2>
          <ul>
            {salon.services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div className="panel">
          <h2>Book a Service</h2>
          <p className="small-text">Demo booking UI (frontend only)</p>
          <select
            value={selectedService}
            onChange={(event) => setSelectedService(event.target.value)}
          >
            <option value="">Select a service</option>
            {salon.services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          <button className="book-btn" type="button" disabled={!selectedService}>
            {selectedService ? `Book ${selectedService}` : "Choose a service first"}
          </button>
        </div>
      </section>

      <section className="reviews-panel">
        <h2>Reviews</h2>
        {salon.reviews.map((review) => (
          <article key={review.id} className="review-card">
            <div className="review-title">
              <strong>{review.user}</strong> <span>⭐ {review.rating}</span>
            </div>
            <p>{review.comment}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default SalonDetailsPage;
