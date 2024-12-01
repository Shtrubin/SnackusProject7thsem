import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import UserLogIn from "./pages/login";
import Register from "./pages/register";
import Navbar from "./pages/navbar";
import Chatbot from "./pages/Chatbot";
import CategorizedRestaurant from "./pages/CategorizedRestaurant";
import { RestaurantProvider } from "./context/RestaurantContext"; 
import Search from "./pages/Search";
import RestaurantDetail from "./pages/RestaurantDetail";
import CreatePost from "./pages/CreatePost";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("userLoggedIn");
    if (userLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <RestaurantProvider>
      <Router>
        <Layout isLoggedIn={isLoggedIn}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<UserLogIn setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/local" element={<CategorizedRestaurant  category={"local"}/>} />
            <Route path="/mid-range" element={<CategorizedRestaurant  category={"mid-range"}/>} />
            <Route path="/high-end" element={<CategorizedRestaurant  category={"high-end"}/>} />
            <Route path="/search" element={<Search />} />
            <Route path="/restaurant/:id" element={<RestaurantDetail />} />
            <Route path="/create" element={<CreatePost />} />
          </Routes>
        </Layout>
      </Router>
    </RestaurantProvider>
  );
}

function Layout({ children, isLoggedIn }) {
  const location = useLocation();

  const hideNavbar = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideNavbar && <Navbar isLoggedIn={isLoggedIn} />}
      {children}
    </>
  );
}

export default App;
