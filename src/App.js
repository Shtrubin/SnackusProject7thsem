import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import UserLogIn from "./pages/login";
import Register from "./pages/register";
import Navbar from "./pages/navbar";
import Chatbot from "./pages/Chatbot";


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<UserLogIn />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </Layout>
    </Router>
  );
}

function Layout({ children }) {
  const location = useLocation();

  // Define routes where Navbar should not be displayed
  const hideNavbar = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!hideNavbar && (
        <Navbar/>
      )}
      {children}
    </>
  );
}

export default App;
