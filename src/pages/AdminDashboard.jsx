import React, { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";

const AdminDashboard = () => {
  const { products, addProduct, deleteProduct } = useContext(StoreContext);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    category: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    addProduct(newProduct);
    setNewProduct({ name: "", price: 0, category: "", description: "", image: "" });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#2c3e50" }}>Admin</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "1rem" }}>
        <input name="name" placeholder="Name" value={newProduct.name} onChange={handleChange} />
        <input name="price" type="number" placeholder="0" value={newProduct.price} onChange={handleChange} />
        <input name="category" placeholder="Category" value={newProduct.category} onChange={handleChange} />
        <textarea name="description" placeholder="Desc" value={newProduct.description} onChange={handleChange} />
        <input name="image" placeholder="Image URL" value={newProduct.image} onChange={handleChange} />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {products.map((p, i) => (
          <li key={i}>
            {p.name} ₹{p.price}{" "}
            <button onClick={() => deleteProduct(p.name)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
