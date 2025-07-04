import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SignUp from "./Pages/signup";
import Dashboard from "./Pages/dashboard";
import Login from "./Pages/login";
import ShoppingCart from "./components/ShoppingCart";
import Home from "./Pages/home";
import { ShopProvider } from "../src/components/Context/shopContext";
import AllShop from "./components/AllShop";
import Articles from "./components/Articles";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
function App() {
  return (
    <div className="App">
      <Router>
        <ShopProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/Cart" element={<ShoppingCart />} />
            <Route path="/shop" element={<AllShop />} />
            <Route path="/Articles" element={<Articles />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/ContactUs" element={<ContactUs />} />
          </Routes>
        </ShopProvider>
      </Router>
    </div>
  );
}

export default App;
