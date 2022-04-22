import React, { useEffect } from "react";
import Products from "./components/Products/Products";
import Nav from "./components/Nav/Nav";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Productdetails from "./components/ProductDetails/Productdetails";
import Cart from "./components/Cart/Cart";
const App: React.FC = () => {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products/:id" element={<Productdetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
