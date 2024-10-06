// ListingCard.js
import PropTypes from 'prop-types'; // Import PropTypes
import './ListingCard.css'; // Ensure you have a CSS file for styles if needed

const ListingCard = ({ image, title, type, guests, bedrooms, bathrooms, price, rating }) => {
  return (
    <div className="listing-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{type}</p>
      <p>{guests} guests | {bedrooms} bedrooms | {bathrooms} bathrooms</p>
      <p>${price} per night</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

// PropTypes validation
ListingCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  guests: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  bathrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default ListingCard;
