import React, { useEffect } from "react";
import Logo from "/assets/Logo-fondo.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

export default function Navbar() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to(".navbar", {
      scrollTrigger: {
        trigger: ".navbar",
        start: "top top",
        markers: true,
        end: 50,
        scrub: 0.5,
      },
      backgroundColor:"rgba(20,20,20,0.7)",
      backdropFilter: "blur(10px)"
    });
  });
  console.log()
  return (
    <main className=" navbar fixed w-screen  h-20 brightness-120  text-red-500 bg-[rgba(20,20,20,0)] z-[250]">
      <div className=" w-full h-full grid grid-cols-6">
        <div className=" flex justify-center items-center col-span-2 ">
          <img src={Logo} alt="img-logo" width={200} />
        </div>
        <ul className=" flex items-center col-start-4 gap-10 text-[#F6891F] font-bold  italic ">
          <li>INICIO</li>
          <li>EQUIPO</li>
          <li>SERVICIOS</li>
          <li>TESTIMONIOS</li>
          <li>CONTACTO</li>
        </ul>
      </div>
    </main>
  );
}
