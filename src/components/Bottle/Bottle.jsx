import "./Bottle.css";
const Bottle = ({ bottle, handleAddToCart }) => {
  return (
    <div className="bottle-card">
      <img src={bottle.img} alt={bottle.name} className="bottle-img" />
      <h3 className="bottle-name">{bottle.name}</h3>
      <div className="description">
        <div>
          <p className="bottle-seller">Seller: {bottle.seller}</p>
          <p className="bottle-price">Price: ${bottle.price}</p>
        </div>
        <div>
          <p className="bottle-stock">In Stock: {bottle.stock}</p>
          <p className="bottle-rating">
            ⭐ {bottle.ratings} ({bottle.ratingsCount} reviews)
          </p>
        </div>
      </div>
      <p className="bottle-desc">{bottle.description}</p>
      <button onClick={() => handleAddToCart(bottle)} className="bottle-btn">
        Add to Cart
      </button>
    </div>
  );
};

export default Bottle;
