import React, { useState, useEffect } from 'react';
import { StoreContext } from './StoreContext';

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const localCart = localStorage.getItem('cart');
    return localCart ? JSON.parse(localCart) : [];
  });

  const [user, setUser] = useState(null); // { username, role }
  const [products, setProducts] = useState([
    // 📱 Electronics
    {
      id: 1, name: 'Smartphone X12', price: 29999, category: 'Electronics',
      rating: 4.5, image:' https://images-cdn.ubuy.co.in/633ff586ad6098462368226c-unlocked-android-smartphone-6-26in-hd.jpg'
    },
    {
      id: 2, name: 'Bluetooth Speaker', price: 1999, category: 'Electronics',
      rating: 4.2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9cYWSaBNIhOPF2gguIun1olGtIYrHAlOO7w&s'
    },
    {
      id: 3, name: 'Laptop Pro', price: 64999, category: 'Electronics',
      rating: 4.7, image: 'https://m.media-amazon.com/images/I/71DozMyPCBL.jpg'
    },
    {
      id: 4, name: 'Smartwatch Z', price: 4999, category: 'Electronics',
      rating: 4.0, image: 'https://images-cdn.ubuy.co.in/653dca4638b3b6351c03b03e-smart-watch-for-android-and-iphone.jpg'
    },
    {
      id: 5, name: 'Smart TV', price: 70000, category: 'Electronics',
      rating: 4.3, image: 'https://images.samsung.com/is/image/samsung/p6pim/in/ua43du7660klxl/gallery/in-crystal-uhd-du7000-ua43du7660klxl-540323211?$684_547_PNG$'
    },

    // 👕 Clothing
    {
      id: 6, name: 'Men T-shirt', price: 699, category: 'Clothing',
      rating: 4.1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8wAj0Ag2DoCaFjwZchXkxPTnZ9DiHlSd35Q&s'
    },
    {
      id: 7, name: 'Women Kurti', price: 999, category: 'Clothing',
      rating: 4.4, image: 'https://5.imimg.com/data5/MJ/YQ/ZE/SELLER-97942212/women-s-cotton-kurti.jpg'
    },
    {
      id: 8, name: 'Jeans Pants', price: 1299, category: 'Clothing',
      rating: 4.0, image: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/19202976/2022/7/28/50409467-e71a-44e1-a782-8e6f3e27f9061658997566628-SASSAFRAS-Women-Jeans-241658997565825-1.jpg'
    },
    {
      id: 9, name: 'Formal Shirt', price: 899, category: 'Clothing',
      rating: 4.2, image: 'https://reidandtaylor.in/cdn/shop/articles/How_to_Style_a_Formal_Shirt_for_Work.jpg?v=1743410874&width=1024'
    },
    {
      id: 10, name: 'Jacket', price: 1799, category: 'Clothing',
      rating: 4.5, image: 'https://i.pinimg.com/736x/b2/33/b3/b233b367261b5b9a4f8fa989926dddfa.jpg'
    },

    // 📚 Books
    {
      id: 11, name: 'Novel', price: 5000, category: 'stationery',
      rating: 4.8, image: 'https://m.media-amazon.com/images/I/81uRUnI9Y3L.jpg'
    },
    {
      id: 12, name: 'stationery', price: 699, category: 'stationery',
      rating: 4.6, image: 'https://soniofficemate.com/wp-content/uploads/2024/10/Executive-Kit-230.webp'
    },
    {
      id: 13, name: 'Art supply', price: 399, category: 'stationery',
      rating: 4.4, image: 'https://images-cdn.ubuy.co.in/63cb6379760c704e8c0eaf1a-175-piece-deluxe-art-set-with-2-drawing.jpg'
    },
    {
      id: 14, name: 'Canvas', price: 599, category: 'stationery',
      rating: 4.3, image: 'https://5.imimg.com/data5/GJ/MO/MY-6089191/drawing-canvas-board.jpg'
    },
    {
      id: 15, name: 'foldrers', price: 249, category: 'stationery',
      rating: 4.0, image: 'https://m.media-amazon.com/images/I/619fWQYPi2L.jpg'
    },

    // 🛋️ Home
    {
      id: 16, name: 'Fairy light', price: 2499, category: 'Homedecor',
      rating: 4.3, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS9auZuRUdqZJXsHl_QuxItB6R8oPTOWSxTJUZkrGgCfdVk1cJCQsYnyNhulTY0-o80B42GmoM3BCik9dxWlDMsKS1DHdXo3Dm2N_Qd7MCH'
    },
    {
      id: 17, name: 'show piece', price: 8999, category: 'Homedecor',
      rating: 4.5, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQahXLtLR8qmo0VpPKWbBXOHy6rI28NH3VJyulOrDt9G3XrAle7rsL_ZVPOY56R2rOSOl4YQUbba6_FlgtJ2olejOuUcxO76sOjZBxpr5BV  '
    },
    {
      id: 18, name: 'Wall Clock', price: 999, category: 'Homedecor',
      rating: 4.2, image: 'https://shopps.in/wp-content/uploads/2021/11/ghimg-1.jpg'
    },
    {
      id: 19, name: 'LED Lamp', price: 599, category: 'Homedecor',
      rating: 4.4, image: 'https://images-cdn.ubuy.co.in/6533e6def47cdc6cd54deb17-small-table-lamp-for-bedroom-bedside.jpg'
    },
    {
      id: 20, name:'photo frame', price: 799, category: 'Homedecor',
      rating: 4.0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfOe31I6zP20U60VvfGYGAm0ozlhS1CIT3A&s'
    },

    // 💄 Beauty
    {
      id: 21, name: 'Face mask', price: 499, category: 'Beauty',
      rating: 4.5, image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS9nznp6jWyNMcC0GQi2Im9-m75iI3VAVsdMwpOx-cbt_wHlYLdHKWHY91qEcL8QUMgaHPUXJOJh6VdmcaWQSToTaQ55U7rtlD8YpXJ5HXviHIkV60N0DThjoxe'
    },
    {
      id: 22, name: 'Face Wash kit', price: 299, category: 'Beauty',
      rating: 4.3, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQUUKMITXlm3tuD4hAwBffdTZ_QljvG7HPX_BY804GQNLl2Y4trf2VsX8qSiN5R5zJa06nYetqGa4AXeXOGFHFqic6BfXb4m9ZgMx7jXgjRWP7z-Fy0_n3uZA'
    },
    {
      id: 23, name: 'Moisturizer kit', price: 349, category: 'Beauty',
      rating: 4.4, image: 'https://shop.olivaclinic.com/cdn/shop/products/Dry-Skin_ebb6bbbb-6377-4a51-ad66-04e97452ebd4_1024x1024.jpg?v=1620027186'
    },
    {
      id: 24, name: 'shampoo kit', price: 199, category: 'Beauty',
      rating: 4.2, image: 'https://mridulmadhok.in/cdn/shop/files/WhatsAppImage2024-02-17at03.10.08.jpg?v=1708350666'
    },
    {
      id: 25, name: 'Perfume Spray', price: 599, category: 'Beauty',
      rating: 4.1, image: 'https://olgaperfume.com/cdn/shop/files/Sovaze_Small_Graphic_v4.jpg?v=1704456424&width=1946'
    },
  ]);

  // Persist cart to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <StoreContext.Provider
      value={{
        cart,
        setCart,
        user,
        setUser,
        products,
        setProducts
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
