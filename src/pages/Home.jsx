import React, { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const { products, addToCart } = useContext(StoreContext);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(50000);

  const categories = [...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchPrice = product.price <= selectedPrice;
    return matchCategory && matchPrice;
  });

  return (
    <div className="home">
      <h1>Welcome to Our Store</h1>

      <div className="filters">
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <div className="price-slider">
          <label>Max Price: ₹{selectedPrice}</label>
          <input
            type="range"
            min="0"
            max="50000"
            step="500"
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
          />
        </div>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
            </Link>
            <p>₹{product.price}</p>
            <p>⭐ {product.rating}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
