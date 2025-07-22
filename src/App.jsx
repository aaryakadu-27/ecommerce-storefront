import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import OrderConfirmation from "./pages/OrderConfirmation"; // ✅ Corrected name
import { StoreProvider } from "./context/StoreProvider";
import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <StoreProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/confirmation" element={<OrderConfirmation />} /> {/* ✅ Corrected */}
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
}

export default App;
