import React, { useEffect } from "react";

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

export default function Navbar() {

  const navigate =useNavigate()
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
  console.log();
  return (
    <main className=" navbar fixed w-screen  h-20 brightness-120  text-red-500 bg-[rgba(20,20,20,0)] z-[250]">
      <div className=" w-full h-full grid grid-cols-6">
        <div className=" flex justify-center items-center col-span-2 ">
          <img src={Logo} alt="img-logo" width={200} />
        </div>
        <ul className=" flex items-center col-start-4 gap-10 text-[#F6891F] font-bold  italic ">
        <li onClick={()=> navigate("/home2")}>Home2</li>
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
            to="testimonios"
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
          <li>CONTACTO</li></Link>
        
        </ul>
      </div>
    </main>
  );
}
