import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/HomeSection.jsx";
import Footer from "./components/Footer.jsx";
import ScrollUpButton from "./components/ScrollUpButton.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-green-950 min-h-screen">
        <Home />
      </main>
      <Footer />
      <ScrollUpButton />
    </>
  );
}

export default App;
