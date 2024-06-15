import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import NavbarResp from "./pages/NavbarResp";
import Home from "./pages/Home";
import "./App.css";
import { useEffect, useState } from "react";

function App() {

const [menuResp, setMenuResp]= useState(false)
  const activeMenuResp =((event)=>{
    setMenuResp(event)
  })

  return (
    <main >
      <Navbar  activeMenuResp={activeMenuResp}  menuResp={menuResp}/>
      <NavbarResp menuResp={menuResp} activeMenuResp={activeMenuResp} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
