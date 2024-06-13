import Home from "./pages/Home";
import { Home2 } from "./pages/Home2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
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
        <Route path="/home2" element={<Home2 />} />
      </Routes>
    </main>
  );
}

export default App;
