
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [screen, setScreen] = useState();

  window.addEventListener("resize", (event) => {
    setScreen(window.screen.orientation.type);
  });

  useEffect(() => {
    setScreen(window.screen.orientation.type);
  }, [screen]);

  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
