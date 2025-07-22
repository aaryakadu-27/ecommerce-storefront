import { Link } from 'react-router-dom';
export default function ProductCard({ product }) {
  return (
    <div>
      <img src={product.image} alt="" width={150} />
      <h3><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
      <p>₹{product.price}</p>
      <p>⭐{product.rating}</p>
    </div>
  );
}
