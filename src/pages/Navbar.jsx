import React, { act, useEffect, useState } from "react";

import Logo from "/assets/Logo-fondo.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import { useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const { activeMenuResp } = props;
  const{menuResp}= props
  const [screenMenuResp, setScreenMenuResp] = useState(false);
  const [testMenu,setTestMenu] =useState(menuResp)

  window.addEventListener("resize", () => {
    window.screen.width > 1100 ? setScreenMenuResp(true) : setScreenMenuResp(false);
  });

  useEffect(()=>{
    window.screen.width > 1100 ? setScreenMenuResp(true) : setScreenMenuResp(false);
  },[])

  const navigate = useNavigate();
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to(".navbar", {
      scrollTrigger: {
        trigger: ".navbar",
        start: "top top",
        end: 50,
        scrub: 0.5,
      },
      backgroundColor: "rgba(20,20,20,0.7)",
      backdropFilter: "blur(10px)",
    });
  });

  return (
    <main className="overflow-hidden navbar fixed w-screen  h-20 brightness-120  text-red-500 bg-[rgba(20,20,20,0)] z-[250]">
      <div className=" w-full h-full grid grid-cols-6 ">
        <div className=" flex justify-center items-center col-span-2 ">
          <img src={Logo} alt="img-logo" width={200} className="img-logo" />
        </div>
        {screenMenuResp ? (
          <ul className=" flex items-center col-start-4 gap-7 -ml-24 text-[#F6891F] font-bold  italic ">
            <Link
              activeClass="active"
              to="inicio"
              spy={true}
              smooth={true}
              duration={500}
            >
              <li>INICIO</li>
            </Link>
            <Link
              activeClass="active"
              to="equipo"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <li>EQUIPO</li>
            </Link>
            <Link
              activeClass="active"
              to="servicios"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <li>SERVICIOS</li>
            </Link>
            <Link
              activeClass="active"
              to="hacemos"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >              
              <li className="w-44">COMO LO HACEMOS?</li>
            </Link>
            <Link
              activeClass="active"
              to="hacemos"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              
              <li>TESTIMONIOS</li>
            </Link>
            <Link
              activeClass="active"
              to="contacto"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <li>CONTACTO</li>
            </Link>
          </ul>
        ) :

        <button 
        onClick={()=>{activeMenuResp(!menuResp)}}
        className="flex flex-col gap-2 m-7 ml-48 bg-[20,20,20]">
          <span className="border border-l-2 w-8 "></span>
          <span className="border border-l-2 w-8 "></span>
          <span className="border border-l-2 w-8 "></span>
        </button>}
      </div>
    </main>
  );
}
