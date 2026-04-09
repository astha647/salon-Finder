import { Link } from "react-router-dom";
import type { Salon } from "../types";

interface SalonCardProps {
  salon: Salon;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

function SalonCard({ salon, isFavorite, onToggleFavorite }: SalonCardProps) {
  return (
    <article className="salon-card">
      <img className="salon-image" src={salon.images[0]} alt={salon.name} />
      <div className="salon-content">
        <div className="salon-heading-row">
          <h3>{salon.name}</h3>
          <span className="rating-badge">⭐ {salon.rating.toFixed(1)}</span>
        </div>
        <p className="salon-location">{salon.location}</p>
        <p className="salon-price">{salon.priceTier}</p>
        <div className="services-wrap">
          {salon.services.slice(0, 4).map((service) => (
            <span className="service-tag" key={service}>
              {service}
            </span>
          ))}
        </div>
        <div className="card-actions">
          <Link to={`/salon/${salon.id}`} className="details-btn">
            View Details
          </Link>
          <button
            type="button"
            className={`favorite-btn ${isFavorite ? "active" : ""}`}
            onClick={() => onToggleFavorite(salon.id)}
          >
            {isFavorite ? "♥ Favorite" : "♡ Add Favorite"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default SalonCard;
