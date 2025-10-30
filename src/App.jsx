import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-poppins bg-gray-50 text-gray-900 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Home />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
